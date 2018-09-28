
/*
左右轮播：将照片定位于左侧，进行宽度的变化实现移动。
参数1：图片
参数2：轮播点
参数3：左箭头
参数4：右箭头
参数5：盒子的宽，实现左右图片移动
参数6：移动的样式
 */
function  banner_lr(imgs,lis,lbtn,rbtn,widths,active){
    //  初始值，定义初始图片和轮播点
    imgs[0].style.left='0';
    lis[0].classList.add(active);

    //  鼠标点击轮播点进行左右轮播
    for(let i=0;i<lis.length;i++){
        lis[i].onclick=function(){
            // 清除之前移入当前位置的图片和轮播点
            for(let j=0;j<imgs.length;j++){
                imgs[j].style.left=widths+'px';
                lis[j].classList.remove(active);
            }
            // 鼠标点击的图片和轮播点给予样式
            imgs[i].style.left='0';
            lis[i].classList.add(active);
            //  赋值给变量，使鼠标点击之后在此位置进行轮播
            now=i;
            next=i;
        }
    }
    // 给变量附初始值
    let now=0;
    let  next=0;
    //  左右箭头

    //  点击右箭头
    rbtn.onclick=function(){
        move();
    };
    function  move(){
        next++;
        // 判断最大值，使轮播图不能执行，进行返回执行。
        if(next === imgs.length){
            next=imgs.length-1;
            return;
        }
         // now 、next的初始位置的宽度
        imgs[now].style.left='0';
        imgs[next].style.left=widths+'px';
        animate(imgs[now],{left:-widths},change);
        function change(){
            //  移除的图片，轮播点的样式进行取消
            lis[now].classList.remove(active);
            }
        animate(imgs[next],{left:0},changetwo);
        function changetwo(){
            //  清除所有样式
            for(let i=0;i<lis.length;i++){
                lis[i].classList.remove(active);
            }

            lis[next].classList.add(active);
        }


        now=next;

    }

    lbtn .onclick=function(){

        mover();

    };
    function mover(){
        next--;
        if(next === -1){

            next=0;
            return;
        }
        imgs[now].style.left='0';
        imgs[next].style.left=-widths+'px';
        animate(imgs[now],{left:widths},change);
        // 移动之后执行函数
        function change(){
           lis[now].classList.remove(active);


        }

        animate(imgs[next],{left:0},changetwo);
        function changetwo(){
            for(let i=0;i<lis.length;i++){
                lis[i].classList.remove(active);
            }
            lis[next].classList.add(active);

        }

        now=next;
    }
}
