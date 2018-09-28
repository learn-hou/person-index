function  banner_lr(imgs,lis,lbtn,rbtn,ban,widths,time,active){
    //  初始值
   imgs[0].style.left='0';
   lis[0].classList.add(active);
    let  flag=true;
    //  鼠标移入轮播点进行左右轮播
    for(let i=0;i<lis.length;i++){
        lis[i].onmouseover=function(){
            for(let j=0;j<imgs.length;j++){
                imgs[j].style.left=widths+'px';
                lis[j].classList.remove(active);
            }
            imgs[i].style.left='0';
            lis[i].classList.add(active);
            now=i;
            next=i;
        }
    }

    //  自动轮播
    let now=0;
    let  next=0;
    let t=setInterval(move,time);
    function  move(){
        next++;
        if(next === imgs.length){
            next=0;
        }
        imgs[now].style.left='0';
        imgs[next].style.left=widths+'px';
        animate(imgs[now],{left:-widths},change);
        function change(){
            lis[now].classList.remove(active);
            flag=true;
        }
        animate(imgs[next],{left:0},changetwo);
        function changetwo(){
            for(let i=0;i<lis.length;i++){
                lis[i].classList.remove(active);
            }
            lis[next].classList.add(active);
            flag=true;
        }
        now=next;
    }


    //  左右箭头     true  打开   false  关闭

    rbtn.onclick=function(){

        if(!flag){
            return;
        }
        flag=false;
        move();

    };
    lbtn .onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        mover();
    };
    function mover(){
        next--;
        if(next === -1){
            next=imgs.length-1;
        }
        imgs[now].style.left='0';
        imgs[next].style.left=-widths+'px';
        animate(imgs[now],{left:widths},change);
        // 移动之后执行函数
        function change(){
            lis[now].classList.remove(active);
            flag=true;
        }

        animate(imgs[next],{left:0},changetwo);
        function changetwo(){
            for(let i=0;i<lis.length;i++){
                lis[i].classList.remove(active);
            }
            lis[next].classList.add(active);
            flag=true;
        }

        now=next;
    }

    // 鼠标移上停止
    ban.onmouseover=function(){
        clearInterval(t);
    };
    //鼠标移出banner图时，重新赋值时间间隔函数
    ban.onmouseleave=function(){
        t=setInterval(move,time);
    };

    //  失去焦点
    window.onblur=function(){
        clearInterval(t);
    };
    // 得到焦点
    window.onfocus=function(){
        t=setInterval(move,time);
    }
}