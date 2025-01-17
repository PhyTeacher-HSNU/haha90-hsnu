function log(e){
	console.log(e);
}

$('#mainAnimation').css('position','absolute')
					.css('top','0px')
					.css('left','0px')
					.css('width','1600px')
					.css('height','900px');

var MyJS = MyJS||{};

(function(){

	isFullScreen = true;
	
	var browserInfo={};
					
	detectBrowser();

	//resize
	function myResize(){

		
		

		if(isFullScreen){

			var oldWidth = 1600;
			var oldHeight= 900;

			var windowWidth = $(window).width();
			var windowHeight = $(window).height();

		
			var windowScale = Math.min(windowWidth/oldWidth , windowHeight/oldHeight);
			$('#mainAnimation').css('width' , windowScale*oldWidth).css('height' , windowScale*oldHeight);
			/*$('#mainAnimation').css({'-webkit-transform': 'scale(' + windowScale+')',
							            '-moz-transform': 'scale(' + windowScale + ')',
							            '-ms-transform': 'scale(' + windowScale + ')',
							            '-o-transform': 'scale(' + windowScale + ')',
							            'transform': 'scale(' + windowScale + ')',
							            '-webkit-transform': 'translateZ(0);'});*/
			//手工置中
			var _top=0 , _left=0;
			if(windowWidth/oldWidth < windowHeight/oldHeight){//上下有空白，計算top
				var _top = 0.5*(windowHeight- oldHeight *windowScale);
			}else{//左右有空白，計算left
				var _left = 0.5*(windowWidth- oldWidth*windowScale);
			}
			$('#mainAnimation').offset({top: _top , left: _left});


			//子物件scale, 並offset
			var childrenArray = $('#mainAnimation').children();
			var len = childrenArray.length;
			for(var i = 0 ; i<len ; i++){
				var domElement = childrenArray[i];
				var TwindowScale = windowScale;
				if($(domElement).attr('id')==='canvas'){
					TwindowScale/=resolutionScale;
				}
				$(domElement).css({'-webkit-transform': 'scale(' + TwindowScale+')',
							            '-moz-transform': 'scale(' + TwindowScale + ')',
							            '-ms-transform': 'scale(' + TwindowScale + ')',
							            '-o-transform': 'scale(' + TwindowScale + ')',
							            'transform': 'scale(' + TwindowScale + ');'})
								.offset({top: _top , left: _left});

			}
			$('#mouseCircle').css({'-webkit-transform': 'scale(' + windowScale+')',
							            '-moz-transform': 'scale(' + windowScale + ')',
							            '-ms-transform': 'scale(' + windowScale + ')',
							            '-o-transform': 'scale(' + windowScale + ')',
							            'transform': 'scale(' + windowScale + ');'});

		

			
		


		}
	}

	MyJS.myResize = myResize;


	//resize
	myResize();

	//no drag
	$('#mainAnimation').on('dragstart', function(event) { event.preventDefault(); })
						.css('margin','0px auto')
						.css('overflow','hidden');

	$(window).resize(myResize);

	$('body').prop('scroll','no').css('overflow','hidden');

	

	//detectBrowser
	function detectBrowser(){

		//isMobile
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
			browserInfo.isMobile = true;
		}


		//browser version
		// Opera 8.0+
	    browserInfo.isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	    // Firefox 1.0+
	    browserInfo.isFirefox = typeof InstallTrigger !== 'undefined';
	    // Safari 3.0+ "[object HTMLElementConstructor]" 
	    browserInfo.isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
	    // Internet Explorer 6-11
	    browserInfo.isIE = /*@cc_on!@*/false || !!document.documentMode;
	    // Edge 20+
	    browserInfo.isEdge = !browserInfo.isIE && !!window.StyleMedia;
	    // Chrome 1+
	    browserInfo.isChrome = !!window.chrome && !!window.chrome.webstore;
	    // Blink engine detection
	    browserInfo.isBlink = (browserInfo.isChrome || browserInfo.isOpera) && !!window.CSS;




	    //os
	    var userAgent = window.navigator.userAgent,
      	    platform = window.navigator.platform,
      	    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      		windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      		iosPlatforms = ['iPhone', 'iPad', 'iPod'];
      
		if (macosPlatforms.indexOf(platform) !== -1) {
			browserInfo.isMacOS = true;
		} else if (iosPlatforms.indexOf(platform) !== -1) {
		    browserInfo.isIOS = true;
		} else if (windowsPlatforms.indexOf(platform) !== -1) {
		    browserInfo.isWondows = true;
		} else if (/Android/.test(userAgent)) {
		    browserInfo.isAndroid = true;
		} else if (!os && /Linux/.test(platform)) {
		    browserInfo.isLinux = true;
		}


	//    log(browserInfo);

	}


	function myFullScreen() {
		t=theWorld;
		var element=$('#mainAnimation').get(0);

		if(t.isFullscreened){//退出全螢幕
			if (document.exitFullscreen)document.exitFullscreen();
	        else if (document.webkitExitFullscreen)document.webkitExitFullscreen();
	        else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
	        else if (document.msExitFullscreen)document.msExitFullscreen();
			t.isFullscreened=false;
		}else{//進入全螢幕
			if(element.requestFullscreen)element.requestFullscreen();
			else if(element.mozRequestFullScreen)element.mozRequestFullScreen();
			else if(element.webkitRequestFullscreen)element.webkitRequestFullscreen();
			else if(element.msRequestFullscreen)element.msRequestFullscreen();
			t.isFullscreened=true;
		}
	}
	MyJS.myFullScreen = myFullScreen;

})();