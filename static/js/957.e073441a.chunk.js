"use strict";(self.webpackChunkreact_light131313_template=self.webpackChunkreact_light131313_template||[]).push([[957],{6493:function(n,e,t){t.d(e,{n:function(){return d}});var i=t(9439),r=t(4420),c=t(885),s=t(2791),o=t(4278),a=t(3329),l=function(n){var e=n.open,t=n.close,i=n.advert,r=i.id,c=i.year,s=i.make,l=i.model,u=i.type,d=i.img,h=i.description,p=i.fuelConsumption,f=i.engineSize,x=i.accessories,m=i.functionalities,j=i.address,g=i.rentalConditions;return(0,a.jsx)(o.Z,{open:e,onClose:t,children:(0,a.jsx)("div",{children:(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{type:"button",onClick:t,children:"Close"}),(0,a.jsx)("img",{src:d,alt:s}),(0,a.jsx)("h2",{children:"".concat(s," ").concat(l,", ").concat(c)}),(0,a.jsx)("p",{children:j}),(0,a.jsxs)("p",{children:["id: ",r]}),(0,a.jsxs)("p",{children:["Year: ",c]}),(0,a.jsxs)("p",{children:["Type: ",u]}),(0,a.jsxs)("p",{children:["Fuel Consumption: ",p]}),(0,a.jsxs)("p",{children:["Engine Size: ",f]}),(0,a.jsx)("p",{children:h}),(0,a.jsx)("h3",{children:"Accessories and functionalities:"}),(0,a.jsx)("ul",{children:x.map((function(n){return(0,a.jsx)("li",{children:(0,a.jsx)("p",{children:n})},n)}))}),(0,a.jsx)("ul",{children:m.map((function(n){return(0,a.jsx)("li",{children:(0,a.jsx)("p",{children:n})},n)}))}),(0,a.jsx)("p",{children:g})]})})})})},u=t(8477),d=function(n){var e=n.advert,t=e.id,o=e.year,d=e.make,h=e.model,p=e.type,f=e.img,x=e.photoLink,m=e.functionalities,j=e.rentalPrice,g=e.rentalCompany,v=e.address,b=e.mileage,y=(0,r.I0)(),k=(0,r.v9)(c.xU),C=(0,r.v9)(c.Tc),Z=(0,s.useState)(!1),w=(0,i.Z)(Z,2),z=w[0],F=w[1];(0,s.useEffect)((function(){var n=C.some((function(n){return n.id===t}));F(n)}),[C,t]);var S=(0,s.useState)(!1),L=(0,i.Z)(S,2),P=L[0],T=L[1];return(0,a.jsxs)("li",{children:[(0,a.jsx)("div",{children:(0,a.jsx)("input",{type:"checkbox","aria-label":"isFavorite",checked:z,onChange:function(){y(z?(0,u.Ni)({advert:e}):(0,u.a3)({advert:e}))}})}),(0,a.jsx)("img",{src:f||x,alt:d}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("h2",{children:[(0,a.jsxs)("span",{children:[(0,a.jsx)("span",{children:d})," ",(0,a.jsx)("span",{children:"".concat(h,",")}),(0,a.jsxs)("span",{children:[" ",o]})]}),(0,a.jsx)("span",{children:j})]}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("p",{children:v.split(",").splice(-2,2)[0]}),(0,a.jsx)("p",{children:v.split(",").splice(-2,2)[1]}),(0,a.jsx)("p",{children:g})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("p",{children:p}),(0,a.jsx)("p",{children:h}),(0,a.jsx)("p",{children:b}),(0,a.jsx)("p",{children:m[0]})]})]})]}),(0,a.jsx)("button",{"aria-label":"LearnMore",disabled:k,onClick:function(){return T(!0)},children:"LearnMore"}),(0,a.jsx)(l,{open:P,close:function(){return T(!1)},advert:e})]})}},9027:function(n,e,t){t.d(e,{x:function(){return r}});var i=t(3329),r=function(){return(0,i.jsx)("div",{children:"Filters"})}},3141:function(n,e,t){t.d(e,{C:function(){return p}});var i,r,c=t(4420),s=t(5394),o=t(885),a=t(1253),l=t(168),u=t(7924),d=u.ZP.button(i||(i=(0,l.Z)(["\n  display: block;\n  margin: 100px auto 0;\n  background-color: transparent;\n  color: #3470ff;\n  /* font-size: 16px; */\n  font-weight: 500;\n  line-height: 1.5;\n  text-decoration-line: underline;\n  transition: 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03);\n  /* font-size: 16px; */\n  font-style: normal;\n\n  &:is(:hover, :focus) {\n    color: #0b44cd;\n  }\n"]))),h=(u.ZP.p(r||(r=(0,l.Z)(["\n  color: #fff;\n  font-family: Manrope;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.43;\n"]))),t(3329)),p=function(){var n=(0,c.v9)(o.Zp),e=(0,c.v9)(o.OG),t=(0,c.v9)(o.zm),i=!(e.length<t*n),r=(0,c.I0)();return(0,h.jsx)(h.Fragment,{children:i&&(0,h.jsx)(d,{type:"button",onClick:function(){var e=n+1;r((0,a.Y)(e)),r((0,s.G)({page:e,limit:t}))},children:"Load more"})})}},8957:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var i,r,c=t(9027),s=t(4420),o=t(885),a=t(168),l=t(7924),u=l.ZP.ul(i||(i=(0,a.Z)(["\n  /* box-shadow: ",", ",",\n    ",";\n  border-radius: ",";\n  padding-top: ",";\n  padding-right: ",";\n  padding-bottom: ",";\n  padding-left: ",";\n  background-color: ",";\n  height: 100%; */\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));\n  grid-gap: ",";\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"])),(function(n){return n.theme.boxSh.one}),(function(n){return n.theme.boxSh.two}),(function(n){return n.theme.boxSh.three}),(function(n){return n.theme.borRad}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.colors.green}),(function(n){return n.theme.spacing(4)})),d=l.ZP.p(r||(r=(0,a.Z)(["\n  margin-top: ",";\n  margin-left: ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(2)})),h=t(6493),p=t(3329),f=function(){var n=(0,s.v9)(o.Tc);return(0,p.jsx)(p.Fragment,{children:n.length>0?(0,p.jsx)(u,{children:n.map((function(n){return(0,p.jsx)(h.n,{advert:n},n.id)}))}):(0,p.jsx)(d,{children:"Favorites Empty"})})},x=t(3141);function m(){return(0,p.jsxs)("section",{children:[(0,p.jsx)(c.x,{}),(0,p.jsx)(f,{}),(0,p.jsx)(x.C,{})]})}},885:function(n,e,t){t.d(e,{OG:function(){return i},Tc:function(){return o},Zp:function(){return c},xU:function(){return r},zm:function(){return s}});var i=function(n){return n.adverts.items},r=function(n){return n.adverts.isLoading},c=function(n){return n.adverts.page},s=function(n){return n.adverts.pageLimit},o=function(n){return n.favorites.items}}}]);
//# sourceMappingURL=957.e073441a.chunk.js.map