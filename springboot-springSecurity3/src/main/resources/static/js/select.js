/*搜索*/
function searchbox(n){
	document.getElementById('searchbox').style.display=n?'block':'none'; 
	 /* 点击按钮打开/关闭 对话框 */
}

var f = $("form")
$("nav > a").click(function(){
  f.attr("action", $(this).attr("href"))
  f.submit()
})
/*九宫格*/
function showj(n)
{
document.getElementById(n).style.display="block";
}
function hidej(n)
{
document.getElementById(n).style.display="none";
}

function show1(){
		document.getElementById('jiupic').style.display="block";
		document.getElementById('liepic').style.display="none";
}

/*列表*/
function showl(n)
{
document.getElementById(n).style.display="block";
}
function hidel(n)
{
document.getElementById(n).style.display="none";
}

function show2(){
		document.getElementById('liepic').style.display="block";
		document.getElementById('jiupic').style.display="none";
}