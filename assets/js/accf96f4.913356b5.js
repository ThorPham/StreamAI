"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[9889],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=p(n),u=r,c=k["".concat(s,".").concat(u)]||k[u]||d[u]||i;return n?a.createElement(c,l(l({ref:t},m),{},{components:n})):a.createElement(c,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},41916:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return k}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={},s="Consensus Protocol",p={unversionedId:"n3/foundation/consensus/consensus_protocol",id:"n3/foundation/consensus/consensus_protocol",isDocsHomePage:!1,title:"Consensus Protocol",description:"Consensus Message Format",source:"@site/docs/n3/foundation/consensus/consensus_protocol.md",sourceDirName:"n3/foundation/consensus",slug:"/n3/foundation/consensus/consensus_protocol",permalink:"/StreamAI/docs/n3/foundation/consensus/consensus_protocol",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/foundation/consensus/consensus_protocol.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"dBFT 2.0 Algorithm",permalink:"/StreamAI/docs/n3/foundation/consensus/consensus_algorithm"},next:{title:"Consensus Mechanism",permalink:"/StreamAI/docs/n3/foundation/consensus/dbft"}},m=[{value:"Consensus Message Format",id:"consensus-message-format",children:[{value:"ExtensiblePayload",id:"extensiblepayload",children:[]},{value:"ConsensusMessage",id:"consensusmessage",children:[]},{value:"ChangeView",id:"changeview",children:[]},{value:"Commit",id:"commit",children:[]},{value:"PrepareRequest",id:"preparerequest",children:[]},{value:"PrepareResponse",id:"prepareresponse",children:[]},{value:"RecoveryMessage",id:"recoverymessage",children:[]},{value:"RecoveryRequest",id:"recoveryrequest",children:[]}]},{value:"Transport Protocol",id:"transport-protocol",children:[{value:"InvPayload",id:"invpayload",children:[]}]},{value:"Consensus Message Process",id:"consensus-message-process",children:[{value:"Verification",id:"verification",children:[]},{value:"Process",id:"process",children:[]}]}],d={toc:m};function k(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"consensus-protocol"},"Consensus Protocol"),(0,i.kt)("h2",{id:"consensus-message-format"},"Consensus Message Format"),(0,i.kt)("h3",{id:"extensiblepayload"},"ExtensiblePayload"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Size"),(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"?"),(0,i.kt)("td",{parentName:"tr",align:null},"Category"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Message category, currently is ",(0,i.kt)("inlineCode",{parentName:"td"},"dBFT"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},"ValidBlockStart"),(0,i.kt)("td",{parentName:"tr",align:null},"uint"),(0,i.kt)("td",{parentName:"tr",align:null},"Starting height where message is valid")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},"ValidBlockEnd"),(0,i.kt)("td",{parentName:"tr",align:null},"uint"),(0,i.kt)("td",{parentName:"tr",align:null},"Ending height where message is valid")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"20"),(0,i.kt)("td",{parentName:"tr",align:null},"Sender"),(0,i.kt)("td",{parentName:"tr",align:null},"UInt160"),(0,i.kt)("td",{parentName:"tr",align:null},"The address hash of the current consensus node")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"?"),(0,i.kt)("td",{parentName:"tr",align:null},"Data"),(0,i.kt)("td",{parentName:"tr",align:null},"byte[]"),(0,i.kt)("td",{parentName:"tr",align:null},"The data includes ",(0,i.kt)("inlineCode",{parentName:"td"},"ChangeView"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"PrepareRequest"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"PrepareResponse"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Commit"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"RecoveryMessage"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"RecoveryRequest"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"?"),(0,i.kt)("td",{parentName:"tr",align:null},"Witness"),(0,i.kt)("td",{parentName:"tr",align:null},"Witness"),(0,i.kt)("td",{parentName:"tr",align:null},"Witness contains invocation script and verification script")))),(0,i.kt)("h3",{id:"consensusmessage"},"ConsensusMessage"),(0,i.kt)("p",null,"ConsensusMessage is the basic abstract type of all consensus message types. Other consensus message types are all inherited from this type."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Size"),(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"Type"),(0,i.kt)("td",{parentName:"tr",align:null},"ConsensusMessageType"),(0,i.kt)("td",{parentName:"tr",align:null},"Includes ",(0,i.kt)("inlineCode",{parentName:"td"},"ChangeView"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"PrepareRequest"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"PrepareResponse"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Commit"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"RecoveryMessage"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"RecoveryRequest"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},"BlockIndex"),(0,i.kt)("td",{parentName:"tr",align:null},"uint"),(0,i.kt)("td",{parentName:"tr",align:null},"Height where message is created")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"ValidatorIndex"),(0,i.kt)("td",{parentName:"tr",align:null},"byte"),(0,i.kt)("td",{parentName:"tr",align:null},"The index of the sender in validators array")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"ViewNumber"),(0,i.kt)("td",{parentName:"tr",align:null},"byte"),(0,i.kt)("td",{parentName:"tr",align:null},"View number where message is created")))),(0,i.kt)("h3",{id:"changeview"},"ChangeView"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Size"),(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8"),(0,i.kt)("td",{parentName:"tr",align:null},"Timestamp"),(0,i.kt)("td",{parentName:"tr",align:null},"ulong"),(0,i.kt)("td",{parentName:"tr",align:null},"Timestamp when the ChangeView message is created")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"Reason"),(0,i.kt)("td",{parentName:"tr",align:null},"ChangeViewReason"),(0,i.kt)("td",{parentName:"tr",align:null},"Reason for the view change")))),(0,i.kt)("h3",{id:"commit"},"Commit"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Size"),(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"?"),(0,i.kt)("td",{parentName:"tr",align:null},"Signature"),(0,i.kt)("td",{parentName:"tr",align:null},"byte[]"),(0,i.kt)("td",{parentName:"tr",align:null},"Message signature")))),(0,i.kt)("h3",{id:"preparerequest"},"PrepareRequest"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Size"),(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},"Version"),(0,i.kt)("td",{parentName:"tr",align:null},"uint"),(0,i.kt)("td",{parentName:"tr",align:null},"Default value is 0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"32"),(0,i.kt)("td",{parentName:"tr",align:null},"PrevHash"),(0,i.kt)("td",{parentName:"tr",align:null},"UInt256"),(0,i.kt)("td",{parentName:"tr",align:null},"Previous block's hash")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8"),(0,i.kt)("td",{parentName:"tr",align:null},"Timestamp"),(0,i.kt)("td",{parentName:"tr",align:null},"ulong"),(0,i.kt)("td",{parentName:"tr",align:null},"Timestamp when the PrepareRequest message is created")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"?"),(0,i.kt)("td",{parentName:"tr",align:null},"TransactionHashes"),(0,i.kt)("td",{parentName:"tr",align:null},"UInt256[]"),(0,i.kt)("td",{parentName:"tr",align:null},"The transaction hashes in the block")))),(0,i.kt)("h3",{id:"prepareresponse"},"PrepareResponse"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Size"),(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"32"),(0,i.kt)("td",{parentName:"tr",align:null},"PreparationHash"),(0,i.kt)("td",{parentName:"tr",align:null},"UInt256"),(0,i.kt)("td",{parentName:"tr",align:null},"Hash of corresponding prepare request")))),(0,i.kt)("h3",{id:"recoverymessage"},"RecoveryMessage"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Size"),(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"?"),(0,i.kt)("td",{parentName:"tr",align:null},"ChangeViewMessages"),(0,i.kt)("td",{parentName:"tr",align:null},"Dictionary<int, ChangeViewPayloadCompact>"),(0,i.kt)("td",{parentName:"tr",align:null},"ChangeView messages")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"?"),(0,i.kt)("td",{parentName:"tr",align:null},"PrepareRequestMessage"),(0,i.kt)("td",{parentName:"tr",align:null},"PrepareRequest"),(0,i.kt)("td",{parentName:"tr",align:null},"The current PrepareRequest message")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"32"),(0,i.kt)("td",{parentName:"tr",align:null},"PreparationHash"),(0,i.kt)("td",{parentName:"tr",align:null},"UInt256"),(0,i.kt)("td",{parentName:"tr",align:null},"Hash of prepare request")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"?"),(0,i.kt)("td",{parentName:"tr",align:null},"PreparationMessages"),(0,i.kt)("td",{parentName:"tr",align:null},"Dictionary<int, PreparationPayloadCompact>"),(0,i.kt)("td",{parentName:"tr",align:null},"Preparation messages that have been collected")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"?"),(0,i.kt)("td",{parentName:"tr",align:null},"CommitMessages"),(0,i.kt)("td",{parentName:"tr",align:null},"Dictionary<int, CommitPayloadCompact>"),(0,i.kt)("td",{parentName:"tr",align:null},"Commit messages that have been collected")))),(0,i.kt)("h3",{id:"recoveryrequest"},"RecoveryRequest"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Size"),(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8"),(0,i.kt)("td",{parentName:"tr",align:null},"Timestamp"),(0,i.kt)("td",{parentName:"tr",align:null},"ulong"),(0,i.kt)("td",{parentName:"tr",align:null},"Timestamp when the message is created")))),(0,i.kt)("h2",{id:"transport-protocol"},"Transport Protocol"),(0,i.kt)("p",null,"When a consensus message enters the P2P network, it's broadcasted and transmitted like other messages. That is because consensus nodes do not have IP address of other consensus nodes. Consensus nodes are not directly connected. That is to say, ordinary nodes can also receive consensus message. The broadcast flow of consensus messages is as follows."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../../images/consensus/consensus_msg_seq.jpg"},(0,i.kt)("img",{alt:"consensus_msg_seq",src:n(64148).Z}))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Consensus node A will directly broadcast 'consensus' message to connected nodes(e.g. node B).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After receiving the ",(0,i.kt)("inlineCode",{parentName:"p"},"consensus")," message, node B firstly process the received consensus message and then forwards it. Before forwarding the consensus message, it sends an ",(0,i.kt)("inlineCode",{parentName:"p"},"inv")," message which carries the hash data of the ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"consensus")," message (to node C).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If the node C has already known the data corresponding to the hash, it does not process the inv message. Otherwise, it proceeds to step 4.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Node C sends a ",(0,i.kt)("inlineCode",{parentName:"p"},"getdata")," message to node B, with the hash data in the ",(0,i.kt)("inlineCode",{parentName:"p"},"inv")," message.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After receiving the ",(0,i.kt)("inlineCode",{parentName:"p"},"getdata")," message, node B sends a ",(0,i.kt)("inlineCode",{parentName:"p"},"consensus")," message to node C.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After receiving the ",(0,i.kt)("inlineCode",{parentName:"p"},"consensus")," message, the node C triggers the consensus module to process the message, and forwards the consensus message, and then returns to step 2."))),(0,i.kt)("p",null,"Both inv and getdata messages use InvPayload as the message carrier, which is defined as follows:"),(0,i.kt)("h3",{id:"invpayload"},"InvPayload"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Size"),(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"Type"),(0,i.kt)("td",{parentName:"tr",align:null},"InventoryType"),(0,i.kt)("td",{parentName:"tr",align:null},"Message type")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"?"),(0,i.kt)("td",{parentName:"tr",align:null},"Hashes"),(0,i.kt)("td",{parentName:"tr",align:null},"UInt256[]"),(0,i.kt)("td",{parentName:"tr",align:null},"Hashes broadcasted / requested")))),(0,i.kt)("p",null,"There are 3 kinds of  ",(0,i.kt)("inlineCode",{parentName:"p"},"InventoryType"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0x2b"),": Transaction. ",(0,i.kt)("inlineCode",{parentName:"li"},"Hashes")," is assigned to the transaction."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0x2c"),": Block. ",(0,i.kt)("inlineCode",{parentName:"li"},"Hashes")," is assigned to the block."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0x2e"),": Consensus. ",(0,i.kt)("inlineCode",{parentName:"li"},"Hashes")," is assigned to the ",(0,i.kt)("inlineCode",{parentName:"li"},"ConsensusPayload")," message.")),(0,i.kt)("h2",{id:"consensus-message-process"},"Consensus Message Process"),(0,i.kt)("h3",{id:"verification"},"Verification"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignore the message if ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidBlockStart")," is lower than ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidBlockEnd"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignore the message if current block height is out of ",(0,i.kt)("inlineCode",{parentName:"p"},"[ValidBlockStart, ValidBlockEnd)"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignore the message if sender is not listed in the consensus white list.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignore the message if the verification script failed or ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),' is not "dBFT".')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignore the message if the node has sent out the new block.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignore the message if the consensus message data is in a wrong format.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignore the message if the ",(0,i.kt)("inlineCode",{parentName:"p"},"message.BlockIndex")," is lower than the current block height.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignore the message if the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConsensusPayload.ValidatorIndex")," is out of index of the current consensus nodes array, or ",(0,i.kt)("inlineCode",{parentName:"p"},"payload.Sender")," is different from the correct hash."))),(0,i.kt)("h3",{id:"process"},"Process"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On receiving a ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareRequest")," sent by speaker, attached with proposal block data."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignore if the ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareRequest")," has already been received or the node is trying to change the view.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignore if the ",(0,i.kt)("inlineCode",{parentName:"p"},"message.ValidatorIndex")," is not the index of the current round speaker or the ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareRequest.ViewNumber")," is not equal to the current view number.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignore if ",(0,i.kt)("inlineCode",{parentName:"p"},"message.Version")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"message.PrevHash")," is different from the local context.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignore if transactions' amount is over ",(0,i.kt)("inlineCode",{parentName:"p"},"MaxTransactionsPerBlock"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignore if the ",(0,i.kt)("inlineCode",{parentName:"p"},"message.Timestamp")," is not more than the timestamp of the previous block, or is more than 8 blocks above current time.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignore if any proposed transaction has already been included in the blockchain")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Renew consensus context and clear invalid signatures that have been received (Prepare-Reponse may arrive first)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Save the signature of the speaker into current context.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If there's no transaction in this request, directly check the local collection of ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareResponse"),", and broadcast the ",(0,i.kt)("inlineCode",{parentName:"p"},"Commit")," message in case of enough ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareResponse")," collected.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Collect and verify transactions in the proposal block from memory pool."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignore if the transaction failed to pass verification or the transaction did not meet strategic requirements.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Otherwise the transaction will be saved into current consensus context.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify the transactions required by blocks in the unconfirmed transaction pool and add them into current context.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Broadcast a ",(0,i.kt)("inlineCode",{parentName:"p"},"getdata")," message with a list of transaction hashes if they were missed in the block.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On receiving a ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareResponse")," sent by consensus nodes with their signature."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignore it if the message view is not the same as the current view")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignore it if current node has already saved the sender's signature or the current node is trying to change the view.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Save it temporarily if current node has not received PrepareResponse yet (Clear it after receiving PrepareResponse), or go to next step.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify the signature. Save the signature if it pass the verification. Ignore it if not.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignore it if the node has already sent ",(0,i.kt)("inlineCode",{parentName:"p"},"Commit"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify the signature number if the node has already sent or received ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareRequest"),". If there are at least ",(0,i.kt)("inlineCode",{parentName:"p"},"N-f")," signatures, broadcast ",(0,i.kt)("inlineCode",{parentName:"p"},"Commit")," and generate the block if there are ",(0,i.kt)("inlineCode",{parentName:"p"},"N-f")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Commit")," messages have been received.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On receiving a ",(0,i.kt)("inlineCode",{parentName:"p"},"Changeview")," sent by consensus nodes."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Send ",(0,i.kt)("inlineCode",{parentName:"p"},"RecoveryMessage")," if the new view number in the message is less than or equal to the view number in current context.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignore it if the node has sent ",(0,i.kt)("inlineCode",{parentName:"p"},"Commit"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If current node received at least ",(0,i.kt)("inlineCode",{parentName:"p"},"N-f")," ",(0,i.kt)("inlineCode",{parentName:"p"},"ChangeView")," messages with the same new view number, then ViewChange will happen. The current node reset the consensus process with the new view number.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On receiving a ",(0,i.kt)("inlineCode",{parentName:"p"},"Commit")," send by consensus nodes after receiving ",(0,i.kt)("inlineCode",{parentName:"p"},"N-f")," ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareResponse"),"."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignore it if it has been received from the same node before.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Save the message into the consensus context if the signature passed verification,  generate a block and broadcast if ",(0,i.kt)("inlineCode",{parentName:"p"},"N-f")," Commit messages has been received.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On receiving a ",(0,i.kt)("inlineCode",{parentName:"p"},"RecoveryRequest")," sent by consensus nodes when initiating a consensus or the sum of committed and failed nodes is greater than ",(0,i.kt)("inlineCode",{parentName:"p"},"f"),"."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignore it if it has been received before.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Response it if the node has sent the ",(0,i.kt)("inlineCode",{parentName:"p"},"Commit")," message before or the node index is no more than f numbers later than the sender index")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Send ",(0,i.kt)("inlineCode",{parentName:"p"},"RecoveryMessage")," if the node is obligated to response.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On receiving a ",(0,i.kt)("inlineCode",{parentName:"p"},"RecoveryMessage")," broadcast by consensus nodes when receiving an accessible ",(0,i.kt)("inlineCode",{parentName:"p"},"RecoveryRequest")," or time out after a Commit message has been sent."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Receive and handle ",(0,i.kt)("inlineCode",{parentName:"p"},"ChangeView")," inside if the message view number is greater than the node view number. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Then receive and handle ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareRequest")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareResponse")," inside if the message  view number is equal to the node view number, and the node is not in the process of changing view or has not sent ",(0,i.kt)("inlineCode",{parentName:"p"},"Commit")," before.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Then receive and handle ",(0,i.kt)("inlineCode",{parentName:"p"},"Commit")," inside if the message view number is not greater than the node view number. ")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On receiving an ",(0,i.kt)("inlineCode",{parentName:"p"},"OnTimer")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignore if timer's height or view number is different from local context.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If the speaker timeout, the consensus node will broadcast ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareRequest")," for the first timeout. For subsequent timeouts, it will broadcast ",(0,i.kt)("inlineCode",{parentName:"p"},"RecoveryMessage")," if ",(0,i.kt)("inlineCode",{parentName:"p"},"Commit")," message has been sent, otherwise ",(0,i.kt)("inlineCode",{parentName:"p"},"ChangeView"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If the delegate timeout, the consensus node will broadcast ",(0,i.kt)("inlineCode",{parentName:"p"},"RecoveryMessage")," if ",(0,i.kt)("inlineCode",{parentName:"p"},"Commit")," message has been sent, otherwise ",(0,i.kt)("inlineCode",{parentName:"p"},"ChangeView"),".")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On receiving a ",(0,i.kt)("inlineCode",{parentName:"p"},"PersistCompleted")),(0,i.kt)("p",{parentName:"li"},"Resetting consensus process")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On receiving a ",(0,i.kt)("inlineCode",{parentName:"p"},"New Transaction")," for consensus"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignore if the current node has sent ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareRequest")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareResponse")," message, or in process of change view, or has sent new block in this round")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignore if the transaction has been received before.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignore if the received transaction isn't in the proposal block.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Broadcast ",(0,i.kt)("inlineCode",{parentName:"p"},"ChangeView")," if the transaction verification fails.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Save the transaction into the proposal block.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Handle the corresponding logic if this is an Oracle transaction.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If the receiver is a delegate, broadcast the ",(0,i.kt)("inlineCode",{parentName:"p"},"ChangeView")," message if the new block doesn't accord with ",(0,i.kt)("inlineCode",{parentName:"p"},"MaxBlockSize")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"MaxBlockSystemFee"),". It also checks local collection of ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareResponse"),", and broadcasts the ",(0,i.kt)("inlineCode",{parentName:"p"},"Commit")," message in case of enough ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareResponse")," collected."))))))}k.isMDXComponent=!0},64148:function(e,t,n){t.Z=n.p+"assets/images/consensus_msg_seq-6612866d8cbaf0b4f6c01c91ce816ede.jpg"}}]);