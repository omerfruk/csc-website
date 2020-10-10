(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"Highlight",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(2),a=(n(0),n(99));const c={id:"cities-by-state-country",title:"Get the list of cities in a state",sidebar_label:"Cities By State & Country"},i={unversionedId:"api/cities-by-state-country",id:"api/cities-by-state-country",isDocsHomePage:!1,title:"Get the list of cities in a state",description:"export const Highlight = ({children, color}) => (",source:"@site/docs/api/cities-by-state-country.md",slug:"/api/cities-by-state-country",permalink:"/docs/api/cities-by-state-country",editUrl:"https://github.com/dr5hn/csc-website/edit/main/docs/api/cities-by-state-country.md",version:"current",lastUpdatedBy:"Darshan Gada",lastUpdatedAt:1602338503,sidebar_label:"Cities By State & Country",sidebar:"docs",previous:{title:"Get the state details from ISO2 Code",permalink:"/docs/api/state"},next:{title:"Contributing",permalink:"/docs/contributing"}},l=[{value:"Security",id:"security",children:[]},{value:"Request Parameters",id:"request-parameters",children:[]},{value:"Response",id:"response",children:[]},{value:"Example Success Response",id:"example-success-response",children:[]},{value:"Example Error Response",id:"example-error-response",children:[]},{value:"Example Not Found Response",id:"example-not-found-response",children:[]}],o=({children:e,color:t})=>Object(a.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),b={rightToc:l,Highlight:o};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)(o,{color:"#25c2a0",mdxType:"Highlight"},"GET")," /countries/[ciso]/states/[siso]/cities",Object(a.b)("h2",{id:"security"},"Security"),Object(a.b)("p",null,"This api use API KEY as an authentication method."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Name: ",Object(a.b)(o,{color:"#1877F2",mdxType:"Highlight"},"X-CSCAPI-KEY")),Object(a.b)("li",{parentName:"ul"},"In: header")),Object(a.b)("h2",{id:"request-parameters"},"Request Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Located in"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ciso"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"URL"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ISO2 Code of Country"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)(o,{color:"#d73232",mdxType:"Highlight"},"Required")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"siso"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"URL"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ISO2 Code of State"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)(o,{color:"#d73232",mdxType:"Highlight"},"Required")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(a.b)("h2",{id:"response"},"Response"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Code"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"200"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Return a list of cities")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"401"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Unauthorized.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"404"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Not Found.")))),Object(a.b)("h2",{id:"example-success-response"},"Example Success Response"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "id": 133024,\n    "name": "Mumbai"\n  },\n  ...\n]\n')),Object(a.b)("h2",{id:"example-error-response"},"Example Error Response"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "error\'": "Unauthorized. You shouldn\'t be here."\n}\n')),Object(a.b)("h2",{id:"example-not-found-response"},"Example Not Found Response"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "error\'": "No Cities found."\n}\n')))}s.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,O=p["".concat(i,".").concat(d)]||p[d]||u[d]||c;return n?a.a.createElement(O,l(l({ref:t},b),{},{components:n})):a.a.createElement(O,l({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var b=2;b<c;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);