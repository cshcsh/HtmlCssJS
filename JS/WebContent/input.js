/**
 * 
 */
//html加载后执行
window.onload=function(){
	//alert(1);
	//获得执行节点
	//var sub=document.getElementById("sub");
	document.getElementById("sub").onclick=aa;
	document.getElementById("username").onfocus=bb;
	
}
function aa(){
	username=document.getElementById("username");
	alert(username.value);
}
function bb(){
	username=document.getElementById("username");
	username.value="";
	/*if(username.value==null){
		//alert("kong")
	}*/
}
