let hamburgerbtn=document.getElementById("hamburger");
let crossbtn=document.getElementById("cross");
hamburgerbtn.addEventListener("click",()=>{
  let toggablebtn=document.getElementById("toggableThirdMenu");
   toggablebtn.style.width="99%";
   toggablebtn.style.left="0%";
   toggablebtn.style.top="6%";
});
crossbtn.addEventListener("click",()=>{
  let close=document.getElementById("toggableThirdMenu");
  close.style.width="0%";
   close.style.left="-55%";
   
})

let magnifybtn=document.getElementById("magnifyglass");
 let input=document.getElementById("input");
 let main=document.getElementById("main");
 magnifybtn.addEventListener("click",()=>{

  let img=document.querySelectorAll("img");
    for(let i=0;i<img.length;i++){
      let alt=img[i].alt;
       if(input.value.toLowerCase()==alt.toLowerCase()){
         main.style.display="none"
        
         img[i].style.display="block";
        
       }
       else{
         main.style.display="block"
        img[i].style.display="none"
        // alert("no searchimg found");
       } }
    }

 )
 
 let flag=1

 function controller(x){
   flag=flag + x;
    slideshow(flag);
    
 }
 function slideshow(imgno){
 let slide=document.querySelectorAll(".slide");
 if(imgno==slide.length){
   flag=0;
   imgno=0;
 }
 if(imgno<0){
  flag=slide.length-1;
   imgno=slide.length-1;
 }
 for(y of slide){
  y.style.display="none";
 }
 slide[imgno].style.display="block";

 }
 slideshow(flag)