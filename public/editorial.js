const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

function clamp(v,min,max){return Math.max(min,Math.min(max,v))}

const culture=document.querySelector('.culture-scroll');
if(culture){
  const track=culture.querySelector('.culture-track');
  const progress=[...culture.querySelectorAll('.culture-progress span')];
  const renderCulture=()=>{
    if(innerWidth<=900){track.style.transform='none';return}
    const r=culture.getBoundingClientRect();
    const max=Math.max(1,culture.offsetHeight-innerHeight);
    const p=clamp(-r.top/max,0,1);
    track.style.transform='translate3d('+(-p*200)+'vw,0,0)';
    const active=Math.min(2,Math.floor(p*3));
    progress.forEach((el,i)=>el.classList.toggle('active',i<=active));
  };
  addEventListener('scroll',renderCulture,{passive:true});addEventListener('resize',renderCulture);renderCulture();
}

const mask=document.querySelector('.mask-section');
if(mask){
  const title=mask.querySelector('.mask-title');
  const renderMask=()=>{
    const r=mask.getBoundingClientRect();
    const max=Math.max(1,mask.offsetHeight-innerHeight);
    const p=clamp(-r.top/max,0,1);
    title.style.backgroundPosition='50% '+(20+p*60)+'%';
  };
  addEventListener('scroll',renderMask,{passive:true});addEventListener('resize',renderMask);renderMask();
}

const approach=document.querySelector('.approach-scroll');
if(approach){
  const fill=approach.querySelector('.approach-fill');
  const runner=approach.querySelector('.approach-runner');
  const steps=[...approach.querySelectorAll('.approach-step')];
  const renderApproach=()=>{
    if(innerWidth<=900)return;
    const r=approach.getBoundingClientRect();
    const max=Math.max(1,approach.offsetHeight-innerHeight);
    const p=clamp(-r.top/max,0,1);
    fill.style.width=(p*88)+'%';
    runner.style.left=(6+p*88)+'%';
    const active=Math.min(3,Math.floor(p*4));
    steps.forEach((el,i)=>el.classList.toggle('active',i===active));
  };
  addEventListener('scroll',renderApproach,{passive:true});addEventListener('resize',renderApproach);renderApproach();
}
