// Evaluate after opening a long panel, at natural or forced phone orientations.
(()=>{
 const app=document.querySelector('#app'),sheet=document.querySelector('#sheet'),body=document.querySelector('#sheetBody'),close=document.querySelector('#closeSheet');
 if(sheet.hidden)throw Error('Open a panel before checking it');
 const contains=(a,b)=>b.left>=a.left-1&&b.top>=a.top-1&&b.right<=a.right+1&&b.bottom<=a.bottom+1;
 if(!contains(app.getBoundingClientRect(),sheet.getBoundingClientRect()))throw Error('Panel exceeds the rotated game');
 if(body.scrollWidth>body.clientWidth+1)throw Error('Panel requires horizontal scrolling');
 const long=['settings','advanced','cards','stocks','deeds','shop'].includes(sheet.dataset.panel);
 if(long&&app.clientWidth>=app.clientHeight&&app.clientHeight<=650&&body.clientHeight<app.clientHeight*.5)throw Error('Too little height remains for the panel body');
 if(body.scrollTop!==0)throw Error('Newly opened panel did not start at the top');
 if(!close.hidden&&!contains(sheet.getBoundingClientRect(),close.getBoundingClientRect()))throw Error('Close button is clipped');
 const scrollMax=body.scrollHeight-body.clientHeight;body.scrollTop=scrollMax;
 if(Math.abs(body.scrollTop-scrollMax)>1)throw Error('Panel cannot scroll to its final content');
 body.scrollTop=0;
 return {panel:sheet.dataset.panel,logical:[app.clientWidth,app.clientHeight],bodyHeight:body.clientHeight,scrollMax,rotated:app.dataset.rotated};
})()
