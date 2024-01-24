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
	//6.視伺服器情況移除vedio or yt (雲端移除video 本機移除 yt)
	let yt=true;
	if(yt){//移除 video
		$('video').remove();
		$('.yt').after("<p></p>");
	}else{//移除 YT
		$('.yt').remove();
	}
	
	//img統一格式
	$('img').addClass('img-responsive').attr('border','0');


	//產生 menu button
	$("#page-content-wrapper").prepend('<a href="#menu-toggle" class="btn btn-success" id="menu-toggle">目錄</a>');
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
				.html('<li class="sidebar-brand">趣味實驗</li>');
	$('#sidebar-wrapper').append(ul[0]);
	$('#mySidebar').append('<li class="line">《最新》</li>')
					.append(generateAList('立體驗鈔卡','moneyDetector/moneyDetector.html', 'moneyDetector'))
					.append('<li class="line">--- 運動學 ---</li>')
					.append(generateAList('閃頻計時器','flashTimer/flashTimer.html', 'flashTimer'))
					.append(generateAList('倒帶播放','timeSymmetry/timeSymmetry.html', 'timeSymmetry'))
					.append(generateAList('東方不敗 ','relativeDon/relativeDon.html', 'relativeDon'))
					.append(generateAList('跳水攝影 ','freeFullCamera/freeFullCamera.html', 'freeFullCamera'))
					.append(generateAList('砲彈飛人','flyMan/flyMan.html', 'flyMan'))
					.append(generateAList('蛇擺','SnakePendulum/SnakePendulum.html', 'SnakePendulum'))
					.append('<li class="line">--- 靜力學 ---</li>')
					.append(generateAList('神奇的平衡','magicBallance/magicBallance.html', 'magicBallance'))
					.append('<li class="line">--- 動力學 ---</li>')
					.append(generateAList('慣性實驗','inertial/inertial.html', 'inertial'))
					.append(generateAList('生命膠囊','lifeCapsule/lifeCapsule.html', 'lifeCapsule'))
					.append(generateAList('彈簧下樓梯','jumpSpring/jumpSpring.html', 'jumpSpring'))
					.append(generateAList('人偶下樓梯','jumpIdol/jumpIdol.html', 'jumpIdol'))
					.append(generateAList('鉛直彈簧SHM','verticalSHM/verticalSHM.html', 'verticalSHM'))
					.append(generateAList('向心力實驗','centripetalForceExp/centripetalForceExp.html', 'centripetalForceExp'))
					.append(generateAList('拆遊戲把手','gameJoy/gameJoy.html', 'gameJoy'))
					.append(generateAList('牛頓擺','newtonCardle/newtonCardle.html', 'newtonCardle'))
					.append(generateAList('大球撞小球','ballHitBall/ballHitBall.html', 'ballHitBall'))
					.append(generateAList('高斯槍','gaussianCanon/gaussianCanon.html', 'gaussianCanon'))
					.append(generateAList('跑跑刷子','movingBrush/movingBrush.html', 'movingBrush'))
					.append(generateAList('風力仿生獸','windPowerBeast/windPowerBeast.html', 'windPowerBeast'))
					.append('<li class="line">--- 轉動 ---</li>')
					.append(generateAList('旋轉液面','rotationSurface/rotationSurface.html', 'rotationSurface'))
					.append(generateAList('鉛直圓軌道','verticalCircle/verticalCircle.html', 'verticalCircle'))
					.append(generateAList('樂高風車','wingLego/wingLego.html', 'wingLego'))
					.append(generateAList('轉動的實驗','rotation/rotation.html', 'rotation'))
					.append(generateAList('小叮噹竹蜻蜓','flyCat/flyCat.html', 'flyCat'))
					.append(generateAList('寶特瓶賽跑','bottleRace/bottleRace.html', 'bottleRace'))
					.append(generateAList('玩陀螺','funTop/funTop.html', 'funTop'))
					.append(generateAList('小丑頂碗','flower/flower.html', 'flower'))
					.append(generateAList('轉蛋蛋','rotatingEgg/rotatingEgg.html', 'rotatingEgg'))
					.append(generateAList('倒立陀螺','topBack/topBack.html', 'topBack'))
					.append(generateAList('rattleBack逆轉石','rattleBack/rattleBack.html', 'rattleBack'))
					.append(generateAList('旋轉桌','rotationTable/rotationTable.html', 'rotationTable'))
					.append('<li class="line">--- 流體 ---</li>')
					.append(generateAList('小鳥喝水器','birdDrink/birdDrink.html', 'birdDrink'))
					.append(generateAList('神奇撈油網','oilNet/oilNet.html', 'oilNet'))
					.append(generateAList('水迷宮','waterMaze/waterMaze.html', 'waterMaze'))
					.append(generateAList('表面張力迴紋針','surfaceTensionPaperclip/surfaceTensionPaperclip.html', 'surfaceTensionPaperclip'))
					.append(generateAList('肥皂膜防護罩','soapTension/soapTension.html', 'soapTension'))
					.append(generateAList('水火箭','waterRocket/waterRocket.html', 'waterRocket'))
					.append(generateAList('空氣砲','airCanon/airCanon.html', 'airCanon'))
					.append(generateAList('伽利略溫度計','GalileoThermometer/GalileoThermometer.html', 'GalileoThermometer'))
					.append(generateAList('無液氣壓計','noLPressure/noLPressure.html', 'noLPressure'))
					.append('<li class="line">--- 熱學 ---</li>')
					.append(generateAList('神奇鬼火','magicFire/magicFire.html', 'magicFire'))
					.append(generateAList('看見熱對流','heatFlow/heatFlow.html', 'heatFlow'))
					.append(generateAList('史特林引擎','sterling/sterling.html', 'sterling'))
					.append(generateAList('壓氣點火','pushFire/pushFire.html', 'pushFire'))
					.append('<li class="line">--- 波動 ---</li>')
					.append(generateAList('按摩器共振','massageResonance/massageResonance.html', 'massageResonance'))
					.append(generateAList('駐波產生器','standingWaveGenerator/standingWaveGenerator.html', 'standingWaveGenerator'))
					.append(generateAList('干涉菸灰缸','interferenceGlass/interferenceGlass.html', 'interferenceGlass'))
					.append('<li class="line">--- 聲音 ---</li>')
					.append(generateAList('回音管','echoTube/echoTube.html', 'echoTube'))
					.append(generateAList('試管排笛','panpipe/panpipe.html', 'panpipe'))
			//		.append(generateAList('都普勒效應','doppler/doppler.html', 'doppler'))
					.append('<li class="line">--- 幾何光學 ---</li>')
					.append(generateAList('愛秀LED棒','LEDWord/LEDWord.html', 'LEDWord'))
					.append(generateAList('雙鏡成像','twoMirror/twoMirror.html', 'twoMirror'))
					.append(generateAList('雙凹鏡成像','mirrorMirage/mirrorMirage.html', 'mirrorMirage'))
					.append(generateAList('鍋蓋縮小鏡','coverLens/coverLens.html', 'coverLens'))
					.append(generateAList('凹面鏡自摸','touchYourself/touchYourself.html', 'touchYourself'))
					.append(generateAList('哈哈鏡','hahaMirror/hahaMirror.html', 'hahaMirror'))
					.append(generateAList('玩透鏡','playLens/playLens.html', 'playLens'))
					.append(generateAList('大眼正妹','bigEye/bigEye.html', 'bigEye'))
					.append(generateAList('玩壓克力磚','acrylicBlock/acrylicBlock.html', 'acrylicBlock'))
					.append(generateAList('燒杯透鏡','beakerLens/beakerLens.html', 'beakerLens'))
					.append(generateAList('旋轉柱狀透鏡','cylinderLensRotation/cylinderLensRotation.html', 'cylinderLensRotation'))
					.append(generateAList('視差法','opticalParallax/opticalParallax.html', 'opticalParallax'))
					.append(generateAList('夫瑞奈透鏡','fresnelLens/fresnelLens.html', 'fresnelLens'))
					.append(generateAList('立體驗鈔卡','moneyDetector/moneyDetector.html', 'moneyDetector'))
					.append(generateAList('燒杯彩虹','cupRainbow/cupRainbow.html', 'cupRainbow'))
					.append(generateAList('皮老闆玄機杯','peeCup/peeCup.html', 'peeCup'))
					.append(generateAList('沙漠幻影','mirage/mirage.html', 'mirage'))
					.append(generateAList('全反射','totalReflection/totalReflection.html', 'totalReflection'))
					.append(generateAList('拆數位相機','cameraRicho/cameraRicho.html', 'cameraRicho'))
					.append('<li class="line">--- 波動光學 ---</li>')
					.append(generateAList('雙縫干涉長曝','doubleSlitProlongedExposure/doubleSlitProlongedExposure.html', 'doubleSlitProlongedExposure'))
					.append(generateAList('直絲燈','linearLamp/linearLamp.html', 'linearLamp'))
					.append(generateAList('光碟的繞射','discDiffraction/discDiffraction.html', 'discDiffraction'))
					.append(generateAList('直視光譜儀','spectrometer/spectrometer.html', 'spectrometer'))
					.append(generateAList('偏振片好好玩','polar/polar.html', 'polar'))
					.append(generateAList('煙火眼鏡','fireworkGlasses/fireworkGlasses.html', 'fireworkGlasses'))
					.append(generateAList('霧氣與彩虹','fogRainbow/fogRainbow.html', 'fogRainbow'))
					.append(generateAList('影子的秘密','shadowSecret/shadowSecret.html', 'shadowSecret'))
					.append('<li class="line">--- 靜電與電流 ---</li>')
					.append(generateAList('氣球靜電頭髮','ballHair/ballHair.html', 'ballHair'))
					.append(generateAList('火線探測器','acLineDetector/acLineDetector.html','acLineDetector'))
					.append(generateAList('碳膜電阻','resistanceC/resistanceC.html', 'resistanceC'))
					.append(generateAList('可調電阻','resistenceAdj/resistenceAdj.html', 'resistenceAdj'))
					.append(generateAList('電池並聯','threeBattery/threeBattery.html', 'threeBattery'))
					.append(generateAList('燒筆芯','burningRefill/burningRefill.html', 'burningRefill'))
					.append(generateAList('拆三用電表','multiMeter/multiMeter.html', 'multiMeter'))
					.append('<li class="line">--- 電與磁 ---</li>')
					.append(generateAList('磁浮陀螺','magTop/magTop.html', 'magTop'))
					.append(generateAList('簡易電動機','simpleMotor/simpleMotor.html', 'simpleMotor'))
					.append(generateAList('電鈴','bell/bell.html', 'bell'))
					.append(generateAList('拆電扇','fan/fan.html', 'fan'))
					.append(generateAList('直流小馬達','dcMotor/dcMotor.html', 'dcMotor'))
					.append(generateAList('單極馬達','homopolarMotor/homopolarMotor.html', 'homopolarMotor'))
					.append(generateAList('拆喇叭','speaker/speaker.html', 'speaker'))
					.append(generateAList('線圈調光器','bigCoil/bigCoil.html', 'bigCoil'))
					.append(generateAList('自耦變壓器','autoTransformer/autoTransformer.html', 'autoTransformer'))
					.append(generateAList('電動發電機','motorGenerator/motorGenerator.html', 'motorGenerator'))
					.append(generateAList('馬達與燈泡','motorAndLamp/motorAndLamp.html', 'motorAndLamp'))
					.append(generateAList('有趣的磁鐵','electroMagnet/electroMagnet.html', 'electroMagnet'))
					.append(generateAList('Shaded Pole Motor','shadedPoleMotor/shadedPoleMotor.html', 'shadedPoleMotor'))
					.append(generateAList('拆變壓器','transformer/transformer.html','transformer'))
					.append(generateAList('拆捕蚊燈','captureFlyLight/captureFlyLight.html','captureFlyLight'))
					.append(generateAList('拆電磁盤','magneticPlate/magneticPlate.html','magneticPlate'))
					.append(generateAList('拆瓦時計','kiloWattMeter/kiloWattMeter.html','kiloWattMeter'))
					.append(generateAList('冷次定律實驗','lentzExperiment/lentzExperiment.html','lentzExperiment'))
					.append(generateAList('電磁感應','inducedCurrent/inducedCurrent.html','inducedCurrent'))
					.append(generateAList('手壓手電筒','handLight/handLight.html','handLight'))
					.append(generateAList('磁鐵跑不快應','magnetRun/magnetRun.html','magnetRun'))
					.append(generateAList('金屬探測器','BFOMetalDetector/BFOMetalDetector.html','BFOMetalDetector'))
					.append(generateAList('霍爾IC','HallIC/HallIC.html','HallIC'))
					.append('<li class="line">--- 光與原子 ---</li>')
					.append(generateAList('陰極射線管','CRT/CRT.html','CRT'))
					.append(generateAList('神奇電漿球','plasmaBall/plasmaBall.html','plasmaBall'))
					.append(generateAList('日光燈的物理','sunLight/sunLight.html','sunLight'))
					.append(generateAList('日光燈慢動作','sunLightSlow/sunLightSlow.html','sunLightSlow'))
					.append(generateAList('雅各的天梯','acHighVolt/acHighVolt.html','acHighVolt'))
					.append(generateAList('紫鑽不賠','diamond/diamond.html','diamond'))
					.append('<li class="line">--- 其它 ---</li>')
					.append(generateAList('靜止的水柱','staticWater/staticWater.html','staticWater' , 'new'))
					.append(generateAList('多啦A夢陀螺','spinDoraemon/spinDoraemon.html','spinDoraemon'))
					.append(generateAList('結晶聖誕樹','XmasTree/XmasTree.html','XmasTree'))
					.append(generateAList('爆開的禮物','airGift/airGift.html','airGift'))
					.append(generateAList('生日蓮花','birthdayFlower/birthdayFlower.html','birthdayFlower'))
					.append(generateAList('蓮花效應','lotusEffect/lotusEffect.html','lotusEffect'))
					.append(generateAList('拆光碟機','DVD/DVD.html','DVD'))
					.append(generateAList('拆滑鼠','ballMouse/ballMouse.html','ballMouse'))
					.append(generateAList('拆鬧鐘','clock/clock.html','clock'))
					.append(generateAList('拆調光器','dimmer/dimmer.html','dimmer'))
					.append(generateAList('拆加壓馬達','pressureMotor/pressureMotor.html','pressureMotor'))
					.append('<li class="line">趣味實驗</li>');


	
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
