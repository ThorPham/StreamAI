"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[9827],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25532:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={},s="Neo Oracle Service",p={unversionedId:"n3/Advances/Oracles",id:"n3/Advances/Oracles",isDocsHomePage:!1,title:"Neo Oracle Service",description:"Oracle solves the problem that blockchain cannot obtain information from the external network. As a gateway for smart contracts to communicate with the outside world, Oracle opens a window to the outside world for blockchain. Oracle nodes jointly verify the data fetched from the network, then smart contracts query the result in the response transactions on the chain.",source:"@site/docs/n3/Advances/Oracles.md",sourceDirName:"n3/Advances",slug:"/n3/Advances/Oracles",permalink:"/StreamAI/docs/n3/Advances/Oracles",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/Advances/Oracles.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"NeoVM Instructions",permalink:"/StreamAI/docs/n3/Advances/Neo VM instructions"},next:{title:"Build a private chain on local host",permalink:"/StreamAI/docs/n3/develop/network/private-chain/private-chain2"}},d=[{value:"Key mechanisms",id:"key-mechanisms",children:[{value:"Commit-Reveal mechanism",id:"commit-reveal-mechanism",children:[]},{value:"Request-Response pattern",id:"request-response-pattern",children:[]}]},{value:"Protocol supports",id:"protocol-supports",children:[]},{value:"Fees and rewards",id:"fees-and-rewards",children:[]},{value:"Example",id:"example",children:[{value:"Oracle request",id:"oracle-request",children:[]},{value:"Callback function",id:"callback-function",children:[]},{value:"Code",id:"code",children:[]}]}],c={toc:d};function u(e){var t=e.components,i=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"neo-oracle-service"},"Neo Oracle Service"),(0,l.kt)("p",null,"Oracle solves the problem that blockchain cannot obtain information from the external network. As a gateway for smart contracts to communicate with the outside world, Oracle opens a window to the outside world for blockchain. Oracle nodes jointly verify the data fetched from the network, then smart contracts query the result in the response transactions on the chain."),(0,l.kt)("p",null,"Neo Oracle Service is an out-of-chain data access service built into Neo N3. It allows users to request the external data sources in smart contracts, and Oracle nodes designated by the committee will access the specified data source then pass the result in the callback function to continue executing the smart contract logic."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(88371).Z})),(0,l.kt)("h2",{id:"key-mechanisms"},"Key mechanisms"),(0,l.kt)("h3",{id:"commit-reveal-mechanism"},"Commit-Reveal mechanism"),(0,l.kt)("p",null,"The commit-reveal mechanism is a sequential protocol that prevents data plagiarism for multiple Oracle nodes."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Process")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Oracle node submits ciphertext information (hash, signature, etc.) about data to other Oracle nodes and collects ciphertext information submitted by other Oracle nodes."),(0,l.kt)("p",{parentName:"li"},"Neo Oracle Service adopts the multiple signatures on the Response transaction as the ciphertext information.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"After collecting enough ciphertext information, Oracle nodes reveal the data to other Oracle nodes to verify the data."),(0,l.kt)("p",{parentName:"li"},"Accordingly, the revealed data in Neo Oracle Service is the Response transaction."))),(0,l.kt)("p",null,"In this way, we can avoid data plagiarism since oracle nodes cannot predict the data to submit ciphertext information."),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(20748).Z})),(0,l.kt)("h3",{id:"request-response-pattern"},"Request-Response pattern"),(0,l.kt)("p",null,"Neo Oracle Service adopts the request-response processing mechanism, which is an asynchronous pattern."),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(18685).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Process")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The user writes the smart contract to call the ",(0,l.kt)("inlineCode",{parentName:"p"},"Request")," method of the Oracle contract."),(0,l.kt)("p",{parentName:"li"},"Each successfully created Request is put in the Request cache list with an unique RequestId.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Oracle node listens for the requests in the Request cache list in real time, and accesses data sources specified in the Request to obtain data.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Oracle node processes the obtained data with the specified filter, and encapsulates the result into a ",(0,l.kt)("inlineCode",{parentName:"p"},"Response")," transaction (including RequestId, data, fixedScript, multisig address, etc.)."),(0,l.kt)("p",{parentName:"li"},"The result data is stored in the ",(0,l.kt)("inlineCode",{parentName:"p"},"TransactionAttribute")," field of the Response transaction. The ",(0,l.kt)("inlineCode",{parentName:"p"},"fixedScript")," in the transaction is used to call the ",(0,l.kt)("inlineCode",{parentName:"p"},"finish")," method of the Oracle contract, which will execute the callback function ",(0,l.kt)("inlineCode",{parentName:"p"},"CallbackMethod"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Oracle nodes independently sign the Response transaction through the commit-reveal mechanism.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The Response transaction with enough signatures will be stored on the chain, and the callback function will be executed."))),(0,l.kt)("h2",{id:"protocol-supports"},"Protocol supports"),(0,l.kt)("p",null,"Oracle service currently supports two URL schemes, ",(0,l.kt)("inlineCode",{parentName:"p"},"https")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"neofs"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"https")," scheme follows ",(0,l.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc2818"},"RFC 2818")," and ",(0,l.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc2616"},"RFC 2616")," standards and allows to specify resource to request via HTTP GET method. ",(0,l.kt)("inlineCode",{parentName:"p"},"neofs")," scheme is Neo-specific. Both types of requests are treated equal otherwise."),(0,l.kt)("h2",{id:"fees-and-rewards"},"Fees and rewards"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Fees")),(0,l.kt)("p",{parentName:"li"},"Neo Oracle Service charges the user by the number of requests, 0.5 GAS by default for each. Besides, the user has to pay additional fees for the callback function. All the fees will be paid when the Request is created.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Rewards")),(0,l.kt)("p",{parentName:"li"},"The fee paid by the user for the Request is distributed to the Oracle node in turn when executing the ",(0,l.kt)("inlineCode",{parentName:"p"},"PostPersist")," logic."),(0,l.kt)("p",{parentName:"li"},"Distribution order = RequestId % count of Oracle nodes"))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"Here is a demo about using the Oracle service\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},'using Neo.SmartContract;\nusing Neo.SmartContract.Framework;\nusing Neo.SmartContract.Framework.Native;\nusing Neo.SmartContract.Framework.Services;\nusing System.ComponentModel;\n\nnamespace demo\n{\n    [DisplayName("Oracle Demo")]\n    [ManifestExtra("Author", "Neo")]\n    [ManifestExtra("Email", "dev@neo.org")]\n    [ManifestExtra("Description", "This is a Oracle using template")]\n    public class OracleDemo : SmartContract\n    {\n        static readonly string PreData = "RequstData";\n\n        public static string GetRequstData()\n        {\n            return Storage.Get(Storage.CurrentContext, PreData);\n        }\n\n        public static void CreateRequest(string url, string filter, string callback, byte[] userData, long gasForResponse)\n        {\n            Oracle.Request(url, filter, callback, userData, gasForResponse);\n        }\n\n        public static void Callback(string url, byte[] userData, int code, byte[] result)\n        {\n            if (Runtime.CallingScriptHash != Oracle.Hash) throw new Exception("Unauthorized!");\n            Storage.Put(Storage.CurrentContext, PreData, result.ToByteString());\n        }\n    }\n}\n')),(0,l.kt)("p",null,"As shown above, there are two key functions in the contract:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"CreateRequest")," function can create Oracle Request to request data")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Callback")," function is used to execute contract logic after the Oracle node fetches data"))),(0,l.kt)("h3",{id:"oracle-request"},"Oracle request"),(0,l.kt)("p",null,"The following fields are required for Oracle Request\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The resource path, with a maximum length of 256 bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Filter"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Used to filter out useful information from the result returned from the data source. It is a JSONPath expression with a maximum length of 128 bytes. For the filters supported by Oracle, see the explanation below.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CallbackMethod"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'method name of the callback function (cannot begin with "_"), with a maximum length of 32 bytes')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UserData"),(0,l.kt)("td",{parentName:"tr",align:null},"var bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"The custom data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GasForResponse"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"The fee paid in advance for the callback function to pay for executing the script in the Response transaction. The fee should not be less than 0.1 GAS and will be charged when creating the Oracle request transaction")))),(0,l.kt)("h4",{id:"url"},"Url"),(0,l.kt)("p",null,"It is expected that URL requested will provide data in JSON format, for HTTP requests it means that server must answer with ",(0,l.kt)("inlineCode",{parentName:"p"},"Content-Type: application/json")," header for request to be successful."),(0,l.kt)("h5",{id:"neofs-urls"},"NeoFS URLs"),(0,l.kt)("p",null,"NeoFS URLs use the following scheme:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"neofs://<Container-ID>/<Object-ID/<Command>/<Params>\n")),(0,l.kt)("p",null,"Where ",(0,l.kt)("inlineCode",{parentName:"p"},"Container-ID")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Object-ID")," are mandatory components, ",(0,l.kt)("inlineCode",{parentName:"p"},"Command")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Params")," are optional."),(0,l.kt)("p",null,"Absent any command oracle subsystem will get an object and return its payload, example: neofs://C3swfg8MiMJ9bXbeFG6dWJTCoHp9hAEZkHezvbSwK1Cc/3nQH1L8u3eM9jt2mZCs6MyjzdjerdSzBkXCYYj4M4Znk."),(0,l.kt)("p",null,"Command ",(0,l.kt)("inlineCode",{parentName:"p"},"range")," can be used to get a part of object's payload, it has a mandatory range parameter specified as ",(0,l.kt)("inlineCode",{parentName:"p"},"offset|length"),", where ",(0,l.kt)("inlineCode",{parentName:"p"},"offset")," is a number of bytes to skip from the beginning on payload and ",(0,l.kt)("inlineCode",{parentName:"p"},"length")," is a number of bytes to return to the caller, they're separated by vertical bar. Example request: neofs://C3swfg8MiMJ9bXbeFG6dWJTCoHp9hAEZkHezvbSwK1Cc/3nQH1L8u3eM9jt2mZCs6MyjzdjerdSzBkXCYYj4M4Znk/range/42|128."),(0,l.kt)("p",null,"Command ",(0,l.kt)("inlineCode",{parentName:"p"},"header")," can be used to get header of an object, it doesn't have any parameters. Example: neofs://C3swfg8MiMJ9bXbeFG6dWJTCoHp9hAEZkHezvbSwK1Cc/3nQH1L8u3eM9jt2mZCs6MyjzdjerdSzBkXCYYj4M4Znk/header."),(0,l.kt)("p",null,"Command ",(0,l.kt)("inlineCode",{parentName:"p"},"hash")," can be used to get SHA256 hash of an object or part of it, it has an optional range parameter with the same syntax as for ",(0,l.kt)("inlineCode",{parentName:"p"},"range")," command. Example: Example: neofs://C3swfg8MiMJ9bXbeFG6dWJTCoHp9hAEZkHezvbSwK1Cc/3nQH1L8u3eM9jt2mZCs6MyjzdjerdSzBkXCYYj4M4Znk/hash."),(0,l.kt)("h4",{id:"filter"},"Filter"),(0,l.kt)("p",null,"Given the following Json example, the Oracle supported filters are illustrated in the table below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "store": {\n        "book": [\n            {\n                "category": "reference",\n                "author": "Nigel Rees",\n                "title": "Sayings of the Century",\n                "price": 8.95\n            },\n            {\n                "category": "fiction",\n                "author": "Evelyn Waugh",\n                "title": "Sword of Honour",\n                "price": 12.99\n            },\n            {\n                "category": "fiction",\n                "author": "Herman Melville",\n                "title": "Moby Dick",\n                "isbn": "0-553-21311-3",\n                "price": 8.99\n            },\n            {\n                "category": "fiction",\n                "author": "J. R. R. Tolkien",\n                "title": "The Lord of the Rings",\n                "isbn": "0-395-19395-8",\n                "price": 22.99\n            }\n        ],\n        "bicycle": {\n            "color": "red",\n            "price": 19.95\n        }\n    },\n    "expensive": 10,\n    "data": null\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Filter"),(0,l.kt)("th",{parentName:"tr",align:null},"Result"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$.store.book","[*]",".author"),(0,l.kt)("td",{parentName:"tr",align:null},"The authors of all books")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$..author"),(0,l.kt)("td",{parentName:"tr",align:null},"All authors")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$.store.*"),(0,l.kt)("td",{parentName:"tr",align:null},"All things, both books and bicycles")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$.store..price"),(0,l.kt)("td",{parentName:"tr",align:null},"The price of everything")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$..book","[2]"),(0,l.kt)("td",{parentName:"tr",align:null},"The third book")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$..book","[-2]"),(0,l.kt)("td",{parentName:"tr",align:null},"The second to last book")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$..book","[0,1]"),(0,l.kt)("td",{parentName:"tr",align:null},"The first two books")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$..book","[:2]"),(0,l.kt)("td",{parentName:"tr",align:null},"All books from index 0 (inclusive) until index 2 (exclusive)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$..book","[1:2]"),(0,l.kt)("td",{parentName:"tr",align:null},"All books from index 1 (inclusive) until index 2 (exclusive)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$..book","[-2:]"),(0,l.kt)("td",{parentName:"tr",align:null},"Last two books")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$..book","[2:]"),(0,l.kt)("td",{parentName:"tr",align:null},"Book number two from tail")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$..book","[?(@.isbn)]"),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid Filter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$.store.book","[?(@.price < 10)]"),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid Filter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$..book[?(@.price <= $","['expensive']",")]"),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid Filter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$..book","[?(@.author =~ /.*REES/i)]"),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid Filter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$..book","[(@.length-1)]"),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid Filter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$..*"),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid Filter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$.."),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid Filter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$.*"),(0,l.kt)("td",{parentName:"tr",align:null},"All store value and expensive,data value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"empty string"),(0,l.kt)("td",{parentName:"tr",align:null},"Give me the original result")))),(0,l.kt)("p",null,"The returned result can be found at ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/json-path/JsonPath"},"https://github.com/json-path/JsonPath"),"."),(0,l.kt)("h3",{id:"callback-function"},"Callback function"),(0,l.kt)("p",null,"The type and order of the parameters of the callback function should exactly be the same as below:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"the resource path")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UserData"),(0,l.kt)("td",{parentName:"tr",align:null},"var bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"the custom data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Code"),(0,l.kt)("td",{parentName:"tr",align:null},"byte"),(0,l.kt)("td",{parentName:"tr",align:null},"status Code of the Oracle response, see the Code table for details.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Result"),(0,l.kt)("td",{parentName:"tr",align:null},"var bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"the result")))),(0,l.kt)("h3",{id:"code"},"Code"),(0,l.kt)("p",null,"The Code field defines the status Code for Oracle responses, including the following types:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x00")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Success")),(0,l.kt)("td",{parentName:"tr",align:null},"execute successfully"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"byte"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x10")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ProtocolNotSupported")),(0,l.kt)("td",{parentName:"tr",align:null},"Unsupported protocol"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"byte"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x12")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ConsensusUnreachable")),(0,l.kt)("td",{parentName:"tr",align:null},"Oracle nodes did not reach a consensus"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"byte"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x14")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NotFound")),(0,l.kt)("td",{parentName:"tr",align:null},"requested information does not exist"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"byte"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x16")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Timeout")),(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"byte"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x18")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Forbidden")),(0,l.kt)("td",{parentName:"tr",align:null},"no permission to query the data source"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"byte"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x1a")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ResponseTooLarge")),(0,l.kt)("td",{parentName:"tr",align:null},"result size is out of limit"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"byte"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x1c")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"InsufficientFunds")),(0,l.kt)("td",{parentName:"tr",align:null},"the fee is insufficient"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"byte"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0xff")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Error")),(0,l.kt)("td",{parentName:"tr",align:null},"error occurs in the execution"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"byte"))))))}u.isMDXComponent=!0},88371:function(e,t,n){t.Z=n.p+"assets/images/oracle-6d5477762b407e4cc26f090c58309ad1.png"},20748:function(e,t,n){t.Z=n.p+"assets/images/oracle_commit-5ae3811c4afa7f8f1e2cf444b1ed9d40.png"},18685:function(e,t,n){t.Z=n.p+"assets/images/oralce_response-3e3ca15f74f8f986b7c9eb9ad0a051b4.png"}}]);