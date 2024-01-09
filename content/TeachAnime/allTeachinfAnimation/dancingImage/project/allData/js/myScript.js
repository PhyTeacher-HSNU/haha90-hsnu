var fps=60,comp=AdobeAn.getComposition("98EA1A955B63F6489D0F00F6BFD1C4DE"),lib=comp.getLibrary(),myAnimate=new lib.myAnimate,canvas=$("<canvas>").attr("width","1600px").attr("height","900px");$("#mainAnimation").append(canvas);var stage=new createjs.Stage(canvas[0]);stage.enableMouseOver(1e3/60),stage.addChild(myAnimate),createjs.Touch.enable(stage),stage.update();var ctx,ctxRay,ttL=0,ttO=0,period=120,lenMode=0,objMoveMD=2,lenMoveMD=3,dragWho="x",mouseX=0,mouseY=0,ttI=0,traceNN=40,traceImgArray=[],traceObjArray=[];init();function init(){ctx=myAnimate.drawBmp.ctx,ctxRay=myAnimate.drawBmpRay.ctx,myAnimate.obj.gotoAndStop(1),myAnimate.iimg.gotoAndStop(0),myAnimate.lensA.btnS.on("mousedown",mouseDown),myAnimate.obj.on("mousedown",mouseDown),myAnimate.btnObjA.on("mousedown",mouseDown),myAnimate.btnObjB.on("mousedown",mouseDown),myAnimate.btnLenA.on("mousedown",mouseDown),myAnimate.btnLenB.on("mousedown",mouseDown),myAnimate.on("pressmove",mouseMove),myAnimate.on("pressup",mouseUp),myAnimate.rbLenA.label.visible=!1,myAnimate.rbLenB.label.visible=!1,myAnimate.chLenMove.label.visible=!1,myAnimate.chObjMove.label.visible=!1,myAnimate.chObjMove.checked=!0,myAnimate.chRay.label.visible=!1,myAnimate.chImage.label.visible=!1,myAnimate.chTrace.label.visible=!1,myAnimate.rbLen01.label.visible=!1,myAnimate.rbLen02.label.visible=!1,myAnimate.rbLen03.label.visible=!1,myAnimate.rbObj01.label.visible=!1,myAnimate.rbObj02.label.visible=!1,myAnimate.rbObj03.label.visible=!1,myAnimate.chImage.checked=!0,myAnimate.rbLen02.checked=!0,myAnimate.rbObj03.checked=!0,myAnimate.rbLenA.checked=!0,myAnimate.rbLen01.on("click",clickRB),myAnimate.rbLen02.on("click",clickRB),myAnimate.rbLen03.on("click",clickRB),myAnimate.rbObj01.on("click",clickRB),myAnimate.rbObj02.on("click",clickRB),myAnimate.rbObj03.on("click",clickRB),myAnimate.rbLenA.on("click",clickRB),myAnimate.rbLenB.on("click",clickRB),setInterval(tick,1e3/fps)}function tick(){var a=myAnimate.btnLenA.x,b=myAnimate.btnLenA.y,c=myAnimate.btnLenB.x,d=myAnimate.btnLenB.y,e=myAnimate.btnObjA.x,f=myAnimate.btnObjA.y,g=myAnimate.btnObjB.x,h=myAnimate.btnObjB.y;if(lenMoveMD=myAnimate.rbLen01.checked?1:myAnimate.rbLen02.checked?2:myAnimate.rbLen03.checked?3:0,0<lenMoveMD&&myAnimate.chLenMove.checked&&"len"!==dragWho){ttL++,ttL%=period;var i=Math.atan2(b-d,a-c),j=.5*(a+c),k=.5*(b+d),l=.5*Math.sqrt(Math.pow(a-c,2)+Math.pow(b-d,2)),m=2*(ttL/period)*Math.PI;if(1===lenMoveMD){var n=l*Math.cos(m);myAnimate.lensA.x=n*Math.cos(i)+j,myAnimate.lensA.y=n*Math.sin(i)+k}else if(3===lenMoveMD){var o=l*Math.cos(m+i),p=l*Math.sin(m+i);myAnimate.lensA.x=o+j,myAnimate.lensA.y=p+k}else if(2===lenMoveMD){var n=ttL<.5*period?l*(1-ttL/(.25*period)):l*(-1+(ttL-.5*period)/(.25*period));myAnimate.lensA.x=n*Math.cos(i)+j,myAnimate.lensA.y=n*Math.sin(i)+k}}if(objMoveMD=myAnimate.rbObj01.checked?1:myAnimate.rbObj02.checked?2:myAnimate.rbObj03.checked?3:0,0<objMoveMD&&myAnimate.chObjMove.checked&&"obj"!==dragWho){ttO++,ttO%=period;var i=Math.atan2(f-h,e-g),j=.5*(e+g),k=.5*(f+h),l=.5*Math.sqrt(Math.pow(e-g,2)+Math.pow(f-h,2)),m=2*(ttO/period)*Math.PI;if(1===objMoveMD){var n=l*Math.cos(m);myAnimate.obj.x=n*Math.cos(i)+j,myAnimate.obj.y=n*Math.sin(i)+k}else if(3===objMoveMD){var o=l*Math.cos(m+i),p=l*Math.sin(m+i);myAnimate.obj.x=o+j,myAnimate.obj.y=p+k}else if(2===objMoveMD){var n=ttO<.5*period?l*(1-ttO/(.25*period)):l*(-1+(ttO-.5*period)/(.25*period));myAnimate.obj.x=n*Math.cos(i)+j,myAnimate.obj.y=n*Math.sin(i)+k}}var q=150*(myAnimate.rbLenA.checked?1:-1);myAnimate.lensA.gotoAndStop(0<q?0:1);var r=Math.abs(myAnimate.lensA.x-myAnimate.obj.x),s=1/(1/q-1/r);myAnimate.iimg.x=myAnimate.lensA.x+s*(0<myAnimate.lensA.x-myAnimate.obj.x?1:-1),myAnimate.iimg.y=myAnimate.lensA.y+s/r*(myAnimate.lensA.y-myAnimate.obj.y),myAnimate.iimg.scaleX=myAnimate.iimg.scaleY=-s/r,myAnimate.iimg.visible=myAnimate.chImage.checked,ttI++,0==ttI%3&&(traceImgArray.length>traceNN&&traceImgArray.pop(),traceObjArray.length>traceNN&&traceObjArray.pop(),traceImgArray.unshift([myAnimate.iimg.x,myAnimate.iimg.y]),traceObjArray.unshift([myAnimate.obj.x,myAnimate.obj.y])),drawRay(q,s),drawTrace(),stage.update()}MyJS.myResize();function clickRB(a){var b=a.target.parent.name;"rbLenA"===b||"rbLenB"===b?(myAnimate.rbLenA.checked="rbLenA"===b,myAnimate.rbLenB.checked="rbLenB"===b):"O"===b.charAt(2)?(myAnimate.rbObj01.checked="1"===b.charAt(6),myAnimate.rbObj02.checked="2"===b.charAt(6),myAnimate.rbObj03.checked="3"===b.charAt(6)):"L"===b.charAt(2)&&(myAnimate.rbLen01.checked="1"===b.charAt(6),myAnimate.rbLen02.checked="2"===b.charAt(6),myAnimate.rbLen03.checked="3"===b.charAt(6))}function mouseDown(a){var b=a.target.name,c=a.target.parent.name;"btnLenA"===b?dragWho="btnLenA":"btnLenB"===b?dragWho="btnLenB":"btnObjA"===b?dragWho="btnObjA":"btnObjB"===b?dragWho="btnObjB":"obj"===c?dragWho="obj":"lensA"===c&&(dragWho="len"),mouseX=stage.mouseX,mouseY=stage.mouseY}function mouseMove(){let a=stage.mouseX,b=stage.mouseY,c=a-mouseX,d=b-mouseY,e=[];"len"===dragWho?(e.push(myAnimate.lensA),e.push(myAnimate.btnLenA),e.push(myAnimate.btnLenB)):"obj"===dragWho?(e.push(myAnimate.obj),e.push(myAnimate.btnObjA),e.push(myAnimate.btnObjB)):("btnObjA"===dragWho||"btnObjB"===dragWho||"btnLenA"===dragWho||"btnLenB"===dragWho)&&e.push(myAnimate[dragWho]);let f=e.length;for(var g,h=0;h<f;h++)g=e[h],g.x+=c,g.y+=d;mouseX=a,mouseY=b}function mouseUp(){dragWho="x"}function drawTrace(){if(ctx.clearRect(0,0,1600,900),myAnimate.chTrace.checked){for(var a=traceImgArray.length,b=0;b<a;b++)ctx.strokeStyle="rgb(255,255,0)",ctx.fillStyle="rgb(255,255,0)",ctx.lineWidth=6-5*b/a,ctx.beginPath(),ctx.arc(traceImgArray[b][0],traceImgArray[b][1],5-4*b/a,0,2*Math.PI),ctx.stroke(),ctx.fill();for(var a=traceObjArray.length,b=0;b<a;b++)ctx.strokeStyle="rgb(0,255,255)",ctx.fillStyle="rgb(0,255,255)",ctx.lineWidth=6-5*b/a,ctx.beginPath(),ctx.arc(traceObjArray[b][0],traceObjArray[b][1],5-4*b/a,0,2*Math.PI),ctx.stroke(),ctx.fill()}}function drawRay(a,b){ctxRay.clearRect(0,0,1600,900),myAnimate.chRay.checked&&(ctxRay.strokeStyle="rgb(0,255,0)",ctxRay.lineWidth=6,ctxRay.beginPath(),ctxRay.moveTo(myAnimate.obj.x,myAnimate.obj.y),ctxRay.lineTo(myAnimate.lensA.x,myAnimate.obj.y),0<a&&0<b?ctxRay.lineTo(myAnimate.iimg.x,myAnimate.iimg.y):0<a?ctxRay.lineTo(myAnimate.lensA.x+a*(0<myAnimate.lensA.x-myAnimate.obj.x?1:-1),myAnimate.lensA.y):ctxRay.lineTo(myAnimate.lensA.x+a*(0<myAnimate.lensA.x-myAnimate.obj.x?-1:1),myAnimate.lensA.y+2*(myAnimate.obj.y-myAnimate.lensA.y)),ctxRay.stroke(),ctxRay.strokeStyle="rgb(255,125,125)",ctxRay.lineWidth=6,ctxRay.beginPath(),ctxRay.moveTo(myAnimate.obj.x,myAnimate.obj.y),ctxRay.lineTo(myAnimate.lensA.x,myAnimate.lensA.y),0<a&&0<b?ctxRay.lineTo(myAnimate.iimg.x,myAnimate.iimg.y):ctxRay.lineTo(myAnimate.lensA.x+Math.abs(a)*(0<myAnimate.lensA.x-myAnimate.obj.x?1:-1),myAnimate.lensA.y+Math.abs(a)*(myAnimate.obj.y-myAnimate.lensA.y)/(myAnimate.obj.x-myAnimate.lensA.x)*(0<myAnimate.lensA.x-myAnimate.obj.x?1:-1)),ctxRay.stroke(),ctxRay.strokeStyle="rgb(0,255,0)",ctxRay.lineWidth=2,ctxRay.beginPath(),0>a?(ctxRay.moveTo(myAnimate.lensA.x,myAnimate.obj.y),ctxRay.lineTo(myAnimate.lensA.x+a*(0<myAnimate.lensA.x-myAnimate.obj.x?1:-1),myAnimate.lensA.y)):0<a&&0>b&&(ctxRay.moveTo(myAnimate.lensA.x,myAnimate.obj.y),ctxRay.lineTo(myAnimate.iimg.x,myAnimate.iimg.y)),ctxRay.stroke(),ctxRay.strokeStyle="rgb(255,125,125)",ctxRay.lineWidth=2,ctxRay.beginPath(),0<a&&0>b&&(ctxRay.moveTo(myAnimate.obj.x,myAnimate.obj.y),ctxRay.lineTo(myAnimate.iimg.x,myAnimate.iimg.y)),ctxRay.stroke())}