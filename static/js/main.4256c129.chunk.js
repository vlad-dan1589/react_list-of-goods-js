(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),r=n(6),i=n(8),o=(n(13),n(14),n(1)),a=n(4),l=n.n(a),u=n(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j="alphabet",h="length";var d=function(){var t=Object(o.useState)(""),e=Object(r.a)(t,2),n=e[0],s=e[1],c=Object(o.useState)(""),a=Object(r.a)(c,2),d=a[0],g=a[1],p=function(t,e){var n=e.sortField,s=e.reverse,c=Object(i.a)(t);return n&&(c.sort((function(t,e){switch(n){case j:return t.localeCompare(e);case h:return t.length-e.length;default:return 0}})),s&&c.reverse()),c}(b,{sortField:n,reverse:d});return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:l()("button","is-info",{"is-light":n!==j}),onClick:function(){return s(j)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:l()("button","is-success",{"is-light":n!==h}),onClick:function(){return s(h)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:l()("button","is-warning",{"is-light":!1===d}),onClick:function(){g(!1===d)},children:"Reverse"}),n||d?Object(u.jsx)("button",{onClick:function(){s(""),g(!1)},type:"button",className:"button is-danger is-light",children:"Reset"}):""]}),Object(u.jsx)("ul",{children:p.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t})}))})]})};c.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4256c129.chunk.js.map