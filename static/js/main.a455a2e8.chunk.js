(this.webpackJsonpgodsunchained=this.webpackJsonpgodsunchained||[]).push([[0],{346:function(e,t,n){},347:function(e,t,n){},536:function(e,t){},542:function(e,t){},543:function(e,t){},545:function(e,t){},546:function(e,t){},567:function(e,t){},571:function(e,t){},573:function(e,t){},582:function(e,t){},584:function(e,t){},610:function(e,t){},612:function(e,t){},617:function(e,t){},619:function(e,t){},626:function(e,t){},638:function(e,t){},641:function(e,t){},645:function(e,t){},861:function(e,t,n){},867:function(e,t,n){"use strict";n.r(t);var r,a,c,s,o,i=n(0),u=n.n(i),l=n(101),p=n.n(l),d=n(213),j=n(61),b=n(29),f=n(4),x=n.n(f),h=n(39),O=n(78),m=n(79),v=m.a.div(r||(r=Object(O.a)(["\ntransition: all .2s ease-in-out;\nborder-radius: 10px;\n&:hover{\n    transform:scale(1.1);\n}\n"]))),g=m.a.button(a||(a=Object(O.a)(["\n  background-color: green;\n  width: 90px;\n  height: 30px;\n  border: none;\n  border-radius: 10px;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 12px;\n"]))),y=m.a.button(c||(c=Object(O.a)(["\n  background-color: red;\n  width: 90px;\n  height: 30px;\n  border: none;\n  border-radius: 10px;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 12px;\n  margin-left:10px;\n"]))),w=m.a.button(s||(s=Object(O.a)(["\nbackground-color: grey;\n  width: 90px;\n  height: 30px;\n  border: none;\n  border-radius: 10px;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 12px;\n  margin-left:10px;\n"]))),k=m.a.div(o||(o=Object(O.a)(["\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top:10%;\n  display:flex;\n  justify-content : center;\n"]))),S=n(11);var C=function(e){var t=e.card,n=e.showPopup,r=e.setPopup,a=(e.popupCard,e.setPopupCard);return Object(S.jsx)("div",{children:Object(S.jsx)("li",{children:Object(S.jsx)(v,{children:Object(S.jsx)("img",{className:"nft-item-cover",src:"https://card.godsunchained.com/?id=".concat(t.id,"&q=4"),alt:"".concat(t.id," cover"),onClick:function(){r(!n),a(t)}})})},t.id)})},P=(n(346),n(874));var _=function(e){var t=e.showPopup,n=e.setPopup,r=e.popupCard,a=e.setPopupCard,c=e.loadCollection,s=Object(i.useState)([]),o=Object(b.a)(s,2),u=o[0],l=o[1],p=Object(i.useState)([]),d=Object(b.a)(p,2),j=d[0],f=d[1],O=Object(i.useState)(!1),m=Object(b.a)(O,2),v=m[0],g=m[1];function y(){return(y=Object(h.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,c();case 3:t=e.sent,console.log(t),f(t),l(t),g(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.useEffect)((function(){!function(){y.apply(this,arguments)}()}),[]),Object(i.useEffect)((function(){console.log(j)}),[j]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"container d-flex justify-content-center",children:Object(S.jsx)("input",{type:"text",placeholder:"Search a card",onChange:function(e){var t=u.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}));f(t)}})}),v?Object(S.jsxs)("div",{className:"container d-flex justify-content-center",children:[Object(S.jsx)(P.a,{animation:"grow"})," "]}):Object(S.jsx)("ul",{className:"list-unstyled",children:Object(S.jsx)("div",{className:"row",children:j.map((function(e){return Object(S.jsx)(C,{card:e,showPopup:t,setPopup:n,popupCard:r,setPopupCard:a},e.id)}))})})]})},E=(n(347),n(140)),N=n.n(E),D=n(883),A=n(886),L=n(67),I=n(468),F=n(193),q=(n(127),"https://api.x.immutable.com/v1"),M="0xacb3c6a43d15b907e8433077b6d38ae40936fe2c",T=new I.Link("https://link.x.immutable.com"),U="WALLET_ADDRESS",R="STARK_PUBLIC_KEY";function B(){return H.apply(this,arguments)}function H(){return(H=Object(h.a)(x.a.mark((function e(){var t,n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.setup({});case 2:t=e.sent,n=t.address,r=t.starkPublicKey,localStorage.setItem(U,n),localStorage.setItem(R,r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return K.apply(this,arguments)}function K(){return(K=Object(h.a)(x.a.mark((function e(){var t,n,r,a,c,s,o,i,u,l;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,F.ImmutableXClient.build({publicApiUrl:q});case 3:r=e.sent,a=localStorage.getItem("WALLET_ADDRESS"),e.prev=5;case 6:return e.next=8,r.getAssets({user:a,status:"imx",collection:M,sell_orders:!0});case 8:c=e.sent,n=n.concat(c.result),t=c.cursor;case 11:if(t){e.next=6;break}case 12:s=Object(L.a)(n);try{for(s.s();!(o=s.n()).done;)(l=o.value).isListed=!1,(null===(i=l.orders)||void 0===i||null===(u=i.sell_orders)||void 0===u?void 0:u.length)>0&&(l.isListed=!0)}catch(p){s.e(p)}finally{s.f()}e.next=19;break;case 16:e.prev=16,e.t0=e.catch(5),console.log(e.t0);case 19:return e.prev=19,e.abrupt("return",n);case 22:case"end":return e.stop()}}),e,null,[[5,16,19,22]])})))).apply(this,arguments)}function z(e,t){return W.apply(this,arguments)}function W(){return(W=Object(h.a)(x.a.mark((function e(t,n){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={amount:n,tokenId:t.id,tokenAddress:t.token_address},e.next=3,T.sell(r);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(e,t,n){return G.apply(this,arguments)}function G(){return(G=Object(h.a)(x.a.mark((function e(t,n,r){var a,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.ImmutableXClient.build({publicApiUrl:q});case 3:return a=e.sent,e.next=6,a.getOrders({page_size:t,cursor:n,status:"active",sell_token_address:M,sell_metadata:r,order_by:"buy_quantity",direction:"asc"});case 6:return c=e.sent,e.abrupt("return",{orders:c.result,cursor:c.cursor});case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function Y(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(h.a)(x.a.mark((function e(t){var n,r,a,c,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],e.next=3,F.ImmutableXClient.build({publicApiUrl:q});case 3:a=e.sent,localStorage.getItem("WALLET_ADDRESS"),(c=new Date).setMonth(c.getMonth()-1),e.prev=7;case 8:return e.next=10,a.getOrders({page_size:200,cursor:n,status:"filled",sell_token_address:M,sell_metadata:t,order_by:"timestamp",direction:"asc",min_timestamp:c.toISOString()});case 10:s=e.sent,r=r.concat(s.result),n=s.cursor;case 13:if(n){e.next=8;break}case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(7),console.log(e.t0);case 19:return e.prev=19,e.abrupt("return",r);case 22:case"end":return e.stop()}}),e,null,[[7,16,19,22]])})))).apply(this,arguments)}function V(e){return Z.apply(this,arguments)}function Z(){return(Z=Object(h.a)(x.a.mark((function e(t){var n,r,a,c,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],["January","February","March","April","May","June","July","August","September","October","November","December"],r=new Map,e.prev=3,e.next=6,Y(t);case 6:return s=e.sent,console.log(s),s.forEach((function(e){var t=Date.parse(e.updated_timestamp),n=new Date(t).toLocaleDateString("en-US",{day:"numeric",month:"long"});if(r.has(n)){var s=r.get(n);c=+s.price+ +te(e.buy.data.quantity),c/=2,a=s.volume}else a=0,c=+te(e.buy.data.quantity);c.toFixed(6),r.set(n,{price:c,volume:a+1})})),console.log(r),r.forEach((function(e,t){var r={time:t,data:e};n=n.concat(r)})),e.abrupt("return",n);case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[3,14]])})))).apply(this,arguments)}function $(e){return ee.apply(this,arguments)}function ee(){return(ee=Object(h.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.buy({orderId:t});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var te=function(e){return(e*Math.pow(10,-18)).toFixed(6)},ne=function(){var e=Object(h.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.godsunchained.com/v0/proto?perPage=2000",e.next=3,N()("https://api.godsunchained.com/v0/proto?perPage=2000");case 3:return t=e.sent,n=t.data.records,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(h.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://gumarkets.freeboxos.fr:5000/discounts",e.next=3,N()("https://gumarkets.freeboxos.fr:5000/discounts");case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(h.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://min-api.cryptocompare.com/data/price",e.prev=1,e.next=4,N.a.get("https://min-api.cryptocompare.com/data/price",{params:{fsym:"ETH",tsyms:"USD"}});case 4:return t=e.sent,n=t.data,e.abrupt("return",n.USD);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(h.a)(x.a.mark((function e(t,n){var r,a,c,s,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=null,a={minPrice:Number.MAX_SAFE_INTEGER,orderID:null},"https://api.x.immutable.com/v1/orders",c=JSON.stringify({proto:["".concat(t.id)],quality:["".concat(n)]}),e.prev=4,e.next=7,N.a.get("https://api.x.immutable.com/v1/orders",{params:{sell_metadata:c,status:"active",order_by:"buy_quantity",direction:"asc"}});case 7:s=e.sent,(r=s.data.result).map((function(e){var t=e.buy.data.quantity,n=e.buy.data.decimals,r=(t*Math.pow(10,-n)).toFixed(6),c=e.order_id;a.minPrice>r&&(a.minPrice=r,a.orderID=c)})),o=r[0].sell.data.properties.image_url,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:return e.prev=16,e.abrupt("return",{result:r,bestOrder:a,image_url:o});case 19:case"end":return e.stop()}}),e,null,[[4,13,16,19]])})));return function(t,n){return e.apply(this,arguments)}}(),se=n(885),oe=n(882),ie=n(492),ue=n(493),le=n(106),pe=n(221),de=n(219),je=n(489),be=n(491);var fe,xe=function(e){var t=e.proto,n=e.quality,r=Object(i.useState)([]),a=Object(b.a)(r,2),c=a[0],s=a[1],o=Object(i.useState)(!1),u=Object(b.a)(o,2),l=u[0],p=u[1],d=function(){var e=Object(h.a)(x.a.mark((function e(t,n){var r,a,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),r=JSON.stringify({proto:["".concat(t)],quality:["".concat(n)]}),e.next=4,ae();case 4:return a=e.sent,e.next=7,V(r);case 7:(c=e.sent).forEach((function(e){return e.data.price=+(e.data.price*a).toFixed(2)})),console.log(c),s(c),p(!1);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){d(t,n)}),[]),Object(S.jsx)(S.Fragment,{children:l?Object(S.jsxs)(k,{children:[Object(S.jsx)(P.a,{animation:"grow"})," "]}):Object(S.jsx)("div",{className:"d-flex align-items-center",children:Object(S.jsxs)(se.a,{width:500,height:400,data:c,margin:{top:20,right:20,bottom:20,left:20},children:[Object(S.jsx)(oe.a,{stroke:"#f5f5f5"}),Object(S.jsx)(ie.a,{dataKey:"time"}),Object(S.jsx)(ue.a,{yAxisId:"left",dataKey:"data.price",children:Object(S.jsx)(le.a,{angle:270,position:"left",style:{textAnchor:"middle"},children:"USD price"})}),Object(S.jsx)(ue.a,{yAxisId:"right",dataKey:"data.volume",orientation:"right",domain:[0,function(e){return 5*e}],children:Object(S.jsx)(le.a,{angle:90,position:"right",style:{textAnchor:"middle"},children:"Volume"})}),Object(S.jsx)(pe.a,{}),Object(S.jsx)(de.a,{}),Object(S.jsx)(je.a,{yAxisId:"left",type:"monotone",dataKey:"data.price",stroke:"#8884d8"}),Object(S.jsx)(be.a,{yAxisId:"right",dataKey:"data.volume",barSize:5,fill:"#413ea0"})]})})})};var he=function(e){var t=e.showPopup,n=e.setPopup,r=e.popupCard,a=Object(i.useState)(null),c=Object(b.a)(a,2),s=c[0],o=c[1],u=Object(i.useState)(null),l=Object(b.a)(u,2),p=(l[0],l[1]),d=Object(i.useState)(null),j=Object(b.a)(d,2),f=j[0],v=j[1],y=Object(i.useState)("Meteorite"),w=Object(b.a)(y,2),k=w[0],C=w[1],_=Object(i.useState)(!1),E=Object(b.a)(_,2),N=E[0],L=E[1],I=Object(i.useState)(!1),F=Object(b.a)(I,2),q=F[0],M=F[1],T=Object(i.useState)(null),U=Object(b.a)(T,2),R=U[0],B=U[1],H=Object(i.useState)([]),J=Object(b.a)(H,2),K=J[0],z=J[1],W=m.a.div(fe||(fe=Object(O.a)(["\n  display:flex;\n  flex-direction:row;\n  justify-content : center;\n  align-items:center;\n  @media (max-width: 900px) {\n    flex-direction: column;\n  }\n"])));function X(){return G.apply(this,arguments)}function G(){return(G=Object(h.a)(x.a.mark((function e(){var t,n,a,c,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.prev=1,L(!1),e.next=5,ce(r,k);case 5:return t=e.sent,n=t.result,a=t.bestOrder,c=t.image_url,console.log(n,a,c),z(n.slice(0,5)),o(a.minPrice),p(a.orderID),e.next=15,ae();case 15:s=e.sent,B(s),v(c),null===a.orderID&&L(!0),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(1),L(!0),console.log(e.t0);case 25:return e.prev=25,M(!1),e.finish(25);case 28:case"end":return e.stop()}}),e,null,[[1,21,25,28]])})))).apply(this,arguments)}function Y(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(h.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$(t.target.value);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}return Object(i.useEffect)((function(){X(r,k)}),[]),Object(i.useEffect)((function(){X(r,k)}),[k]),Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(D.a,{show:t,onHide:function(){n(!t)},dialogClassName:"modal-80w",children:[Object(S.jsx)(D.a.Header,{closeButton:!0,children:Object(S.jsx)(D.a.Title,{children:r.name})}),Object(S.jsx)(D.a.Body,{children:q?Object(S.jsxs)("div",{className:"container d-flex justify-content-center",children:[Object(S.jsx)(P.a,{animation:"grow"})," "]}):N?Object(S.jsx)("h5",{children:"this card is not available for trade"}):Object(S.jsxs)("div",{children:[Object(S.jsxs)("p",{children:["Quality : ",k]}),Object(S.jsxs)("p",{children:["Price : ",s," ETH - ",(s*R).toFixed(2)," USD"]}),Object(S.jsxs)(W,{children:[Object(S.jsx)("img",{src:f,alt:r.id}),Object(S.jsx)(xe,{proto:r.id,quality:k})]}),Object(S.jsx)("div",{className:"d-flex justify-content-center",children:Object(S.jsxs)("p",{children:["For sale:",K.map((function(e){var t=te(e.buy.data.quantity),n=(t*R).toFixed(2);return Object(S.jsxs)("p",{children:[Object(S.jsxs)(g,{value:e.order_id,onClick:Y,children:[n," USD "]})," : ",t," ETH"]})}))]})})]})}),Object(S.jsxs)(D.a.Footer,{children:[Object(S.jsx)(A.a,{variant:"secondary",onClick:function(){C("Meteorite")},children:"Meteorite"}),Object(S.jsx)(A.a,{variant:"primary",onClick:function(){C("Shadow")},children:"Shadow"}),Object(S.jsx)(A.a,{variant:"warning",onClick:function(){C("Gold")},children:"Gold"}),Object(S.jsx)(A.a,{variant:"link",onClick:function(){C("Diamond")},children:"Diamond"})]})]})})};var Oe=function(){var e=Object(i.useState)(!1),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(i.useState)(null),c=Object(b.a)(a,2),s=c[0],o=c[1];return console.log(s),Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)(_,{showPopup:n,setPopup:r,popupCard:s,setPopupCard:o,loadCollection:ne}),n?Object(S.jsx)(he,{showPopup:n,setPopup:r,popupCard:s}):null]})},me=Object(i.createContext)(),ve=function(e){var t=e.children,n=Object(i.useState)(null!==localStorage.getItem("WALLET_ADDRESS")),r=Object(b.a)(n,2),a=r[0],c=r[1];return Object(S.jsx)(me.Provider,{value:{logged:a,setLogged:c},children:t})};var ge,ye=function(e){var t=e.card,n=e.showPopup,r=e.setPopup,a=(e.popupCard,e.setPopupCard);return Object(S.jsx)("div",{className:"lol",children:Object(S.jsx)("li",{children:Object(S.jsx)(v,{children:Object(S.jsx)("img",{className:"nft-item-cover",src:t.image_url,alt:"".concat(t.id," cover"),onClick:function(){r(!n),a(t)}})})},t.id)})};var we,ke=function(e){var t=e.showPopup,n=e.setPopup,r=e.popupCard,a=e.setPopupCard,c=m.a.div(ge||(ge=Object(O.a)(["\n    \n  "]))),s=Object(i.useState)([]),o=Object(b.a)(s,2),u=o[0],l=o[1],p=Object(i.useState)([]),d=Object(b.a)(p,2),j=d[0],f=d[1],v=Object(i.useState)(!1),g=Object(b.a)(v,2),y=g[0],w=g[1];function k(){return(k=Object(h.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,e.next=4,J();case 4:t=e.sent,f(t),l(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:return e.prev=12,w(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})))).apply(this,arguments)}return Object(i.useEffect)((function(){!function(){k.apply(this,arguments)}()}),[]),Object(i.useEffect)((function(){console.log(j)}),[j]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"container d-flex justify-content-center",children:Object(S.jsx)("input",{type:"text",onChange:function(e){var t=u.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}));f(t)},placeholder:"Search a card"})}),y?Object(S.jsxs)("div",{className:"container d-flex justify-content-center",children:[Object(S.jsx)(P.a,{animation:"grow"})," "]}):Object(S.jsx)("ul",{className:"list-unstyled",children:Object(S.jsx)("div",{className:"row",children:j.map((function(e){return Object(S.jsx)(c,{children:Object(S.jsx)(ye,{card:e,showPopup:t,setPopup:n,popupCard:r,setPopupCard:a},e.id)})}))})})]})};var Se=function(e){var t=e.showPopup,n=e.setPopup,r=e.popupCard,a=Object(i.useState)(null),c=Object(b.a)(a,2),s=c[0],o=c[1],u=Object(i.useState)(!1),l=Object(b.a)(u,2),p=l[0],d=l[1],j=Object(i.useState)([]),f=Object(b.a)(j,2),v=f[0],w=f[1],k=m.a.div(we||(we=Object(O.a)(["\n    display:flex;\n    flex-direction:row;\n    justify-content : center;\n    align-items:center;\n    @media (max-width: 900px) {\n      flex-direction: column;\n    }\n  "])));function C(){return(C=Object(h.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,t=JSON.stringify({proto:["".concat(r.metadata.proto)],quality:["".concat(r.metadata.quality)]}),e.next=5,X(5,"",t);case 5:n=e.sent,w(n.orders),console.log(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:return e.prev=13,d(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})))).apply(this,arguments)}Object(i.useEffect)((function(){!function(){C.apply(this,arguments)}()}),[]);var _=function(){var e=Object(h.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("SELL ORDER",s),console.log("asset ID",r.id),console.log("tokenAddress",r.token_address),e.prev=3,e.next=6,z(r,s);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(){return e.apply(this,arguments)}}(),E=function(e){console.log(e.target.value),$(e.target.value)};return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(D.a,{show:t,onHide:function(){n(!t)},dialogClassName:"modal-80w",children:[Object(S.jsx)(D.a.Header,{closeButton:!0,children:Object(S.jsx)(D.a.Title,{children:r.metadata.name})}),Object(S.jsx)(D.a.Body,{children:p?Object(S.jsxs)("div",{className:"container d-flex justify-content-center",children:[Object(S.jsx)(P.a,{animation:"grow"})," "]}):Object(S.jsxs)("div",{children:[Object(S.jsxs)("p",{children:["Quality : ",r.metadata.quality]}),Object(S.jsxs)(k,{children:[Object(S.jsx)("img",{src:r.image_url,alt:r.id}),Object(S.jsx)(xe,{proto:r.metadata.proto,quality:r.metadata.quality})]}),Object(S.jsxs)("p",{children:["For sale:",v.map((function(e){return Object(S.jsxs)("p",{children:[Object(S.jsx)(g,{value:e.order_id,onClick:E,children:"BUY"})," : ",(t=e.buy.data.quantity,(t*Math.pow(10,-18)).toFixed(6))," "]});var t}))]})]})}),Object(S.jsx)(D.a.Footer,{children:Object(S.jsxs)("div",{className:"container d-flex content-center",children:[Object(S.jsx)("input",{type:"text",name:"ethprice",placeHolder:"eth Price",onChange:function(e){o(e.target.value)}}),Object(S.jsx)(y,{onClick:_,children:"Sell yours"})]})})]})})};var Ce,Pe,_e=function(){var e=Object(i.useContext)(me),t=e.logged,n=e.setLogged,r=Object(i.useState)(""),a=Object(b.a)(r,2),c=a[0],s=a[1],o=Object(i.useState)(!1),u=Object(b.a)(o,2),l=u[0],p=u[1],d=Object(i.useState)(null),j=Object(b.a)(d,2),f=j[0],O=j[1];function m(){return(m=Object(h.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=11;break}return e.prev=1,e.next=4,B();case 4:n(!0),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0),n(!1);case 11:s(localStorage.getItem("WALLET_ADDRESS"));case 12:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(i.useEffect)((function(){!function(){m.apply(this,arguments)}()}),[]),Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)(ke,{showPopup:l,setPopup:p,popupCard:f,setPopupCard:O,user:c}),l?Object(S.jsx)(Se,{showPopup:l,setPopup:p,popupCard:f}):null]})},Ee=(n(861),n.p+"static/media/logo.aac3612d.png");var Ne=function(){var e=m.a.nav(Ce||(Ce=Object(O.a)(["\n  padding: 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),t=Object(m.a)(d.b)(Pe||(Pe=Object(O.a)(["\n  padding: 10px 15px;\n  color: #8186a0;\n  text-decoration: none;\n  font-size: 18px;\n  text-align: center;\n"]))),n=Object(i.useContext)(me),r=n.logged,a=n.setLogged,c=Object(j.f)();function s(){return(s=Object(h.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r?alert("user already connected"):function(){var e=Object(h.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B();case 3:a(!0),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0),a(!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}()();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(S.jsxs)("div",{className:" jumbotron d-flex headerWrapper",children:[Object(S.jsx)("div",{className:"d-flex",children:Object(S.jsx)("img",{src:Ee,className:"mainLogo",alt:"mainLogo"})}),Object(S.jsx)("div",{className:"d-flex"}),Object(S.jsxs)(e,{children:[r?Object(S.jsx)(w,{onClick:function(){if(r){localStorage.removeItem("WALLET_ADDRESS"),a(!1);c.push("/browse"),alert("user disconnecterd")}else alert("user not logged in")},children:"Disconnect"}):Object(S.jsx)(w,{onClick:function(){return s.apply(this,arguments)},children:"Connect"}),Object(S.jsx)(t,{className:"link",to:"/browse",children:"Browse Cards"}),Object(S.jsx)(t,{className:"link",to:"/account",children:"Your Cards"}),Object(S.jsx)(t,{className:"link",to:"/discounts",children:"Discounts"})]})]})};var De=function(){var e=Object(i.useState)(!1),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(i.useState)(null),c=Object(b.a)(a,2),s=c[0],o=c[1];return console.log(s),Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)(_,{showPopup:n,setPopup:r,popupCard:s,setPopupCard:o,loadCollection:re}),n?Object(S.jsx)(he,{showPopup:n,setPopup:r,popupCard:s}):null]})};n(863);p.a.render(Object(S.jsx)(u.a.StrictMode,{children:Object(S.jsx)(d.a,{children:Object(S.jsxs)(ve,{children:[Object(S.jsx)(Ne,{}),Object(S.jsx)(j.b,{exact:!0,path:"/",children:Object(S.jsx)(j.a,{to:"/browse"})}),Object(S.jsx)(j.b,{path:"/browse",children:Object(S.jsx)(Oe,{})}),Object(S.jsx)(j.b,{path:"/account",children:Object(S.jsx)(_e,{})}),Object(S.jsx)(j.b,{path:"/discounts",children:Object(S.jsx)(De,{})})]})})}),document.getElementById("root"))}},[[867,1,2]]]);
//# sourceMappingURL=main.a455a2e8.chunk.js.map