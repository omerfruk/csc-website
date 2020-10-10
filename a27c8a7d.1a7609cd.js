(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"Highlight",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),a=(n(0),n(99));const c={id:"country",title:"Get the country details from ISO2 Code",sidebar_label:"Country Details"},o={unversionedId:"api/country",id:"api/country",isDocsHomePage:!1,title:"Get the country details from ISO2 Code",description:"export const Highlight = ({children, color}) => (",source:"@site/docs/api/country.md",slug:"/api/country",permalink:"/docs/api/country",editUrl:"https://github.com/dr5hn/csc-website/edit/main/docs/api/country.md",version:"current",lastUpdatedBy:"Darshan Gada",lastUpdatedAt:1602338503,sidebar_label:"Country Details",sidebar:"docs",previous:{title:"Get a list of Countries",permalink:"/docs/api/all-countries"},next:{title:"Get a list of States",permalink:"/docs/api/all-states"}},l=[{value:"Security",id:"security",children:[]},{value:"Request Parameters",id:"request-parameters",children:[]},{value:"Response",id:"response",children:[]},{value:"Example Success Response",id:"example-success-response",children:[]},{value:"Example Error Response",id:"example-error-response",children:[]},{value:"Example Not Found Response",id:"example-not-found-response",children:[]}],i=({children:e,color:t})=>Object(a.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),b={rightToc:l,Highlight:i};function p({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)(i,{color:"#25c2a0",mdxType:"Highlight"},"GET")," /countries/[ciso]",Object(a.b)("h2",{id:"security"},"Security"),Object(a.b)("p",null,"This api use API KEY as an authentication method."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Name: ",Object(a.b)(i,{color:"#1877F2",mdxType:"Highlight"},"X-CSCAPI-KEY")),Object(a.b)("li",{parentName:"ul"},"In: header")),Object(a.b)("h2",{id:"request-parameters"},"Request Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Located in"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ciso"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"URL"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ISO2 Code of Country"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)(i,{color:"#d73232",mdxType:"Highlight"},"Required")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(a.b)("h2",{id:"response"},"Response"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Code"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"200"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Return a details of country")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"401"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Unauthorized.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"404"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Not Found.")))),Object(a.b)("h2",{id:"example-success-response"},"Example Success Response"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": 101,\n  "name": "India",\n  "iso3": "IND",\n  "iso2": "IN",\n  "phonecode": "91",\n  "capital": "New Delhi",\n  "currency": "INR",\n  "native": "\u092d\u093e\u0930\u0924",\n  "emoji": "\ud83c\uddee\ud83c\uddf3",\n  "emojiU": "U+1F1EE U+1F1F3"\n}\n')),Object(a.b)("h2",{id:"example-error-response"},"Example Error Response"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "error\'": "Unauthorized. You shouldn\'t be here."\n}\n')),Object(a.b)("h2",{id:"example-not-found-response"},"Example Not Found Response"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "error\'": "Country not found."\n}\n')))}p.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||s[d]||c;return n?a.a.createElement(m,l(l({ref:t},b),{},{components:n})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<c;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);