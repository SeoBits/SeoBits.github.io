!function(e){function t(t){for(var r,a,s=t[0],l=t[1],c=t[2],d=0,p=[];d<s.length;d++)a=s[d],i[a]&&p.push(i[a][0]),i[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={1:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([18,0]),n()}([function(e,t,n){var r,i,o={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),l=null,c=0,u=[],d=n(13);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(v(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(v(r.parts[a],t));o[r.id]={id:r.id,refs:1,parts:s}}}}function f(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,i)}}function A(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function m(e){var t=document.createElement("style");return e.attrs.type="text/css",g(t,e.attrs),h(e,t),t}function g(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,r,i,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var a=c++;n=l||(l=m(t)),r=b.bind(null,n,a,!1),i=b.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",g(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,i=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=d(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),i=function(){A(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){A(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return p(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var a=n[i];(s=o[a.id]).refs--,r.push(s)}e&&p(f(e,t),t);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete o[s.id]}}}};var w,y=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function b(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(o).concat([i]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o,a,s,l=[{name:"Time Machine",artist:"MonstDeath",link:"",path:"audio/timemachine.mp3"},{name:"Child of Night",artist:"GOTH",link:"",path:"audio/childofnight.mp3"},{name:"Animalistic",artist:"Eyeris Creep-P(Master Andross Remix)",link:"",path:"audio/animalistic.mp3"},{name:"Gravitation",artist:"Carf Darko",link:"",path:"audio/gravitation.mp3"},{name:"Hopes and Dreams",artist:"PalmMute(Remix)",link:"",path:"audio/hopesanddreams\t.mp3"}],c=100,u=32,d=0,p={};function f(e){var t=l[d].path;r.src=t,r.addEventListener("canplaythrough",function(){e&&p.play(!0)}),r.load()}function h(){var e=l[d];return e.name+" by "+e.artist}function A(){for(var e=0;e<a.length;e++){a[e].classList.remove("selected-track")}a[d].classList.add("selected-track")}p.initialize=function(){!function(){s=document.getElementById("play-track");var e=document.getElementById("prev-track"),t=document.getElementById("next-track"),n=document.getElementById("show-playlist"),i=document.getElementById("time-track"),o=document.getElementById("title-track"),u=document.getElementById("playlist-container");r=document.getElementById("audio"),s.addEventListener("click",function(){p.play(),o.innerText=h()}),e.addEventListener("pointerdown",function(){p.prev(!0),o.innerText=h()}),t.addEventListener("pointerdown",function(){p.next(!0),o.innerText=h()}),n.addEventListener("pointerdown",function(){u.classList.contains("playlist-show")?u.classList.remove("playlist-show"):u.classList.add("playlist-show")});var m=document.createElement("ul");a=[];for(var g=0;g<l.length;g++){var v=document.createElement("li"),w=document.createElement("span"),y=document.createElement("spanArtist");w.innerHTML=l[g].name,w.style.fontSize="13pt",y.innerHTML="By "+l[g].artist,y.style.fontSize="8pt",y.style.color="#aaaaaa",y.style.marginLeft="5px",v.appendChild(w),v.appendChild(y),m.appendChild(v),a[g]=v}u.appendChild(m),m.addEventListener("pointerup",function(e){var t=Array.prototype.slice.call(m.children).indexOf(e.target.closest("li"));d!=t&&(d=t,o.innerText=h(),A(),f(!0))}),setInterval(function(){if(!r.paused){var e=r.currentTime/r.duration;i.style.width=100*e+"%"}},c),o.innerText=h(),A()}(),o=new AudioContext,i=o.createAnalyser(),o.createMediaElementSource(r).connect(i),i.connect(o.destination),i.fftSize=u,i.maxDecibels=-30,i.minDecibels=-60,f(!1)},p.play=function(e){r.paused?(r.play(),s.classList.add("pause")):e||(r.pause(),s.classList.remove("pause"))},p.prev=function(e){d=(--d+l.length)%l.length,f(e),A()},p.next=function(e){d++,d%=l.length,f(e),A()},p.getFrequencyData=function(){var e=new Uint8Array(i.frequencyBinCount);return i.getByteFrequencyData(e),e},t.default=p},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAB1ElEQVR4nO3bTWsacRSF8Z9SaXwpKCWUlC5K0k+SD97P0U1KFiEQSkggMbEEahd3rKZ7Pa3+H5DRkYFzn7mjq9NbLpdLB8wb+P711+a5Oe7wiJdApm0wwAQzjFcnT8/7JaBjiQtc4Qce8HOHIbfJW7zDMT7hDD28EnCBb7jEDe6x2GXKLXKEKT6ozYYvrAXM1Z2/VCKu1WPwvMuUW2So1n81/AQnGK8E3Km1v1HDX+HWfgmYd+8nahPubAh4VM/8fffFbfd62m3OrTHqjmM144NuG1YCXtQP3kLd9Wc8nZ7390JA9y83UnMt1Kwv0M/F+jdoAtIB0jQB6QBpmoB0gDRNQDpAmiYgHSBNE5AOkKYJSAdI0wSkA6RpAtIB0jQB6QBpmoB0gDRNQDpAmiYgHSBNE5AOkKYJSAdI0wSkA6RpAtIB0jQB6QBpmoB0gDRNQDpAmiYgHSBNE5AOkKYJSAdI0wSkA6RZNUYGqlp2pPo1Q4z+6hP+z4ys5zpSsw5YC5ioXt1UtavmGxfuA0O8V7NN1awT1gJmqlS42asb26/W2Awf1YzH3ec/AsaqUbnZq9vX4uRnNeuY183Rs+646tXte3UWrwX0VJ30xIGUp6F36PX535U6VDQiuwjSAAAAAElFTkSuQmCC"},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAvCAYAAABKQCL3AAAAZUlEQVRoge3W0QkAIAzE0FO6/8p1CAWj5E3Q0J8b3d153Lx9wAlGUBhBUUnG7SN2ffEJIyiMoDCCopK4YgmMoDCCwhVLYQSFERRfRDgAKYygMILCAUhhBIURFEZQuGIpjKAwgmIBKq4HZtoqu9kAAAAASUVORK5CYII="},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAtCAYAAADV2ImkAAACLElEQVRYhc3ZvWtTURzG8U+lf4CDi4uLg+CgFhwEF906C06OburgWwUp4tJBUKogiIiTIAiCHdutncShUCpYEJwK0iVDh4IQSq/DaTQvtzfJzbnn3i+EELg5fPPjuSdPTqayLFvGA2xpJln3i2OYxSZe4ngdRuMwlWVZ9ydo4SneYb8epQF6Jtwv3GETd7GWwmgIA5HI4zxW8QWnqzYah6Mm3M0fLOIZ9qpXGmCkSOSxg8f40L9IxZQW7vAN9w6fUzBShou4hK/4iJMxjMahzIS72ROyvShkvQomjkQe28I2uBRhrX4mjkQep4QtcBUzkdbMJZZwhytYxxuciLw24kUij10s4DXaE6xTSYaL2BLa4ErJ91eS4SLOYvnwcWbSxVIId5jFd7wwQY1NEYk8WpjHexwMuTZ5hovYwH3FNTZ5houYEfbuz8JePpS6J9zNUTW2UZHI4zfm8EmQbbxwh1dCjW1UhvPYwQ3hZhxgOq1LISP9FGuK8JJQT7eHXVh3JDZwFdeMIEt9wi3cwkVjnn2kjkRbqJsLQv0cm5TCKyIcOqYQ/incUGX7cA9VZngXD3FOJFmqmfCBUBvnhZsrKrGF14RvqI3I6/4jViS2cV3YUyuTZfIJpzj56aGscCbUvzmhDiajjHDq08sexsnwDm7isppkGW3CbTxX3wl8D8OEl/AIvxK4jMRRwj9wRzP+ReqhP8Mt3MYFDZTl/4T38RZPlKx9qZgWqfal4i8xU7F3hM4U4wAAAABJRU5ErkJggg=="},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAtCAYAAADV2ImkAAACFElEQVRYhdXZP2tTURjH8U9KEAoOGbKUQhcFIYJacCi4xC2OFYSC4GIRUQpSFDq4iIigpjqI78BJ6OxmJ3EQig6Cq4uLg+8gDscDaUhyb5Jz//QLWXJzz/3y8Nzn/O5NYzAYDBynoZ500F+q2iIHLbzGN/SaFctMo4k7eIL28Jd1pIs3uDh6oG4tcQYH+GSMLPWp8GnsYRfL035YtXADt/AcK3lOqFJ4Q7j7N2Y5qYoeXsF7fDajLOVWeFno0T2hZ+eiLOFNYUytLbpQ0S2xLoyoAwlkKU64jXf4KmwCyUjdEqewg8dCBkhOSuEe+kKqKowUwueEG6qXYK1MFunhFl7hu5Jkma/CS9jGM0OxryxmFe5iXxhXlZC3JdbwQZiplcmSXeHcsa8sJgk3sIWXWC1PJ5tJwvt4UKZIXib18C5u4neJLrloZLyXqF0PZwlH1oTdbLN4penkHWu/cB1XcVScTjazbs2HuIx7+JPcJgd5W2IcLSFG7gixshQWEY50hFhZ+7QW+YFr/z8/E6w3lZSPSB9xAQ/xN+G6x0jREuNoC/FzW+LnxqKEI+vCNt9NtWDRj/lHwuy+IczyhSm6wsMkefNTpnBkVYitW/NcqwrhyIl5exn5giu4bYYYW2WFh4kx9pGMbb4uwpGzeGFKjK2bcKSLtzg/eqBu/yJFDnEJ943E2LpWeJgWnuIumidBONJB/x+1+3dK1JyoPgAAAABJRU5ErkJggg=="},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAwCAYAAABjezibAAAAVUlEQVRYhe3OIQ7AQAwDwV7//+eUl0WjYzvYkvfMzDw7Z7n/W/29eHZdgapAVaAqUBWoClQFqgJVgapAVaAqUBWoClQFqgJVgapAVaAqUBWoClQFqg/JzwVctErmegAAAABJRU5ErkJggg=="},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA7CAYAAADW8rJHAAAC10lEQVRogd3aP4gVVxTH8Y9iaWFhkUK2stImC8ZGC9PF0koQrJJOiGJCUCIswoYIhqAJCEICqRILoyCK22UJEkUki4WryILwiiyELUSUhUX3WZxMfMi853szd/757d7Mmzvnxzn3zu+emQ39fv8KvsKSjrMRB/AAZ7C52XDKsaHf7/cHfi/jFH7BeiMRleBtMRl3cRR3ao6nFBuHHN+Nv/ArttUXTjmGZWaQ52I+fY/V6kMqzjhiMno4jt8rjKcUw8osjylcxh+YriacckwiJmMf7uECtiaNpiSTlFkeTzGL83iZJqTilBWTsYgvMJdgrMKkEpNxE59ryBoVmTOj2C+s0XfYknjsd5I6M4P8i5NqtEZVislYwDH8WfF9kpdZHtOYF9Zoqsob1ZGZQVZxVtij5NaobjEZPZzAJSS7f1NiMm6JpXwhxWB1zJlR7BXW6Gd8UHawpjMzSGaNfsRakQHaJCZjSSzlNya9sOkyy2M7rgtrtGOSC9soJuMT3Bc73LGsURvLLI8VzOAiXg37U1fEZCyIrft83sk2l1ke02LbfkWONeqamIwDeCSW8v+7sF0rszz+wZe49D6IyTjX1TIbZBmHcXxT05GUYFU8g86IrquuirkqukFPBg92Tcx94dvm8052Zc6s4Ah2GSKE9mfmpWgDz4gtwkjaLGZOzIvFcS9oo5glIeLapBe2ac48E0/ynQoIoR2ZWRddz1PiAViYpsXcFqtUp7szPRzCHomEUH9mMgvyjQo6mnWK+U10MXtV3aAOMSO3uimpcs6s4DPvsCApqSIza6IrOWsMC5KS1GLmxDc3jxOPOxapyuyheJ+5X0NCKC/mqbAgH2r4tTnFy2wdP+FrMdFbQREx82KpTfbkTsUkZdbDQXyshUIYLzMv8K0OfG82SkxfvECt1IKkZJiYv4U17/Q3msv4FB/pmBDeZGYNP+C0/7qDXWST6A6+F1+cvwaP+M/dD5WVVAAAAABJRU5ErkJggg=="},function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,t,n){var r=n(10);(e.exports=n(1)(!1)).push([e.i,".audio-player{position:fixed;bottom:0;display:flex;flex-direction:row;background-color:rgba(0,0,0,.5);width:100%;height:50px;font-family:Arial,Helvetica,sans-serif}.audio-player button{width:50px;min-width:50px;background-color:#000;border-style:solid;margin-left:2px;border:1px solid;border-image-source:linear-gradient(45deg,#fff,transparent);border-image-slice:20;background-repeat:no-repeat;background-size:auto 50%;background-position:50% 50%}.audio-player button:first-child{width:100px;background-image:url("+r(n(9))+")}.audio-player .pause{background-image:url("+r(n(8))+")!important}.audio-player button:nth-child(2){background-image:url("+r(n(7))+")}.audio-player button:nth-child(3){background-image:url("+r(n(6))+")}.audio-player div:nth-child(4){margin:15px;font-size:3vw;position:relative}.audio-player div:nth-child(4) div{position:absolute;top:0;left:0;width:0;height:100%;background-color:#48a4c0;min-width:0;z-index:-5}.audio-player button:nth-child(5){background-image:url("+r(n(5))+")}.audio-player .playlist{position:absolute;align-items:flex-start;background-color:rgba(0,0,0,.5);right:0;bottom:100%;max-width:350px;width:100%;height:400px;z-index:-10;visibility:hidden}.audio-player .playlist ul{display:flex;flex-direction:column;width:100%;margin:10px;list-style-type:none;padding:0;user-select:none}.audio-player .playlist li{cursor:pointer;display:flex;box-sizing:border-box;align-items:center;height:50px;margin-top:15px;padding:0 15px;background-color:rgba(0,0,0,.8)}.playlist .selected-track{box-sizing:border-box;border:2px solid #fff}.playlist-show{visibility:visible!important}.audio-player div{min-width:120px;display:flex;flex-grow:5;align-items:center;justify-content:center;color:#fff}@media screen and (min-width:1200px){.audio-player div:nth-child(4){font-size:1vw}}",""])},function(e,t,n){var r=n(11);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,i);r.locals&&(e.exports=r.locals)},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"body{margin:0}",""])},function(e,t,n){var r=n(14);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o,a=n(2),s=window.innerWidth,l=window.innerHeight,c=!1,u={initialize:function(){o=document.getElementById("canvas"),r=new a.PerspectiveCamera(75,s/l,.1,1e3),(i=new a.WebGLRenderer({canvas:o})).setSize(s,l),document.body.appendChild(i.domElement);var e=new a.Vector2(0,0);i.domElement.addEventListener("mousedown",function(t){c=!0,e.x=t.offsetX,e.y=t.offsetY}),i.domElement.addEventListener("mousemove",function(t){if(c){var n=e.x-t.offsetX,i=e.y-t.offsetY;r.rotateY(.001*n),r.rotateX(.001*i),e.x=t.offsetX,e.y=t.offsetY}}),i.domElement.addEventListener("mouseup",function(){c=!1}),self.camera=r,self.renderer=i}};t.default=u},function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(2)),i=s(n(16));n(15),n(12);var o=s(n(4)),a=s(n(3));function s(e){return e&&e.__esModule?e:{default:e}}var l=2,c=1,u=1,d=15,p=15,f=200,h=200,A=2,m=1,g=255/p,v=null,w=null,y=null,b=null,x=null,E=null,U=0,k=[];i.default.initialize(),v=new r.Scene,y=new r.Object3D,v.add(y),(w=new r.PerspectiveCamera(50,window.innerWidth/window.innerHeight,.1,1e3)).position.set(10,40,10),w.lookAt(10,12,-5),b=new r.MeshNormalMaterial,(x=new r.BoxGeometry(c,u,c)).translate(0,.5*u,0),a.default.initialize(w),function(){var e=(new r.TextureLoader).load(o.default);e.wrapS=r.RepeatWrapping,e.wrapT=r.RepeatWrapping,e.repeat.set(f,h);var t=new r.PlaneGeometry(f,h),n=new r.MeshBasicMaterial({transparent:!0,map:e,side:r.DoubleSide});(E=new r.Mesh(t,n)).rotateX(Math.PI/-2),v.add(E)}(),function(){for(var e=0;e<d;e++){k[e]=[];for(var t=0;t<d;t++){var n=new r.Mesh(x,b);n.position.set(l*t+.5*c,0,-e*l-.5*c),y.add(n),k[e][t]=n}}}(),function e(){var t=a.default.getFrequencyData();for(var n=0;n<d;n++){var r=n>t.length?t.length-1:n;U=t[r];var i=1/g*U,o=Math.floor(i),s=(Math.ceil(i),i-o);if(i<p){for(var l=0;l<p;l++){var c=k[n][l];l<o?c.scale.set(1,m+A,1):c.scale.set(1,m,1)}var u=k[n][o];u.scale.set(1,m+A*s,1)}}var f=1e-4*Date.now();var h=2*d+10*Math.cos(f);var y=2*-p+10*Math.sin(f);w.position.x=h;w.position.z=y;w.lookAt(d,0,-p);renderer.render(v,w);requestAnimationFrame(e)}()},function(e,t,n){e.exports=n(17)}]);