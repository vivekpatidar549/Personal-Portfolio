"use strict";(self.webpackChunkone_portfolio=self.webpackChunkone_portfolio||[]).push([[8613],{8613:function(e,i,o){o.r(i),o.d(i,{Collider:function(){return f}});var n=o(7762),t=o(5671),s=o(3144),a=o(9340),l=o(2269),u=o(4709);function d(e,i,o,n,t,s){var a=(0,u.uZ)(e.options.collisions.absorb.speed*t.factor/10,0,n);e.size.value+=.5*a,o.size.value-=a,n<=s&&(o.size.value=0,o.destroy())}var r=function(e){void 0===e.collisionMaxSpeed&&(e.collisionMaxSpeed=(0,u.Gu)(e.options.collisions.maxSpeed)),e.velocity.length>e.collisionMaxSpeed&&(e.velocity.length=e.collisionMaxSpeed)};function c(e,i){(0,u.kR)((0,u.gy)(e),(0,u.gy)(i)),r(e),r(i)}function v(e,i,o,n){switch(e.options.collisions.mode){case"absorb":!function(e,i,o,n){var t=e.getRadius(),s=i.getRadius();void 0===t&&void 0!==s?e.destroy():void 0!==t&&void 0===s?i.destroy():void 0!==t&&void 0!==s&&(t>=s?d(e,0,i,s,o,n):d(i,0,e,t,o,n))}(e,i,o,n);break;case"bounce":c(e,i);break;case"destroy":!function(e,i){e.unbreakable||i.unbreakable||c(e,i),void 0===e.getRadius()&&void 0!==i.getRadius()?e.destroy():void 0!==e.getRadius()&&void 0===i.getRadius()?i.destroy():void 0!==e.getRadius()&&void 0!==i.getRadius()&&(e.getRadius()>=i.getRadius()?i:e).destroy()}(e,i)}}var f=function(e){(0,a.Z)(o,e);var i=(0,l.Z)(o);function o(e){return(0,t.Z)(this,o),i.call(this,e)}return(0,s.Z)(o,[{key:"clear",value:function(){}},{key:"init",value:function(){}},{key:"interact",value:function(e,i){if(!e.destroyed&&!e.spawning){var o,t=this.container,s=e.getPosition(),a=e.getRadius(),l=t.particles.quadTree.queryCircle(s,2*a),d=(0,n.Z)(l);try{for(d.s();!(o=d.n()).done;){var r=o.value;if(e!==r&&r.options.collisions.enable&&e.options.collisions.mode===r.options.collisions.mode&&!r.destroyed&&!r.spawning){var c=r.getPosition(),f=r.getRadius();if(!(Math.abs(Math.round(s.z)-Math.round(c.z))>a+f))(0,u.Sp)(s,c)>a+f||v(e,r,i,t.retina.pixelRatio)}}}catch(p){d.e(p)}finally{d.f()}}}},{key:"isEnabled",value:function(e){return e.options.collisions.enable}},{key:"reset",value:function(){}}]),o}(u.$S)}}]);
//# sourceMappingURL=8613.14ce2a1d.chunk.js.map