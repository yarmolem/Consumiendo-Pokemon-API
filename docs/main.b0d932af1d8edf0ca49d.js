(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=1)})([function(){},function(a,b,c){'use strict';function i(j,a,b,c,d,e,f){try{var g=j[e](f),h=g.value}catch(c){return void b(c)}g.done?a(h):Promise.resolve(h).then(c,d)}function d(j){return function(){var a=this,b=arguments;return new Promise(function(c,d){function e(b){i(g,c,d,e,f,'next',b)}function f(b){i(g,c,d,e,f,'throw',b)}var g=j.apply(a,b);e(void 0)})}}function j(j,a,b,c,d,e,f){try{var g=j[e](f),h=g.value}catch(c){return void b(c)}g.done?a(h):Promise.resolve(h).then(c,d)}function e(i){return function(){var a=this,b=arguments;return new Promise(function(c,d){function e(b){j(g,c,d,e,f,'next',b)}function f(b){j(g,c,d,e,f,'throw',b)}var g=i.apply(a,b);e(void 0)})}}c.r(b);var k,f,g=c(0),h=0,l='https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20',m=function(){var b=d(regeneratorRuntime.mark(function d(){var e,b;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,fetch(l).then(function(b){return b.json()});case 2:return e=c.sent,b=e.results.map(function(b){return b.name}),c.abrupt('return',b);case 5:case'end':return c.stop();}},d)}));return function(){return b.apply(this,arguments)}}(),n=function(){var b=d(regeneratorRuntime.mark(function d(){var e,b;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return h+=20,l='https://pokeapi.co/api/v2/pokemon/?offset='.concat(h,'&limit=20'),c.next=4,fetch(l).then(function(b){return b.json()});case 4:return e=c.sent,b=e.results.map(function(b){return b.name}),c.abrupt('return',b);case 7:case'end':return c.stop();}},d)}));return function(){return b.apply(this,arguments)}}(),o=function(){var b=d(regeneratorRuntime.mark(function d(){var e,b;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return h-=20,l='https://pokeapi.co/api/v2/pokemon/?offset='.concat(h,'&limit=20'),c.next=4,fetch(l).then(function(b){return b.json()});case 4:return e=c.sent,b=e.results.map(function(b){return b.name}),c.abrupt('return',b);case 7:case'end':return c.stop();}},d)}));return function(){return b.apply(this,arguments)}}(),p=document.body,q=1,r=function(){var b=e(regeneratorRuntime.mark(function k(){var l,b,c,d,e,n,g,h,i;return regeneratorRuntime.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return l='\n    <h1>API Pokemon</h1>\n    <ol class="list-group"></ol>\n    <div class="d-flex justify-content-center">\n        <button type="button" class="btn btn-secondary bg-dark text-light border-dark mr-2">Previous</button>\n        <button type="button" class="btn btn-secondary bg-dark text-light border-dark">Next</button>\n    </div>',b=document.createElement('div'),b.classList.add('container-fluid'),b.innerHTML=l,p.prepend(b),j.next=7,m();case 7:for(c=j.sent,d=!0,e=!1,n=void 0,j.prev=11,g=c[Symbol.iterator]();!(d=(h=g.next()).done);d=!0)i=h.value,t(i),q++;j.next=19;break;case 15:j.prev=15,j.t0=j['catch'](11),e=!0,n=j.t0;case 19:j.prev=19,j.prev=20,d||null==g['return']||g['return']();case 22:if(j.prev=22,!e){j.next=25;break}throw n;case 25:return j.finish(22);case 26:return j.finish(19);case 27:case'end':return j.stop();}},k,null,[[11,15,19,27],[20,,22,26]])}));return function(){return b.apply(this,arguments)}}(),s=function(){var b=e(regeneratorRuntime.mark(function b(){return regeneratorRuntime.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:f=document.querySelectorAll('button'),f[0].addEventListener('click',e(regeneratorRuntime.mark(function i(){var j,b,c,l,e,f,g;return regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(!(21<q)){h.next=25;break}return q-=40,k.innerHTML='',h.next=5,o();case 5:for(j=h.sent,b=!0,c=!1,l=void 0,h.prev=9,e=j[Symbol.iterator]();!(b=(f=e.next()).done);b=!0)g=f.value,t(g),q++;h.next=17;break;case 13:h.prev=13,h.t0=h['catch'](9),c=!0,l=h.t0;case 17:h.prev=17,h.prev=18,b||null==e['return']||e['return']();case 20:if(h.prev=20,!c){h.next=23;break}throw l;case 23:return h.finish(20);case 24:return h.finish(17);case 25:case'end':return h.stop();}},i,null,[[9,13,17,25],[18,,20,24]])}))),f[1].addEventListener('click',e(regeneratorRuntime.mark(function i(){var j,b,c,l,e,f,g;return regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return k.innerHTML='',h.next=3,n();case 3:for(j=h.sent,b=!0,c=!1,l=void 0,h.prev=7,e=j[Symbol.iterator]();!(b=(f=e.next()).done);b=!0)g=f.value,t(g),q++;h.next=15;break;case 11:h.prev=11,h.t0=h['catch'](7),c=!0,l=h.t0;case 15:h.prev=15,h.prev=16,b||null==e['return']||e['return']();case 18:if(h.prev=18,!c){h.next=21;break}throw l;case 21:return h.finish(18);case 22:return h.finish(15);case 23:case'end':return h.stop();}},i,null,[[7,11,15,23],[16,,18,22]])})));case 3:case'end':return b.stop();}},b)}));return function(){return b.apply(this,arguments)}}(),t=function(d){k=document.querySelector('ol');var a=document.createElement('li');a.classList.add('list-group-item'),a.classList.add('bg-dark'),a.classList.add('mb-1'),a.innerText='ID: '.concat(q,' ').concat(d.toUpperCase());var b=document.createElement('img');b.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'.concat(q,'.png'),k.append(a),k.append(b)};(function(){r(),s()})()}]);