// @ts-check
// Compile-only positive and negative contracts. Never loaded by the game.
import {Game} from '../../dist/engine.js';
import {nextCommand} from '../../dist/commands.js';
import {migrateSave,encodeSave} from '../../dist/save-schema.js';
import {createSaveRepository} from '../../dist/save-repository.js';
/** @type {import('../../dist/domain.js').GameState} */
const state=Game.create({seed:17,character:'naiwa',difficulty:'hard'}).s;
const game=new Game(state);
game.command('roll');
game.command('step',{choice:40});
game.command('buy',{yes:true});
game.command('bank',{kind:'deposit',amount:300});
/** @type {import('../../dist/domain.js').Command} */
const command={type:'bank',payload:{kind:'borrow',amount:100},playerId:0,sequence:1};
game.dispatch(command);
game.dispatch(/** @type {unknown} */('{bad JSON}'));
const built=nextCommand(game,'setDiceCount',{count:2});
/** @type {import('../../dist/domain.js').Command<'setDiceCount'>} */
const same=built;
void same;

// @ts-expect-error Invalid phase name.
state.phase='buying';
// @ts-expect-error Player cash is numeric.
state.players[0].money='300';
// @ts-expect-error Ownership may be absent: callers must test it.
state.ownership[1].level=2;
const owned=state.ownership[1];
if(owned){
 owned.level=2;
 // @ts-expect-error Building levels are numeric.
 owned.level='two';
}
// @ts-expect-error Payload must belong to its command type.
const wrong=/** @type {import('../../dist/domain.js').Command} */({type:'bank',payload:{yes:true},playerId:0,sequence:1});
void wrong;
// @ts-expect-error Required payload cannot be omitted.
game.command('bank');
// @ts-expect-error A deposit amount cannot be a string.
game.command('bank',{kind:'deposit',amount:'300'});
// @ts-expect-error Roll has no route-choice payload.
game.command('roll',{choice:40});
// @ts-expect-error Misspelled command type.
game.command('rol');
// @ts-expect-error Factory seed is numeric.
Game.create({seed:'17'});
// @ts-expect-error Wrong command payload, even through the builder.
nextCommand(game,'setDiceCount',{yes:true});

/** @type {import('../../dist/domain.js').SaveEnvelope} */
const envelope=encodeSave(state,123);
const restored=migrateSave(envelope);
// @ts-expect-error A migration may refuse untrusted input.
restored.players[0].money=10;
if(restored)game.s=restored;
/** @type {import('../../dist/domain.js').SaveEnvelope} */
// @ts-expect-error Rule state lacks schema version and required save time.
const missingMetadata=state;
void missingMetadata;
const repo=createSaveRepository(localStorage);
repo.save('manual1',state);
// @ts-expect-error Only four known slots are accepted by typed callers.
repo.save('manual4',state);
const slot=repo.read('manual1');
// @ts-expect-error An empty/corrupt/future slot has no readable state.
slot.state.players[0].money=10;
if(slot.status==='valid')slot.state.players[0].money=10;
