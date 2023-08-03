"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[6157],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82282:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Decentralized public key server for ECDH with NeoNS",description:"Using NeoNS as a decentralized public key server for key exchange for ECDH.",author:"Apisit",tags:["NEONS","REACT","JS","NEON-JS"],skill:"beginner",sidebar:!0,image:"./assets/send_message.png"},l=void 0,c={permalink:"/StreamAI/tutorials/2022/10/25/neons-as-a-public-key-server",source:"@site/tutorials/2022-10-25-neons-as-a-public-key-server/index.md",title:"Decentralized public key server for ECDH with NeoNS",description:"Using NeoNS as a decentralized public key server for key exchange for ECDH.",date:"2022-10-25T00:00:00.000Z",formattedDate:"October 25, 2022",tags:[{label:"NEONS",permalink:"/StreamAI/tutorials/tags/neons"},{label:"REACT",permalink:"/StreamAI/tutorials/tags/react"},{label:"JS",permalink:"/StreamAI/tutorials/tags/js"},{label:"NEON-JS",permalink:"/StreamAI/tutorials/tags/neon-js"}],readingTime:1.185,truncated:!1,authors:[{name:"Apisit"}],prevItem:{title:"Neonjs Cheatsheet",permalink:"/StreamAI/tutorials/2022/10/30/neonjs-cheatsheet"},nextItem:{title:"How to transfer Neo, Gas or any NEP-17 token using neon-js",permalink:"/StreamAI/tutorials/2022/10/17/transfer-neo-or-gas-with-neon-js"}},u={image:n(4204).Z,authorsImageUrls:[void 0]},p=[],d={toc:p};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you are familiar with ECDH, You know that you need to exchange public keys between two parties to generate a shared secret to encrypt and decrypt the data. Exchanging a public key relies on having a centralized server to store your public key and the ability to retreive it."),(0,o.kt)("p",null,"With the new NeoNS recently launched, one of a great features about NeoNS is the ability to add multiple records to your .neo domain. Similar to what you are doing with a normal web domain name. i.e. CNAME, TXT, IP, etc.\nAnd the best part about this is \u2014 It's ",(0,o.kt)("strong",{parentName:"p"},"decentralized")," and is available for you to use today!"),(0,o.kt)("p",null,"Let's dive in on how NeoNS can help make storing public key and exchanging key easier."),(0,o.kt)("p",null,"Here is the flows explaining how it works."),(0,o.kt)("p",null,"Alice is sending Bob an encrypted message.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"Send Message",src:n(4204).Z})),(0,o.kt)("p",null,"Bob is reading a message from Alice.\n",(0,o.kt)("img",{alt:"Read Message",src:n(85649).Z})),(0,o.kt)("p",null,"First you need to set a record on you .neo domain with a ",(0,o.kt)("a",{parentName:"p",href:"/docs/n3/neons/api/setRecord"},(0,o.kt)("inlineCode",{parentName:"a"},"setRecord"))," method. "),(0,o.kt)("p",null,"To retreive all records from a particular .neo domain, you will need ",(0,o.kt)("a",{parentName:"p",href:"/docs/n3/neons/api/getAllRecords"},(0,o.kt)("inlineCode",{parentName:"a"},"getAllRecords"))," method.\nThen you can check whether an owner of particular .neo domain has a public key registered in their records or not."),(0,o.kt)("p",null,"There you have it. Multiple records on NeoNS is a very powerful feature. Hope this can inspire you to build something!"),(0,o.kt)("p",null,"You can read more about NeoNS API ",(0,o.kt)("a",{parentName:"p",href:"/docs/n3/neons/index"},"here"),"."),(0,o.kt)("p",null,"Check out the sample application at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cityOfZion/inbox"},"https://github.com/cityOfZion/inbox")))}m.isMDXComponent=!0},85649:function(e,t,n){t.Z=n.p+"assets/images/read_message-ab76b1e7fb8c79c37e061c87d4bca117.png"},4204:function(e,t,n){t.Z=n.p+"assets/images/send_message-37563559c9e9dad735f471918643c6d5.png"}}]);