(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~96a14d93"],{"2efc":function(t,e,r){"use strict";var i,n=r("a504"),o=r("01d4"),a=r("5e31"),s=r("acc1"),c=r("0af5"),u=r("256f"),h=r("7fc9"),l=10,d=.25,f=function(){function t(t,e,r,i,n,o){this.sourceProj_=t,this.targetProj_=e;var a={},s=Object(u["i"])(this.targetProj_,this.sourceProj_);this.transformInv_=function(t){var e=t[0]+"/"+t[1];return a[e]||(a[e]=s(t)),a[e]},this.maxSourceExtent_=i,this.errorThresholdSquared_=n*n,this.triangles_=[],this.wrapsXInSource_=!1,this.canWrapXInSource_=this.sourceProj_.canWrapX()&&!!i&&!!this.sourceProj_.getExtent()&&Object(c["F"])(i)==Object(c["F"])(this.sourceProj_.getExtent()),this.sourceWorldWidth_=this.sourceProj_.getExtent()?Object(c["F"])(this.sourceProj_.getExtent()):null,this.targetWorldWidth_=this.targetProj_.getExtent()?Object(c["F"])(this.targetProj_.getExtent()):null;var d=Object(c["D"])(r),f=Object(c["E"])(r),_=Object(c["x"])(r),v=Object(c["w"])(r),g=this.transformInv_(d),b=this.transformInv_(f),j=this.transformInv_(_),O=this.transformInv_(v),p=l+(o?Math.max(0,Math.ceil(Object(h["d"])(Object(c["v"])(r)/(o*o*256*256)))):0);if(this.addQuad_(d,f,_,v,g,b,j,O,p),this.wrapsXInSource_){var m=1/0;this.triangles_.forEach((function(t,e,r){m=Math.min(m,t.source[0][0],t.source[1][0],t.source[2][0])})),this.triangles_.forEach(function(t){if(Math.max(t.source[0][0],t.source[1][0],t.source[2][0])-m>this.sourceWorldWidth_/2){var e=[[t.source[0][0],t.source[0][1]],[t.source[1][0],t.source[1][1]],[t.source[2][0],t.source[2][1]]];e[0][0]-m>this.sourceWorldWidth_/2&&(e[0][0]-=this.sourceWorldWidth_),e[1][0]-m>this.sourceWorldWidth_/2&&(e[1][0]-=this.sourceWorldWidth_),e[2][0]-m>this.sourceWorldWidth_/2&&(e[2][0]-=this.sourceWorldWidth_);var r=Math.min(e[0][0],e[1][0],e[2][0]),i=Math.max(e[0][0],e[1][0],e[2][0]);i-r<this.sourceWorldWidth_/2&&(t.source=e)}}.bind(this))}a={}}return t.prototype.addTriangle_=function(t,e,r,i,n,o){this.triangles_.push({source:[i,n,o],target:[t,e,r]})},t.prototype.addQuad_=function(t,e,r,i,n,o,a,s,u){var l=Object(c["c"])([n,o,a,s]),f=this.sourceWorldWidth_?Object(c["F"])(l)/this.sourceWorldWidth_:null,_=this.sourceWorldWidth_,v=this.sourceProj_.canWrapX()&&f>.5&&f<1,g=!1;if(u>0){if(this.targetProj_.isGlobal()&&this.targetWorldWidth_){var b=Object(c["c"])([t,e,r,i]),j=Object(c["F"])(b)/this.targetWorldWidth_;g=j>d||g}!v&&this.sourceProj_.isGlobal()&&f&&(g=f>d||g)}if(!(!g&&this.maxSourceExtent_&&isFinite(l[0])&&isFinite(l[1])&&isFinite(l[2])&&isFinite(l[3]))||Object(c["G"])(l,this.maxSourceExtent_)){var O=0;if(!g&&(!isFinite(n[0])||!isFinite(n[1])||!isFinite(o[0])||!isFinite(o[1])||!isFinite(a[0])||!isFinite(a[1])||!isFinite(s[0])||!isFinite(s[1])))if(u>0)g=!0;else if(O=(isFinite(n[0])&&isFinite(n[1])?0:8)+(isFinite(o[0])&&isFinite(o[1])?0:4)+(isFinite(a[0])&&isFinite(a[1])?0:2)+(isFinite(s[0])&&isFinite(s[1])?0:1),1!=O&&2!=O&&4!=O&&8!=O)return;if(u>0){if(!g){var p=[(t[0]+r[0])/2,(t[1]+r[1])/2],m=this.transformInv_(p),T=void 0;if(v){var E=(Object(h["e"])(n[0],_)+Object(h["e"])(a[0],_))/2;T=E-Object(h["e"])(m[0],_)}else T=(n[0]+a[0])/2-m[0];var M=(n[1]+a[1])/2-m[1],x=T*T+M*M;g=x>this.errorThresholdSquared_}if(g){if(Math.abs(t[0]-r[0])<=Math.abs(t[1]-r[1])){var W=[(e[0]+r[0])/2,(e[1]+r[1])/2],F=this.transformInv_(W),P=[(i[0]+t[0])/2,(i[1]+t[1])/2],y=this.transformInv_(P);this.addQuad_(t,e,W,P,n,o,F,y,u-1),this.addQuad_(P,W,r,i,y,F,a,s,u-1)}else{var I=[(t[0]+e[0])/2,(t[1]+e[1])/2],w=this.transformInv_(I),S=[(r[0]+i[0])/2,(r[1]+i[1])/2],C=this.transformInv_(S);this.addQuad_(t,I,S,i,n,w,C,s,u-1),this.addQuad_(I,e,r,S,w,o,a,C,u-1)}return}}if(v){if(!this.canWrapXInSource_)return;this.wrapsXInSource_=!0}0==(11&O)&&this.addTriangle_(t,r,i,n,a,s),0==(14&O)&&this.addTriangle_(t,r,e,n,a,o),O&&(0==(13&O)&&this.addTriangle_(e,i,t,o,s,n),0==(7&O)&&this.addTriangle_(e,i,r,o,s,a))}},t.prototype.calculateSourceExtent=function(){var t=Object(c["k"])();return this.triangles_.forEach((function(e,r,i){var n=e.source;Object(c["s"])(t,n[0]),Object(c["s"])(t,n[1]),Object(c["s"])(t,n[2])})),t},t.prototype.getTriangles=function(){return this.triangles_},t}(),_=f,v=r("1350"),g=r("38f3"),b=r("0999");function j(t,e,r,i,n){t.beginPath(),t.moveTo(0,0),t.lineTo(e,r),t.lineTo(i,n),t.closePath(),t.save(),t.clip(),t.fillRect(0,0,Math.max(e,i)+1,Math.max(r,n)),t.restore()}function O(t,e){return Math.abs(t[4*e]-210)>2||Math.abs(t[4*e+3]-191.25)>2}function p(){if(void 0===i){var t=document.createElement("canvas").getContext("2d");t.globalCompositeOperation="lighter",t.fillStyle="rgba(210, 0, 0, 0.75)",j(t,4,5,4,0),j(t,4,5,0,5);var e=t.getImageData(0,0,3,3).data;i=O(e,0)||O(e,4)||O(e,8)}return i}function m(t,e,r,i){var n=Object(u["o"])(r,e,t),o=Object(u["h"])(e,i,r),a=e.getMetersPerUnit();void 0!==a&&(o*=a);var s=t.getMetersPerUnit();void 0!==s&&(o/=s);var h=t.getExtent();if(!h||Object(c["g"])(h,n)){var l=Object(u["h"])(t,o,n)/o;isFinite(l)&&l>0&&(o/=l)}return o}function T(t,e,r,i){var n=Object(c["y"])(r),o=m(t,e,n,i);return(!isFinite(o)||o<=0)&&Object(c["u"])(r,(function(r){return o=m(t,e,r,i),isFinite(o)&&o>0})),o}function E(t,e,r,i,n,o,a,s,u,l,d,f){var _=Object(b["a"])(Math.round(r*t),Math.round(r*e));if(Object(g["a"])(_,f),0===u.length)return _.canvas;function j(t){return Math.round(t*r)/r}_.scale(r,r),_.globalCompositeOperation="lighter";var O=Object(c["k"])();u.forEach((function(t,e,r){Object(c["r"])(O,t.extent)}));var m=Object(c["F"])(O),T=Object(c["B"])(O),E=Object(b["a"])(Math.round(r*m/i),Math.round(r*T/i));Object(g["a"])(E,f);var M=r/i;u.forEach((function(t,e,r){var i=t.extent[0]-O[0],n=-(t.extent[3]-O[3]),o=Object(c["F"])(t.extent),a=Object(c["B"])(t.extent);t.image.width>0&&t.image.height>0&&E.drawImage(t.image,l,l,t.image.width-2*l,t.image.height-2*l,i*M,n*M,o*M,a*M)}));var x=Object(c["D"])(a);return s.getTriangles().forEach((function(t,e,n){var a=t.source,s=t.target,c=a[0][0],u=a[0][1],l=a[1][0],d=a[1][1],g=a[2][0],b=a[2][1],m=j((s[0][0]-x[0])/o),T=j(-(s[0][1]-x[1])/o),M=j((s[1][0]-x[0])/o),W=j(-(s[1][1]-x[1])/o),F=j((s[2][0]-x[0])/o),P=j(-(s[2][1]-x[1])/o),y=c,I=u;c=0,u=0,l-=y,d-=I,g-=y,b-=I;var w=[[l,d,0,0,M-m],[g,b,0,0,F-m],[0,0,l,d,W-T],[0,0,g,b,P-T]],S=Object(h["f"])(w);if(S){if(_.save(),_.beginPath(),p()||f===v["a"]){_.moveTo(M,W);for(var C=4,G=m-M,D=T-W,L=0;L<C;L++)_.lineTo(M+j((L+1)*G/C),W+j(L*D/(C-1))),L!=C-1&&_.lineTo(M+j((L+1)*G/C),W+j((L+1)*D/(C-1)));_.lineTo(F,P)}else _.moveTo(M,W),_.lineTo(m,T),_.lineTo(F,P);_.clip(),_.transform(S[0],S[2],S[1],S[3],m,T),_.translate(O[0]-y,O[3]-I),_.scale(i/r,-i/r),_.drawImage(E.canvas,0,0),_.restore()}})),d&&(_.save(),_.globalCompositeOperation="source-over",_.strokeStyle="black",_.lineWidth=1,s.getTriangles().forEach((function(t,e,r){var i=t.target,n=(i[0][0]-x[0])/o,a=-(i[0][1]-x[1])/o,s=(i[1][0]-x[0])/o,c=-(i[1][1]-x[1])/o,u=(i[2][0]-x[0])/o,h=-(i[2][1]-x[1])/o;_.beginPath(),_.moveTo(s,c),_.lineTo(n,a),_.lineTo(u,h),_.closePath(),_.stroke()})),_.restore()),_.canvas}var M=r("1e8d"),x=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};return function(e,r){function i(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),W=function(t){function e(e,r,i,o,a,u,l,d,f,v,g,b){var j=t.call(this,a,s["a"].IDLE)||this;j.renderEdges_=void 0!==g&&g,j.contextOptions_=b,j.pixelRatio_=l,j.gutter_=d,j.canvas_=null,j.sourceTileGrid_=r,j.targetTileGrid_=o,j.wrappedTileCoord_=u||a,j.sourceTiles_=[],j.sourcesListenerKeys_=null,j.sourceZ_=0;var O=o.getTileCoordExtent(j.wrappedTileCoord_),p=j.targetTileGrid_.getExtent(),m=j.sourceTileGrid_.getExtent(),E=p?Object(c["C"])(O,p):O;if(0===Object(c["v"])(E))return j.state=s["a"].EMPTY,j;var M=e.getExtent();M&&(m=m?Object(c["C"])(m,M):M);var x=o.getResolution(j.wrappedTileCoord_[0]),W=T(e,i,E,x);if(!isFinite(W)||W<=0)return j.state=s["a"].EMPTY,j;var F=void 0!==v?v:n["b"];if(j.triangulation_=new _(e,i,E,m,W*F,x),0===j.triangulation_.getTriangles().length)return j.state=s["a"].EMPTY,j;j.sourceZ_=r.getZForResolution(W);var P=j.triangulation_.calculateSourceExtent();if(m&&(e.canWrapX()?(P[1]=Object(h["a"])(P[1],m[1],m[3]),P[3]=Object(h["a"])(P[3],m[1],m[3])):P=Object(c["C"])(P,m)),Object(c["v"])(P)){for(var y=r.getTileRangeForExtentAndZ(P,j.sourceZ_),I=y.minX;I<=y.maxX;I++)for(var w=y.minY;w<=y.maxY;w++){var S=f(j.sourceZ_,I,w,l);S&&j.sourceTiles_.push(S)}0===j.sourceTiles_.length&&(j.state=s["a"].EMPTY)}else j.state=s["a"].EMPTY;return j}return x(e,t),e.prototype.getImage=function(){return this.canvas_},e.prototype.reproject_=function(){var t=[];if(this.sourceTiles_.forEach(function(e,r,i){e&&e.getState()==s["a"].LOADED&&t.push({extent:this.sourceTileGrid_.getTileCoordExtent(e.tileCoord),image:e.getImage()})}.bind(this)),this.sourceTiles_.length=0,0===t.length)this.state=s["a"].ERROR;else{var e=this.wrappedTileCoord_[0],r=this.targetTileGrid_.getTileSize(e),i="number"===typeof r?r:r[0],n="number"===typeof r?r:r[1],o=this.targetTileGrid_.getResolution(e),a=this.sourceTileGrid_.getResolution(this.sourceZ_),c=this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);this.canvas_=E(i,n,this.pixelRatio_,a,this.sourceTileGrid_.getExtent(),o,c,this.triangulation_,t,this.gutter_,this.renderEdges_,this.contextOptions_),this.state=s["a"].LOADED}this.changed()},e.prototype.load=function(){if(this.state==s["a"].IDLE){this.state=s["a"].LOADING,this.changed();var t=0;this.sourcesListenerKeys_=[],this.sourceTiles_.forEach(function(e,r,i){var n=e.getState();if(n==s["a"].IDLE||n==s["a"].LOADING){t++;var a=Object(M["a"])(e,o["a"].CHANGE,(function(r){var i=e.getState();i!=s["a"].LOADED&&i!=s["a"].ERROR&&i!=s["a"].EMPTY||(Object(M["c"])(a),t--,0===t&&(this.unlistenSources_(),this.reproject_()))}),this);this.sourcesListenerKeys_.push(a)}}.bind(this)),this.sourceTiles_.forEach((function(t,e,r){var i=t.getState();i==s["a"].IDLE&&t.load()})),0===t&&setTimeout(this.reproject_.bind(this),0)}},e.prototype.unlistenSources_=function(){this.sourcesListenerKeys_.forEach(M["c"]),this.sourcesListenerKeys_=null},e}(a["a"]);e["a"]=W},"345d":function(t,e,r){"use strict";function i(t){return t[0]>0&&t[1]>0}function n(t,e,r){return void 0===r&&(r=[0,0]),r[0]=t[0]*e+.5|0,r[1]=t[1]*e+.5|0,r}function o(t,e){return Array.isArray(t)?t:(void 0===e?e=[t,t]:(e[0]=t,e[1]=t),e)}r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o}))},"8cc5":function(t,e,r){"use strict";r.d(e,"c",(function(){return n})),r.d(e,"d",(function(){return o})),r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return s}));var i=r("7fc9");function n(t){return void 0!==t?0:void 0}function o(t){return void 0!==t?t:void 0}function a(t){var e=2*Math.PI/t;return function(t,r){return r?t:void 0!==t?(t=Math.floor(t/e+.5)*e,t):void 0}}function s(t){var e=t||Object(i["j"])(5);return function(t,r){return r?t:void 0!==t?Math.abs(t)<=e?0:t:void 0}}},a504:function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return n}));var i=.5,n=!0},aaa2:function(t,e,r){"use strict";r.d(e,"c",(function(){return c})),r.d(e,"b",(function(){return u})),r.d(e,"a",(function(){return h}));var i=r("7fc9"),n=r("0af5"),o=r("9f5e");function a(t,e,r,i){var o=Object(n["F"])(e)/r[0],a=Object(n["B"])(e)/r[1];return i?Math.min(t,Math.max(o,a)):Math.min(t,Math.min(o,a))}function s(t,e,r){var n=Math.min(t,e),o=50;return n*=Math.log(1+o*Math.max(0,t/e-1))/o+1,r&&(n=Math.max(n,r),n/=Math.log(1+o*Math.max(0,r/t-1))/o+1),Object(i["a"])(n,r/2,2*e)}function c(t,e,r,n){return function(c,u,h,l){if(void 0!==c){var d=t[0],f=t[t.length-1],_=r?a(d,r,h,n):d;if(l){var v=void 0===e||e;return v?s(c,_,f):Object(i["a"])(c,f,_)}var g=Math.min(_,c),b=Math.floor(Object(o["f"])(t,g,u));return t[b]>_&&b<t.length-1?t[b+1]:t[b]}}}function u(t,e,r,n,o,c){return function(u,h,l,d){if(void 0!==u){var f=o?a(e,o,l,c):e,_=void 0!==r?r:0;if(d){var v=void 0===n||n;return v?s(u,f,_):Object(i["a"])(u,_,f)}var g=1e-9,b=Math.ceil(Math.log(e/f)/Math.log(t)-g),j=-h*(.5-g)+.5,O=Math.min(f,u),p=Math.floor(Math.log(e/O)/Math.log(t)+j),m=Math.max(b,p),T=e/Math.pow(t,m);return Object(i["a"])(T,_,f)}}}function h(t,e,r,n,o){return function(c,u,h,l){if(void 0!==c){var d=n?a(t,n,h,o):t,f=void 0===r||r;return f&&l?s(c,d,e):Object(i["a"])(c,e,d)}}}}}]);