
var panelOptions =
{
    panelId: "panel1",
    slideInFrom: "left", 
    speed: 500,
    showMode: "default",
    transparentLayer: true,
    resizeCallback: null
};

var panel1 = new McSuperPanel(panelOptions);

/* Super Panel v2016.4.18. Copyright www.menucool.com */
function McSuperPanel(e){"use strict";var A="replace",l="display",h="className",d="length",r="addEventListener",b="style";if(typeof String.prototype.trim!=="function")String.prototype.trim=function(){return this[A](/^\s+|\s+$/g,"")};var m=document,x="getElementById",i=setTimeout,q=function(a,b){return m[a](b)},M=function(a,d){if(typeof getComputedStyle!="undefined")var c=getComputedStyle(a,null);else if(a.currentStyle)c=a.currentStyle;else c=a[b];return c[d]},v=0,p,a,f=[],c=0,j=0,w=0,g=0,E=function(a){if(g){g[b].opacity=0;if(a){g[b][l]="block";i(function(){g[b].opacity=1},0)}else i(function(){g[b][l]="none"},350)}},n=function(a,c,b){if(a[r])a[r](c,b,false);else a.attachEvent&&a.attachEvent("on"+c,b)},L=function(a,c){var b=a[d];while(b--)if(a[b]===c)return true;return false},k=function(b,a){return L(b[h].split(" "),a)},z=function(a,b,c){if(!k(a,b))if(!a[h])a[h]=b;else if(c)a[h]=b+" "+a[h];else a[h]+=" "+b},F=function(c,f){if(c[h]){for(var e="",b=c[h].split(" "),a=0,g=b[d];a<g;a++)if(b[a]!==f)e+=b[a]+" ";c[h]=e.trim()}},H=function(a){if(a&&a.stopPropagation)a.stopPropagation();else if(window.event)window.event.cancelBubble=true},K=function(b){var a=b||window.event;if(a.preventDefault)a.preventDefault();else if(a)a.returnValue=false},t=function(h){h&&o(0);clearTimeout(c.g);for(var g=0;g<f[d];g++)F(f[g],"active");if(!v)if(c.a=="default")a[b].opacity=0;else{a[b].opacity=0;var e="0,0";switch(c.a){case"top":e="0,-"+c.b;break;case"bottom":e="0,"+c.b;break;case"right":e=c.b+",0";break;case"left":e="-"+c.b+",0"}a[b].transform=a[b].WebkitTransform="translate("+e+") translateZ(0)"}c.g=i(function(){F(a,"active");a[b][l]="none";o(p)},p+20);E(0)},y=function(g){g&&o(0);clearTimeout(c.g);for(var e=0;e<f[d];e++)z(f[e],"active");z(a,"active");a[b][l]="";if(!v)if(c.a===0)i(function(){a[b].opacity=1},0);else i(function(){a[b].opacity=1;a[b].transform=a[b].WebkitTransform="translate(0,0) translateZ(0)";o(p)},0);E(1)},I=function(e){if(w){w=0;return}var a=e.target||e.srcElement;if(!k(a,"panel-button")){a=a.parentNode;if(a&&!k(a,"panel-button"))a=a.parentNode;if(a&&!k(a,"panel-button"))return}if(k(f[0],"active"))t();else{var b=a.getAttribute("data-click");if(b){b=s(b);window[b[0]]&&window[b[0]].apply(b.splice(0,1),b)}var c=a.getAttribute("data-ajax");if(c){c=s(c);var d=new XMLHttpRequest;d.onreadystatechange=function(){if(d.readyState==4&&d.status==200){var a=d.responseText,b=/^[\s\S]*<body[^>]*>([\s\S]+)<\/body>[\s\S]*$/i;if(b.test(a))a=a[A](b,"$1");a=a.trim();window[c[1]].apply(c.splice(0,2,a),c)}};d.open("GET",c[0],true);d.send()}(b||c)&&a.getAttribute("href")=="#"&&K(e);y()}H(e)},C=function(){return window.innerWidth||m.documentElement.clientWidth||m.body.clientWidth},D=function(){return window.screen.width},B=function(){var a=c.e[0],e=c.e[1],h=c.f===1;if(c.c){var i=c.d?D():C();if(i>c.c){a=c.e[2];e=c.e[3]}if(c.f[0]!=a||c.f[1]!=e){h=1;c.f=[a,e]}}if(h){for(var g=0;g<f[d];g++)f[g][b][l]=a?"":"none";if(e)y(1);else t(1)}},o=function(c){a[b].transition=a[b].WebkitTransition=a[b].msTransition="all "+c+"ms ease-in"},N=function(){var g,i,c;if(m.getElementsByClassName)g=q("getElementsByClassName","panel-button");else{g=[];var l=m.getElementsByTagName("*");c=l[d];while(c--)k(l[c],"panel-button")&&g.push(l[c])}var n=0,h=a.getElementsByTagName("*");c=h[d];while(c--)if(k(h[c],"panel-button")){n=1;h[c][b].zIndex=j+1;h[c][b].cssFloat="none"}c=g[d];while(c--){i=g[c].getAttribute("data-panel");if(!i||i==e.panelId){if(!n)g[c][b].zIndex=j+1;f.push(g[c])}}},u=function(c,b){var a=false;if(c[d]>b){a=c.charAt(b).toLowerCase()=="y";if(!b&&!f)a=false}return a},s=function(a){return a[A](/\s/g,"").split(",")},G=function(){a=q(x,e.panelId);if(a){v=typeof a[b].transition=="undefined"&&typeof a[b].WebkitTransition=="undefined";p=v?0:e.speed;j=M(a,"zIndex");if(/^[\d\-]+$/.test(j))j=parseInt(j);else j=2;N();var r,w,k,l,h=[];r=k=f?1:0;w=l=0;if(e.showMode&&e.showMode!="default"){h=s(e.showMode);if(h[d]>0){r=k=u(h[0],0);w=l=u(h[0],1);if(h[d]>2){k=u(h[2],0);l=u(h[2],1)}}}var m=s(e.slideInFrom),A=m[d]>1?m[1]:"120%";c={a:m[0],b:A,c:h[d]>1?parseInt(h[1]):0,d:h[d]>1?h[1].indexOf("d")!="-1":0,e:[r,w,k,l],f:1,g:1};if(e.transparentLayer){g=q("createElement","div");z(g,"transparent-layer");a.parentNode.insertBefore(g,a);g[b].zIndex=j-1;n(a,"click",H);e.transparentLayer===true&&n(g,"click",function(){t(0)})}for(var y=0;y<f[d];y++)n(f[y],"click",I);o(p);B();c.c&&n(window,"resize",B);a[b].visibility="visible"}typeof e.initCallback=="function"&&i(e.initCallback,0);if(e.resizeCallback){n(window,"resize",e.resizeCallback);i(e.resizeCallback,0)}},J=function(c){var a=0;function b(){if(a)return;a=1;i(c,14)}if(m[r])m[r]("DOMContentLoaded",b,false);else n(window,"load",b)};J(G);return{init:function(){!a&&G()},getDeviceWidth:D,getBrowserWidth:C,show:function(d){var c=q(x,d);if(c)if(c==a)y(1);else c[b][l]=""},hide:function(d){var c=q(x,d);if(c)if(c==a)t(1);else c[b][l]="none"},cancelThisAction:function(){w=1}}}

// Make the DIV element draggable:
dragElement(document.getElementById("book1"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}