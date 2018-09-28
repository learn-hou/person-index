//  banner轮播图
let  imgs=document.querySelectorAll ('.banner .imgban');
let  lis=document.querySelectorAll ('.btns li');
let  ban=document.querySelector ('.banner');
let  lbtn=document.querySelector ('.banner .btnLeft');
let  rbtn=document.querySelector ('.banner .btnRight');
let  widths=parseInt (getComputedStyle(ban,null).width);

banner_lr(imgs,lis,lbtn,rbtn,ban,widths,2000,'active');


//  移动顶部变化
let  top1=document.querySelector ('.top');
let  top2=document.querySelector ('.top1');
window.onscroll=function(){
    let  bodytope=document.body.scrollTop ||document.documentElement.scrollTop ;
    if(bodytope>=300){
        top1.style.background='#fff';
         top2.style.display='block';
        }else if(bodytope<=300){
        top1.style.background='rgba(0,0,0,0.1)';
        top2.style.display='none';

        }

};

//
