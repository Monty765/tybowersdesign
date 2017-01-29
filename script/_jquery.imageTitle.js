$.fn.imageTitle = function (option) {
	
	var defaults={
		 type:"captionfull",	
		 height:"rightArrow",	
		 width:"firstMenu",	
		 top:0,	
		 left:0,	
		 showTop:240,	
		 showLeft:200,
		 speed:150 		 		 				 
	 }
	 
	 var obj = this;	 
	 $.extend(defaults, option);	 	 	
	  
	 function install(option){
		var overObj;
		var outObj;
		var settingObj={queue:false,duration:defaults.speed}
					
		if(defaults.type=="captionfull"){
			overObj={top:'80px'};
			outObj={top:'160px'};
			$(obj).find(".cover").stop().animate(outObj,{duration:160});											
		}else if(defaults.type=="caption"){
			overObj={top:'86%'};
			outObj={top:'93%'};
			$(obj).find(".cover").stop().animate(outObj,{duration:160});											
		}else if(defaults.type=="slideright"){
			overObj={left:'325px'};
			outObj={left:'0px'};
		}else if(defaults.type=="thecombo"){
			overObj={top:'260px', left:'325px'};
			outObj={top:'0px', left:'0px'};
		}else{
			overObj={top:'-260px'};
			outObj={top:'0px'};
		}
		
							
		$(obj).hover(function(){
			$(this).find(".cover").stop().animate(overObj,settingObj);
		}, function() {
			$(this).find(".cover").stop().animate(outObj,settingObj);
		});
					
	}
		
	install();		 
}