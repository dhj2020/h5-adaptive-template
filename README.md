# h5-adaptive-template

//自适应方法二
`
scaleW=window.innerWidth/640;
scaleH=window.innerHeight/1030;
var resizes = document.querySelectorAll('.resize');
for (var j=0; j<resizes.length; j++) {
    resizes[j].style.width=parseInt(resizes[j].style.width)*scaleW+'px';
    resizes[j].style.height=parseInt(resizes[j].style.height)*scaleH+'px';
    resizes[j].style.top=parseInt(resizes[j].style.top)*scaleH+'px';
    resizes[j].style.left=parseInt(resizes[j].style.left)*scaleW+'px'; 
}
`


