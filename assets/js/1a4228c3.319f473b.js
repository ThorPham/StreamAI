"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[5263],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(t),m=a,y=f["".concat(l,".").concat(m)]||f[m]||s[m]||o;return t?n.createElement(y,c(c({ref:r},u),{},{components:t})):n.createElement(y,c({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},98882:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),c=["components"],i={},l="Policy.GetStoragePrice Method",p={unversionedId:"n3/reference/scapi/framework/native/Policy/GetStoragePrice",id:"n3/reference/scapi/framework/native/Policy/GetStoragePrice",isDocsHomePage:!1,title:"Policy.GetStoragePrice Method",description:"Gets data storage fee per byte.",source:"@site/docs/n3/reference/scapi/framework/native/Policy/GetStoragePrice.md",sourceDirName:"n3/reference/scapi/framework/native/Policy",slug:"/n3/reference/scapi/framework/native/Policy/GetStoragePrice",permalink:"/StreamAI/docs/n3/reference/scapi/framework/native/Policy/GetStoragePrice",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/reference/scapi/framework/native/Policy/GetStoragePrice.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Policy.GetFeePerByte Method",permalink:"/StreamAI/docs/n3/reference/scapi/framework/native/Policy/GetFeePerByte"},next:{title:"Policy.IsBlocked Method",permalink:"/StreamAI/docs/n3/reference/scapi/framework/native/Policy/IsBlocked"}},u=[{value:"Syntax",id:"syntax",children:[]},{value:"Example",id:"example",children:[]}],s={toc:u};function f(e){var r=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"policygetstorageprice-method"},"Policy.GetStoragePrice Method"),(0,o.kt)("p",null,"Gets data storage fee per byte."),(0,o.kt)("p",null,"Namespace: ",(0,o.kt)("a",{parentName:"p",href:"/StreamAI/docs/n3/reference/scapi/framework/native"},"Neo.SmartContract.Framework.Native")),(0,o.kt)("p",null,"Assembly: Neo.SmartContract.Framework"),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"public static extern uint GetStoragePrice();\n")),(0,o.kt)("p",null,"Return:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data storage fee per byte")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"public static void Test()\n{\n    var price = Policy.GetStoragePrice();\n}\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/StreamAI/docs/n3/reference/scapi/framework/native/Policy"},"Back")))}f.isMDXComponent=!0}}]);