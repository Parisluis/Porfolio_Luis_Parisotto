(()=>{
 document.body.classList.add('js-on');
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const els=document.querySelectorAll('.reveal');
 if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.09});els.forEach(el=>io.observe(el));}else{els.forEach(el=>el.classList.add('in'))}
 const bar=document.querySelector('.progress');window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-window.innerHeight;bar.style.width=(max?100*window.scrollY/max:0)+'%'},{passive:true});
 const toggle=document.querySelector('.menu');const nav=document.querySelector('.mobile-nav');toggle.onclick=()=>{const open=nav.hidden;nav.hidden=!open;toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰';toggle.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');};nav.querySelectorAll('a').forEach(a=>a.onclick=()=>{nav.hidden=true;toggle.textContent='☰';toggle.setAttribute('aria-expanded','false')});
 const video=document.getElementById('case-video');if(reduced){video.removeAttribute('autoplay');video.pause();video.setAttribute('controls','')};
 const dialog=document.getElementById('video-dialog');const bigVideo=document.getElementById('expanded-video');
 document.getElementById('play-video').addEventListener('click',()=>{dialog.showModal();bigVideo.currentTime=0;bigVideo.play().catch(()=>{})});
 dialog.querySelector('.dialog-close').onclick=()=>dialog.close();dialog.addEventListener('close',()=>bigVideo.pause());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
 const imageDialog=document.getElementById('image-dialog');
 const zoomImage=imageDialog.querySelector('img');
 document.querySelectorAll('.zoomable-image').forEach(button=>button.addEventListener('click',()=>{
   const img=button.querySelector('img');
   zoomImage.src=img.getAttribute('src');
   zoomImage.alt=img.alt;
   imageDialog.querySelector('.image-caption').textContent=img.alt;
   imageDialog.showModal();
 }));
 imageDialog.querySelector('.dialog-close').onclick=()=>imageDialog.close();
 imageDialog.addEventListener('click',event=>{if(event.target===imageDialog)imageDialog.close()});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)bigVideo.pause()});
})();
