import {migrateSave,encodeSave,SCHEMA_VERSION,validSaveTime} from './save-schema.js';
export const SAVE_KEY='naiwa-monopoly-v2',BACKUP_KEY=SAVE_KEY+'-backup';
export const SLOT_IDS=Object.freeze(['auto','manual1','manual2','manual3']);
export function slotKey(id){if(!SLOT_IDS.includes(id))throw Error('Unknown slot');return id==='auto'?SAVE_KEY:SAVE_KEY+'-'+id;}
export class SaveConflict extends Error{constructor(){super('存档已变化，请重新确认。');}}
export function createSaveRepository(provider,{clock=Date.now}={}){
 const storage=()=>typeof provider==='function'?provider():provider;
 const raw=id=>storage().getItem(slotKey(id));
 const check=(id,expected)=>{if(expected!==undefined&&raw(id)!==expected)throw new SaveConflict();};
 function read(id){const value=raw(id);if(value===null)return {id,status:'empty',raw:null,state:null};const state=migrateSave(value);let status='corrupt';if(state)status='valid';else try{if(JSON.parse(value)?.schemaVersion>SCHEMA_VERSION)status='future';}catch{}return {id,status,raw:value,state,updatedAt:validSaveTime(state?.savedAt)?state.savedAt:null};}
 function save(id,state,{expectedRaw=id==='auto'?undefined:null,now=clock()}={}){const record=encodeSave(state,now),value=JSON.stringify(record);check(id,expectedRaw);storage().setItem(slotKey(id),value);return record;}
 function replaceAuto(state,{expectedRaw,now=clock()}={}){const record=encodeSave(state,now);check('auto',expectedRaw);const previous=raw('auto');if(previous!==null)storage().setItem(BACKUP_KEY,previous);check('auto',previous);storage().setItem(SAVE_KEY,JSON.stringify(record));return record;}
 return {
  read,raw,list:()=>SLOT_IDS.map(read),save,replaceAuto,
  load(id){const item=read(id);if(item.status!=='valid')throw Error('存档损坏或版本不兼容。');return item.state;},
  remove(id,{expectedRaw}={}){if(expectedRaw===undefined)throw new SaveConflict();check(id,expectedRaw);storage().removeItem(slotKey(id));},
  export(id){const item=read(id);if(item.status==='empty')throw Error('空槽位无法导出。');return item.status==='valid'?JSON.stringify(encodeSave(item.state,item.updatedAt||clock()),null,2):item.raw;},
  parse:migrateSave,
  serialize(state){return JSON.stringify(encodeSave(state,validSaveTime(state.savedAt)?state.savedAt:clock()),null,2);},
  backupAuto(expected,{allowInvalid=false}={}){if(expected===null||!allowInvalid&&!migrateSave(expected))throw Error('Invalid backup');check('auto',expected);storage().setItem(BACKUP_KEY,expected);},
  readBackup(){const value=storage().getItem(BACKUP_KEY);return {raw:value,state:migrateSave(value)};},
  restoreBackup(){const value=storage().getItem(BACKUP_KEY),state=migrateSave(value);if(!state)return null;storage().setItem(SAVE_KEY,value);return state;}
 };
}
