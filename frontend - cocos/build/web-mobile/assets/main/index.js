System.register("chunks:///_virtual/NewFileButton.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,o,r;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,r=t.Component}],execute:function(){var u;n._RF.push({},"308a2L1XrdCQK5R8qyVPUSy","NewFileButton",void 0);var i=o.ccclass;o.property,t("NewFileButton",i("NewFileButton")(u=function(t){function n(){return t.apply(this,arguments)||this}return e(n,t),n.prototype.OnButtonPress=function(){},n}(r))||u);n._RF.pop()}}}));

System.register("chunks:///_virtual/CommunicationManager.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var n,r;return{setters:[function(e){n=e.asyncToGenerator},function(e){r=e.cclegacy}],execute:function(){r._RF.push({},"398a3kqwy5KkbPjVx+2TWzh","CommunicationManager",void 0);e("default",function(){function e(){}return e.prototype.getSemiOriginalCharacter=function(){var e=n(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){var t=new XMLHttpRequest,o=JSON.stringify(n),a=window.serverUrl?window.serverUrl:"http://localhost:8080";t.open("GET",a+"/semiOriginalCharacter?json="+o,!0),t.onreadystatechange=function(){t.readyState==t.DONE&&(console.log(t.responseText),e(JSON.parse(t.responseText)))},t.send()})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),e}());r._RF.pop()}}}));

System.register("chunks:///_virtual/File.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./CommunicationManager.ts"],(function(i){"use strict";var t,e,n,r,a,l,s,o,u,c,g;return{setters:[function(i){t=i.applyDecoratedDescriptor,e=i.inheritsLoose,n=i.initializerDefineProperty,r=i.assertThisInitialized,a=i.defineProperty},function(i){l=i.cclegacy,s=i._decorator,o=i.Node,u=i.EditBox,c=i.Component},function(i){g=i.default}],execute:function(){var p,f,h,b,m,w,y,d,z,v,N,x,F,_,S,C,I,k,D,P,B,L,M,O,R,T,j,q,A,E,H,J,K,U,Y,Z,G,Q,V;l._RF.push({},"4a985zxfKlJZYzU/asDmxnO","File",void 0);var W=s.ccclass,X=s.property;i("File",(p=W("File"),f=X(o),h=X(u),b=X(u),m=X(u),w=X(u),y=X(u),d=X(u),z=X(u),v=X(u),N=X(u),x=X(u),F=X(u),_=X(u),S=X(u),C=X(u),I=X(u),k=X(u),D=X(u),p((L=t((B=function(i){function t(){for(var t,e=arguments.length,l=new Array(e),s=0;s<e;s++)l[s]=arguments[s];return t=i.call.apply(i,[this].concat(l))||this,n(r(t),"waitingNode",L,r(t)),n(r(t),"characterName",M,r(t)),n(r(t),"history",O,r(t)),n(r(t),"str",R,r(t)),n(r(t),"dex",T,r(t)),n(r(t),"con",j,r(t)),n(r(t),"int",q,r(t)),n(r(t),"wis",A,r(t)),n(r(t),"cha",E,r(t)),n(r(t),"race",H,r(t)),n(r(t),"class",J,r(t)),n(r(t),"level",K,r(t)),n(r(t),"weapon",U,r(t)),n(r(t),"alignment",Y,r(t)),n(r(t),"ideals",Z,r(t)),n(r(t),"flaws",G,r(t)),n(r(t),"features",Q,r(t)),n(r(t),"proficiencies",V,r(t)),a(r(t),"communication",null),t}e(t,i);var l=t.prototype;return l.start=function(){this.waitingNode.active=!1,this.communication=new g},l.onCompleteFileButton=function(){var i=this;this.waitingNode.active=!0,this.communication.getSemiOriginalCharacter(this.getFileContent()).then((function(t){console.log(t),i.setFileContent(t),i.waitingNode.active=!1}))},l.getFileContent=function(){return{maxTokens:500,temp:.7,freqPenalty:.3,name:this.characterName.string,race:this.race.string,class:this.class.string,level:Number.parseInt(this.level.string),preferred_weapon:this.weapon.string,strength:Number.parseInt(this.str.string),dexterity:Number.parseInt(this.dex.string),constitution:Number.parseInt(this.con.string),intelligence:Number.parseInt(this.int.string),wisdom:Number.parseInt(this.wis.string),charisma:Number.parseInt(this.cha.string),alignment:this.alignment.string,ideals:this.ideals.string,flaws:this.flaws.string,features_traits:this.features.string,proficiencies_languages:this.proficiencies.string,background:this.history.string}},l.setFileContent=function(i){this.characterName.string=i.name,this.race.string=i.race,this.class.string=i.class,this.level.string=i.level.toString(),this.weapon.string=i.preferred_weapon,this.str.string=i.strength.toString(),this.dex.string=i.dexterity.toString(),this.con.string=i.constitution.toString(),this.int.string=i.intelligence.toString(),this.wis.string=i.wisdom.toString(),this.cha.string=i.charisma.toString(),this.alignment.string=i.alignment,this.ideals.string=i.ideals,this.flaws.string=i.flaws,this.features.string=i.features_traits,this.proficiencies.string=i.proficiencies_languages,this.history.string=i.background},t}(c)).prototype,"waitingNode",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=t(B.prototype,"characterName",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=t(B.prototype,"history",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=t(B.prototype,"str",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=t(B.prototype,"dex",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),j=t(B.prototype,"con",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),q=t(B.prototype,"int",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=t(B.prototype,"wis",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=t(B.prototype,"cha",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=t(B.prototype,"race",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),J=t(B.prototype,"class",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),K=t(B.prototype,"level",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=t(B.prototype,"weapon",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Y=t(B.prototype,"alignment",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Z=t(B.prototype,"ideals",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=t(B.prototype,"flaws",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Q=t(B.prototype,"features",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),V=t(B.prototype,"proficiencies",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=B))||P));l._RF.pop()}}}));

System.register("chunks:///_virtual/FileManager.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./File.ts","./FileSelector.ts"],(function(e){"use strict";var i,t,l,n,r,a,o,c,f,s,u,p,b;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,l=e.initializerDefineProperty,n=e.assertThisInitialized,r=e.defineProperty},function(e){a=e.cclegacy,o=e._decorator,c=e.Prefab,f=e.Node,s=e.instantiate,u=e.Component},function(e){p=e.File},function(e){b=e.FileSelector}],execute:function(){var h,F,m,g,d,v,y,P,N,R,S;a._RF.push({},"c5959jA5lBOMLZWmE331k2P","FileManager",void 0);var w=o.ccclass,z=o.property;e("FileManager",(h=w("FileManager"),F=z(c),m=z(c),g=z(f),d=z(f),h((P=i((y=function(e){function i(){for(var i,t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return i=e.call.apply(e,[this].concat(a))||this,l(n(i),"filePrefab",P,n(i)),l(n(i),"fileNamePrefab",N,n(i)),l(n(i),"fileRoot",R,n(i)),l(n(i),"fileNameRoot",S,n(i)),r(n(i),"activeFile",null),i}t(i,e);var a=i.prototype;return a.start=function(){},a.OnNewFileButton=function(){var e=s(this.filePrefab);e.parent=this.fileRoot;var i=e.getComponent(p),t=s(this.fileNamePrefab),l=t.getComponent(b);this.fileNameRoot.insertChild(t,this.fileNameRoot.children.length-1),l.Init(this.OnSelectedFile.bind(this),i),this.OnSelectedFile(l)},a.OnSelectedFile=function(e){null!=this.activeFile&&this.activeFile.Diselect(),e.Select(),this.activeFile=e},i}(u)).prototype,"filePrefab",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N=i(y.prototype,"fileNamePrefab",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=i(y.prototype,"fileRoot",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=i(y.prototype,"fileNameRoot",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=y))||v));a._RF.pop()}}}));

System.register("chunks:///_virtual/FileSelector.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,i,r,c,n,o,a,l,s,u,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,c=e.assertThisInitialized,n=e.defineProperty},function(e){o=e.cclegacy,a=e._decorator,l=e.RichText,s=e.Sprite,u=e.Color,h=e.Component}],execute:function(){var f,p,g,v,b,d,k;o._RF.push({},"fa619yVF/ZIiK+zMH4fog8k","FileSelector",void 0);var y=a.ccclass,m=a.property;e("FileSelector",(f=y("FileSelector"),p=m(l),g=m(s),f((d=t((b=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o))||this,r(c(t),"characterName",d,c(t)),r(c(t),"background",k,c(t)),n(c(t),"file",void 0),n(c(t),"active",!1),n(c(t),"onClickCallback",null),t}i(t,e);var o=t.prototype;return o.Init=function(e,t){this.onClickCallback=e,this.file=t},o.Select=function(){this.background.color=new u(60,60,60,255),this.active=!0,this.file.node.active=!0},o.Diselect=function(){this.background.color=u.WHITE,this.active=!1,this.file.node.active=!1},o.OnClick=function(){this.onClickCallback(this)},o.update=function(){var e="NEW";""!=this.file.characterName.string&&(e=this.file.characterName.string),this.active?this.characterName.string="<color=WHITE>"+e+"</color>":this.characterName.string="<color=BLACK>"+e+"</color>"},t}(h)).prototype,"characterName",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=t(b.prototype,"background",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=b))||v));o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./NewFileButton.ts","./CommunicationManager.ts","./File.ts","./FileSelector.ts","./FileManager.ts"],(function(){"use strict";return{setters:[null,null,null,null,null],execute:function(){}}}));

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