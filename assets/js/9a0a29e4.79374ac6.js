"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[9974],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return t?a.createElement(f,o(o({ref:n},p),{},{components:t})):a.createElement(f,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},72502:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=t(87462),r=t(63366),s=(t(67294),t(3905)),o=["components"],i={},c="sendmany Method",l={unversionedId:"n3/reference/rpc/latest-version/api/sendmany",id:"n3/reference/rpc/latest-version/api/sendmany",isDocsHomePage:!1,title:"sendmany Method",description:"Bulk transfer order, and you can specify a change address.",source:"@site/docs/n3/reference/rpc/latest-version/api/sendmany.md",sourceDirName:"n3/reference/rpc/latest-version/api",slug:"/n3/reference/rpc/latest-version/api/sendmany",permalink:"/StreamAI/docs/n3/reference/rpc/latest-version/api/sendmany",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/reference/rpc/latest-version/api/sendmany.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"sendfrom Method",permalink:"/StreamAI/docs/n3/reference/rpc/latest-version/api/sendfrom"},next:{title:"sendrawtransaction Method",permalink:"/StreamAI/docs/n3/reference/rpc/latest-version/api/sendrawtransaction"}},p=[{value:"Parameter Description",id:"parameter-description",children:[]},{value:"Example",id:"example",children:[]}],d={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"sendmany-method"},"sendmany Method"),(0,s.kt)("p",null,"Bulk transfer order, and you can specify a change address."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"}," Before you can invoke this method you must:"))),(0,s.kt)("blockquote",null,(0,s.kt)("ol",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ol"},"Install the plugin ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/neo-project/neo-modules/releases"},"RpcServer")," "),(0,s.kt)("li",{parentName:"ol"},"Call the RPC method ",(0,s.kt)("inlineCode",{parentName:"li"},"openwallet")," to open the wallet first."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "sendmany",\n  "params": [from, outputs_array],\n  "id": 1\n}\n')),(0,s.kt)("h3",{id:"parameter-description"},"Parameter Description"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"from"),": Optional. The address from which you transfer the asset.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"outputs_array"),"\uff1aArray, the data structure of each element in the array is as follows:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{"asset": <asset>,"value": <value>,"address": <address>, "signers": <signers>}\n')),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"asset"),": Asset ID (asset identifier),  the NEP-17 contract scripthash"),(0,s.kt)("p",{parentName:"li"},"e.g. NeoToken is: 0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5"),(0,s.kt)("p",{parentName:"li"},"GasToken is: 0xd2a4cff31913016155e38e474a2c06d08be276cf")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"value"),": Transfer amount")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"address"),": Destination address")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"signers"),": The signature account of transaction"))))),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("p",null,"Request text:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "id": 1,\n    "method": "sendmany",\n    "params": [\n        "NikhQp1aAD1YFCiwknhM5LQQebj4464bCJ",\n        [\n            {\n                "asset": "0xf61eebf573ea36593fd43aa150c055ad7906ab83",\n                "value": 10,\n                "address": "NgaiKFjurmNmiRzDRQGs44yzByXuSkdGPF"\n            },\n            {\n                "asset": "0x70e2301955bf1e74cbb31d18c2f96972abadb328",\n                "value": 50000000,\n                "address": "NgaiKFjurmNmiRzDRQGs44yzByXuSkdGPF"\n            }\n        ]\n    ]\n}\n')),(0,s.kt)("p",null,"Request text (with fromAddress):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "sendmany",\n  "params": [\n     "NY9nnDv7cAJ44C2xeRScrXfzkrCJfFWYku",\n    [\n        {\n                "asset": "0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5", \n                "value": 100, \n                    "address": "NbtvbHpwv6nswDtVFpKEyooHhDHwZh2LHf"\n            }, \n            {\n                 "asset": "0xd2a4cff31913016155e38e474a2c06d08be276cf", \n                     "value": 100, \n                     "address": "NbtvbHpwv6nswDtVFpKEyooHhDHwZh2LHf"\n            },\n                {\n                "asset": "0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5", \n                "value": 100, \n                    "address": "NPTvd2T1zi7ioj3LmvpeBd45pPvAJU3gvr"\n            }, \n            {\n                 "asset": "0xd2a4cff31913016155e38e474a2c06d08be276cf", \n                     "value": 100, \n                     "address": "NPTvd2T1zi7ioj3LmvpeBd45pPvAJU3gvr"\n            }\n     ]\n     ],\n  "id": 1\n}\n')),(0,s.kt)("p",null,"Response text:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "hash": "0xe8742fc5a69f3180ab59f3f21695ce5459891429682a7f1df38219bc05cce39e",\n    "size": 514,\n    "version": 0,\n    "nonce": 537723951,\n    "sender": "NY9nnDv7cAJ44C2xeRScrXfzkrCJfFWYku",\n    "sysfee": "39726800",\n    "netfee": "1497580",\n    "validuntilblock": 6357,\n    "signers": [\n      {\n        "account": "0x9dd95824d6a1789d5bb665abd727d0c387a53e86",\n        "scopes": "CalledByEntry"\n      }\n    ],\n    "attributes": [],\n    "script": "CwBkDBSvT25X7NLzUvxKKqw14LOzO554tQwUhj6lh8PQJ9erZbZbnXih1iRY2Z0UwB8MCHRyYW5zZmVyDBT1Y+pAvCg9TQ4FxI6jBbPyoHNA70FifVtSOQsAZAwUJvOMLBhLx7odYBaJkOQJlbxNJF4MFIY+pYfD0CfXq2W2W514odYkWNmdFMAfDAh0cmFuc2ZlcgwU9WPqQLwoPU0OBcSOowWz8qBzQO9BYn1bUjkLAGQMFK9Pblfs0vNS/EoqrDXgs7M7nni1DBSGPqWHw9An16tltludeKHWJFjZnRTAHwwIdHJhbnNmZXIMFM924ovQBixKR47jVWEBExnzz6TSQWJ9W1I5CwBkDBQm84wsGEvHuh1gFomQ5AmVvE0kXgwUhj6lh8PQJ9erZbZbnXih1iRY2Z0UwB8MCHRyYW5zZmVyDBTPduKL0AYsSkeO41VhARMZ88+k0kFifVtSOQ==",\n    "witnesses": [\n      {\n        "invocation": "DEDxTxMc/IKpEzhfYV0bMv8qUEL1na7LvrnK3hisz1SBoYJr2SF7SpXY0RzA/1x5QfHEuxHUuvelul1aiDjFenYD",\n        "verification": "EQwhA+CII7RDmfaiqiJIg02SChWrOuktx1Y89+Q/3dWxwBgvEUF7zmyl"\n      }\n    ]\n  }\n}\n')),(0,s.kt)("p",null,"Response Description:"),(0,s.kt)("p",null,"Returns the transaction details as above if the transaction was sent successfully; otherwise the transaction is failed."),(0,s.kt)("p",null,"If the JSON format is incorrect, a Parse error is returned. If the signature is incomplete, a pending transaction is returned. If the balance is insufficient, an error message is returned."))}u.isMDXComponent=!0}}]);