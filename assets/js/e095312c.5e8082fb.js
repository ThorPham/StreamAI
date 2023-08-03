"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[2894],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||c;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var i=2;i<c;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50329:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return p},default:function(){return d}});var r=n(87462),o=n(63366),c=(n(67294),n(3905)),a=["components"],l={},u="getBlockedAccounts Method",i={unversionedId:"n3/reference/governance_api/getBlockedAccounts",id:"n3/reference/governance_api/getBlockedAccounts",isDocsHomePage:!1,title:"getBlockedAccounts Method",description:"Returns the blocked accounts.",source:"@site/docs/n3/reference/governance_api/getBlockedAccounts.md",sourceDirName:"n3/reference/governance_api",slug:"/n3/reference/governance_api/getBlockedAccounts",permalink:"/StreamAI/docs/n3/reference/governance_api/getBlockedAccounts",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/reference/governance_api/getBlockedAccounts.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"decimals Method",permalink:"/StreamAI/docs/n3/reference/governance_api/decimals"},next:{title:"getValidators Method",permalink:"/StreamAI/docs/n3/reference/governance_api/getValidators"}},p=[{value:"Contract",id:"contract",children:[]},{value:"Example",id:"example",children:[]}],s={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"getblockedaccounts-method"},"getBlockedAccounts Method"),(0,c.kt)("p",null,"Returns the blocked accounts."),(0,c.kt)("h2",{id:"contract"},"Contract"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"PolicyContract\n")),(0,c.kt)("h2",{id:"example"},"Example"),(0,c.kt)("p",null,"Request content:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'var result = Contract.Call(policyHash, "getBlockedAccounts", new object[] { });\n')),(0,c.kt)("p",null,"Respond content:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "Array",\n    "value": [{\n        "type": "Struct",\n        "value": [{\n            "type": "ByteString",\n            "value": "AkuBfvN/L8PUoz/jZoflktnzD\\u002BJLPigYfcjxKzs7K4Oe"\n        }, {\n            "type": "Integer",\n            "value": "0"\n        }]\n    }]\n}\n')),(0,c.kt)("p",null,"Respond description:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"Array type: account address is successfully requested.")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"Others: failed."))))}d.isMDXComponent=!0}}]);