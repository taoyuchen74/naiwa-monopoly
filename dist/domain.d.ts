/** Shared contracts only: this file is never imported at runtime. */
export type Phase = 'roll' | 'departure' | 'moving' | 'branch' | 'buy' | 'estate' | 'event' | 'end' | 'debt' | 'finished';
export type Difficulty = 'easy' | 'normal' | 'hard';
export type CharacterId = 'naiwa' | 'naichong' | 'naishu' | 'naigou' | 'naidan' | 'naicha';
export type BuildingType = 'residence' | 'chain' | 'hotel' | 'mall' | 'gas' | 'research' | 'park';
export type CardKey = 'dice' | 'shield' | 'recover' | 'turn' | 'slow' | 'block' | 'build' | 'demolish' | 'steal' | 'ward' | 'swap' | 'insurance';
export type Spirit = 'fortune' | 'misfortune' | 'guardian';
export type BankKind = 'deposit' | 'withdraw' | 'borrow' | 'repay';
export interface StockBook {cost: number | null; realized: number; unpriced: number}
export interface StockTrade {stock: number; qty: number; price: number; round: number; profit: number | null}
export interface Player {
 id: number; character: CharacterId; human: boolean; alive: boolean; difficulty: Difficulty;
 money: number; deposit: number; loan: number; tickets: number; stocks: number[];
 stockBook: StockBook[]; stockLegacy: boolean; stockTrades: StockTrade[];
 cards: CardKey[]; vehicle: number; diceCount: number; pos: number; history: number[];
 skip: number; forced: number; spirit: Spirit | null; spiritTurns: number; shield: boolean; reverse: boolean;
 businessReady: boolean; talentReady: boolean; departures: number; cardsUsed: number; buildsUsed: number;
 shopUsed: number; slowTurns: number; buildSite: number | null; bankAccess: boolean;
 eventWard:boolean; insuranceTurns:number; operatingUntilRound:number;
 aiTradeDone?: boolean; aiBankDone?: boolean; mood?: string;
}
export interface Ownership {player: number; level: number; buildingType?: BuildingType; researchProgress?: number; researchCard?: CardKey; closedUntilRound?:number}
export type InitialGameState = Omit<GameState,'revision'|'commandSequences'|'handoff'|'mode'> & Partial<Pick<GameState,'revision'|'commandSequences'|'handoff'|'mode'>>;
export type CardTarget = Ownership & {id:number; obstacle?:boolean};
export interface Market {name: string; price: number; previous: number; change: number; history: number[]; color?: string}
export interface Debt {amount: number; to: number | null; label: string}
export interface Preferences {
 sound: boolean; speed: 1 | 2 | 3; aiFast?:boolean; quality: 'auto' | 'low'; lighting: 'day' | 'golden' | 'night';
 music?: boolean; voice?: boolean; musicVolume?: number; effectsVolume?: number; voiceVolume?: number; track?: 'ode' | 'town';
}
export interface ModeConfig {
 configVersion:1; id:'standard'|'short'|'business'|'daily'; rounds:number; speed:1|2|3;
 initial:{cash:number;tickets:number;loan:number;propertiesPerPlayer:number;buildingLevel:number};
 allowedCards:CardKey[]; goal:{type:'ranking'|'netWorth';target:number}; dailyDate:string|null; fixedSeed:number|null;
}
export interface GameState {
 version: 2; rules: 10; mode:ModeConfig; setupSeed?: number; mapVersion: 1 | 2; difficulty: Difficulty; talents: boolean;
 firstPlayer: number; seed: number; round: number; maxRounds: number; current: number; phase: Phase;
 dice: number[]; remaining: number; moveTotal: number; moveSteps: number | null;
 players: Player[]; ownership: Record<number, Ownership|undefined>; blocks: Record<number, number|undefined>; pickups: Record<number, number|undefined>;
 market: Market[]; logs: Array<{round: number; text: string}>; notice: {title: string; text: string; mood: string; outcomes?:string[]} | null;
 handoff: {playerId:number}|null; debt: Debt | null; options: Preferences; winner: number | null; revision: number; commandSequences: number[]; savedAt?: number;
}
/** Flat format: schema metadata plus the existing top-level rule fields. */
export type SaveEnvelope = Omit<GameState, 'savedAt'> & {schemaVersion: 1; savedAt: number};
export interface CommandPayloads {
 acceptTurn:Record<string,never>; lockTurn:Record<string,never>;
 roll: Record<string, never>; step: {choice?: number}; setDiceCount: {count: number}; buy: {yes: boolean};
 resolveEstate: {buy: boolean}; acknowledge: Record<string, never>; end: Record<string, never>;
 construct: {id: number; buildingType: BuildingType}; setResearch: {id: number; key: CardKey};
 upgrade: {id: number}; demolish: {id: number}; sell: {id: number}; bank: {kind: BankKind; amount: number};
 trade: {stock: number; qty: number}; shop: {key: CardKey}; vehicle: {id: number}; card: {index: number; target?: number};
 settle: Record<string, never>; bankrupt: Record<string, never>; aiTurn: Record<string, never>;
}
export type CommandType = keyof CommandPayloads;
export type EmptyCommandType = 'acceptTurn' | 'lockTurn' | 'roll' | 'step' | 'acknowledge' | 'end' | 'settle' | 'bankrupt' | 'aiTurn';
export type PayloadCommandType = Exclude<CommandType, EmptyCommandType>;
export type Command<K extends CommandType = CommandType> = {[T in K]: {type: T; payload: CommandPayloads[T]; playerId: number; sequence: number; revision?: number}}[K];
export type CommandCode = 'OK' | 'HANDOFF_REQUIRED' | 'INVALID_COMMAND' | 'INVALID_PLAYER' | 'INVALID_SEQUENCE' | 'DUPLICATE' | 'OUT_OF_ORDER' | 'STALE_REVISION' | 'NOT_CURRENT_PLAYER' | 'INVALID_PHASE' | 'INACTIVE_PLAYER' | 'INVALID_PAYLOAD' | 'COUNTER_EXHAUSTED' | 'RULE_REJECTED' | 'EXECUTION_FAILED';
export interface CommandResult {ok: boolean; code: CommandCode; revision: number; sequence: number | null}
export interface StorageAdapter {getItem(key: string): string | null; setItem(key: string, value: string): void; removeItem(key: string): void}
export type SlotId = 'auto' | 'manual1' | 'manual2' | 'manual3';
export type SlotRecord =
 | {id:SlotId; status:'empty'; raw:null; state:null}
 | {id:SlotId; status:'valid'; raw:string; state:GameState; updatedAt:number|null}
 | {id:SlotId; status:'corrupt'|'future'; raw:string; state:null; updatedAt:null};
export interface SaveOptions {expectedRaw?:string|null; now?:number}
export interface CreateGameOptions {
 mode?:ModeConfig;
 seatTypes?:Array<'human'|'ai'>; primaryLevel?:Difficulty|'inherit';
 character?:CharacterId|'dounai'; rounds?:number; playerCount?:2|3|4|5|6; randomStart?:boolean; talents?:boolean;
 mapVersion?:1|2; difficulty?:Difficulty; opponents?:Array<CharacterId|'dounai'|'random'>; seatLevels?:Array<Difficulty|'inherit'>;
 startingCash?:number; startingTickets?:number; seed?:number;
}
