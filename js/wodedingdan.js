let toplists=document.querySelectorAll(".quanbu-box i");
let been =document.querySelector(".bigbox");
toplists.forEach(function(val,index){
	val.onclick=function(){
		toplists.forEach(function(ele,key){
			ele.classList.remove("active");
		});
		val.classList.add("active");
		been.style.left=-100*index+"vw";
	}
	
	
});