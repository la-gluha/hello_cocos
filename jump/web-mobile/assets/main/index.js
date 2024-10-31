System.register("chunks:///_virtual/GameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./PlayerController.ts"],(function(t){var e,r,n,i,a,s,o,l,u,h,c,p,f,d,y;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,n=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){a=t.cclegacy,s=t._decorator,o=t.Prefab,l=t.CCInteger,u=t.Node,h=t.Label,c=t.Vec3,p=t.instantiate,f=t.Component},function(t){d=t.PlayerController,y=t.BLOCK_SIZE}],execute:function(){var _,b,N,g,S,T,C,G,I,L,v,m,E;a._RF.push({},"299b5YkyixGGrFupdKyi1Kg","GameManager",void 0);var P=s.ccclass,B=s.property,M=function(t){return t[t.BT_NONE=0]="BT_NONE",t[t.BT_STONE=1]="BT_STONE",t}(M||{}),O=function(t){return t[t.GS_INIT=0]="GS_INIT",t[t.GS_PLAYING=1]="GS_PLAYING",t[t.GS_END=2]="GS_END",t}(O||{});t("GameManager",(_=P("GameManager"),b=B({type:o}),N=B({type:l}),g=B({type:u}),S=B({type:d}),T=B({type:h}),_((I=e((G=function(t){function e(){for(var e,r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return e=t.call.apply(t,[this].concat(a))||this,n(e,"boxPrefab",I,i(e)),n(e,"roadLength",L,i(e)),e._road=[],n(e,"startMenu",v,i(e)),n(e,"playerCtrl",m,i(e)),n(e,"stepsLabel",E,i(e)),e}r(e,t);var a=e.prototype;return a.start=function(){var t;this.setCurState(O.GS_INIT),null==(t=this.playerCtrl)||t.node.on("JumpEnd",this.onPlayerJumpEnd,this)},a.init=function(){this.startMenu&&(this.startMenu.active=!0),this.generateRoad(),this.playerCtrl&&(this.playerCtrl.setInputActive(!1),this.playerCtrl.node.setPosition(c.ZERO),this.playerCtrl.reset())},a.setCurState=function(t){var e=this;switch(t){case O.GS_INIT:this.init();break;case O.GS_PLAYING:this.startMenu&&(this.startMenu.active=!1),this.stepsLabel&&(this.stepsLabel.string="0"),setTimeout((function(){e.playerCtrl&&e.playerCtrl.setInputActive(!0)}),.1);break;case O.GS_END:}},a.generateRoad=function(){this.node.removeAllChildren(),this._road=[],this._road.push(M.BT_STONE);for(var t=1;t<this.roadLength;t++)this._road[t-1]===M.BT_NONE?this._road.push(M.BT_STONE):this._road.push(Math.floor(2*Math.random()));for(var e=0;e<this._road.length;e++){var r=this.spawnBlockByType(this._road[e]);r&&(this.node.addChild(r),r.setPosition(e*y,0,0))}},a.spawnBlockByType=function(t){if(!this.boxPrefab)return null;var e=null;switch(t){case M.BT_STONE:e=p(this.boxPrefab)}return e},a.onStartButtonClicked=function(){this.setCurState(O.GS_PLAYING)},a.checkResult=function(t){t<this.roadLength?this._road[t]==M.BT_NONE&&this.setCurState(O.GS_INIT):this.setCurState(O.GS_INIT)},a.onPlayerJumpEnd=function(t){this.stepsLabel&&(this.stepsLabel.string=""+(t>=this.roadLength?this.roadLength:t)),this.checkResult(t)},e}(f)).prototype,"boxPrefab",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=e(G.prototype,"roadLength",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 50}}),v=e(G.prototype,"startMenu",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=e(G.prototype,"playerCtrl",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(G.prototype,"stepsLabel",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=G))||C));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./GameManager.ts","./PlayerController.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/PlayerController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,o,n,r,s,u,h,p,c,a;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,o=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){r=t.cclegacy,s=t._decorator,u=t.Animation,h=t.Node,p=t.Input,c=t.Vec3,a=t.Component}],execute:function(){var l,m,_,T,d,y,f,S,P;r._RF.push({},"eb87b2Et5RMQZq9q0FHKA5y","PlayerController",void 0);var g=s.ccclass,v=s.property,B=t("BLOCK_SIZE",40);t("PlayerController",(l=g("PlayerController"),m=v(u),_=v(h),T=v(h),l((f=e((y=function(t){function e(){for(var e,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r))||this,o(e,"BodyAnim",f,n(e)),o(e,"leftTouch",S,n(e)),o(e,"rightTouch",P,n(e)),e._startJump=!1,e._jumpStep=0,e._curJumpTime=0,e._jumpTime=.1,e._curJumpSpeed=0,e._curPos=new c,e._deltaPos=new c(0,0,0),e._targetPos=new c,e._curMoveIndex=0,e}i(e,t);var r=e.prototype;return r.start=function(){},r.setInputActive=function(t){t?(this.leftTouch.on(p.EventType.TOUCH_START,this.onTouchStart,this),this.rightTouch.on(p.EventType.TOUCH_START,this.onTouchStart,this)):(this.leftTouch.off(p.EventType.TOUCH_START,this.onTouchStart,this),this.rightTouch.off(p.EventType.TOUCH_START,this.onTouchStart,this))},r.onTouchStart=function(t){var e=t.target;"LeftTouch"==(null==e?void 0:e.name)?this.jumpByStep(1):this.jumpByStep(2)},r.reset=function(){this._curMoveIndex=0,this.node.getPosition(this._curPos),this._targetPos.set(0,0,0)},r.onMouseUp=function(t){0===t.getButton()?this.jumpByStep(1):2===t.getButton()&&this.jumpByStep(2)},r.jumpByStep=function(t){if(!this._startJump){this._startJump=!0,this._jumpStep=t,this._curJumpTime=0;var e=1==t?"oneStep":"twoStep",i=this.BodyAnim.getState(e);this._jumpTime=i.duration,this._curJumpSpeed=this._jumpStep*B/this._jumpTime,this.node.getPosition(this._curPos),c.add(this._targetPos,this._curPos,new c(this._jumpStep*B,0,0)),this.BodyAnim&&(1===t?this.BodyAnim.play("oneStep"):2===t&&this.BodyAnim.play("twoStep")),this._curMoveIndex+=t}},r.onOnceJumpEnd=function(){this.node.emit("JumpEnd",this._curMoveIndex)},r.update=function(t){this._startJump&&(this._curJumpTime+=t,this._curJumpTime>this._jumpTime?(this.node.setPosition(this._targetPos),this._startJump=!1,this.onOnceJumpEnd()):(this.node.getPosition(this._curPos),this._deltaPos.x=this._curJumpSpeed*t,c.add(this._curPos,this._curPos,this._deltaPos),this.node.setPosition(this._curPos)))},e}(a)).prototype,"BodyAnim",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=e(y.prototype,"leftTouch",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=e(y.prototype,"rightTouch",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=y))||d));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});