let  input1=document.querySelector ('input');
console.log(input1);
//let  input2=document.querySelector ('h2');
let  txt=document.querySelector ('textarea');
let  btn=document.querySelector ('button');
let  ul=document.querySelector('.text-inner');

btn.onclick=function(){
    let  ion=input1.value;
    let  kon=txt.value;
    if(ion!==''&&kon!==''){
        let  str=`	<div class="ti1">
    					<div class="c1">
    						<i class="iconfont icon-lianxiren"></i>
    						<div>
    							<p>${ion}</p>
                            	<p>${kon}</p>
                            </div>
    					</div>
    					<div class="c2">2018-01-04 16:18:53</div>
    				</div>
    
    
    `;
        ul.innerHTML +=str;
        input1.value='';
        txt.value='';


    } else{
        alert('不能为空！');
    }

    };

