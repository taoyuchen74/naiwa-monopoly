/**
 * Shared domain contracts. Type-only imports/JSDoc; never imported at runtime.
 * Numeric IDs are array indexes in validated saves. Legacy input is validated
 * by Game.restore; these contracts describe the normalized, current state.
 * @typedef {'naiwa'|'naichong'|'naishu'|'naigou'|'naidan'|'naicha'} CharacterId
 * @typedef {'easy'|'normal'|'hard'} Difficulty
 * @typedef {'roll'|'departure'|'moving'|'branch'|'buy'|'estate'|'event'|'end'|'debt'|'finished'} Phase
 * @typedef {'residence'|'chain'|'hotel'|'mall'|'gas'|'research'|'park'} BusinessId
 * @typedef {'dice'|'block'|'turn'|'shield'|'steal'|'recover'|'demolish'|'build'|'slow'} CardId
 * @typedef {'steps'|'ahead'|'self'|'enemy'|'enemyBuilt'|'own'} CardTarget
 * @typedef {{name:string,icon:string,price:number,description:string} & (
 *   {target:'steps'}|{target:'ahead'}|{target:'self'}|
 *   {target:'enemy'}|{target:'enemyBuilt'}|{target:'own'})} Card
 * @typedef {{dice:Card & {target:'steps'},block:Card & {target:'ahead'},turn:Card & {target:'self'},shield:Card & {target:'self'},steal:Card & {target:'enemy'},recover:Card & {target:'self'},demolish:Card & {target:'enemyBuilt'},build:Card & {target:'own'},slow:Card & {target:'self'}}} CardTable
 * @typedef {{id:CharacterId,estateColor:string,name:string,subtitle:string,color:string,accent:string,style:string,description:string}} Character
 * @typedef {{id:number,x:number,z:number,kind:string,name:string,description:string,group:number,price:number,next:number[],yaw?:number,lotX?:number,lotZ?:number,facing?:number}} Tile
 * @typedef {{player:number,level:number,buildingType?:BusinessId,researchCard?:CardId,researchProgress?:number}} Ownership
 * @typedef {{cost:number|null,realized:number,unpriced:number}} StockBook
 * @typedef {{stock:number,qty:number,price:number,round:number,profit:number|null}} Trade
 * @typedef {{id:number,character:CharacterId,human:boolean,difficulty:Difficulty,money:number,tickets:number,businessReady:boolean,cardsUsed:number,buildsUsed:number,shopUsed:number,slowTurns:number,buildSite:number|null,bankAccess:boolean,talentReady:boolean,departures:number,deposit:number,loan:number,stocks:number[],stockBook:StockBook[],stockLegacy:boolean,stockTrades:Trade[],cards:CardId[],vehicle:number,diceCount:number,pos:number,history:number[],alive:boolean,skip:number,spirit:string|null,spiritTurns:number,shield:boolean,reverse:boolean,forced:number,aiTradeDone?:boolean,aiBankDone?:boolean,mood?:string}} Player
 * @typedef {{id:number,name:string,short:string,price:number,group:number,history:number[],previous:number,change:number}} Market
 * @typedef {{sound:boolean,speed:number,quality:string,lighting:string,music?:boolean,voice?:boolean,musicVolume?:number,effectsVolume?:number,voiceVolume?:number,track?:string}} Options
 * @typedef {{version:number,rules:number,setupSeed:number,mapVersion:number,difficulty:Difficulty,talents:boolean,firstPlayer:number,seed:number,round:number,maxRounds:number,current:number,phase:Phase,dice:number[],remaining:number,moveTotal:number,moveSteps:number|null,players:Player[],ownership:Record<string,Ownership>,blocks:Record<string,number>,pickups:Record<string,number>,market:Market[],logs:{round:number,text:string}[],notice:{title:string,text:string,mood:string}|null,debt:{amount:number,to:number|null,label:string}|null,options:Options,winner:number|null}} GameState
 * @typedef {{character?:string,rounds?:number,playerCount?:number,randomStart?:boolean,talents?:boolean,mapVersion?:number,difficulty?:string,opponents?:string[],seatLevels?:string[],startingCash?:number,startingTickets?:number,seed?:number}} GameSetup
 * @typedef {{from?:number,first?:number|null,reverse?:boolean,blocks?:Record<string,number>}} PreviewOptions
 * @typedef {{id:number,path:number[],passesStart:boolean,blocked:boolean,points:number,rent:number,owner:number|null,price:number}} Route
 * @typedef {{count:number,value:number,rent?:number}} Move
 * @typedef {{index:number,target?:number,value:number}} CardChoice
 * @typedef {{name:string,max:number,cost:number,architecture:string,text:string}} Business
 */
export {};
