//改变图片路径和文本内容
function showPic(whichpic) {
	//获取图片路径
	var source = whichpic.getAttribute("href");
	//获取占位符图片
	var placeholder = document.getElementById("placeholder");
	//修改src属性
	placeholder.setAttribute("src",source);
	//获取title属性值和<p>标签
	var text = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	//<p>标签的文本其实是它的第一个子元素的nodeValue值
	description.firstChild.nodeValue = text;
	return true;
}
//为所有a标签添加onClick事件
function prepareGallery() {
	//获取ul标签
	var gallery = document.getElementById("imageGallery");
	//获取ul中所有a标签
	var links = gallery.getElementsByTagName("a");
	//所有a标签添加onClick事件
	for(var i=0; i < links.length; i++) {
		links[i].onclick = function() {			
			return showPic(this) ? false : true;
		}
	}
}

window.onload = function() {
	prepareGallery();
}
