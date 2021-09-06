(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~5e5ff33c"],{"5e7e":function(t,e,r){"use strict";r.d(e,"b",(function(){return m})),r.d(e,"a",(function(){return T}));var n={LOST:"webglcontextlost",RESTORED:"webglcontextrestored"},i=r("da5c"),o="\n  precision mediump float;\n  \n  attribute vec2 a_position;\n  varying vec2 v_texCoord;\n  varying vec2 v_screenCoord;\n  \n  uniform vec2 u_screenSize;\n   \n  void main() {\n    v_texCoord = a_position * 0.5 + 0.5;\n    v_screenCoord = v_texCoord * u_screenSize;\n    gl_Position = vec4(a_position, 0.0, 1.0);\n  }\n",a="\n  precision mediump float;\n   \n  uniform sampler2D u_image;\n   \n  varying vec2 v_texCoord;\n   \n  void main() {\n    gl_FragColor = texture2D(u_image, v_texCoord);\n  }\n",s=function(){function t(t){this.gl_=t.webGlContext;var e=this.gl_;this.scaleRatio_=t.scaleRatio||1,this.renderTargetTexture_=e.createTexture(),this.renderTargetTextureSize_=null,this.frameBuffer_=e.createFramebuffer();var r=e.createShader(e.VERTEX_SHADER);e.shaderSource(r,t.vertexShader||o),e.compileShader(r);var n=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(n,t.fragmentShader||a),e.compileShader(n),this.renderTargetProgram_=e.createProgram(),e.attachShader(this.renderTargetProgram_,r),e.attachShader(this.renderTargetProgram_,n),e.linkProgram(this.renderTargetProgram_),this.renderTargetVerticesBuffer_=e.createBuffer();var i=[-1,-1,1,-1,-1,1,1,-1,1,1,-1,1];e.bindBuffer(e.ARRAY_BUFFER,this.renderTargetVerticesBuffer_),e.bufferData(e.ARRAY_BUFFER,new Float32Array(i),e.STATIC_DRAW),this.renderTargetAttribLocation_=e.getAttribLocation(this.renderTargetProgram_,"a_position"),this.renderTargetUniformLocation_=e.getUniformLocation(this.renderTargetProgram_,"u_screenSize"),this.renderTargetTextureLocation_=e.getUniformLocation(this.renderTargetProgram_,"u_image"),this.uniforms_=[],t.uniforms&&Object.keys(t.uniforms).forEach(function(r){this.uniforms_.push({value:t.uniforms[r],location:e.getUniformLocation(this.renderTargetProgram_,r)})}.bind(this))}return t.prototype.getGL=function(){return this.gl_},t.prototype.init=function(t){var e=this.getGL(),r=[e.drawingBufferWidth*this.scaleRatio_,e.drawingBufferHeight*this.scaleRatio_];if(e.bindFramebuffer(e.FRAMEBUFFER,this.getFrameBuffer()),e.viewport(0,0,r[0],r[1]),!this.renderTargetTextureSize_||this.renderTargetTextureSize_[0]!==r[0]||this.renderTargetTextureSize_[1]!==r[1]){this.renderTargetTextureSize_=r;var n=0,i=e.RGBA,o=0,a=e.RGBA,s=e.UNSIGNED_BYTE,f=null;e.bindTexture(e.TEXTURE_2D,this.renderTargetTexture_),e.texImage2D(e.TEXTURE_2D,n,i,r[0],r[1],o,a,s,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.renderTargetTexture_,0)}},t.prototype.apply=function(t,e){var r=this.getGL(),n=t.size;r.bindFramebuffer(r.FRAMEBUFFER,e?e.getFrameBuffer():null),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,this.renderTargetTexture_),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.enable(r.BLEND),r.blendFunc(r.ONE,r.ONE_MINUS_SRC_ALPHA),r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight),r.bindBuffer(r.ARRAY_BUFFER,this.renderTargetVerticesBuffer_),r.useProgram(this.renderTargetProgram_),r.enableVertexAttribArray(this.renderTargetAttribLocation_),r.vertexAttribPointer(this.renderTargetAttribLocation_,2,r.FLOAT,!1,0,0),r.uniform2f(this.renderTargetUniformLocation_,n[0],n[1]),r.uniform1i(this.renderTargetTextureLocation_,0),this.applyUniforms(t),r.drawArrays(r.TRIANGLES,0,6)},t.prototype.getFrameBuffer=function(){return this.frameBuffer_},t.prototype.applyUniforms=function(t){var e,r=this.getGL(),n=1;this.uniforms_.forEach((function(i){if(e="function"===typeof i.value?i.value(t):i.value,e instanceof HTMLCanvasElement||e instanceof ImageData)i.texture||(i.texture=r.createTexture()),r.activeTexture(r["TEXTURE"+n]),r.bindTexture(r.TEXTURE_2D,i.texture),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),e instanceof ImageData?r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,e.width,e.height,0,r.UNSIGNED_BYTE,new Uint8Array(e.data)):r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,e),r.uniform1i(i.location,n++);else if(Array.isArray(e))switch(e.length){case 2:return void r.uniform2f(i.location,e[0],e[1]);case 3:return void r.uniform3f(i.location,e[0],e[1],e[2]);case 4:return void r.uniform4f(i.location,e[0],e[1],e[2],e[3]);default:return}else"number"===typeof e&&r.uniform1f(i.location,e)}))},t}(),f=s,u=r("86e0"),c=r("92fa"),h=r("38f3"),_=r("a896");function l(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function p(t,e){return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}var d=r("1300"),E=r("9f5e"),g=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),m={PROJECTION_MATRIX:"u_projectionMatrix",OFFSET_SCALE_MATRIX:"u_offsetScaleMatrix",OFFSET_ROTATION_MATRIX:"u_offsetRotateMatrix",TIME:"u_time",ZOOM:"u_zoom",RESOLUTION:"u_resolution"},T={UNSIGNED_BYTE:u["g"],UNSIGNED_SHORT:u["i"],UNSIGNED_INT:u["h"],FLOAT:u["d"]},v=function(t){function e(e){var r=t.call(this)||this,i=e||{};r.boundHandleWebGLContextLost_=r.handleWebGLContextLost.bind(r),r.boundHandleWebGLContextRestored_=r.handleWebGLContextRestored.bind(r),r.canvas_=document.createElement("canvas"),r.canvas_.style.position="absolute",r.canvas_.style.left="0",r.gl_=Object(u["j"])(r.canvas_);var o=r.getGL();if(r.bufferCache_={},r.currentProgram_=null,Object(c["a"])(Object(E["d"])(Object(u["k"])(),"OES_element_index_uint"),63),o.getExtension("OES_element_index_uint"),r.canvas_.addEventListener(n.LOST,r.boundHandleWebGLContextLost_),r.canvas_.addEventListener(n.RESTORED,r.boundHandleWebGLContextRestored_),r.offsetRotateMatrix_=Object(_["c"])(),r.offsetScaleMatrix_=Object(_["c"])(),r.tmpMat4_=l(),r.uniformLocations_={},r.attribLocations_={},r.uniforms_=[],i.uniforms)for(var a in i.uniforms)r.uniforms_.push({name:a,value:i.uniforms[a]});return r.postProcessPasses_=i.postProcesses?i.postProcesses.map((function(t){return new f({webGlContext:o,scaleRatio:t.scaleRatio,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,uniforms:t.uniforms})})):[new f({webGlContext:o})],r.shaderCompileErrors_=null,r.startTime_=Date.now(),r}return g(e,t),e.prototype.bindBuffer=function(t){var e=this.getGL(),r=Object(d["c"])(t),n=this.bufferCache_[r];if(!n){var i=e.createBuffer();n={buffer:t,webGlBuffer:i},this.bufferCache_[r]=n}e.bindBuffer(t.getType(),n.webGlBuffer)},e.prototype.flushBufferData=function(t){var e=this.getGL();this.bindBuffer(t),e.bufferData(t.getType(),t.getArray(),t.getUsage())},e.prototype.deleteBuffer=function(t){var e=this.getGL(),r=Object(d["c"])(t),n=this.bufferCache_[r];e.isContextLost()||e.deleteBuffer(n.buffer),delete this.bufferCache_[r]},e.prototype.disposeInternal=function(){this.canvas_.removeEventListener(n.LOST,this.boundHandleWebGLContextLost_),this.canvas_.removeEventListener(n.RESTORED,this.boundHandleWebGLContextRestored_)},e.prototype.prepareDraw=function(t){var e=this.getGL(),r=this.getCanvas(),n=t.size,i=t.pixelRatio;r.width=n[0]*i,r.height=n[1]*i,r.style.width=n[0]+"px",r.style.height=n[1]+"px",e.useProgram(this.currentProgram_);for(var o=this.postProcessPasses_.length-1;o>=0;o--)this.postProcessPasses_[o].init(t);e.bindTexture(e.TEXTURE_2D,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.useProgram(this.currentProgram_),this.applyFrameState(t),this.applyUniforms(t)},e.prototype.prepareDrawToRenderTarget=function(t,e,r){var n=this.getGL(),i=e.getSize();n.bindFramebuffer(n.FRAMEBUFFER,e.getFramebuffer()),n.viewport(0,0,i[0],i[1]),n.bindTexture(n.TEXTURE_2D,e.getTexture()),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.enable(n.BLEND),n.blendFunc(n.ONE,r?n.ZERO:n.ONE_MINUS_SRC_ALPHA),n.useProgram(this.currentProgram_),this.applyFrameState(t),this.applyUniforms(t)},e.prototype.drawElements=function(t,e){var r=this.getGL(),n=r.UNSIGNED_INT,i=4,o=e-t,a=t*i;r.drawElements(r.TRIANGLES,o,n,a)},e.prototype.finalizeDraw=function(t){for(var e=0;e<this.postProcessPasses_.length;e++)this.postProcessPasses_[e].apply(t,this.postProcessPasses_[e+1]||null)},e.prototype.getCanvas=function(){return this.canvas_},e.prototype.getGL=function(){return this.gl_},e.prototype.applyFrameState=function(t){var e=t.size,r=t.viewState.rotation,n=Object(_["g"])(this.offsetScaleMatrix_);Object(_["i"])(n,2/e[0],2/e[1]);var i=Object(_["g"])(this.offsetRotateMatrix_);0!==r&&Object(_["h"])(i,-r),this.setUniformMatrixValue(m.OFFSET_SCALE_MATRIX,p(this.tmpMat4_,n)),this.setUniformMatrixValue(m.OFFSET_ROTATION_MATRIX,p(this.tmpMat4_,i)),this.setUniformFloatValue(m.TIME,.001*(Date.now()-this.startTime_)),this.setUniformFloatValue(m.ZOOM,t.viewState.zoom),this.setUniformFloatValue(m.RESOLUTION,t.viewState.resolution)},e.prototype.applyUniforms=function(t){var e,r=this.getGL(),n=0;this.uniforms_.forEach(function(i){if(e="function"===typeof i.value?i.value(t):i.value,e instanceof HTMLCanvasElement||e instanceof HTMLImageElement||e instanceof ImageData){i.texture||(i.prevValue=void 0,i.texture=r.createTexture()),r.activeTexture(r["TEXTURE"+n]),r.bindTexture(r.TEXTURE_2D,i.texture),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE);var o=!(e instanceof HTMLImageElement)||e.complete;o&&i.prevValue!==e&&(i.prevValue=e,r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,e)),r.uniform1i(this.getUniformLocation(i.name),n++)}else if(Array.isArray(e)&&6===e.length)this.setUniformMatrixValue(i.name,p(this.tmpMat4_,e));else if(Array.isArray(e)&&e.length<=4)switch(e.length){case 2:return void r.uniform2f(this.getUniformLocation(i.name),e[0],e[1]);case 3:return void r.uniform3f(this.getUniformLocation(i.name),e[0],e[1],e[2]);case 4:return void r.uniform4f(this.getUniformLocation(i.name),e[0],e[1],e[2],e[3]);default:return}else"number"===typeof e&&r.uniform1f(this.getUniformLocation(i.name),e)}.bind(this))},e.prototype.useProgram=function(t){if(t==this.currentProgram_)return!1;var e=this.getGL();return e.useProgram(t),this.currentProgram_=t,this.uniformLocations_={},this.attribLocations_={},!0},e.prototype.compileShader=function(t,e){var r=this.getGL(),n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n},e.prototype.getProgram=function(t,e){var r=this.getGL(),n=this.compileShader(t,r.FRAGMENT_SHADER),i=this.compileShader(e,r.VERTEX_SHADER);this.shaderCompileErrors_=null,r.getShaderInfoLog(n)&&(this.shaderCompileErrors_="Fragment shader compilation failed:\n"+r.getShaderInfoLog(n)),r.getShaderInfoLog(i)&&(this.shaderCompileErrors_=(this.shaderCompileErrors_||"")+"Vertex shader compilation failed:\n"+r.getShaderInfoLog(i));var o=r.createProgram();return r.attachShader(o,n),r.attachShader(o,i),r.linkProgram(o),o},e.prototype.getShaderCompileErrors=function(){return this.shaderCompileErrors_},e.prototype.getUniformLocation=function(t){return void 0===this.uniformLocations_[t]&&(this.uniformLocations_[t]=this.getGL().getUniformLocation(this.currentProgram_,t)),this.uniformLocations_[t]},e.prototype.getAttributeLocation=function(t){return void 0===this.attribLocations_[t]&&(this.attribLocations_[t]=this.getGL().getAttribLocation(this.currentProgram_,t)),this.attribLocations_[t]},e.prototype.makeProjectionTransform=function(t,e){var r=t.size,n=t.viewState.rotation,i=t.viewState.resolution,o=t.viewState.center;return Object(_["g"])(e),Object(_["b"])(e,0,0,2/(i*r[0]),2/(i*r[1]),-n,-o[0],-o[1]),e},e.prototype.setUniformFloatValue=function(t,e){this.getGL().uniform1f(this.getUniformLocation(t),e)},e.prototype.setUniformMatrixValue=function(t,e){this.getGL().uniformMatrix4fv(this.getUniformLocation(t),!1,e)},e.prototype.enableAttributeArray_=function(t,e,r,n,i){var o=this.getAttributeLocation(t);o<0||(this.getGL().enableVertexAttribArray(o),this.getGL().vertexAttribPointer(o,e,r,!1,n,i))},e.prototype.enableAttributes=function(t){for(var e=x(t),r=0,n=0;n<t.length;n++){var i=t[n];this.enableAttributeArray_(i.name,i.size,i.type||u["d"],e,r),r+=i.size*b(i.type)}},e.prototype.handleWebGLContextLost=function(){Object(h["b"])(this.bufferCache_),this.currentProgram_=null},e.prototype.handleWebGLContextRestored=function(){},e.prototype.createTexture=function(t,e,r){var n=this.getGL(),i=r||n.createTexture(),o=0,a=n.RGBA,s=0,f=n.RGBA,u=n.UNSIGNED_BYTE;return n.bindTexture(n.TEXTURE_2D,i),e?n.texImage2D(n.TEXTURE_2D,o,a,f,u,e):n.texImage2D(n.TEXTURE_2D,o,a,t[0],t[1],s,f,u,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),i},e}(i["a"]);function x(t){for(var e=0,r=0;r<t.length;r++){var n=t[r];e+=n.size*b(n.type)}return e}function b(t){switch(t){case T.UNSIGNED_BYTE:return Uint8Array.BYTES_PER_ELEMENT;case T.UNSIGNED_SHORT:return Uint16Array.BYTES_PER_ELEMENT;case T.UNSIGNED_INT:return Uint32Array.BYTES_PER_ELEMENT;case T.FLOAT:default:return Float32Array.BYTES_PER_ELEMENT}}e["c"]=v},"7fd1":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n='var e="function"==typeof Object.assign?Object.assign:function(e,n){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),r=1,o=arguments.length;r<o;++r){var i=arguments[r];if(null!=i)for(var f in i)i.hasOwnProperty(f)&&(t[f]=i[f])}return t},n="GENERATE_BUFFERS",t=[],r={vertexPosition:0,indexPosition:0};function o(e,n,t,r,o){e[n+0]=t,e[n+1]=r,e[n+2]=o}function i(e,n,i,f,s,u){var a=3+s,l=e[n+0],v=e[n+1],c=t;c.length=s;for(var g=0;g<c.length;g++)c[g]=e[n+2+g];var b=u?u.vertexPosition:0,h=u?u.indexPosition:0,d=b/a;return o(i,b,l,v,0),c.length&&i.set(c,b+3),o(i,b+=a,l,v,1),c.length&&i.set(c,b+3),o(i,b+=a,l,v,2),c.length&&i.set(c,b+3),o(i,b+=a,l,v,3),c.length&&i.set(c,b+3),b+=a,f[h++]=d,f[h++]=d+1,f[h++]=d+3,f[h++]=d+1,f[h++]=d+2,f[h++]=d+3,r.vertexPosition=b,r.indexPosition=h,r}var f=self;f.onmessage=function(t){var r=t.data;if(r.type===n){for(var o=r.customAttributesCount,s=2+o,u=new Float32Array(r.renderInstructions),a=u.length/s,l=4*a*(o+3),v=new Uint32Array(6*a),c=new Float32Array(l),g=null,b=0;b<u.length;b+=s)g=i(u,b,c,v,o,g);var h=e({vertexBuffer:c.buffer,indexBuffer:v.buffer,renderInstructions:u.buffer},r);f.postMessage(h,[c.buffer,v.buffer,u.buffer])}};',i=new Blob([n],{type:"application/javascript"}),o=URL.createObjectURL(i);function a(){return new Worker(o)}},8135:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("919a"),i=function(){function t(){this.uniforms=[],this.attributes=[],this.varyings=[],this.sizeExpression="vec2(1.0)",this.rotationExpression="0.0",this.offsetExpression="vec2(0.0)",this.colorExpression="vec4(1.0)",this.texCoordExpression="vec4(0.0, 0.0, 1.0, 1.0)",this.discardExpression="false",this.rotateWithView=!1}return t.prototype.addUniform=function(t){return this.uniforms.push(t),this},t.prototype.addAttribute=function(t){return this.attributes.push(t),this},t.prototype.addVarying=function(t,e,r){return this.varyings.push({name:t,type:e,expression:r}),this},t.prototype.setSizeExpression=function(t){return this.sizeExpression=t,this},t.prototype.setRotationExpression=function(t){return this.rotationExpression=t,this},t.prototype.setSymbolOffsetExpression=function(t){return this.offsetExpression=t,this},t.prototype.setColorExpression=function(t){return this.colorExpression=t,this},t.prototype.setTextureCoordinateExpression=function(t){return this.texCoordExpression=t,this},t.prototype.setFragmentDiscardExpression=function(t){return this.discardExpression=t,this},t.prototype.setSymbolRotateWithView=function(t){return this.rotateWithView=t,this},t.prototype.getSizeExpression=function(){return this.sizeExpression},t.prototype.getOffsetExpression=function(){return this.offsetExpression},t.prototype.getColorExpression=function(){return this.colorExpression},t.prototype.getTextureCoordinateExpression=function(){return this.texCoordExpression},t.prototype.getFragmentDiscardExpression=function(){return this.discardExpression},t.prototype.getSymbolVertexShader=function(t){var e=this.rotateWithView?"u_offsetScaleMatrix * u_offsetRotateMatrix":"u_offsetScaleMatrix",r=this.attributes,n=this.varyings;return t&&(r=r.concat("vec4 a_hitColor"),n=n.concat({name:"v_hitColor",type:"vec4",expression:"a_hitColor"})),"precision mediump float;\nuniform mat4 u_projectionMatrix;\nuniform mat4 u_offsetScaleMatrix;\nuniform mat4 u_offsetRotateMatrix;\nuniform float u_time;\nuniform float u_zoom;\nuniform float u_resolution;\n"+this.uniforms.map((function(t){return"uniform "+t+";"})).join("\n")+"\nattribute vec2 a_position;\nattribute float a_index;\n"+r.map((function(t){return"attribute "+t+";"})).join("\n")+"\nvarying vec2 v_texCoord;\nvarying vec2 v_quadCoord;\n"+n.map((function(t){return"varying "+t.type+" "+t.name+";"})).join("\n")+"\nvoid main(void) {\n  mat4 offsetMatrix = "+e+";\n  vec2 halfSize = "+this.sizeExpression+" * 0.5;\n  vec2 offset = "+this.offsetExpression+";\n  float angle = "+this.rotationExpression+";\n  float offsetX;\n  float offsetY;\n  if (a_index == 0.0) {\n    offsetX = (offset.x - halfSize.x) * cos(angle) + (offset.y - halfSize.y) * sin(angle);\n    offsetY = (offset.y - halfSize.y) * cos(angle) - (offset.x - halfSize.x) * sin(angle);\n  } else if (a_index == 1.0) {\n    offsetX = (offset.x + halfSize.x) * cos(angle) + (offset.y - halfSize.y) * sin(angle);\n    offsetY = (offset.y - halfSize.y) * cos(angle) - (offset.x + halfSize.x) * sin(angle);\n  } else if (a_index == 2.0) {\n    offsetX = (offset.x + halfSize.x) * cos(angle) + (offset.y + halfSize.y) * sin(angle);\n    offsetY = (offset.y + halfSize.y) * cos(angle) - (offset.x + halfSize.x) * sin(angle);\n  } else {\n    offsetX = (offset.x - halfSize.x) * cos(angle) + (offset.y + halfSize.y) * sin(angle);\n    offsetY = (offset.y + halfSize.y) * cos(angle) - (offset.x - halfSize.x) * sin(angle);\n  }\n  vec4 offsets = offsetMatrix * vec4(offsetX, offsetY, 0.0, 0.0);\n  gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0) + offsets;\n  vec4 texCoord = "+this.texCoordExpression+";\n  float u = a_index == 0.0 || a_index == 3.0 ? texCoord.s : texCoord.p;\n  float v = a_index == 2.0 || a_index == 3.0 ? texCoord.t : texCoord.q;\n  v_texCoord = vec2(u, v);\n  u = a_index == 0.0 || a_index == 3.0 ? 0.0 : 1.0;\n  v = a_index == 2.0 || a_index == 3.0 ? 0.0 : 1.0;\n  v_quadCoord = vec2(u, v);\n"+n.map((function(t){return"  "+t.name+" = "+t.expression+";"})).join("\n")+"\n}"},t.prototype.getSymbolFragmentShader=function(t){var e=t?"  if (gl_FragColor.a < 0.1) { discard; } gl_FragColor = v_hitColor;":"",r=this.varyings;return t&&(r=r.concat({name:"v_hitColor",type:"vec4",expression:"a_hitColor"})),"precision mediump float;\nuniform float u_time;\nuniform float u_zoom;\nuniform float u_resolution;\n"+this.uniforms.map((function(t){return"uniform "+t+";"})).join("\n")+"\nvarying vec2 v_texCoord;\nvarying vec2 v_quadCoord;\n"+r.map((function(t){return"varying "+t.type+" "+t.name+";"})).join("\n")+"\nvoid main(void) {\n  if ("+this.discardExpression+") { discard; }\n  gl_FragColor = "+this.colorExpression+";\n  gl_FragColor.rgb *= gl_FragColor.a;\n"+e+"\n}"},t}();function o(t){var e=t.symbol,r=void 0!==e.size?e.size:1,o=e.color||"white",a=e.textureCoord||[0,0,1,1],s=e.offset||[0,0],f=void 0!==e.opacity?e.opacity:1,u=void 0!==e.rotation?e.rotation:0,c={inFragmentShader:!1,variables:[],attributes:[],stringLiteralsMap:{}},h=Object(n["b"])(c,r,n["a"].NUMBER_ARRAY|n["a"].NUMBER),_=Object(n["b"])(c,s,n["a"].NUMBER_ARRAY),l=Object(n["b"])(c,a,n["a"].NUMBER_ARRAY),p=Object(n["b"])(c,u,n["a"].NUMBER),d={inFragmentShader:!0,variables:c.variables,attributes:[],stringLiteralsMap:c.stringLiteralsMap},E=Object(n["b"])(d,o,n["a"].COLOR),g=Object(n["b"])(d,f,n["a"].NUMBER),m="1.0",T="vec2("+Object(n["b"])(d,r,n["a"].NUMBER_ARRAY|n["a"].NUMBER)+").x";switch(e.symbolType){case"square":break;case"image":break;case"circle":m="(1.0-smoothstep(1.-4./"+T+",1.,dot(v_quadCoord-.5,v_quadCoord-.5)*4.))";break;case"triangle":var v="(v_quadCoord*2.-1.)",x="(atan("+v+".x,"+v+".y))";m="(1.0-smoothstep(.5-3./"+T+",.5,cos(floor(.5+"+x+"/2.094395102)*2.094395102-"+x+")*length("+v+")))";break;default:throw new Error("Unexpected symbol type: "+e.symbolType)}var b=(new i).setSizeExpression("vec2("+h+")").setRotationExpression(p).setSymbolOffsetExpression(_).setTextureCoordinateExpression(l).setSymbolRotateWithView(!!e.rotateWithView).setColorExpression("vec4("+E+".rgb, "+E+".a * "+g+" * "+m+")");if(t.filter){var y=Object(n["b"])(d,t.filter,n["a"].BOOLEAN);b.setFragmentDiscardExpression("!"+y)}var R={};if(d.variables.forEach((function(e){b.addUniform("float u_"+e),R["u_"+e]=function(){if(!t.variables||void 0===t.variables[e])throw new Error("The following variable is missing from the style: "+e);var r=t.variables[e];return"string"===typeof r&&(r=Object(n["c"])(c,r)),void 0!==r?r:-9999999}})),"image"===e.symbolType&&e.src){var S=new Image;S.src=e.src,b.addUniform("sampler2D u_texture").setColorExpression(b.getColorExpression()+" * texture2D(u_texture, v_texCoord)"),R["u_texture"]=S}return d.attributes.forEach((function(t){-1===c.attributes.indexOf(t)&&c.attributes.push(t),b.addVarying("v_"+t,"float","a_"+t)})),c.attributes.forEach((function(t){b.addAttribute("float a_"+t)})),{builder:b,attributes:c.attributes.map((function(t){return{name:t,callback:function(e,r){var i=r[t];return"string"===typeof i&&(i=Object(n["c"])(c,i)),void 0!==i?i:-9999999}}})),uniforms:R}}},"86e0":function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"c",(function(){return o})),r.d(e,"f",(function(){return a})),r.d(e,"e",(function(){return s})),r.d(e,"b",(function(){return f})),r.d(e,"g",(function(){return u})),r.d(e,"i",(function(){return c})),r.d(e,"h",(function(){return h})),r.d(e,"d",(function(){return _})),r.d(e,"j",(function(){return p})),r.d(e,"k",(function(){return d}));var n,i=34962,o=34963,a=35040,s=35044,f=35048,u=5121,c=5123,h=5125,_=5126,l=["experimental-webgl","webgl","webkit-3d","moz-webgl"];function p(t,e){for(var r=l.length,n=0;n<r;++n)try{var i=t.getContext(l[n],e);if(i)return i}catch(o){}return null}function d(){if(!n){var t=document.createElement("canvas"),e=p(t);e&&(n=e.getSupportedExtensions())}return n}},aab2:function(t,e,r){"use strict";var n=r("86e0"),i=r("92fa"),o={STATIC_DRAW:n["e"],STREAM_DRAW:n["f"],DYNAMIC_DRAW:n["b"]},a=function(){function t(t,e){this.array=null,this.type=t,Object(i["a"])(t===n["a"]||t===n["c"],62),this.usage=void 0!==e?e:o.STATIC_DRAW}return t.prototype.ofSize=function(t){this.array=new(s(this.type))(t)},t.prototype.fromArray=function(t){this.array=s(this.type).from(t)},t.prototype.fromArrayBuffer=function(t){this.array=new(s(this.type))(t)},t.prototype.getType=function(){return this.type},t.prototype.getArray=function(){return this.array},t.prototype.getUsage=function(){return this.usage},t.prototype.getSize=function(){return this.array?this.array.length:0},t}();function s(t){switch(t){case n["a"]:return Float32Array;case n["c"]:return Uint32Array;default:return Float32Array}}e["a"]=a},d706:function(t,e,r){"use strict";var n=r("9f5e"),i=new Uint8Array(4),o=function(){function t(t,e){this.helper_=t;var r=t.getGL();this.texture_=r.createTexture(),this.framebuffer_=r.createFramebuffer(),this.size_=e||[1,1],this.data_=new Uint8Array(0),this.dataCacheDirty_=!0,this.updateSize_()}return t.prototype.setSize=function(t){Object(n["b"])(t,this.size_)||(this.size_[0]=t[0],this.size_[1]=t[1],this.updateSize_())},t.prototype.getSize=function(){return this.size_},t.prototype.clearCachedData=function(){this.dataCacheDirty_=!0},t.prototype.readAll=function(){if(this.dataCacheDirty_){var t=this.size_,e=this.helper_.getGL();e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer_),e.readPixels(0,0,t[0],t[1],e.RGBA,e.UNSIGNED_BYTE,this.data_),this.dataCacheDirty_=!1}return this.data_},t.prototype.readPixel=function(t,e){if(t<0||e<0||t>this.size_[0]||e>=this.size_[1])return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i;this.readAll();var r=Math.floor(t)+(this.size_[1]-Math.floor(e)-1)*this.size_[0];return i[0]=this.data_[4*r],i[1]=this.data_[4*r+1],i[2]=this.data_[4*r+2],i[3]=this.data_[4*r+3],i},t.prototype.getTexture=function(){return this.texture_},t.prototype.getFramebuffer=function(){return this.framebuffer_},t.prototype.updateSize_=function(){var t=this.size_,e=this.helper_.getGL();this.texture_=this.helper_.createTexture(t,null,this.texture_),e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer_),e.viewport(0,0,t[0],t[1]),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texture_,0),this.data_=new Uint8Array(t[0]*t[1]*4)},t}();e["a"]=o}}]);