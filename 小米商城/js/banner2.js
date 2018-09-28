    //双下标轮播
    /*
    1.需要移动的box
    2.轮播点
    3.左箭头
    4.右箭头
    5.需要移动的box的大小
    6.轮播点选中的样式
     */
function banner2(body,dot2,bnt1,bnt2,wid,hot){
    body[0].style.left = "0";
    for (let i = 0; i < body.length; i++){
        dot2[i].onclick = function(){
            // if (i>now){
            //     if(i>now + 1){
            //         body[i].style.left = (wid*2)+"px";
            //         body[i-1].style.left = wid+"px";
            //         animate(body[now],{left:-wid},function () {
            //             body[i-1].style.zIndex = "2";
            //         });
            //         animate(body[i-1],{left:-wid});
            //         animate(body[i],{left:0},function () {
            //             body[i-1].style.zIndex = "1";
            //         });
            //         next = 2;
            //         now = 2;
            //         for(let j=0;j<i;j++){
            //             dot2[j].classList.remove("hot");
            //         }
            //         dot2[i].classList.add("hot");
                // }else{
                    for(let j=0;j<body.length;j++){
                        dot2[j].classList.remove(hot);
                        body[j].style.left = -wid+"px";
                    }
                    // body[i-1].style.left = -wid+"px";
                    now = i;
                    next = i;
                    dot2[i].classList.add(hot);
                    body[i].style.left = "0";
                    // animate(body[now],{left:-wid});
                    // animate(body[i],{left:0});

                }
            }
            // if(i<now){
            //     if(i<now-1){
            //         body[i].style.left = -(wid*2)+"px";
            //         body[i+1].style.left = -wid+"px";
            //         animate(body[now],{left:wid},function () {
            //             body[i+1].style.zIndex = "2";
            //         });
            //         animate(body[i+1],{left:wid});
            //         animate(body[i],{left:0},function () {
            //             body[i+1].style.zIndex = "1";
            //         });
            //         for(let j=0;j<body.length;j++){
            //             dot2[j].classList.remove("hot");
            //             // body[j].style.left = -wid+"px";
            //         }
            //         dot2[i].classList.add("hot");
            //         next = now = i;
            //     }else{
            //         for(let j=0;j<body.length;j++){
            //             dot2[j].classList.remove("hot");
            //             // body[j].style.left = -wid+"px";
            //         }
            //         dot2[i].classList.add("hot");
            //         // body[i].style.left = 0;
            //         animate(body[now],{left:wid});
            //         animate(body[i],{left:0});
            //         now = i;
            //         next = i;
            //     }
            // }
    //     }
    // }
    let now = 0;
    let next = 0;
    let flag = true;
    function move() {
        next++;
        if(next >= body.length){
            flag = true;
            next = body.length-1;
            return;
        }
        body[now].style.left = "0";
        body[next].style.left = wid + "px";
        animate(body[now],{left:-wid},function() {
            for (let i = 0; i < body.length; i++) {
                dot2[i].classList.remove(hot);
            }
        });
        animate(body[next],{left:0},function () {
            dot2[now].classList.add(hot);
            flag = true;
        });
        now = next;
    }
    bnt1.onclick = function(){
        if(!flag){
            return;
        }
        flag = false;
        movel();

    };
    function movel(){
        next--;
        if(next < 0){
            flag = true;
            next = 0;
            return;
        }
        body[now].style.left = "0";
        body[next].style.left = -wid + "px";
        animate(body[now],{left:wid},function() {
            for (let i = 0; i < body.length; i++) {
                dot2[i].classList.remove(hot);

            }
        });
        animate(body[next],{left:0},function () {
            dot2[now].classList.add(hot);
            flag = true;
        });


        now = next;



    }
    bnt2.onclick = function () {
        if(!flag){
            return;
        }
        flag = false;
        move();
    };
}