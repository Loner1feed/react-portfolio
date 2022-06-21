"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[286],{619:function(e,t,s){s.r(t),s.d(t,{default:function(){return G}});var i=s(309),a=s(791),n={body__wrap:"Body_body__wrap__+Msmo",tabList:"Body_tabList__O2bRz",tab:"Body_tab__v0ull",tabSelected:"Body_tabSelected__ootyV",title:"Body_title__IkfkB"},r=s(809),o=(s(200),s(562)),l="DescBlock_wrap__EW+q1",c="DescBlock_colored__G2swK",d="DescBlock_row__arDat",_=s(184),m=function(e){var t=e.stack,s=e.description;return(0,_.jsx)(o.y_,{defaultStyle:{opacity:0},style:{opacity:(0,o.ST)(1)},children:function(e){return(0,_.jsxs)("div",{className:l,style:{opacity:e.opacity},children:[(0,_.jsxs)("p",{className:d,children:[(0,_.jsx)("span",{className:c,children:"Stack:"}),t]}),(0,_.jsxs)("p",{className:d,children:[(0,_.jsx)("span",{className:c,children:"Description:"}),s]})]})}})},p="Grid_grid__aPJZr",u=[{category:"web",data:[{id:1,title:"You team",link:"https://loner1feed.github.io/youteam/",img:s.p+"static/media/youteam.34e223bb35975cab5dbe.png"},{id:2,title:"Charity",link:"https://loner1feed.github.io/charity/",img:s.p+"static/media/charity.2ba55d938c3ff2012927.png"},{id:3,title:"Comfort luk",link:"https://loner1feed.github.io/luk/",img:s.p+"static/media/comfortLuk.674afa4c51047a13de35.png"},{id:4,title:"Cantelmo",link:"https://l1feed2.github.io/cantelmo/index.html",img:s.p+"static/media/cantelmo.1f427049b3ea50e7ccea.png"},{id:5,title:"I-Climat",link:"https://loner1feed.github.io/iclimat/",img:s.p+"static/media/iclimat.1ae2f7d2f987fb1c05fb.png"},{id:6,title:"Supergoods",link:"https://loner1feed.github.io/supergoods/",img:s.p+"static/media/supergoods.5282528bd11ee19087c3.png"},{id:7,title:"Alena",link:"https://loner1feed.github.io/alena/",img:s.p+"static/media/alena.528858d12f250a9b6b11.png"}]},{category:"react",data:[{id:1,title:"WYSIWYG PDF generation app",link:"https://github.com/Loner1feed/pdf-generation-app",img:s.p+"static/media/pdf.6fd4a8cc156b020d887f.png"}]}],h=s(885),f="Item_upper__WzbuB",b="Item_title__Ivg+N",x="Item_back__JoloC",g="Item_img__grQCm",j="Item_item__mtrI9",v=function(e){var t=e.img,s=e.link,i=e.title,n=(0,a.useRef)(null),r=(0,a.useState)(!1),l=(0,h.Z)(r,2),c=l[0],d=l[1];function m(e){e.forEach((function(e){e.isIntersecting&&d(!0)}))}return(0,a.useEffect)((function(){var e=new IntersectionObserver(m,{threshold:[.5]});!0!==c&&e.observe(n.current)}),[]),(0,_.jsx)(o.y_,{defaultStyle:{opacity:0},style:{opacity:(0,o.ST)(c?1:0)},children:function(e){return(0,_.jsx)("div",{ref:n,className:j,style:{opacity:e.opacity},children:(0,_.jsxs)("div",{className:f,children:[(0,_.jsxs)("div",{className:g,children:[(0,_.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:(0,_.jsx)("img",{src:t})}),(0,_.jsx)("div",{className:x})]}),(0,_.jsx)("span",{className:b,children:i})]})})}})},w=function(e){var t=e.type,s=u.find((function(e){return e.category===t})).data.map((function(e){return(0,_.jsx)(v,{img:e.img,title:e.title,link:e.link},e.id)}));return(0,_.jsx)("div",{className:p,children:s})},N=(0,a.memo)(w),k=function(){return(0,_.jsx)("div",{className:n.body,children:(0,_.jsxs)(r.mQ,{className:n.body__wrap,children:[(0,_.jsx)("h2",{className:n.title,children:"MY PROJECTS"}),(0,_.jsxs)(r.td,{className:n.tabList,children:[(0,_.jsx)(r.OK,{selectedClassName:n.tabSelected,className:n.tab,children:"Standart adaptive websites"}),(0,_.jsx)(r.OK,{selectedClassName:n.tabSelected,className:n.tab,children:"React web apps"})]}),(0,_.jsxs)(r.x4,{className:n.tabPanel,children:[(0,_.jsx)(m,{stack:"HTML, CSS/SCSS, JS/JQUERY",description:"Classic adaptive landing page or multi page websites"}),(0,_.jsx)(N,{type:"web"})]}),(0,_.jsxs)(r.x4,{className:n.tabPanel,children:[(0,_.jsx)(m,{stack:"React, Redux Toolkit, REST, NodeJS",description:"Multi functional, modern and scalable websites (a.c. web apps)"}),(0,_.jsx)(N,{type:"react"})]})]})})},y=function(){return(0,_.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",children:(0,_.jsx)("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})})},S=function(){return(0,_.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,_.jsx)("path",{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"})})},B=function(){return(0,_.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"telegram-plane",className:"svg-inline--fa fa-telegram-plane fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,_.jsx)("path",{fill:"currentColor",d:"M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"})})},C="Badge_badge__VBGWt",M="Badge_footerBadge__SSVk3",z=function(e){var t=e.link,s=void 0===t?"":t,i=e.icon,a=e.type,n=void 0===a?"":a;return(0,_.jsx)("a",{href:s,target:"_blank",className:"footer"===n?M:C,rel:"noreferrer",children:i})},H={footer:"Footer_footer__qpr67",footer__wrap:"Footer_footer__wrap__hK5Z+",iconRow:"Footer_iconRow__0i+Ji",title:"Footer_title__w4k29",info:"Footer_info__W1Kq2",info__heading:"Footer_info__heading__S7irl",info__sub:"Footer_info__sub__Mo3P6"},I=function(){return(0,_.jsx)("div",{className:H.footer,children:(0,_.jsx)("div",{className:H.footer__wrap,children:(0,_.jsxs)("div",{className:H.left,children:[(0,_.jsx)("h2",{className:H.title,children:"contact"}),(0,_.jsxs)("div",{className:H.iconRow,children:[(0,_.jsx)(z,{type:"footer",icon:(0,_.jsx)(B,{}),link:"https://t.me/Loner_feed"}),(0,_.jsx)(z,{type:"footer",icon:(0,_.jsx)(S,{}),link:"https://www.linkedin.com/in/eugen-guriev-309035212/"}),(0,_.jsx)(z,{type:"footer",icon:(0,_.jsx)(y,{}),link:"https://github.com/Loner1feed"})]}),(0,_.jsxs)("div",{className:H.info,children:[(0,_.jsx)("span",{className:H.info__heading,children:"e-mail"}),(0,_.jsx)("span",{className:H.info__sub,children:"lfeedwork05@gmail.com"})]}),(0,_.jsxs)("div",{className:H.info,children:[(0,_.jsx)("span",{className:H.info__heading,children:"phone:"}),(0,_.jsx)("span",{className:H.info__sub,children:"+380636564860"})]})]})})})},L={button:"Button_button__Y-e2i","button--anim":"Button_button--anim__yXGIA",btnAnim:"Button_btnAnim__XdNv3",button__blue:"Button_button__blue__YSSfM","button--white":"Button_button--white__nFhvO"},R=function(e){var t=e.text,s=e.type,i=void 0===s?"":s,a=e.link,n=void 0===a?"":a;return(0,_.jsx)("a",{href:n||"javascript://",download:!!n,className:"blue"===i?[L.button__blue,L.button].join(" "):L.button,children:t})},F="Logo_logo__oKNsW",J=function(){return(0,_.jsx)("div",{className:F})},P="Person_person__AXba8",V="Person_label__+tm2S",W=s.p+"static/media/person2.868057b748c564c0b111.png",Y=function(e){var t=e.text;return(0,_.jsxs)("div",{className:P,children:[(0,_.jsx)("img",{src:W,alt:"my photo"}),(0,_.jsx)("span",{className:V,children:t})]})},D={header:"Header_header__J+Wm3",top:"Header_top__jHkg7",top__wrap:"Header_top__wrap__F9oGs",bg:"Header_bg__BJ45z",bg__solid:"Header_bg__solid__RSMRr",bg__dotted:"Header_bg__dotted__PGTOv",banner__wrap:"Header_banner__wrap__FBkbl",text:"Header_text__iDVuP",title:"Header_title__dArsJ",subtitle:"Header_subtitle__9d6rs",links:"Header_links__LnYec"},E=function(){return(0,_.jsxs)("div",{className:D.header,children:[(0,_.jsx)("div",{className:D.top,children:(0,_.jsxs)("div",{className:D.top__wrap,children:[(0,_.jsx)(J,{}),(0,_.jsxs)("div",{className:D.links,children:[(0,_.jsx)(z,{icon:(0,_.jsx)(B,{}),link:"https://t.me/Loner_feed"}),(0,_.jsx)(z,{icon:(0,_.jsx)(S,{}),link:"https://www.linkedin.com/in/eugen-guriev-309035212/"}),(0,_.jsx)(z,{icon:(0,_.jsx)(y,{}),link:"https://github.com/Loner1feed"})]})]})}),(0,_.jsxs)("div",{className:D.banner,children:[(0,_.jsxs)("div",{className:D.bg,children:[(0,_.jsx)("div",{className:D.bg__solid}),(0,_.jsx)("div",{className:D.bg__dotted})]}),(0,_.jsxs)("div",{className:D.banner__wrap,children:[(0,_.jsx)(Y,{text:"Just do my own work"}),(0,_.jsxs)("div",{className:D.text,children:[(0,_.jsx)("h2",{className:D.title,children:"Hello!"}),(0,_.jsxs)("p",{className:D.subtitle,children:["My name is Eugen, I'm a Front-end developer. ",(0,_.jsx)("br",{})," Ready to make your project better and more interesting."]}),(0,_.jsx)(R,{text:"My resume",type:"blue",link:"../../resume.pdf"})]})]})]})]})},G=function(){return(0,_.jsxs)(i.Z,{children:[(0,_.jsx)(E,{}),(0,_.jsx)(k,{}),(0,_.jsx)(I,{})]})}}}]);
//# sourceMappingURL=286.5d412152.chunk.js.map