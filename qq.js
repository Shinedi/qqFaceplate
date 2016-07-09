window.onload=function()
{
	var oImage=document.getElementById('image');
	var oLeft=document.getElementById('left');
	var timer=null;
	
	oImage.onmouseover=oLeft.onmouseover=function(){
	  clearTimeout(timer);	
	  oLeft.style.display='block';
	 	
	};
	//a=b=c=10;
	oImage.onmouseout=oLeft.onmouseout=function(){
	
	 timer=setTimeout(function(){
		  oLeft.style.display='none';
		 },1000);	
	 	
	};
	
	
	//²Ëµ¥
	var oMain=document.getElementById('main');
	var aInput=oMain.getElementsByTagName('input');
	var aUl=oMain.getElementsByTagName('ul');
	
	
	for(var i=0;i<aInput.length;i++)
	{
		aInput[i].index=i;
		aInput[i].onclick=function()
		{
			if(aUl[this.index].style.display=='block')
			{
				aUl[this.index].style.display='none';
			}
			else
			{
				aUl[this.index].style.display='block';
			}
		};	
		
	}
	
	
	
	
};