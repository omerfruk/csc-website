"use strict";(self.webpackChunkcountry_stat_city_api_docs=self.webpackChunkcountry_stat_city_api_docs||[]).push([[716],{756:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},Highlight:function(){return m},default:function(){return k}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),l=n(5064),i=n(8215),o=["components"],p={id:"country",title:"Get country details from ISO2 code",sidebar_label:"Country Details"},u=void 0,c={unversionedId:"api/country",id:"api/country",isDocsHomePage:!1,title:"Get country details from ISO2 code",description:"<span",source:"@site/docs/api/country.md",sourceDirName:"api",slug:"/api/country",permalink:"/docs/api/country",editUrl:"https://github.com/dr5hn/csc-website/edit/main/docs/api/country.md",tags:[],version:"current",lastUpdatedAt:1633863233,formattedLastUpdatedAt:"10/10/2021",frontMatter:{id:"country",title:"Get country details from ISO2 code",sidebar_label:"Country Details"},sidebar:"docs",previous:{title:"All Countries",permalink:"/docs/api/all-countries"},next:{title:"All States",permalink:"/docs/api/all-states"}},d=[{value:"Security",id:"security",children:[]},{value:"Request Parameters",id:"request-parameters",children:[]},{value:"Response",id:"response",children:[]},{value:"Example Usage",id:"example-usage",children:[]},{value:"Example Success Response",id:"example-success-response",children:[]},{value:"Example Error Response",id:"example-error-response",children:[]},{value:"Example Not Found Response",id:"example-not-found-response",children:[]}],m=function(e){var t=e.children,n=e.color;return(0,s.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},h={toc:d,Highlight:m};function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(m,{color:"#25c2a0",mdxType:"Highlight"},"GET")," https://api.countrystatecity.in/v1/countries/[ciso]",(0,s.kt)("h2",{id:"security"},"Security"),(0,s.kt)("p",null,"This api use API KEY as an authentication method."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Name: ",(0,s.kt)(m,{color:"#1877F2",mdxType:"Highlight"},"X-CSCAPI-KEY")),(0,s.kt)("li",{parentName:"ul"},"In: header")),(0,s.kt)("h2",{id:"request-parameters"},"Request Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Located in"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"[ciso]"),(0,s.kt)("td",{parentName:"tr",align:null},"URL"),(0,s.kt)("td",{parentName:"tr",align:null},"ISO2 Code of Country"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)(m,{color:"#d73232",mdxType:"Highlight"},"Required")),(0,s.kt)("td",{parentName:"tr",align:null},"string")))),(0,s.kt)("h2",{id:"response"},"Response"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Code"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"200"),(0,s.kt)("td",{parentName:"tr",align:null},"Return a details of country")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"401"),(0,s.kt)("td",{parentName:"tr",align:null},"Unauthorized.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"404"),(0,s.kt)("td",{parentName:"tr",align:null},"Not Found.")))),(0,s.kt)("h2",{id:"example-usage"},"Example Usage"),(0,s.kt)(l.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"js",label:"Javascript",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="countries-states-cities.js"',title:'"countries-states-cities.js"'},"var headers = new Headers();\nheaders.append(\"X-CSCAPI-KEY\", \"API_KEY\");\n\nvar requestOptions = {\n method: 'GET',\n headers: headers,\n redirect: 'follow'\n};\n\nfetch(\"https://api.countrystatecity.in/v1/countries/IN\", requestOptions)\n.then(response => response.text())\n.then(result => console.log(result))\n.catch(error => console.log('error', error));\n"))),(0,s.kt)(i.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="countries-states-cities.php"',title:'"countries-states-cities.php"'},"<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, array(\n  CURLOPT_URL => 'https://api.countrystatecity.in/v1/countries/IN',\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_HTTPHEADER => array(\n    'X-CSCAPI-KEY: API_KEY'\n  ),\n));\n\n$response = curl_exec($curl);\n\ncurl_close($curl);\necho $response;\n"))),(0,s.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="countries-states-cities.py"',title:'"countries-states-cities.py"'},"import requests\n\nurl = \"https://api.countrystatecity.in/v1/countries/IN\"\n\nheaders = {\n  'X-CSCAPI-KEY': 'API_KEY'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers)\n\nprint(response.text)\n")))),(0,s.kt)("h2",{id:"example-success-response"},"Example Success Response"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 101,\n  "name": "India",\n  "iso3": "IND",\n  "iso2": "IN",\n  "phonecode": "91",\n  "capital": "New Delhi",\n  "currency": "INR",\n  "native": "\u092d\u093e\u0930\u0924",\n  "emoji": "\ud83c\uddee\ud83c\uddf3",\n  "emojiU": "U+1F1EE U+1F1F3"\n}\n')),(0,s.kt)("h2",{id:"example-error-response"},"Example Error Response"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "error\'": "Unauthorized. You shouldn\'t be here."\n}\n')),(0,s.kt)("h2",{id:"example-not-found-response"},"Example Not Found Response"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "error\'": "Country not found."\n}\n')))}k.isMDXComponent=!0}}]);