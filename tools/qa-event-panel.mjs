// Evaluate while a human event is open in a browser with WebGL support.
(()=>{
 const app=document.querySelector('#app'),sheet=document.querySelector('#sheet'),body=document.querySelector('#sheetBody'),button=sheet.querySelector('.event-continue'),image=sheet.querySelector('.event-actor img');
 if(sheet.hidden||sheet.dataset.panel!=='event')throw Error('Open an event first');
 const contains=(a,b)=>b.left>=a.left-1&&b.top>=a.top-1&&b.right<=a.right+1&&b.bottom<=a.bottom+1;
 if(!contains(app.getBoundingClientRect(),sheet.getBoundingClientRect()))throw Error('Event exceeds the game');
 if(body.scrollWidth>body.clientWidth+1)throw Error('Event requires horizontal scrolling');
 if(!contains(body.getBoundingClientRect(),button.getBoundingClientRect()))throw Error('Event confirmation is clipped');
 if(!image?.complete||image.naturalWidth!==320)throw Error('Character pose is unavailable');
 return {title:document.querySelector('#sheetTitle').textContent,character:image.alt,outcomes:sheet.querySelector('.event-outcomes')?.textContent,logical:[app.clientWidth,app.clientHeight],rotated:app.dataset.rotated};
})()
