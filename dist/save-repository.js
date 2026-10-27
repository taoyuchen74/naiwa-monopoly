// @ts-check
import {migrateSave,encodeSave,SCHEMA_VERSION,validSaveTime} from './save-schema.js';
export const SAVE_KEY='naiwa-monopoly-v2',BACKUP_KEY=SAVE_KEY+'-backup';
/** @type {readonly import('./domain.js').SlotId[]} */
export const SLOT_IDS=Object.freeze(['auto','manual1','manual2','manual3']);
/** @param {import('./domain.js').SlotId} id */
export function slotKey(id){
 if(!SLOT_IDS.includes(id))throw Error('Unknown slot');
 return id==='auto'?SAVE_KEY:SAVE_KEY+'-'+id;
}
export class SaveConflict extends Error{
 constructor(){super('存档已变化，请重新确认。');}
}
/**
 * @param {import('./domain.js').StorageAdapter|(()=>import('./domain.js').StorageAdapter)} provider
 * @param {{clock?:()=>number}} [options]
 */
export function createSaveRepository(provider,{clock=Date.now}={}){
 const storage=()=>typeof provider==='function'?provider():provider;
 /** @param {import('./domain.js').SlotId} id */
 const raw=id=>storage().getItem(slotKey(id));
 /** @param {import('./domain.js').SlotId} id @param {string|null|undefined} expected */
 const check=(id,expected)=>{
  if(expected!==undefined&&raw(id)!==expected)throw new SaveConflict();
 };
 /** @param {import('./domain.js').SlotId} id @returns {import('./domain.js').SlotRecord} */
 function read(id){
  const value=raw(id);
  if(value===null)return {id,status:'empty',raw:null,state:null};
  const state=migrateSave(value);
  if(state)return {id,status:'valid',raw:value,state,updatedAt:validSaveTime(state.savedAt)?state.savedAt:null};
  /** @type {'corrupt'|'future'} */
  let status='corrupt';
  try{
   if(JSON.parse(value)?.schemaVersion>SCHEMA_VERSION)status='future';
  }catch{}
  return {id,status,raw:value,state:null,updatedAt:null};
 }
 /**
  * @param {import('./domain.js').SlotId} id
  * @param {import('./domain.js').GameState} state
  * @param {import('./domain.js').SaveOptions} [options]
  */
 function save(id,state,{expectedRaw=id==='auto'?undefined:null,now=clock()}={}){
  const record=encodeSave(state,now),value=JSON.stringify(record);
  check(id,expectedRaw);
  storage().setItem(slotKey(id),value);
  return record;
 }
 /** @param {import('./domain.js').GameState} state @param {import('./domain.js').SaveOptions} [options] */
 function replaceAuto(state,{expectedRaw,now=clock()}={}){
  const record=encodeSave(state,now);
  check('auto',expectedRaw);
  const previous=raw('auto');
  if(previous!==null)storage().setItem(BACKUP_KEY,previous);
  check('auto',previous);
  storage().setItem(SAVE_KEY,JSON.stringify(record));
  return record;
 }
 return {
  read,raw,list:()=>SLOT_IDS.map(read),save,replaceAuto,
  /** @param {import('./domain.js').SlotId} id */
  load(id){
   const item=read(id);
   if(item.status!=='valid')throw Error('存档损坏或版本不兼容。');
   return item.state;
  },
  /** @param {import('./domain.js').SlotId} id @param {{expectedRaw?:string|null}} [options] */
  remove(id,{expectedRaw}={}){
   if(expectedRaw===undefined)throw new SaveConflict();
   check(id,expectedRaw);
   storage().removeItem(slotKey(id));
  },
  /** @param {import('./domain.js').SlotId} id */
  export(id){
   const item=read(id);
   if(item.status==='empty')throw Error('空槽位无法导出。');
   return item.status==='valid'?JSON.stringify(encodeSave(item.state,item.updatedAt||clock()),null,2):item.raw;
  },
  parse:migrateSave,
  /** @param {import('./domain.js').GameState} state */
  serialize(state){
   return JSON.stringify(encodeSave(state,validSaveTime(state.savedAt)?state.savedAt:clock()),null,2);
  },
  /** @param {string|null} expected @param {{allowInvalid?:boolean}} [options] */
  backupAuto(expected,{allowInvalid=false}={}){
   if(expected===null||!allowInvalid&&!migrateSave(expected))throw Error('Invalid backup');
   check('auto',expected);
   storage().setItem(BACKUP_KEY,expected);
  },
  readBackup(){
   const value=storage().getItem(BACKUP_KEY);
   return {raw:value,state:migrateSave(value)};
  },
  restoreBackup(){
   const value=storage().getItem(BACKUP_KEY),state=migrateSave(value);
   if(!state||value===null)return null;
   storage().setItem(SAVE_KEY,value);
   return state;
  }
 };
}
