"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[5786],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(r),f=a,d=u["".concat(l,".").concat(f)]||u[f]||s[f]||o;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var m=2;m<o;m++)c[m]=r[m];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},72520:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return p},default:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),c=["components"],i={},l="NEO.GetCommittee Method ()",m={unversionedId:"n3/reference/scapi/framework/native/Neo/GetCommittee",id:"n3/reference/scapi/framework/native/Neo/GetCommittee",isDocsHomePage:!1,title:"NEO.GetCommittee Method ()",description:"Gets the list of committee members.",source:"@site/docs/n3/reference/scapi/framework/native/Neo/GetCommittee.md",sourceDirName:"n3/reference/scapi/framework/native/Neo",slug:"/n3/reference/scapi/framework/native/Neo/GetCommittee",permalink:"/StreamAI/docs/n3/reference/scapi/framework/native/Neo/GetCommittee",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/reference/scapi/framework/native/Neo/GetCommittee.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"NEO.GetCandidates Method ()",permalink:"/StreamAI/docs/n3/reference/scapi/framework/native/Neo/GetCandidates"},next:{title:"NEO.GetGasPerBlock Method ()",permalink:"/StreamAI/docs/n3/reference/scapi/framework/native/Neo/GetGasPerBlock"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Example",id:"example",children:[]}],s={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"neogetcommittee-method-"},"NEO.GetCommittee Method ()"),(0,o.kt)("p",null,"Gets the list of committee members."),(0,o.kt)("p",null,"Namespace: ",(0,o.kt)("a",{parentName:"p",href:"/StreamAI/docs/n3/reference/scapi/framework/native"},"Neo.SmartContract.Framework.Native")),(0,o.kt)("p",null,"Assembly: Neo.SmartContract.Framework"),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"public static extern string[] GetCommittee();\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"public class Contract1 : SmartContract.Framework.SmartContract\n{\n    public static object Test()\n    {\n        string[] result = NEO.GetCommittee();\n        return result;\n    }\n}\n")),(0,o.kt)("p",null,"Response body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[{\n    "type": "Array",\n    "value": [{\n        "type": "ByteString",\n        "value": "Auj/F8Vn1i8nT\\u002BJHzIhKKmzTuP0Nd5qMWFYomlYKzKy0"\n    }]\n}]\n')),(0,o.kt)("p",null,"Respond description:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Array type: committee members are successfully requested.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Others: failed."))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/StreamAI/docs/n3/reference/scapi/framework/native/Neo"},"Back")))}u.isMDXComponent=!0}}]);