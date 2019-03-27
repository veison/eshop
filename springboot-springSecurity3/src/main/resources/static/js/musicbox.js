// 页面更换图片函数
function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return false;
    var source=whichpic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    if (placeholder.nodeName!="IMG") return false;
    placeholder.setAttribute("src",source);
    if (document.getElementById("description")){
        var text=whichpic.getAttribute("title") ? whichpic.getAttribute("title"):"";
        var description=document.getElementById("description");
        if (description.firstChild.nodeType==3){
            description.firstChild.nodeValue=text;
        }
    }
    return true;
}
//事件处理函数
function prepareGallery() {
    if(!document.getElementsByName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery=document.getElementById("imagegallery");
    var links=gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick=function () {
            return!showPic(this);
        }
    }
}

//共享onload函数
function addLoadEvent(prepareGallery) {
    var oldonload=window.onload;
    if(typeof window.onload!="function"){
        window.onload=prepareGallery;
    }else {
        window.onload=function(){
            oldonload();
            prepareGallery();
        }
    }
}
addLoadEvent(prepareGallery);

/*收藏  */
function heart(){
	element=document.getElementById('hearts');
	
	if(element.src.match("after")){
			element.src="../pictures/like.png";
		}
	else{
			element.src="../pictures/likeafter.png";
		}
}