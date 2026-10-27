// Keep the portrait player drawer independent from the modal/turn action layer.
export function mountPlayerDrawer(root){
 const content=root.querySelector('.welcome-content'),talent=root.querySelector('#talentPreview');if(content&&talent)content.append(talent);
 const button=root.querySelector('#playersToggle'),sidebar=root.querySelector('#playerSidebar');
 if(!button||!sidebar)return;
 const update=expanded=>{root.dataset.playersExpanded=String(expanded);button.setAttribute('aria-expanded',String(expanded));button.textContent=expanded?'收起奶伴与资产':'查看奶伴与资产';};
 update(false);button.addEventListener('click',()=>update(button.getAttribute('aria-expanded')!=='true'));
 const sheet=root.querySelector('#sheet'),collapse=root.querySelector('#collapseSheet');
 collapse?.addEventListener('click',()=>{const collapsed=sheet.classList.toggle('is-collapsed');sheet.setAttribute('aria-modal',String(!collapsed));collapse.setAttribute('aria-expanded',String(!collapsed));collapse.setAttribute('aria-label',collapsed?'展开面板':'折叠面板');collapse.textContent=collapsed?'展开':'收起';});
 const observer=new MutationObserver(()=>{if(sheet.hidden){sheet.classList.remove('is-collapsed');collapse?.setAttribute('aria-expanded','true');if(collapse)collapse.textContent='收起';}});observer.observe(sheet,{attributes:true,attributeFilter:['hidden']});
 root.querySelector('#sheet')?.addEventListener('pointerdown',e=>e.stopPropagation());
}
