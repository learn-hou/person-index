//  轮播图
let  imgs=document.querySelectorAll('.banner img');
let  ban=document.querySelector('.banner');
let  lis=document.querySelectorAll('.box5');
banner_io(imgs,lis,ban,2000,'active');
//console.log(imgs);

// 大图的换字
let    box=document.querySelectorAll ('.box1');
let    detail=document.querySelectorAll ('.detail');
//console.log(box, detail);

for(let i=0;i<box.length;i++){
    box[i].onmouseover=function(){
        detail[i].style.display='block';
    };
    box[i].onmouseleave =function(){
        detail[i].style.display='none';
    }
}
// 中间的换字
let    box1=document.querySelectorAll ('.box11');
let    detail1=document.querySelectorAll ('.again');
for(let i=0;i<box1.length;i++){
    box1[i].onmouseover=function(){
        detail1[i].style.display='block';
    };
    box1[i].onmouseleave =function(){
        detail1[i].style.display='none';
    }
}

//  返回顶部
let  imgs1=document.querySelector('.img1');
//console.log(imgs1);
imgs1.onclick=function(){
    animate(document.body,{scroll:0});
    animate (document.documentElement,{scroll:0});
};

//  顶部导航菜单
let  a=document.querySelectorAll('.caidan .specity');
let  vivo=document.querySelectorAll ('.header .vivo');
let  list=document.querySelectorAll ('.vivo .list-1');
//console.log(list);

for(let i=0;i<a.length;i++){
    a[i].onmouseover =function(){
        for(let j=0;j<a.length;j++) {
            vivo[j].style.display = 'none';

        }
        vivo[i].style.display='block';
        list[i].style.display='block';

    };
    a[i].onmouseleave =function(){
      vivo[i].style.display='none';

    }
}


//  按需加载
let arr=[ ];
let  bodytope;
let  section=document.querySelectorAll ('.section');
let  height=window.innerHeight ;
console.log(section);

section.forEach((val,index)=>{
    arr.push(val.offsetTop );
});

window.onscroll=function(){
    bodytope=document.body.scrollTop ||document.documentElement.scrollTop ;
    arr.forEach((val,index)=>{
        if(bodytope+height/2>=val-199){
            let  imgs=section[index].querySelectorAll ('img');
            imgs.forEach((vals)=>{
                let url=vals.getAttribute('imgsrc');
                vals.setAttribute ('src',url);
            })
        }

    });

};









