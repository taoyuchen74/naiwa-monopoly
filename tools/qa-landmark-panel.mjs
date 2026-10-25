// Evaluate in the browser while a public landmark detail is open.
(()=>{
 const app=document.querySelector('#app'),sheet=document.querySelector('#sheet'),body=document.querySelector('#sheetBody');
 if(sheet.hidden||sheet.dataset.detail!=='landmark')throw Error('Open a public landmark first');
 const contains=(a,b)=>b.left>=a.left-1&&b.top>=a.top-1&&b.right<=a.right+1&&b.bottom<=a.bottom+1;
 if(!contains(app.getBoundingClientRect(),sheet.getBoundingClientRect()))throw Error('Landmark panel exceeds the game');
 if(body.scrollWidth>body.clientWidth+1)throw Error('Landmark panel requires horizontal scrolling');
 const image=sheet.querySelector('.landmark-model img');if(!image?.complete||image.naturalWidth!==320)throw Error('The real building thumbnail did not load');
 if(sheet.querySelectorAll('.landmark-rules li').length!==3)throw Error('Landmark rules are missing');
 const action=sheet.querySelector('.landmark-action');if(action&&!contains(body.getBoundingClientRect(),action.getBoundingClientRect()))throw Error('Landmark action is clipped');
 return {title:document.querySelector('#sheetTitle').textContent,logical:[app.clientWidth,app.clientHeight],rotated:app.dataset.rotated,modelWidth:image.naturalWidth,scroll:body.scrollHeight-body.clientHeight};
})()
