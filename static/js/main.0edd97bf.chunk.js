(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(6),r=n.n(c),i=n(2),s=n(3),u=n(4),p=(n(11),n(0)),l=function(e){var t=e.question,n=e.onChange,a=e.value;return!1===e.active?null:Object(p.jsxs)("fieldset",{className:"constainerFieldset",children:[Object(p.jsx)("legend",{className:"tituloLegenda",children:t.pergunta}),t.options.map((function(e){return Object(p.jsxs)("label",{className:"label",children:[Object(p.jsx)("input",{type:"radio",value:e,id:t.id,onChange:n,checked:a===e}),e]},e)}))]})},m=[{pergunta:"Qual m\xe9todo \xe9 utilizado para criar componentes?",options:["React.makeComponent()","React.createComponent()","React.createElement()"],resposta:"React.createElement()",id:"p1"},{pergunta:"Como importamos um componente externo?",options:['import Component from "./Component"','require("./Component")','import "./Component"'],resposta:'import Component from "./Component"',id:"p2"},{pergunta:"Qual hook n\xe3o \xe9 nativo?",options:["useEffect()","useFetch()","useCallback()"],resposta:"useFetch()",id:"p3"},{pergunta:"Qual palavra deve ser utilizada para criarmos um hook?",options:["set","get","use"],resposta:"use",id:"p4"}];var d=function(){var e=o.a.useState({p1:"",p2:"",p3:"",p4:""}),t=Object(u.a)(e,2),n=t[0],a=t[1],c=o.a.useState(0),r=Object(u.a)(c,2),d=r[0],j=r[1],b=o.a.useState(null),h=Object(u.a)(b,2),f=h[0],v=h[1],O=function(e){var t=e.target;a(Object(s.a)(Object(s.a)({},n),{},Object(i.a)({},t.id,t.value)))};return Object(p.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[m.map((function(e,t){return Object(p.jsx)(l,{active:d===t,onChange:O,value:n[e.id],question:Object(s.a)({},e)},e.id)})),f?Object(p.jsx)("p",{children:f}):Object(p.jsx)("button",{onClick:function(){d<m.length-1?j(d+1):(j(d+1),function(){var e=m.filter((function(e){var t=e.id,a=e.resposta;return n[t]===a}));v("Voc\xea acertou: ".concat(e.length,"  ").concat(m.length))}())},children:"Next"})]})};r.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(d,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.0edd97bf.chunk.js.map