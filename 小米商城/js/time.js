function  Time(){
    let   spans=document.querySelectorAll('.time');
    //console.log(spans);
    let  furture=new  Date();
    furture.setYear(2018);
    furture.setMonth(9,20);
    furture.setHours(18,0,0);
    //console.log(furture);
    furturetime=furture.getTime();
    //console.log(furturetime);

    let t=setInterval(function(){
        let  now=new Date();
        nowtime=now.getTime();
        // console.log(nowtime);
        sec=Math.round(furturetime-nowtime)/1000;
        //console.log(sec);
        spans[0].innerHTML=Math.floor(sec/60/60%24);
        spans[1].innerHTML =Math.floor(sec/60%60);
        spans[2].innerHTML =Math.floor (sec%60);

    },1000);
}