/*1、透明度轮播图
参数：
参数1：图片元素集合
参数2：轮播点元素集合
参数3：banner盒子
参数4：左箭头元素
参数5：右箭头元素
参数6：自动轮播的时间间隔（number）
参数7：轮播点选中时的样式边化类名（string）*/
function  banner_io(imgs,lis,ban,lbtn,rbtn,time,active){
    //  定义初始值
    // imgs[0].style.zIndex=2;
    imgs[0].style.opacity ='1';
    //lis[0].style.backgroundColor='#fff';
    lis[0].classList.add(active);
    for(let i=0;i<lis.length;i++){


        lis[i].onclick=function(){
            //  其余图片层级变回1，其余轮播点样式改变
            for(let j=0;j<imgs.length;j++){
                // imgs[j].style.zIndex=1;
                imgs[j].style.opacity='0';
                //  lis[j].style.backgroundColor='#999';
                lis[j].classList.remove(active);
            }
            // 对应的层级提高
            // imgs[i].style.zIndex=2;
            imgs[i].style.opacity='1';
            // 对应轮播点样式改变
            //  lis[i].style.backgroundColor='#fff';
            lis[i].classList.add(active);
            //  当鼠标移入或移走之后继续轮播
            num=i;
        };

    }

    // 自动轮播
    //  定义变化的变量
    let num=0;
    //  定义时间间隔函数
    let t=setInterval(move,time);
    //  move 为函数的回调函数，可以直接写函数名相当于调用函数，回调函数被当做时间间隔函数的参数。
    function move(){
        num++;
        //  轮流循环，当等于最后一位时，返回第一位继续执行
        if(num === imgs.length){
            num=0;
        }
        //  回到初始值，在进行赋值改变样式
        for(let i=0;i<imgs.length;i++){
            //  imgs[i].style.zIndex='1';
            imgs[i].style.opacity='0';
            //  lis[i].style.backgroundColor='#999';
            lis[i].classList.remove(active);
        }
        // imgs[num].style.zIndex='2';
        imgs[num].style.opacity='1';
        // lis[num].style.backgroundColor='#fff';
        lis[num].classList.add(active);
    }
    //  鼠标移入banner图时，清除时间间隔函数
    ban.onmouseover=function(){
        clearInterval(t);
    };
    //  鼠标移出banner图时，重新赋值时间间隔函数
    ban.onmouseleave=function(){
        t=setInterval(move,time);
    };

    //  点击左右箭头
    // 右箭头为增减，直接调用move函数
    rbtn.onclick=function(){
        move();
    };

    lbtn.onclick=function(){
        moveleft();
    };
    function  moveleft(){
        num--;
        if(num === -1){
            num=imgs.length-1;
        }
        for(let i=0;i<imgs.length;i++){
            //imgs[i].style.zIndex='1';
            imgs[i].style.opacity='0';
            //  lis[i].style.backgroundColor='#999';
            lis[i].classList.remove(active);
        }
        // imgs[num].style.zIndex='2';
        imgs[num].style.opacity='1';
        // lis[num].style.backgroundColor='#fff';
        lis[num].classList.add(active);

    }
    // 关闭窗口时的现象
    window.onblur=function(){
        clearInterval(t);
    };
    window.onfocus=function(){
        t=setInterval(move,time);
    }
}