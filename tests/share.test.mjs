import {test} from 'node:test';
import assert from 'node:assert/strict';
import {gameShareUrl,PUBLIC_GAME_URL} from '../dist/share.js';
test('Pages and alternate live hosts share their own project root without query or fragments',()=>{for(const href of ['https://taoyuchen74.github.io/naiwa-monopoly/','https://taoyuchen74.github.io/naiwa-monopoly/index.html?debug=1#start'])assert.equal(gameShareUrl({href}),PUBLIC_GAME_URL);assert.equal(gameShareUrl({href:'https://naiwa-monopoly-island.chicreed128.chatgpt.site/?debug=1#start'}),'https://naiwa-monopoly-island.chicreed128.chatgpt.site/');});
test('offline and development previews share the public playable URL, never a local address',()=>{for(const href of ['file:///C:/game/index.html','http://localhost:4173/','http://127.0.0.1:4173/','http://[::1]:4173/',null])assert.equal(gameShareUrl({href}),PUBLIC_GAME_URL);});
test('share URLs never copy URL credentials',()=>assert.equal(gameShareUrl({href:'https://user:private@example.org/game/?token=secret'}),'https://example.org/game/'));
