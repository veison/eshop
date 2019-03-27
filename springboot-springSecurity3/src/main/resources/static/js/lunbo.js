 window.onload = function ()    
   {    
       var oUl=document.getElementById ('ul1');    
       var t,o;    
       var speed=0;    
       var funny=function ()    
       {    
           t && clearInterval(t);    
           t = setInterval (function ()    
           {    
                speed-=200/11;    
                if(speed<800){    
                    speed=0;    
                    oUl.appendChild (oUl.children[0]);    
                    t && clearInterval(t);    
                    t = null;    
                    o && clearTimeout(o);    
                    o=setTimeout(funny,2000);    
                    }    
               oUl.style.left = speed + "px";    
           }, 60);    
       }    
        funny ();    
   }    
   
