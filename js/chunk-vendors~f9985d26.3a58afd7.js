(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~f9985d26"],{1350:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var r={imageSmoothingEnabled:!1,msImageSmoothingEnabled:!1}},"54b9":function(t,e,i){"use strict";var r={TILELOADSTART:"tileloadstart",TILELOADEND:"tileloadend",TILELOADERROR:"tileloaderror"},o=i("cef7"),n=i("ff80"),a=i("8d87"),s=i("acc1"),c=i("1300"),u=i("92fa"),l=i("256f"),h=i("2c30"),p=i("089b"),f=i("345d"),d=function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),g=function(t){function e(e){var i=t.call(this,{attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,projection:e.projection,state:e.state,wrapX:e.wrapX})||this;i.opaque_=void 0!==e.opaque&&e.opaque,i.tilePixelRatio_=void 0!==e.tilePixelRatio?e.tilePixelRatio:1,i.tileGrid=void 0!==e.tileGrid?e.tileGrid:null;var r=[256,256],o=e.tileGrid;return o&&Object(f["c"])(o.getTileSize(o.getMinZoom()),r),i.tileCache=new a["a"](e.cacheSize||0),i.tmpSize=[0,0],i.key_=e.key||"",i.tileOptions={transition:e.transition},i.zDirection=e.zDirection?e.zDirection:0,i}return d(e,t),e.prototype.canExpireCache=function(){return this.tileCache.canExpireCache()},e.prototype.expireCache=function(t,e){var i=this.getTileCacheForProjection(t);i&&i.expireCache(e)},e.prototype.forEachLoadedTile=function(t,e,i,r){var o=this.getTileCacheForProjection(t);if(!o)return!1;for(var n,a,c,u=!0,l=i.minX;l<=i.maxX;++l)for(var p=i.minY;p<=i.maxY;++p)a=Object(h["d"])(e,l,p),c=!1,o.containsKey(a)&&(n=o.get(a),c=n.getState()===s["a"].LOADED,c&&(c=!1!==r(n))),c||(u=!1);return u},e.prototype.getGutterForProjection=function(t){return 0},e.prototype.getKey=function(){return this.key_},e.prototype.setKey=function(t){this.key_!==t&&(this.key_=t,this.changed())},e.prototype.getOpaque=function(t){return this.opaque_},e.prototype.getResolutions=function(){return this.tileGrid.getResolutions()},e.prototype.getTile=function(t,e,i,r,o){return Object(c["b"])()},e.prototype.getTileGrid=function(){return this.tileGrid},e.prototype.getTileGridForProjection=function(t){return this.tileGrid?this.tileGrid:Object(p["d"])(t)},e.prototype.getTileCacheForProjection=function(t){return Object(u["a"])(Object(l["c"])(this.getProjection(),t),68),this.tileCache},e.prototype.getTilePixelRatio=function(t){return this.tilePixelRatio_},e.prototype.getTilePixelSize=function(t,e,i){var r=this.getTileGridForProjection(i),o=this.getTilePixelRatio(e),n=Object(f["c"])(r.getTileSize(t),this.tmpSize);return 1==o?n:Object(f["b"])(n,o,this.tmpSize)},e.prototype.getTileCoordForTileUrlFunction=function(t,e){var i=void 0!==e?e:this.getProjection(),r=this.getTileGridForProjection(i);return this.getWrapX()&&i.isGlobal()&&(t=Object(p["e"])(r,t,i)),Object(h["f"])(t,r)?t:null},e.prototype.clear=function(){this.tileCache.clear()},e.prototype.refresh=function(){this.clear(),t.prototype.refresh.call(this)},e.prototype.updateCacheSize=function(t,e){var i=this.getTileCacheForProjection(e);t>i.highWaterMark&&(i.highWaterMark=t)},e.prototype.useTile=function(t,e,i,r){},e}(n["a"]),y=function(t){function e(e,i){var r=t.call(this,e)||this;return r.tile=i,r}return d(e,t),e}(o["a"]),_=g,v=i("9cff"),b=function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),E=function(t){function e(i){var r=t.call(this,{attributions:i.attributions,cacheSize:i.cacheSize,opaque:i.opaque,projection:i.projection,state:i.state,tileGrid:i.tileGrid,tilePixelRatio:i.tilePixelRatio,wrapX:i.wrapX,transition:i.transition,key:i.key,attributionsCollapsible:i.attributionsCollapsible,zDirection:i.zDirection})||this;return r.generateTileUrlFunction_=r.tileUrlFunction===e.prototype.tileUrlFunction,r.tileLoadFunction=i.tileLoadFunction,i.tileUrlFunction&&(r.tileUrlFunction=i.tileUrlFunction),r.urls=null,i.urls?r.setUrls(i.urls):i.url&&r.setUrl(i.url),r.tileLoadingKeys_={},r}return b(e,t),e.prototype.getTileLoadFunction=function(){return this.tileLoadFunction},e.prototype.getTileUrlFunction=function(){return Object.getPrototypeOf(this).tileUrlFunction===this.tileUrlFunction?this.tileUrlFunction.bind(this):this.tileUrlFunction},e.prototype.getUrls=function(){return this.urls},e.prototype.handleTileChange=function(t){var e,i=t.target,o=Object(c["c"])(i),n=i.getState();n==s["a"].LOADING?(this.tileLoadingKeys_[o]=!0,e=r.TILELOADSTART):o in this.tileLoadingKeys_&&(delete this.tileLoadingKeys_[o],e=n==s["a"].ERROR?r.TILELOADERROR:n==s["a"].LOADED?r.TILELOADEND:void 0),void 0!=e&&this.dispatchEvent(new y(e,i))},e.prototype.setTileLoadFunction=function(t){this.tileCache.clear(),this.tileLoadFunction=t,this.changed()},e.prototype.setTileUrlFunction=function(t,e){this.tileUrlFunction=t,this.tileCache.pruneExceptNewestZ(),"undefined"!==typeof e?this.setKey(e):this.changed()},e.prototype.setUrl=function(t){var e=Object(v["b"])(t);this.urls=e,this.setUrls(e)},e.prototype.setUrls=function(t){this.urls=t;var e=t.join("\n");this.generateTileUrlFunction_?this.setTileUrlFunction(Object(v["a"])(t,this.tileGrid),e):this.setKey(e)},e.prototype.tileUrlFunction=function(t,e,i){},e.prototype.useTile=function(t,e,i){var r=Object(h["d"])(t,e,i);this.tileCache.containsKey(r)&&this.tileCache.get(r)},e}(_);e["a"]=E},5831:function(t,e,i){"use strict";i.r(e),i.d(e,"VectorSourceEvent",(function(){return j}));var r=i("e300"),o=i("183a"),n=i("cef7"),a=i("01d4"),s=i("7b4f"),c=i("4a7d"),u=i("ff80"),l=i("6d83"),h=i("a43f"),p=i("57cb"),f=i("715e"),d=i("92fa"),g=i("0af5"),y=i("9f5e"),_=i("1300"),v=i("38f3"),b=i("1e8d"),E=i("6d8f"),O=function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),j=function(t){function e(e,i,r){var o=t.call(this,e)||this;return o.feature=i,o.features=r,o}return O(e,t),e}(n["a"]),F=function(t){function e(e){var i=this,o=e||{};i=t.call(this,{attributions:o.attributions,projection:void 0,state:l["a"].READY,wrapX:void 0===o.wrapX||o.wrapX})||this,i.loader_=p["c"],i.format_=o.format,i.overlaps_=void 0===o.overlaps||o.overlaps,i.url_=o.url,void 0!==o.loader?i.loader_=o.loader:void 0!==i.url_&&(Object(d["a"])(i.format_,7),i.loader_=Object(E["b"])(i.url_,i.format_)),i.strategy_=void 0!==o.strategy?o.strategy:f["a"];var n,a,s=void 0===o.useSpatialIndex||o.useSpatialIndex;return i.featuresRtree_=s?new c["a"]:null,i.loadedExtentsRtree_=new c["a"],i.nullGeometryFeatures_={},i.idIndex_={},i.uidIndex_={},i.featureChangeKeys_={},i.featuresCollection_=null,Array.isArray(o.features)?a=o.features:o.features&&(n=o.features,a=n.getArray()),s||void 0!==n||(n=new r["a"](a)),void 0!==a&&i.addFeaturesInternal(a),void 0!==n&&i.bindFeaturesCollection_(n),i}return O(e,t),e.prototype.addFeature=function(t){this.addFeatureInternal(t),this.changed()},e.prototype.addFeatureInternal=function(t){var e=Object(_["c"])(t);if(this.addToIndex_(e,t)){this.setupChangeEvents_(e,t);var i=t.getGeometry();if(i){var r=i.getExtent();this.featuresRtree_&&this.featuresRtree_.insert(r,t)}else this.nullGeometryFeatures_[e]=t;this.dispatchEvent(new j(h["a"].ADDFEATURE,t))}else this.featuresCollection_&&this.featuresCollection_.remove(t)},e.prototype.setupChangeEvents_=function(t,e){this.featureChangeKeys_[t]=[Object(b["a"])(e,a["a"].CHANGE,this.handleFeatureChange_,this),Object(b["a"])(e,s["a"].PROPERTYCHANGE,this.handleFeatureChange_,this)]},e.prototype.addToIndex_=function(t,e){var i=!0,r=e.getId();return void 0!==r&&(r.toString()in this.idIndex_?i=!1:this.idIndex_[r.toString()]=e),i&&(Object(d["a"])(!(t in this.uidIndex_),30),this.uidIndex_[t]=e),i},e.prototype.addFeatures=function(t){this.addFeaturesInternal(t),this.changed()},e.prototype.addFeaturesInternal=function(t){for(var e=[],i=[],r=[],o=0,n=t.length;o<n;o++){var a=t[o],s=Object(_["c"])(a);this.addToIndex_(s,a)&&i.push(a)}o=0;for(var c=i.length;o<c;o++){a=i[o],s=Object(_["c"])(a);this.setupChangeEvents_(s,a);var u=a.getGeometry();if(u){var l=u.getExtent();e.push(l),r.push(a)}else this.nullGeometryFeatures_[s]=a}this.featuresRtree_&&this.featuresRtree_.load(e,r);o=0;for(var p=i.length;o<p;o++)this.dispatchEvent(new j(h["a"].ADDFEATURE,i[o]))},e.prototype.bindFeaturesCollection_=function(t){var e=!1;this.addEventListener(h["a"].ADDFEATURE,(function(i){e||(e=!0,t.push(i.feature),e=!1)})),this.addEventListener(h["a"].REMOVEFEATURE,(function(i){e||(e=!0,t.remove(i.feature),e=!1)})),t.addEventListener(o["a"].ADD,function(t){e||(e=!0,this.addFeature(t.element),e=!1)}.bind(this)),t.addEventListener(o["a"].REMOVE,function(t){e||(e=!0,this.removeFeature(t.element),e=!1)}.bind(this)),this.featuresCollection_=t},e.prototype.clear=function(t){if(t){for(var e in this.featureChangeKeys_){var i=this.featureChangeKeys_[e];i.forEach(b["c"])}this.featuresCollection_||(this.featureChangeKeys_={},this.idIndex_={},this.uidIndex_={})}else if(this.featuresRtree_)for(var r in this.featuresRtree_.forEach(this.removeFeatureInternal.bind(this)),this.nullGeometryFeatures_)this.removeFeatureInternal(this.nullGeometryFeatures_[r]);this.featuresCollection_&&this.featuresCollection_.clear(),this.featuresRtree_&&this.featuresRtree_.clear(),this.nullGeometryFeatures_={};var o=new j(h["a"].CLEAR);this.dispatchEvent(o),this.changed()},e.prototype.forEachFeature=function(t){if(this.featuresRtree_)return this.featuresRtree_.forEach(t);this.featuresCollection_&&this.featuresCollection_.forEach(t)},e.prototype.forEachFeatureAtCoordinateDirect=function(t,e){var i=[t[0],t[1],t[0],t[1]];return this.forEachFeatureInExtent(i,(function(i){var r=i.getGeometry();return r.intersectsCoordinate(t)?e(i):void 0}))},e.prototype.forEachFeatureInExtent=function(t,e){if(this.featuresRtree_)return this.featuresRtree_.forEachInExtent(t,e);this.featuresCollection_&&this.featuresCollection_.forEach(e)},e.prototype.forEachFeatureIntersectingExtent=function(t,e){return this.forEachFeatureInExtent(t,(function(i){var r=i.getGeometry();if(r.intersectsExtent(t)){var o=e(i);if(o)return o}}))},e.prototype.getFeaturesCollection=function(){return this.featuresCollection_},e.prototype.getFeatures=function(){var t;return this.featuresCollection_?t=this.featuresCollection_.getArray():this.featuresRtree_&&(t=this.featuresRtree_.getAll(),Object(v["d"])(this.nullGeometryFeatures_)||Object(y["c"])(t,Object(v["c"])(this.nullGeometryFeatures_))),t},e.prototype.getFeaturesAtCoordinate=function(t){var e=[];return this.forEachFeatureAtCoordinateDirect(t,(function(t){e.push(t)})),e},e.prototype.getFeaturesInExtent=function(t){return this.featuresRtree_?this.featuresRtree_.getInExtent(t):this.featuresCollection_?this.featuresCollection_.getArray():[]},e.prototype.getClosestFeatureToCoordinate=function(t,e){var i=t[0],r=t[1],o=null,n=[NaN,NaN],a=1/0,s=[-1/0,-1/0,1/0,1/0],c=e||p["b"];return this.featuresRtree_.forEachInExtent(s,(function(t){if(c(t)){var e=t.getGeometry(),u=a;if(a=e.closestPointXY(i,r,n,a),a<u){o=t;var l=Math.sqrt(a);s[0]=i-l,s[1]=r-l,s[2]=i+l,s[3]=r+l}}})),o},e.prototype.getExtent=function(t){return this.featuresRtree_.getExtent(t)},e.prototype.getFeatureById=function(t){var e=this.idIndex_[t.toString()];return void 0!==e?e:null},e.prototype.getFeatureByUid=function(t){var e=this.uidIndex_[t];return void 0!==e?e:null},e.prototype.getFormat=function(){return this.format_},e.prototype.getOverlaps=function(){return this.overlaps_},e.prototype.getUrl=function(){return this.url_},e.prototype.handleFeatureChange_=function(t){var e=t.target,i=Object(_["c"])(e),r=e.getGeometry();if(r){var o=r.getExtent();i in this.nullGeometryFeatures_?(delete this.nullGeometryFeatures_[i],this.featuresRtree_&&this.featuresRtree_.insert(o,e)):this.featuresRtree_&&this.featuresRtree_.update(o,e)}else i in this.nullGeometryFeatures_||(this.featuresRtree_&&this.featuresRtree_.remove(e),this.nullGeometryFeatures_[i]=e);var n=e.getId();if(void 0!==n){var a=n.toString();this.idIndex_[a]!==e&&(this.removeFromIdIndex_(e),this.idIndex_[a]=e)}else this.removeFromIdIndex_(e),this.uidIndex_[i]=e;this.changed(),this.dispatchEvent(new j(h["a"].CHANGEFEATURE,e))},e.prototype.hasFeature=function(t){var e=t.getId();return void 0!==e?e in this.idIndex_:Object(_["c"])(t)in this.uidIndex_},e.prototype.isEmpty=function(){return this.featuresRtree_.isEmpty()&&Object(v["d"])(this.nullGeometryFeatures_)},e.prototype.loadFeatures=function(t,e,i){var r=this.loadedExtentsRtree_,o=this.strategy_(t,e);this.loading=!1;for(var n=function(t,n){var s=o[t],c=r.forEachInExtent(s,(function(t){return Object(g["h"])(t.extent,s)}));c||(a.dispatchEvent(new j(h["a"].FEATURESLOADSTART)),a.loader_.call(a,s,e,i,function(t){this.dispatchEvent(new j(h["a"].FEATURESLOADEND,void 0,t))}.bind(a),function(){this.dispatchEvent(new j(h["a"].FEATURESLOADERROR))}.bind(a)),r.insert(s,{extent:s.slice()}),a.loading=a.loader_!==p["c"])},a=this,s=0,c=o.length;s<c;++s)n(s,c)},e.prototype.refresh=function(){this.clear(!0),this.loadedExtentsRtree_.clear(),t.prototype.refresh.call(this)},e.prototype.removeLoadedExtent=function(t){var e,i=this.loadedExtentsRtree_;i.forEachInExtent(t,(function(i){if(Object(g["q"])(i.extent,t))return e=i,!0})),e&&i.remove(e)},e.prototype.removeFeature=function(t){var e=Object(_["c"])(t);e in this.nullGeometryFeatures_?delete this.nullGeometryFeatures_[e]:this.featuresRtree_&&this.featuresRtree_.remove(t),this.removeFeatureInternal(t),this.changed()},e.prototype.removeFeatureInternal=function(t){var e=Object(_["c"])(t);this.featureChangeKeys_[e].forEach(b["c"]),delete this.featureChangeKeys_[e];var i=t.getId();void 0!==i&&delete this.idIndex_[i.toString()],delete this.uidIndex_[e],this.dispatchEvent(new j(h["a"].REMOVEFEATURE,t))},e.prototype.removeFromIdIndex_=function(t){var e=!1;for(var i in this.idIndex_)if(this.idIndex_[i]===t){delete this.idIndex_[i],e=!0;break}return e},e.prototype.setLoader=function(t){this.loader_=t},e.prototype.setUrl=function(t){Object(d["a"])(this.format_,7),this.setLoader(Object(E["b"])(t,this.format_))},e}(u["a"]);e["default"]=F},"6cf3":function(t,e,i){"use strict";var r=i("6d83"),o=i("91b1"),n=i("0af5"),a=i("92fa"),s=i("9cff"),c=i("089b"),u=i("256f"),l=i("e4e0"),h=function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),p=function(t){function e(e){var i=t.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,imageSmoothing:e.imageSmoothing,projection:Object(u["g"])("EPSG:3857"),reprojectionErrorThreshold:e.reprojectionErrorThreshold,state:r["a"].LOADING,tileLoadFunction:e.tileLoadFunction,wrapX:void 0===e.wrapX||e.wrapX,transition:e.transition})||this;if(i.tileJSON_=null,i.tileSize_=e.tileSize,e.url)if(e.jsonp)Object(l["a"])(e.url,i.handleTileJSONResponse.bind(i),i.handleTileJSONError.bind(i));else{var o=new XMLHttpRequest;o.addEventListener("load",i.onXHRLoad_.bind(i)),o.addEventListener("error",i.onXHRError_.bind(i)),o.open("GET",e.url),o.send()}else e.tileJSON?i.handleTileJSONResponse(e.tileJSON):Object(a["a"])(!1,51);return i}return h(e,t),e.prototype.onXHRLoad_=function(t){var e=t.target;if(!e.status||e.status>=200&&e.status<300){var i=void 0;try{i=JSON.parse(e.responseText)}catch(r){return void this.handleTileJSONError()}this.handleTileJSONResponse(i)}else this.handleTileJSONError()},e.prototype.onXHRError_=function(t){this.handleTileJSONError()},e.prototype.getTileJSON=function(){return this.tileJSON_},e.prototype.handleTileJSONResponse=function(t){var e,i=Object(u["g"])("EPSG:4326"),o=this.getProjection();if(void 0!==t["bounds"]){var a=Object(u["j"])(i,o);e=Object(n["a"])(t["bounds"],a)}var l=t["minzoom"]||0,h=t["maxzoom"]||22,p=Object(c["b"])({extent:Object(c["c"])(o),maxZoom:h,minZoom:l,tileSize:this.tileSize_});if(this.tileGrid=p,this.tileUrlFunction=Object(s["a"])(t["tiles"],p),void 0!==t["attribution"]&&!this.getAttributions()){var f=void 0!==e?e:i.getExtent();this.setAttributions((function(e){return Object(n["G"])(f,e.extent)?[t["attribution"]]:null}))}this.tileJSON_=t,this.setState(r["a"].READY)},e.prototype.handleTileJSONError=function(){this.setState(r["a"].ERROR)},e}(o["a"]);e["a"]=p},"6d83":function(t,e,i){"use strict";e["a"]={UNDEFINED:"undefined",LOADING:"loading",READY:"ready",ERROR:"error"}},"78db2":function(t,e,i){"use strict";var r=i("01d4"),o=i("6962"),n=i("8d87"),a=i("acc1"),s=i("54b9"),c=i("c15a"),u=i("0af5"),l=i("089b"),h=i("9f5e"),p=i("2c30"),f=i("6d8f"),d=i("345d"),g=function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),y=function(t){function e(e){var i=this,r=e.projection||"EPSG:3857",a=e.extent||Object(l["c"])(r),s=e.tileGrid||Object(l["b"])({extent:a,maxResolution:e.maxResolution,maxZoom:void 0!==e.maxZoom?e.maxZoom:22,minZoom:e.minZoom,tileSize:e.tileSize||512});return i=t.call(this,{attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,cacheSize:e.cacheSize,opaque:!1,projection:r,state:e.state,tileGrid:s,tileLoadFunction:e.tileLoadFunction?e.tileLoadFunction:_,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:void 0===e.wrapX||e.wrapX,transition:e.transition,zDirection:void 0===e.zDirection?1:e.zDirection})||this,i.format_=e.format?e.format:null,i.loadingTiles_={},i.sourceTileCache=new n["a"](i.tileCache.highWaterMark),i.overlaps_=void 0==e.overlaps||e.overlaps,i.tileClass=e.tileClass?e.tileClass:o["a"],i.tileGrids_={},i}return g(e,t),e.prototype.getFeaturesInExtent=function(t){var e=[],i=this.tileCache;if(0===i.getCount())return e;var r=Object(p["b"])(i.peekFirstKey())[0],o=this.tileGrid;return i.forEach((function(i){if(i.tileCoord[0]===r&&i.getState()===a["a"].LOADED)for(var n=i.getSourceTiles(),s=0,c=n.length;s<c;++s){var l=n[s],h=l.tileCoord;if(Object(u["G"])(t,o.getTileCoordExtent(h))){var p=l.getFeatures();if(p)for(var f=0,d=p.length;f<d;++f){var g=p[f],y=g.getGeometry();Object(u["G"])(t,y.getExtent())&&e.push(g)}}}})),e},e.prototype.getOverlaps=function(){return this.overlaps_},e.prototype.clear=function(){this.tileCache.clear(),this.sourceTileCache.clear()},e.prototype.expireCache=function(e,i){t.prototype.expireCache.call(this,e,i),this.sourceTileCache.expireCache({})},e.prototype.getSourceTiles=function(t,e,i){var o=i.wrappedTileCoord,n=this.getTileGridForProjection(e),s=n.getTileCoordExtent(o),c=o[0],l=n.getResolution(c);Object(u["d"])(s,-l,s);var p=this.tileGrid,f=p.getExtent();f&&Object(u["C"])(s,f,s);var d,g,y,_=p.getZForResolution(l,1),v=p.getMinZoom(),b=i.sourceTiles;if(b&&b.length>0&&b[0].tileCoord[0]===_)d=b,g=!0,y=_;else{d=[],y=_+1;do{--y,g=!0,p.forEachTileCoord(s,y,function(o){var n,s=this.tileUrlFunction(o,t,e);if(void 0!==s)if(this.sourceTileCache.containsKey(s)){n=this.sourceTileCache.get(s);var c=n.getState();if(c===a["a"].LOADED||c===a["a"].ERROR||c===a["a"].EMPTY)return void d.push(n)}else y===_&&(n=new this.tileClass(o,a["a"].IDLE,s,this.format_,this.tileLoadFunction),n.extent=p.getTileCoordExtent(o),n.projection=e,n.resolution=p.getResolution(o[0]),this.sourceTileCache.set(s,n),n.addEventListener(r["a"].CHANGE,this.handleTileChange.bind(this)),n.load());g=g&&n&&n.getState()===a["a"].LOADED,n&&n.getState()!==a["a"].EMPTY&&i.getState()===a["a"].IDLE&&(i.loadingSourceTiles++,n.addEventListener(r["a"].CHANGE,(function t(){var e=n.getState(),o=n.getKey();if(e===a["a"].LOADED||e===a["a"].ERROR){e===a["a"].LOADED?(n.removeEventListener(r["a"].CHANGE,t),i.loadingSourceTiles--,delete i.errorSourceTileKeys[o]):e===a["a"].ERROR&&(i.errorSourceTileKeys[o]=!0);var s=Object.keys(i.errorSourceTileKeys).length;i.loadingSourceTiles-s===0&&(i.hifi=0===s,i.sourceZ=_,i.setState(a["a"].LOADED))}})))}.bind(this)),g||(d.length=0)}while(!g&&y>v)}return i.getState()===a["a"].IDLE&&i.setState(a["a"].LOADING),g&&(i.hifi=_===y,i.sourceZ=y,i.getState()<a["a"].LOADED?i.setState(a["a"].LOADED):b&&Object(h["b"])(d,b)||(i.sourceTiles=d)),d},e.prototype.getTile=function(t,e,i,r,o){var n,s=Object(p["d"])(t,e,i),l=this.getKey();if(this.tileCache.containsKey(s)&&(n=this.tileCache.get(s),n.key===l))return n;var h=[t,e,i],f=this.getTileCoordForTileUrlFunction(h,o),d=this.getTileGrid().getExtent(),g=this.getTileGridForProjection(o);if(f&&d){var y=g.getTileCoordExtent(f);Object(u["d"])(y,-g.getResolution(t),y),Object(u["G"])(d,y)||(f=null)}var _=!0;if(null!==f){var v=this.tileGrid,b=g.getResolution(t),E=v.getZForResolution(b,1),O=g.getTileCoordExtent(f);Object(u["d"])(O,-b,O),v.forEachTileCoord(O,E,function(t){_=_&&!this.tileUrlFunction(t,r,o)}.bind(this))}var j=new c["a"](h,_?a["a"].EMPTY:a["a"].IDLE,f,this.getSourceTiles.bind(this,r,o));return j.key=l,n?(j.interimTile=n,j.refreshInterimChain(),this.tileCache.replace(s,j)):this.tileCache.set(s,j),j},e.prototype.getTileGridForProjection=function(t){var e=t.getCode(),i=this.tileGrids_[e];if(!i){var r=this.tileGrid;i=Object(l["a"])(t,void 0,r?r.getTileSize(r.getMinZoom()):void 0),this.tileGrids_[e]=i}return i},e.prototype.getTilePixelRatio=function(t){return t},e.prototype.getTilePixelSize=function(t,e,i){var r=this.getTileGridForProjection(i),o=Object(d["c"])(r.getTileSize(t),this.tmpSize);return[Math.round(o[0]*e),Math.round(o[1]*e)]},e.prototype.updateCacheSize=function(e,i){t.prototype.updateCacheSize.call(this,2*e,i)},e}(s["a"]);function _(t,e){t.setLoader((function(i,r,o){Object(f["a"])(e,t.getFormat(),i,r,o,t.onLoad.bind(t),t.onError.bind(t))}))}e["a"]=y},"91b1":function(t,e,i){"use strict";var r=i("01d4"),o=i("7f98"),n=i("2efc"),a=i("8d87"),s=i("acc1"),c=i("54b9"),u=i("a504"),l=i("1350"),h=i("256f"),p=i("2c30"),f=i("089b"),d=i("1300"),g=function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),y=function(t){function e(e){var i=t.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,opaque:e.opaque,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction?e.tileLoadFunction:_,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX,transition:e.transition,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection})||this;return i.crossOrigin=void 0!==e.crossOrigin?e.crossOrigin:null,i.tileClass=void 0!==e.tileClass?e.tileClass:o["a"],i.tileCacheForProjection={},i.tileGridForProjection={},i.reprojectionErrorThreshold_=e.reprojectionErrorThreshold,i.contextOptions_=!1===e.imageSmoothing?l["a"]:void 0,i.renderReprojectionEdges_=!1,i}return g(e,t),e.prototype.canExpireCache=function(){if(!u["a"])return t.prototype.canExpireCache.call(this);if(this.tileCache.canExpireCache())return!0;for(var e in this.tileCacheForProjection)if(this.tileCacheForProjection[e].canExpireCache())return!0;return!1},e.prototype.expireCache=function(e,i){if(u["a"]){var r=this.getTileCacheForProjection(e);for(var o in this.tileCache.expireCache(this.tileCache==r?i:{}),this.tileCacheForProjection){var n=this.tileCacheForProjection[o];n.expireCache(n==r?i:{})}}else t.prototype.expireCache.call(this,e,i)},e.prototype.getContextOptions=function(){return this.contextOptions_},e.prototype.getGutterForProjection=function(t){return u["a"]&&this.getProjection()&&t&&!Object(h["c"])(this.getProjection(),t)?0:this.getGutter()},e.prototype.getGutter=function(){return 0},e.prototype.getKey=function(){return t.prototype.getKey.call(this)+(this.contextOptions_?"\n"+JSON.stringify(this.contextOptions_):"")},e.prototype.getOpaque=function(e){return!(u["a"]&&this.getProjection()&&e&&!Object(h["c"])(this.getProjection(),e))&&t.prototype.getOpaque.call(this,e)},e.prototype.getTileGridForProjection=function(e){if(!u["a"])return t.prototype.getTileGridForProjection.call(this,e);var i=this.getProjection();if(!this.tileGrid||i&&!Object(h["c"])(i,e)){var r=Object(d["c"])(e);return r in this.tileGridForProjection||(this.tileGridForProjection[r]=Object(f["d"])(e)),this.tileGridForProjection[r]}return this.tileGrid},e.prototype.getTileCacheForProjection=function(e){if(!u["a"])return t.prototype.getTileCacheForProjection.call(this,e);var i=this.getProjection();if(!i||Object(h["c"])(i,e))return this.tileCache;var r=Object(d["c"])(e);return r in this.tileCacheForProjection||(this.tileCacheForProjection[r]=new a["a"](this.tileCache.highWaterMark)),this.tileCacheForProjection[r]},e.prototype.createTile_=function(t,e,i,o,n,a){var c=[t,e,i],u=this.getTileCoordForTileUrlFunction(c,n),l=u?this.tileUrlFunction(u,o,n):void 0,h=new this.tileClass(c,void 0!==l?s["a"].IDLE:s["a"].EMPTY,void 0!==l?l:"",this.crossOrigin,this.tileLoadFunction,this.tileOptions);return h.key=a,h.addEventListener(r["a"].CHANGE,this.handleTileChange.bind(this)),h},e.prototype.getTile=function(t,e,i,r,o){var a=this.getProjection();if(u["a"]&&a&&o&&!Object(h["c"])(a,o)){var s=this.getTileCacheForProjection(o),c=[t,e,i],l=void 0,f=Object(p["c"])(c);s.containsKey(f)&&(l=s.get(f));var d=this.getKey();if(l&&l.key==d)return l;var g=this.getTileGridForProjection(a),y=this.getTileGridForProjection(o),_=this.getTileCoordForTileUrlFunction(c,o),v=new n["a"](a,g,o,y,c,_,this.getTilePixelRatio(r),this.getGutter(),function(t,e,i,r){return this.getTileInternal(t,e,i,r,a)}.bind(this),this.reprojectionErrorThreshold_,this.renderReprojectionEdges_,this.contextOptions_);return v.key=d,l?(v.interimTile=l,v.refreshInterimChain(),s.replace(f,v)):s.set(f,v),v}return this.getTileInternal(t,e,i,r,a||o)},e.prototype.getTileInternal=function(t,e,i,r,o){var n=null,a=Object(p["d"])(t,e,i),c=this.getKey();if(this.tileCache.containsKey(a)){if(n=this.tileCache.get(a),n.key!=c){var u=n;n=this.createTile_(t,e,i,r,o,c),u.getState()==s["a"].IDLE?n.interimTile=u.interimTile:n.interimTile=u,n.refreshInterimChain(),this.tileCache.replace(a,n)}}else n=this.createTile_(t,e,i,r,o,c),this.tileCache.set(a,n);return n},e.prototype.setRenderReprojectionEdges=function(t){if(u["a"]&&this.renderReprojectionEdges_!=t){for(var e in this.renderReprojectionEdges_=t,this.tileCacheForProjection)this.tileCacheForProjection[e].clear();this.changed()}},e.prototype.setTileGridForProjection=function(t,e){if(u["a"]){var i=Object(h["g"])(t);if(i){var r=Object(d["c"])(i);r in this.tileGridForProjection||(this.tileGridForProjection[r]=e)}}},e}(c["a"]);function _(t,e){t.getImage().src=e}e["a"]=y},a43f:function(t,e,i){"use strict";e["a"]={ADDFEATURE:"addfeature",CHANGEFEATURE:"changefeature",CLEAR:"clear",REMOVEFEATURE:"removefeature",FEATURESLOADSTART:"featuresloadstart",FEATURESLOADEND:"featuresloadend",FEATURESLOADERROR:"featuresloaderror"}},d0e9:function(t,e,i){"use strict";i.r(e),i.d(e,"ATTRIBUTION",(function(){return u}));var r=i("91b1"),o=i("089b"),n=function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),a=function(t){function e(e){var i=this,r=e||{},n=void 0!==r.projection?r.projection:"EPSG:3857",a=void 0!==r.tileGrid?r.tileGrid:Object(o["b"])({extent:Object(o["c"])(n),maxResolution:r.maxResolution,maxZoom:r.maxZoom,minZoom:r.minZoom,tileSize:r.tileSize});return i=t.call(this,{attributions:r.attributions,cacheSize:r.cacheSize,crossOrigin:r.crossOrigin,imageSmoothing:r.imageSmoothing,opaque:r.opaque,projection:n,reprojectionErrorThreshold:r.reprojectionErrorThreshold,tileGrid:a,tileLoadFunction:r.tileLoadFunction,tilePixelRatio:r.tilePixelRatio,tileUrlFunction:r.tileUrlFunction,url:r.url,urls:r.urls,wrapX:void 0===r.wrapX||r.wrapX,transition:r.transition,attributionsCollapsible:r.attributionsCollapsible,zDirection:r.zDirection})||this,i}return n(e,t),e}(r["a"]),s=a,c=function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),u='&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.',l=function(t){function e(e){var i,r=this,o=e||{};i=void 0!==o.attributions?o.attributions:[u];var n=void 0!==o.crossOrigin?o.crossOrigin:"anonymous",a=void 0!==o.url?o.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";return r=t.call(this,{attributions:i,attributionsCollapsible:!1,cacheSize:o.cacheSize,crossOrigin:n,imageSmoothing:o.imageSmoothing,maxZoom:void 0!==o.maxZoom?o.maxZoom:19,opaque:void 0===o.opaque||o.opaque,reprojectionErrorThreshold:o.reprojectionErrorThreshold,tileLoadFunction:o.tileLoadFunction,transition:o.transition,url:a,wrapX:o.wrapX})||this,r}return c(e,t),e}(s);e["default"]=l},ff80:function(t,e,i){"use strict";var r=i("e269"),o=i("6d83"),n=i("1300"),a=i("256f"),s=function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),c=function(t){function e(e){var i=t.call(this)||this;return i.projection_=Object(a["g"])(e.projection),i.attributions_=u(e.attributions),i.attributionsCollapsible_=void 0===e.attributionsCollapsible||e.attributionsCollapsible,i.loading=!1,i.state_=void 0!==e.state?e.state:o["a"].READY,i.wrapX_=void 0!==e.wrapX&&e.wrapX,i}return s(e,t),e.prototype.getAttributions=function(){return this.attributions_},e.prototype.getAttributionsCollapsible=function(){return this.attributionsCollapsible_},e.prototype.getProjection=function(){return this.projection_},e.prototype.getResolutions=function(){return Object(n["b"])()},e.prototype.getState=function(){return this.state_},e.prototype.getWrapX=function(){return this.wrapX_},e.prototype.getContextOptions=function(){},e.prototype.refresh=function(){this.changed()},e.prototype.setAttributions=function(t){this.attributions_=u(t),this.changed()},e.prototype.setState=function(t){this.state_=t,this.changed()},e}(r["a"]);function u(t){return t?Array.isArray(t)?function(e){return t}:"function"===typeof t?t:function(e){return[t]}:null}e["a"]=c}}]);