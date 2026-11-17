(()=>{
 document.body.classList.add('js-on');
 const reduced=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
 const reveal=document.querySelectorAll('.reveal');
 if('IntersectionObserver' in window){const observer=new IntersectionObserver(items=>items.forEach(item=>{if(item.isIntersecting){item.target.classList.add('in');observer.unobserve(item.target)}}),{threshold:.065});reveal.forEach(el=>observer.observe(el));}else reveal.forEach(el=>el.classList.add('in'));
 const progress=document.querySelector('.scroll-progress');
 window.addEventListener('scroll',()=>{const range=document.documentElement.scrollHeight-innerHeight; progress.style.width=(range?scrollY/range*100:0)+'%'},{passive:true});
 const nav=document.querySelector('.nav-mobile'),toggle=document.querySelector('.nav-toggle');
 toggle.addEventListener('click',()=>{nav.hidden=!nav.hidden;const open=!nav.hidden;toggle.textContent=open?'×':'☰';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú')});
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.hidden=true;toggle.textContent='☰';toggle.setAttribute('aria-expanded','false')}));
 const dialog=document.querySelector('#image-lightbox'),large=dialog.querySelector('img');
 document.querySelectorAll('.enlarge').forEach(b=>b.addEventListener('click',()=>{const im=b.querySelector('img');large.src=b.dataset.full||im.src;large.alt=im.alt;dialog.querySelector('.lightbox-caption').textContent=b.dataset.caption||im.alt;dialog.showModal()}));
 dialog.querySelector('.close-lightbox').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
 const video=document.getElementById('barbie-video'),play=document.querySelector('.video-toggle');
 function setVideoState(){play.textContent=video.paused?'REPRODUCIR ▶':'PAUSAR Ⅱ';play.setAttribute('aria-label',video.paused?'Reproducir video':'Pausar video')}
 play.addEventListener('click',async()=>{if(video.paused){try{await video.play()}catch(e){}}else video.pause();setVideoState()});
 video.addEventListener('play',setVideoState);video.addEventListener('pause',setVideoState);
 if(!reduced&&'IntersectionObserver' in window){const ob=new IntersectionObserver(entries=>entries.forEach(e=>{if(!e.isIntersecting&&!video.paused)video.pause()}),{threshold:.03});ob.observe(video)}
})();
