//    购物车
let   topbar=document.getElementsByClassName('topbar-info ')[0];
//console.log(topbar);
let    shopBar=document.getElementsByClassName('shopBar')[0];

let    after=document.querySelector(".topbar-info .after");
console.log(after);

  topbar.onmouseover=function(){
      topbar.style.backgroundColor='#fff';
      shopBar.style.color='#ff6700';
      after.style.height='98px';
  };
  top.onmouseout =function(){
      topbar.style.backgroundColor='#424242';
      shopBar.style.color='#333';
      after.style.height='0';
  };
 //  购物车结束

//竖向菜单
let  cate=document.getElementsByClassName('category-item');
//console.log(cate);
let   detail=document.getElementsByClassName ('detail');
//console.log(detail);
for(let i=0;i<cate.length;i++){
    cate[i].onmouseover=function(){
        for(let j=0;j<detail.length;j++){
            detail[j].style.display='none';
        }
        detail[i].style.display='block';
    };
    cate[i].onmouseout=function(){
        detail[i].style.display='none';
    }
}
//横向菜单
let   text=document.querySelectorAll('.nav-list.nav-list1 li');
let   arrow=document.querySelectorAll ('.arrow');
//console.log(arrow);

for(let i=0;i<text.length;i++){
    text[i].onmouseover=function(){
        for(let j=0;j<arrow.length;j++){
            arrow[j].style.display='none';
        }
        arrow[i].style.display='block';

    } ;
    text[i].onmouseleave=function(){
        arrow[i].style.display='none';
    }
}

// 一平的轮播图
let  content=document.querySelector('.contentA');
let  titleft=document.querySelector ('.boxhd .title .title-left');
let   titright=document.querySelector ('.boxhd .title .title-right');
let   list=document.querySelectorAll ('.contentA ul li');
let  widths4=parseInt (getComputedStyle (content,null).width)/2;
//console.log(content,titleft ,titright,list,widths4);
let  num=0;
titright.onclick=function(){
    num++;
    if(num=== 2){
        titleft.style.color='#999';
        num=1;

    }
    content.style.transform='translateX('+(-widths4*num)+'px)';

};
titleft.onclick=function(){
    num--;
    if(num=== -1){
      //  titleft.style.color='#999';
        num=0;

    }
    content.style.transform='translateX('+(-widths4*num)+'px)';

};

//  为你推荐的移动
let  content3=document.querySelector ('.content3');
let  titleft1=document.querySelector ('.boxhd .title .title-left1');
let   titright1=document.querySelector ('.boxhd .title .title-right1');
let   widths5=parseInt (getComputedStyle (content3,null).width)/2;
//console.log(content3,titleft1,titright1,widths5);
let  num1=0;
titleft1.onclick=function(){
    num1--;
    if(num1 === -1){
        num1=0;
    }
    content3.style.transform='translateX('+(-widths5*num1)+'px)';
};
titright1.onclick=function(){
    num1++;
    if(num1 === 2){
        num1=1;
    }
    content3.style.transform='translateX('+(-widths5*num1)+'px)';
};

//  换图
let  bri=document.querySelectorAll('.con .home .title .bricknar ul li a');
let  hot=document.querySelectorAll ('.hot');
//console.log(bri);
for(let i=0;i<bri.length;i++){
    bri[i].onmouseover=function(){
        for(let j=0;j<hot.length;j++){
            hot[j].style.display='none';
        }
        hot[i].style.display='block';

    } ;
    bri[i].onmouseleave=function(){
        hot[i].style.display='none';
    }
}


// 轮播图
let  imgs=document.querySelectorAll('.banimg');
let  lis=document.querySelectorAll ('.banner .container .pager .pager-item');
let  lbtn=document.querySelector ('.banner .container .banner-left');
let   rbtn=document.querySelector ('.banner .container .banner-right');
let   ban=document.querySelector ('.banner');
banner_io(imgs,lis,lbtn,rbtn,ban,1500,'active');




//左右轮播框
// 1
let  dl=document.querySelectorAll ('.half ul .child-li4');
let  conBlack=document.querySelectorAll ('.change .conBlack4');
let  hal=document.querySelector ('.con .text .content2 .half4');
let  lcon=document.querySelector ('.content-left4');
let  rcon=document.querySelector ('.content-right4');
 let   widths=parseInt (getComputedStyle(hal,null).width);
 banner_lr(dl,conBlack ,lcon,rcon,widths,'active');



// 2
let  dl1=document.querySelectorAll ('.half ul .child-li');
let  conBlack1=document.querySelectorAll ('.change .conBlack1');
let  hal1=document.querySelector ('.con .text .content2 .half1');
let  lcon1=document.querySelector ('.content-left1');
let  rcon1=document.querySelector ('.content-right1');
let   widths1=parseInt (getComputedStyle(hal1,null).width);
banner_lr(dl1,conBlack1 ,lcon1,rcon1,widths1,'active');

//3
let  dl2=document.querySelectorAll ('.half ul .child-li2');
let  conBlack2=document.querySelectorAll ('.change .conBlack2');
let  hal2=document.querySelector ('.con .text .content2 .half2');
let  lcon2=document.querySelector ('.content-left2');
let  rcon2=document.querySelector ('.content-right2');
let   widths2=parseInt (getComputedStyle(hal2,null).width);
banner_lr(dl2,conBlack2 ,lcon2,rcon2,widths2,'active');

//4
let  dl3=document.querySelectorAll ('.half ul .child-li3');
let  conBlack3=document.querySelectorAll ('.change .conBlack3');
let  hal3=document.querySelector ('.con .text .content2 .half3');
let  lcon3=document.querySelector ('.content-left3');
let  rcon3=document.querySelector ('.content-right3');
let   widths3=parseInt (getComputedStyle(hal3,null).width);
banner_lr(dl3,conBlack3 ,lcon3,rcon3,widths3,'active');

//  闪购
Time();