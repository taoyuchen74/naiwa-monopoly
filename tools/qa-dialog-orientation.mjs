// Run as text with agent-browser eval while a game panel is open.
(()=>{
 const app=document.getElementById('app'),sheet=document.getElementById('sheet'),r=sheet.getBoundingClientRect(),a=app.getBoundingClientRect();
 for(const id of ['sheet','sheetBackdrop','toast','bootError'])if(!app.contains(document.getElementById(id)))throw Error(`${id} does not share the game's rotation`);
 if(sheet.hidden)throw Error('Open a panel before running this check');
 const contains=(outer,inner)=>inner.left>=outer.left-1&&inner.top>=outer.top-1&&inner.right<=outer.right+1&&inner.bottom<=outer.bottom+1;
 if(!contains(a,r)||!contains({left:0,top:0,right:innerWidth,bottom:innerHeight},r))throw Error('Panel exceeds the visible game bounds');
 if(['buy','estate','branch'].includes(sheet.dataset.panel)&&app.clientWidth>=app.clientHeight)for(const button of sheet.querySelectorAll('#sheetBody button'))if(!contains(r,button.getBoundingClientRect()))throw Error('Decision action clipped');
 return{panel:sheet.dataset.panel,rotated:app.dataset.rotated,logicalSize:[app.clientWidth,app.clientHeight],panelSize:[sheet.offsetWidth,sheet.offsetHeight],decisionActionsVisible:['buy','estate','branch'].includes(sheet.dataset.panel)&&app.clientWidth>=app.clientHeight};
})()
