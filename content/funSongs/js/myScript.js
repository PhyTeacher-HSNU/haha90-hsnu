function log(x){console.log(x);}


//-- html 統一作業--//

(function(){
	//head 統一加入 meta
	var googleAnalyticsCode='<!-- Global site tag (gtag.js) - Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=UA-2774096-1"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "UA-2774096-1");</script>';
	$('head').prepend('<meta charset="utf-8">')
				.prepend('<meta http-equiv="X-UA-Compatible" content="IE=edge">')
				.prepend('<meta name= "viewport" content= "width=device-width, user-scalable=no, shrink-to-fit=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />')
				.prepend(googleAnalyticsCode);
				

	//--取出 body#content 並置換--//
	//1.取出內容
	var content = $('#oldContent').html();
	//2.移除
	$('#oldContent').remove();
	//3.加入wrapper
	$('body').prepend('<div id="wrapper"></div>');
	//4.加入sideBaar and content wrapper
	$('#wrapper').append('<!-- Sidebar Here!!!--><div id="sidebar-wrapper"></div><!-- /#sidebar-wrapper -->')
					.append('<!-- Page Content --><div id="page-content-wrapper"><div class="container-fluid"><div class="row"><div class="col-lg-12" id="newContent"><!--Fun Physics Content Here!!!--></div><!--end content--></div></div></div><!-- /#page-content-wrapper -->');
	//5.加入內容					
	$('#newContent').append(content);
	
	//img統一格式
	$('img').addClass('img-responsive').attr('border','0');


	//產生 menu button
	$("#page-content-wrapper").prepend('<a href="#menu-toggle" class="btn btn-warning" id="menu-toggle">目錄</a>');
	//定義 menu-toggle
	$("#menu-toggle").click(function(e) {
	        e.preventDefault();
	        $("#wrapper").toggleClass("toggled");
	});

	
})();









//generate sideBar menu
(function(){
	//generateAlist
	var generateAList = function(_name, _url, _id , _isNew){
		if(_id === $('meta[name="description"]').attr("content")){//此頁，不連結
			var li=$('<li class="pageNow">').append(_name);
		}else{
			var a = $('<a href='+'../'+_url+'>'+_name+'</a>');
			if(_isNew === 'new'){a.addClass('pageNew');}
			var li=$('<li>').append(a);
			//換頁時紀錄 scrollTop
			li.mousedown(function(){
				if (typeof(Storage) !== "undefined") {
				    sessionStorage.setItem("funExpScroll", $('#sidebar-wrapper')[0].scrollTop);
				    log($('#sidebar-wrapper')[0].scrollTop);
				}
			});
		}
		
		return li;
	}

	var ul=$('<ul class="sidebar-nav" id="mySidebar">')
				.html('<li class="sidebar-brand">好聽歌曲</li>');
	$('#sidebar-wrapper').append(ul[0]);
	$('#mySidebar').append('<li class="line">《最新》</li>')
					.append(generateAList('物理萬歲','phys1435/phys1435.html','phys1435','new'))
					.append('<li class="line">--- 物理類 ---</li>')
					.append(generateAList('AV你呦','avYou/avYou.html','avYou'))
					.append(generateAList('等待','waiting/waiting.html','waiting'))
					.append(generateAList('I L cross B','ILcrossB/ILcrossB.html','ILcrossB'))
					.append(generateAList('VAB','VAB/VAB.html','VAB'))
					.append(generateAList('小Q咧','smallQ/smallQ.html','smallQ'))
					.append(generateAList('當我們撞在一起','together/together.html','together'))
					.append(generateAList('小螞蟻與假想力','PseudoForce/PseudoForce.html','PseudoForce'))
					.append(generateAList('唉呀功能原理','workEnergy/workEnergy.html','workEnergy'))
					.append(generateAList('SHM是簡諧運動','SHM/SHM.html','SHM'))
					.append(generateAList('越大越硬','spring/spring.html','spring'))
					.append(generateAList('粒子還是波','rLambdaD/rLambdaD.html','rLambdaD'))
					.append(generateAList('圓周運動需要什麼力','centripetalForce/centripetalForce.html','centripetalForce'))
					.append(generateAList('透鏡成像最像','image/image.html','image'))
					.append(generateAList('分母分之分子','aOverB/aOverB.html','aOverB'))
					.append(generateAList('高潮迭起物理課','wave/wave.html','wave'))
					.append(generateAList('功與能量','work/work.html','work'))
					.append('<li class="line">--- 非物理類 ---</li>')
					.append(generateAList('物理萬歲','phys1435/phys1435.html','phys1435'))
					.append(generateAList('改成分詞構句','ParticipleConstructionSentence/ParticipleConstructionSentence.html','ParticipleConstructionSentence'))
					.append(generateAList('謝謝老師2','thx2/thx2.html','thx2'))
					.append(generateAList('不當你要當誰','noPassYou/noPassYou.html','noPassYou'))
					.append(generateAList('螞蟻不是蟲','ant/ant.html','ant'))
					.append(generateAList('該往哪裡丟','dump/dump.html','dump'))
					.append(generateAList('幹麻讀書','whyStudy/whyStudy.html','whyStudy'))
					.append(generateAList('口袋有十塊錢','chch10/chch10.html','chch10'))
					.append(generateAList('謝謝老師','thx/thx.html','thx'))
					.append('<li class="line">好聽歌曲</li>');


	
	//scroll to 剛才位置
	if (sessionStorage.funExpScroll) {
    	var sTop = Number(sessionStorage.funExpScroll);
		$('#sidebar-wrapper')[0].scrollTop = sTop;
	}
	

})();


/*
* 監聽 div #newContent resize
* 為了 responsive mp4 video
* copy from "CSS-Element-Queries" http://marcj.github.io/css-element-queries/
*/
//****public*****//
/*
 https://github.com/Mr0grog/element-query/blob/master/LICENSE

 @param {HTMLElement} element
 @param {*} value
 @returns {*}
*/
(function(d,a){"function"===typeof define&&define.amd?define(a):"object"===typeof exports?module.exports=a():d.ResizeSensor=a()})(this,function(){function d(b,a){var u=Object.prototype.toString.call(b),d=0,g=b.length;if("[object Array]"===u||"[object NodeList]"===u||"[object HTMLCollection]"===u||"undefined"!==typeof jQuery&&b instanceof jQuery||"undefined"!==typeof Elements&&b instanceof Elements)for(;d<g;d++)a(b[d]);else a(b)}var a=window.requestAnimationFrame||window.mozRequestAnimationFrame||
window.webkitRequestAnimationFrame||function(a){return window.setTimeout(a,20)},l=function(b,p){function u(){var e=[];this.add=function(a){e.push(a)};var a,b;this.call=function(){a=0;for(b=e.length;a<b;a++)e[a].call()};this.remove=function(u){var d=[];a=0;for(b=e.length;a<b;a++)e[a]!==u&&d.push(e[a]);e=d};this.length=function(){return e.length}}function x(a,b){return a.currentStyle?a.currentStyle[b]:window.getComputedStyle?window.getComputedStyle(a,null).getPropertyValue(b):a.style[b]}function g(b,
d){if(!b.resizedAttached)b.resizedAttached=new u,b.resizedAttached.add(d);else if(b.resizedAttached){b.resizedAttached.add(d);return}b.resizeSensor=document.createElement("div");b.resizeSensor.className="resize-sensor";b.resizeSensor.style.cssText="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;";b.resizeSensor.innerHTML='<div class="resize-sensor-expand" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;"><div style="position: absolute; left: 0; top: 0; transition: 0s;"></div></div><div class="resize-sensor-shrink" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;"><div style="position: absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%"></div></div>';
b.appendChild(b.resizeSensor);"static"==x(b,"position")&&(b.style.position="relative");var p=b.resizeSensor.childNodes[0],g=p.childNodes[0],r=b.resizeSensor.childNodes[1],f=function(){g.style.width="100000px";g.style.height="100000px";p.scrollLeft=1E5;p.scrollTop=1E5;r.scrollLeft=1E5;r.scrollTop=1E5};f();var l=!1,w=function(){b.resizedAttached&&(l&&(b.resizedAttached.call(),l=!1),a(w))};a(w);var v,c,q,h,k=function(){if((q=b.offsetWidth)!=v||(h=b.offsetHeight)!=c)l=!0,v=q,c=h;f()},n=function(c,b,h){c.attachEvent?
c.attachEvent("on"+b,h):c.addEventListener(b,h)};n(p,"scroll",k);n(r,"scroll",k)}d(b,function(b){g(b,p)});this.detach=function(a){l.detach(b,a)}};l.detach=function(b,a){d(b,function(b){if(b.resizedAttached&&"function"==typeof a&&(b.resizedAttached.remove(a),b.resizedAttached.length()))return;b.resizeSensor&&(b.contains(b.resizeSensor)&&b.removeChild(b.resizeSensor),delete b.resizeSensor,delete b.resizedAttached)})};return l});
(function(d,a){"function"===typeof define&&define.amd?define(["./ResizeSensor.js"],a):"object"===typeof exports?module.exports=a(require("./ResizeSensor.js")):d.ElementQueries=a(d.ResizeSensor)})(this,function(d){var a=function(){function b(c){c||(c=document.documentElement);c=window.getComputedStyle(c,null).fontSize;return parseFloat(c)||16}function p(c,a){var h=a.split(/\d/),h=h[h.length-1];a=parseFloat(a);switch(h){case "px":return a;case "em":return a*b(c);case "rem":return a*b();case "vw":return a*
document.documentElement.clientWidth/100;case "vh":return a*document.documentElement.clientHeight/100;case "vmin":case "vmax":return a*(0,Math["vmin"===h?"min":"max"])(document.documentElement.clientWidth/100,document.documentElement.clientHeight/100);default:return a}}function l(c){this.element=c;this.options={};var b,a,k=0,n=0,d,f,t,m,e;this.addOption=function(c){var b=[c.mode,c.property,c.value].join();this.options[b]=c};var g=["min-width","min-height","max-width","max-height"];this.call=function(){k=
this.element.offsetWidth;n=this.element.offsetHeight;t={};for(b in this.options)this.options.hasOwnProperty(b)&&(a=this.options[b],d=p(this.element,a.value),f="width"==a.property?k:n,e=a.mode+"-"+a.property,m="","min"==a.mode&&f>=d&&(m+=a.value),"max"==a.mode&&f<=d&&(m+=a.value),t[e]||(t[e]=""),m&&-1===(" "+t[e]+" ").indexOf(" "+m+" ")&&(t[e]+=" "+m));for(var c in g)g.hasOwnProperty(c)&&(t[g[c]]?this.element.setAttribute(g[c],t[g[c]].substr(1)):this.element.removeAttribute(g[c]))}}function x(c,b){c.elementQueriesSetupInformation?
c.elementQueriesSetupInformation.addOption(b):(c.elementQueriesSetupInformation=new l(c),c.elementQueriesSetupInformation.addOption(b),c.elementQueriesSensor=new d(c,function(){c.elementQueriesSetupInformation.call()}));c.elementQueriesSetupInformation.call();y&&0>r.indexOf(c)&&r.push(c)}function g(){var c;document.querySelectorAll&&(c=document.querySelectorAll.bind(document));c||"undefined"===typeof $$||(c=$$);c||"undefined"===typeof jQuery||(c=jQuery);if(!c)throw"No document.querySelectorAll, jQuery or Mootools's $$ found.";
return c}function e(c){function b(){var d=!1,q;for(q in a)a.hasOwnProperty(q)&&k[q].minWidth&&c.offsetWidth>k[q].minWidth&&(d=q);d||(d=f);e!=d?g[d]?(a[e].style.display="none",a[d].style.display="block",e=d):(q=new Image,q.onload=function(){a[d].src=n[d];a[e].style.display="none";a[d].style.display="block";g[d]=!0;e=d},q.src=n[d]):a[d].src=n[d]}var a=[],k=[],n=[],f=0,e=-1,g=[],m;for(m in c.children)if(c.children.hasOwnProperty(m)&&c.children[m].tagName&&"img"===c.children[m].tagName.toLowerCase()){a.push(c.children[m]);
var l=c.children[m].getAttribute("min-width")||c.children[m].getAttribute("data-min-width"),p=c.children[m].getAttribute("data-src")||c.children[m].getAttribute("url");n.push(p);k.push({minWidth:l});l?c.children[m].style.display="none":(f=a.length-1,c.children[m].style.display="block")}e=f;c.resizeSensor=new d(c,b);b();y&&r.push(c)}function z(c){var a,b;for(c=c.replace(/'/g,'"');null!==(a=B.exec(c));)for(b=a[1]+a[3],attrs=a[2];null!==(attrMatch=w.exec(attrs));){a=b;var d=attrMatch[1],e=attrMatch[2],
g=attrMatch[3];"undefined"==typeof f[d]&&(f[d]={});"undefined"==typeof f[d][e]&&(f[d][e]={});f[d][e][g]="undefined"==typeof f[d][e][g]?a:f[d][e][g]+(","+a)}}function A(c){var a;if(c)if("string"===typeof c)c=c.toLowerCase(),-1===c.indexOf("min-width")&&-1===c.indexOf("max-width")||z(c);else for(var b=0,d=c.length;b<d;b++)1===c[b].type?(a=c[b].selectorText||c[b].cssText,-1!==a.indexOf("min-height")||-1!==a.indexOf("max-height")?z(a):-1===a.indexOf("min-width")&&-1===a.indexOf("max-width")||z(a)):4===
c[b].type&&A(c[b].cssRules||c[b].rules)}var y=!1,r=[],f={},B=/,?[\s\t]*([^,\n]*?)((?:\[[\s\t]*?(?:min|max)-(?:width|height)[\s\t]*?[~$\^]?=[\s\t]*?"[^"]*?"[\s\t]*?])+)([^,\n\s\{]*)/mgi,w=/\[[\s\t]*?(min|max)-(width|height)[\s\t]*?[~$\^]?=[\s\t]*?"([^"]*?)"[\s\t]*?]/mgi,v=!1;this.init=function(a){y="undefined"===typeof a?!1:a;a=0;for(var b=document.styleSheets.length;a<b;a++)try{A(document.styleSheets[a].cssRules||document.styleSheets[a].rules||document.styleSheets[a].cssText)}catch(d){if("SecurityError"!==
d.name)throw d;}v||(a=document.createElement("style"),a.type="text/css",a.innerHTML="[responsive-image] > img, [data-responsive-image] {overflow: hidden; padding: 0; } [responsive-image] > img, [data-responsive-image] > img { width: 100%;}",document.getElementsByTagName("head")[0].appendChild(a),v=!0);a=g();for(var h in f)if(f.hasOwnProperty(h))for(var k in f[h])if(f[h].hasOwnProperty(k))for(var n in f[h][k])if(f[h][k].hasOwnProperty(n))for(var b=a(f[h][k][n]),l=0,p=b.length;l<p;l++)x(b[l],{mode:h,
property:k,value:n});h=g()("[data-responsive-image],[responsive-image]");k=0;for(n=h.length;k<n;k++)e(h[k])};this.update=function(a){this.init(a)};this.detach=function(){if(!this.withTracking)throw"withTracking is not enabled. We can not detach elements since we don not store it.Use ElementQueries.withTracking = true; before domready or call ElementQueryes.update(true).";for(var b;b=r.pop();)a.detach(b);r=[]}};a.update=function(b){a.instance.update(b)};a.detach=function(a){a.elementQueriesSetupInformation?
(a.elementQueriesSensor.detach(),delete a.elementQueriesSetupInformation,delete a.elementQueriesSensor):a.resizeSensor&&(a.resizeSensor.detach(),delete a.resizeSensor)};a.withTracking=!1;a.init=function(){a.instance||(a.instance=new a);a.instance.init(a.withTracking)};var l=function(a){if(document.addEventListener)document.addEventListener("DOMContentLoaded",a,!1);else if(/KHTML|WebKit|iCab/i.test(navigator.userAgent))var d=setInterval(function(){/loaded|complete/i.test(document.readyState)&&(a(),
clearInterval(d))},10);else window.onload=a};a.listen=function(){l(a.init)};"undefined"!==typeof module&&"undefined"!==typeof module.exports?module.exports=a:(window.ElementQueries=a,a.listen());return a});
//myResize
var element = document.getElementById('newContent');
new ResizeSensor(element, myResize);
function myResize(){

	var divW = $('#newContent').css('width');
	divW = divW.substring(0, divW.length - 2);//去掉'px'
	divW = Number(divW);
	var len = $('video').length;
	for(var i=0;i<len;i++){
		var videoI = $('video')[i];
		//fixed width and height
		if(!videoI.fixedWidth){
			videoI.fixedWidth = videoI.width;
			videoI.fixedHeight = videoI.height;
		}
		//佔滿全寬 or 原尺寸
		var scale = Math.min((divW-30)/videoI.fixedWidth , 1);
		videoI.width = videoI.fixedWidth*scale;
		videoI.height = videoI.fixedHeight*scale;
		log('video width = '+$('video')[i].width +'div width = '+divW);
	}
}
myResize();
