"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[3208],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3229:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],c={},s="getapplicationlog method",l={unversionedId:"n3/reference/rpc/latest-version/api/getapplicationlog",id:"n3/reference/rpc/latest-version/api/getapplicationlog",isDocsHomePage:!1,title:"getapplicationlog method",description:"Returns the contract event information based on the specified txid. The contract event information is stored under the ApplicationLogs directory.",source:"@site/docs/n3/reference/rpc/latest-version/api/getapplicationlog.md",sourceDirName:"n3/reference/rpc/latest-version/api",slug:"/n3/reference/rpc/latest-version/api/getapplicationlog",permalink:"/StreamAI/docs/n3/reference/rpc/latest-version/api/getapplicationlog",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/reference/rpc/latest-version/api/getapplicationlog.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"findstates Method",permalink:"/StreamAI/docs/n3/reference/rpc/latest-version/api/findstates"},next:{title:"getbestblockhash Method",permalink:"/StreamAI/docs/n3/reference/rpc/latest-version/api/getbestblockhash"}},p=[{value:"Parameter Description",id:"parameter-description",children:[]},{value:"Example",id:"example",children:[]}],m={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getapplicationlog-method"},"getapplicationlog method"),(0,i.kt)("p",null,"Returns the contract event information based on the specified txid. The contract event information is stored under the ApplicationLogs directory."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"}," You must install the plugins ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/neo-project/neo-modules/releases"},"ApplicationLogs")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/neo-project/neo-modules/releases"},"LevelDBStore")," before you can invoke the method."))),(0,i.kt)("h2",{id:"parameter-description"},"Parameter Description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"txid: Transaction ID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"trigger type:  Optional. It has the following options:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"OnPersist"),(0,i.kt)("li",{parentName:"ul"},"PostPersist"),(0,i.kt)("li",{parentName:"ul"},"Application"),(0,i.kt)("li",{parentName:"ul"},"Verification"),(0,i.kt)("li",{parentName:"ul"},"System: OnPersist | PostPersist"),(0,i.kt)("li",{parentName:"ul"},"All: OnPersist | PostPersist | Verification | Application")),(0,i.kt)("p",{parentName:"li"},"It defaults to All. You can specify a trigger type."))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Request body\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "getapplicationlog",\n  "params": [\n    "0x7da6ae7ff9d0b7af3d32f3a2feb2aa96c2a27ef8b651f9a132cfaad6ef20724c"\n  ]\n}\n')),(0,i.kt)("p",null,"This transaction transfers 100 GAS from NgaiKFjurmNmiRzDRQGs44yzByXuSkdGPF to NikhQp1aAD1YFCiwknhM5LQQebj4464bCJ."),(0,i.kt)("p",null,"Response body 1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "id": 1,\n    "result": {\n        "txid": "0x7da6ae7ff9d0b7af3d32f3a2feb2aa96c2a27ef8b651f9a132cfaad6ef20724c",\n        "executions": [\n            {\n                "trigger": "Application",\n                "vmstate": "HALT",\n                "exception": null,\n                "gasconsumed": "9999540",\n                "stack": [],\n                "notifications": [\n                    {\n                        "contract": "0x70e2301955bf1e74cbb31d18c2f96972abadb328",\n                        "eventname": "Transfer",\n                        "state": {\n                            "type": "Array",\n                            "value": [\n                                {\n                                    "type": "ByteString",\n                                    "value": "4rZTInKT6ZxPKQbVNVOrtKZy34Y="\n                                },\n                                {\n                                    "type": "ByteString",\n                                    "value": "+on7LBTfD1nd3wT25WUX8rNKrus="\n                                },\n                                {\n                                    "type": "Integer",\n                                    "value": "10000000000"\n                                }\n                            ]\n                        }\n                    }\n                ]\n            }\n        ]\n    }\n}\n')),(0,i.kt)("p",null,"Response description:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"txid: Transaction ID.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"trigger: Triggers.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"vmstate: VM execution state. HALT represents success, and FAULT represents failure.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"gasconsumed: The transaction fee, which means the GAS consumed in the transaction execution. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"notifications: The notification sent by the smart contract. If no notifications is returned it indicates the transfer is not successful. See the Note below.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"contract: The contract sending the notification. Here is GasToken.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"eventname: Event name of the notification.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"state: Notification content, where ByteString is Base64-encoded wallet address and can be converted at ",(0,i.kt)("a",{parentName:"p",href:"https://neo.org/converter/index"},"https://neo.org/converter/index"),"."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"}," This example shows the log of a successful token transfer, however, in case of a failed transfer or NeoVM exception, the outcomes can be:"))),(0,i.kt)("blockquote",null,(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Failed transfer: no Transfer notification event is returned, execution ends in a ",(0,i.kt)("inlineCode",{parentName:"li"},"HALT")," state with a stack value of ",(0,i.kt)("inlineCode",{parentName:"li"},"False"),"."),(0,i.kt)("li",{parentName:"ul"},"NeoVM exception: a Transfer notification event may or may not be returned, but execution ends in a ",(0,i.kt)("inlineCode",{parentName:"li"},"FAULT")," state."))))}u.isMDXComponent=!0}}]);