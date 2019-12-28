const preload= document.querySelector('.preload');


window.addEventListener("load", () => {
  window.scrollTo(0,0);
  preload.style.height=0;
  preload.style.width=0;
  
})


let burger=document.querySelector(".burger");
let line1=document.querySelector(".line1");
let line2=document.querySelector(".line2");
let line3=document.querySelector(".line3");


burger.addEventListener("click", ()=>{
    
  })

const slide = document.querySelector('.about');
const little = document.querySelector('.little');
const info1 = document.querySelector('.info1');
const info2 = document.querySelector('.info2');
const butt_contain1 = document.querySelector('.butt_contain1');
const butt = document.querySelector('.butt');
var ctrl = new ScrollMagic.Controller();
var window_width=window.innerWidth;


const tl =new TimelineMax();
if(window_width >= 450)
{
  tl.fromTo(slide,1.2,{x:"-100%"},{x:"-7.2%" , ease:Power2.easeInOut} )
}
tl.fromTo(little,1.5,{opacity:"0" , y:"5"},{opacity:"1" , y:"0", ease:Power2.easeInOut} ,'-=0.7')
tl.fromTo(info1,1,{opacity:"0", y:"5"},{opacity:"1" , y:"0", ease:Power2.easeInOut} ,'-=1')
tl.fromTo(info2,1,{opacity:"0", y:"5"},{opacity:"1" , y:"0", ease:Power2.easeInOut} ,'-=0.5' )
tl.fromTo(butt_contain1,0.2,{border:"0"},{border:"2px solid rgb(230, 0, 0)", ease:Power2.easeInOut} )
tl.fromTo(butt_contain1,0.2,{width:"0"},{width:"200px", ease:Power2.easeInOut} )
tl.fromTo(butt,0.5,{height:"0"},{height:"100%", ease:Power2.easeInOut} );



const skills=document.querySelector('.skills');
const skill1 = document.querySelector('.skill1');
const skill2 = document.querySelector('.skill2');
const skill3 = document.querySelector('.skill3');
const skill1img = document.querySelector('.skill1 img');
const skill2img = document.querySelector('.skill2 img');
const skill3img = document.querySelector('.skill3 img');
const stext= document.querySelector('.stext');
const t2 =new TimelineMax();

if(window_width >= 880)
{
  t2.fromTo(skill3,1.3,{x:"-80%"},{x:"0%" , ease:Power2.easeInOut} )
  t2.fromTo(skill3img,1,{opacity:"0"},{opacity:"1" , ease:Power2.easeInOut} ,'-=1')
  t2.fromTo(skill2,1.3,{x:"-85%"},{x:"0%" , ease:Power2.easeInOut},'-=1')
  t2.fromTo(skill2img,1,{opacity:"0"},{opacity:"1" , ease:Power2.easeInOut} ,'-=1')
  t2.fromTo(skill1,1.3,{x:"-90%"},{x:"0%" , ease:Power2.easeInOut},'-=1' )
  t2.fromTo(skill1img,1,{opacity:"0"},{opacity:"1" , ease:Power2.easeInOut} ,'-=1' );

  t2.fromTo(stext,1,{opacity:"0"},{opacity:"1" , ease:Power2.easeInOut} ,'-=0.5' )
  t2.fromTo(stext,1,{y:"10px"},{y:"0" , ease:Power2.easeInOut} ,'-=1.2' );
}
if(window_width < 880)
{
  t2.fromTo(stext,1,{opacity:"0"},{opacity:"1" , ease:Power2.easeInOut} ,'-=1.5' )
  t2.fromTo(stext,1,{y:"10px"},{y:"0" , ease:Power2.easeInOut} ,'-=1.7' );

  t2.fromTo(skill1,1.3,{x:"-100%"},{x:"0%" , ease:Power2.easeInOut} ,'-=1')
  t2.fromTo(skill1img,1,{opacity:"0"},{opacity:"1" , ease:Power2.easeInOut} ,'-=1')
  t2.fromTo(skill2,1.3,{x:"-105%"},{x:"0%" , ease:Power2.easeInOut},'-=1')
  t2.fromTo(skill2img,1,{opacity:"0"},{opacity:"1" , ease:Power2.easeInOut} ,'-=1')
  t2.fromTo(skill3,1.3,{x:"-100%"},{x:"0%" , ease:Power2.easeInOut},'-=1' )
  t2.fromTo(skill3img,1,{opacity:"0"},{opacity:"1" , ease:Power2.easeInOut} ,'-=1' );

 
}
const Projects=document.querySelector('.Projects');
const projects_title=document.querySelector('.projects_title');
const contain1=document.querySelector('.contain1');
const contain2=document.querySelector('.contain2');
const contain3=document.querySelector('.contain3');

const t3 =new TimelineMax();

t3.fromTo(projects_title,1,{y:"5%",opacity:"0"},{y:"0%",opacity:"1", ease:Power2.easeInOut},'-=0.5'  )
if(window_width>1330)
{
  t3.fromTo(contain1,0.5,{height:"0"},{height:"450px", ease:Power2.easeInOut} )
  t3.fromTo(contain2,0.5,{height:"0"},{height:"450px", ease:Power2.easeInOut} )
  t3.fromTo(contain3,0.5,{height:"0"},{height:"450px", ease:Power2.easeInOut} )
}
else{
  t3.fromTo(contain1,0.5,{y:"5%",opacity:"0"},{y:"0%",opacity:"1", ease:Power2.easeInOut} )
  t3.fromTo(contain2,0.5,{y:"5%",opacity:"0"},{y:"0%",opacity:"1", ease:Power2.easeInOut} )
  t3.fromTo(contain3,0.5,{y:"5%",opacity:"0"},{y:"0%",opacity:"1", ease:Power2.easeInOut} )
}

const Contact=document.querySelector('.Contact')
const t4 =new TimelineMax();
const contact_title=document.querySelector('.contact_title');
const name=document.querySelector('.name');
const mail=document.querySelector('.mail');
const subject=document.querySelector('.subject');
const msg=document.querySelector('.msg');

const butt_contain2 = document.querySelector('.butt_contain2');
const submit=document.querySelector('.submit');


const uname=document.querySelector('.uname');
const umail=document.querySelector('.umail');
const usubject=document.querySelector('.usubject');
const umsg=document.querySelector('.umsg');


t4.fromTo(contact_title,1,{y:"5%",opacity:"0"},{y:"0%",opacity:"1", ease:Power2.easeInOut}  )

t4.fromTo(name,1.5,{width:"0%"},{width:"100%", ease:Power2.easeInOut} ,'-=1'  )
t4.fromTo(uname,0.5,{y:"5%",opacity:"0"},{y:"0%",opacity:"1", ease:Power2.easeInOut},'-=1'  )

t4.fromTo(mail,1.5,{width:"0%"},{width:"100%", ease:Power2.easeInOut} ,'-=1'  )
t4.fromTo(umail,0.5,{y:"5%",opacity:"0"},{y:"0%",opacity:"1", ease:Power2.easeInOut},'-=1'  )

t4.fromTo(subject,1.5,{width:"0%"},{width:"100%", ease:Power2.easeInOut} ,'-=1'  )
t4.fromTo(usubject,0.5,{y:"5%",opacity:"0"},{y:"0%",opacity:"1", ease:Power2.easeInOut},'-=1'  )

t4.fromTo(msg,1.5,{width:"0%"},{width:"100%", ease:Power2.easeInOut} ,'-=1'  )
t4.fromTo(umsg,0.5,{y:"5%",opacity:"0"},{y:"0%",opacity:"1", ease:Power2.easeInOut},'-=1'  )

t4.fromTo(butt_contain2,0.2,{border:"0"},{border:"2px solid rgb(230, 0, 0)", ease:Power2.easeInOut} ,'-=0.2' )
t4.fromTo(butt_contain2,0.2,{width:"0"},{width:"200px", ease:Power2.easeInOut} )
t4.fromTo(submit,0.5,{height:"0"},{height:"100%", ease:Power2.easeInOut} );

name.addEventListener("click",()=>{
  uname.style.top='0px';

})
mail.addEventListener("click",()=>{
  umail.style.top='0px';
    
})
subject.addEventListener("click",()=>{
  usubject.style.top='0px';
    
})



new ScrollMagic.Scene({
    triggerElement: slide,
    triggerHook: 0.01
  })
    .setTween(tl)
    .addIndicators({
      colorTrigger: "white",
      colorStart: "white",
      colorEnd: "white",
      indent: 20
    })
    .addTo(ctrl);
new ScrollMagic.Scene({
    triggerElement: skills,
    triggerHook: 0.01
  })
    .setTween(t2)
    .addIndicators({
      colorTrigger: "white",
      colorStart: "white",
      colorEnd: "white",
      indent: 20
    })
    .addTo(ctrl);

new ScrollMagic.Scene({
      triggerElement: Projects,
      triggerHook: 0.01
   })
    .setTween(t3)
    .addIndicators({
      colorTrigger: "white",
      colorStart: "white",
      colorEnd: "white",
      indent: 20
    })
    .addTo(ctrl);

new ScrollMagic.Scene({
      triggerElement: Contact,
      triggerHook: 0.01
    })
    .setTween(t4)
    .addIndicators({
      colorTrigger: "white",
      colorStart: "white",
      colorEnd: "white",
      indent: 20
    })
    .addTo(ctrl);



let butt1 = document.querySelector(".butt1");
let butt2 = document.querySelector(".butt2");
let butt3 = document.querySelector(".butt3");
let butt4 = document.querySelector(".butt4");
let butt5 = document.querySelector(".butt5");
let butt6 = document.querySelector(".butt6");
let active = document.querySelector(".active");


let cur_but_num = 1;
function changePrevButton(){
  if(cur_but_num == 1)
  {
    butt1.style.backgroundColor = "transparent";
  }
  else if(cur_but_num == 2)
  {
    butt2.style.backgroundColor = "transparent";
  }
  else if(cur_but_num == 3)
  {
    butt3.style.backgroundColor = "transparent";
  }
  else if(cur_but_num == 4)
  {
    butt4.style.backgroundColor = "transparent";
  }
  else if(cur_but_num == 5)
  {
    butt5.style.backgroundColor = "transparent";
  }
  else if(cur_but_num == 6)
  {
    butt6.style.backgroundColor = "transparent";
  }
}
butt1.style.backgroundColor = "white";
butt1.addEventListener("click", function(){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
  changePrevButton();
  cur_but_num = 1;
  this.style.backgroundColor = "white";
})
butt2.addEventListener("click", function(){
  window.scrollTo({
    top: window.innerHeight+1,
    left: 0,
    behavior: 'smooth'
  });
  changePrevButton();
  cur_but_num = 2;
  this.style.backgroundColor = "white";
})
butt3.addEventListener("click", function(){
  window.scrollTo({
    top: 2*window.innerHeight+1,
    left: 0,
    behavior: 'smooth'
  });
  changePrevButton();
  cur_but_num = 3;
  this.style.backgroundColor = "white";
})
butt4.addEventListener("click", function(){
  window.scrollTo({
    top: 3*window.innerHeight+1,
    left: 0,
    behavior: 'smooth'
  });
  changePrevButton();
  cur_but_num = 4;
  this.style.backgroundColor = "white";
})
butt5.addEventListener("click", function(){
  window.scrollTo({
    top: 4*window.innerHeight+1,
    left: 0,
    behavior: 'smooth'
  });
  changePrevButton();
  cur_but_num = 5;
  this.style.backgroundColor = "white";
})
butt6.addEventListener("click", function(){
  window.scrollTo({
    top: 5*window.innerHeight+1,
    left: 0,
    behavior: 'smooth'
  });
  changePrevButton();
  cur_but_num = 6;
  this.style.backgroundColor = "white";
})