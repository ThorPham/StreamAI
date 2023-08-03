"use strict";(self.webpackChunkneo_dev_portal=self.webpackChunkneo_dev_portal||[]).push([[1474],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||s;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},44059:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),o=["components"],l={},i="dBFT 2.0 Algorithm",p={unversionedId:"n3/foundation/consensus/consensus_algorithm",id:"n3/foundation/consensus/consensus_algorithm",isDocsHomePage:!1,title:"dBFT 2.0 Algorithm",description:"Terms",source:"@site/docs/n3/foundation/consensus/consensus_algorithm.md",sourceDirName:"n3/foundation/consensus",slug:"/n3/foundation/consensus/consensus_algorithm",permalink:"/StreamAI/docs/n3/foundation/consensus/consensus_algorithm",editUrl:"https://github.com/neo-project/neo-dev-portal/blob/master/docs/n3/foundation/consensus/consensus_algorithm.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Hash Algorithm",permalink:"/StreamAI/docs/n3/foundation/Cryptography/hash_algorithm"},next:{title:"Consensus Protocol",permalink:"/StreamAI/docs/n3/foundation/consensus/consensus_protocol"}},c=[{value:"Terms",id:"terms",children:[]},{value:"Consensus Message",id:"consensus-message",children:[]},{value:"Consensus Flow",id:"consensus-flow",children:[{value:"3-Stage Consensus Flow",id:"3-stage-consensus-flow",children:[]},{value:"Change View Request",id:"change-view-request",children:[]},{value:"Recovery Request Message",id:"recovery-request-message",children:[]},{value:"Recovery Message",id:"recovery-message",children:[]}]},{value:"Consensus Policy",id:"consensus-policy",children:[]}],m={toc:c};function u(e){var t=e.components,l=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"dbft-20-algorithm"},"dBFT 2.0 Algorithm"),(0,s.kt)("h2",{id:"terms"},"Terms"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"th"},"Term")),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"th"},"Definition")))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Consensus Node"),(0,s.kt)("td",{parentName:"tr",align:null},"Nodes that can propose a new block and vote for the proposed block")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Normal Node"),(0,s.kt)("td",{parentName:"tr",align:null},"Nodes that can transfer and create transactions, are also ledges, but can neither propose new blocks nor vote")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Speaker"),(0,s.kt)("td",{parentName:"tr",align:null},"Validator in charge of creating and broadcasting a proposal block to the network")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Delegate"),(0,s.kt)("td",{parentName:"tr",align:null},"Validator responsible for voting on the block proposal")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Candidate"),(0,s.kt)("td",{parentName:"tr",align:null},"Account nominated for validator election")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Validator"),(0,s.kt)("td",{parentName:"tr",align:null},"Account elected from candidates to take part in consensus")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"View"),(0,s.kt)("td",{parentName:"tr",align:null},"Referred to the dataset used during a round of consensus. View number ",(0,s.kt)("em",{parentName:"td"},"v")," starts from 0 in each round and increases progressively upon consensus failure until the approval of the block proposal, and then is reset to 0.")))),(0,s.kt)("h2",{id:"consensus-message"},"Consensus Message"),(0,s.kt)("p",null,"Six types of consensus messages are defined in dBFT2.0:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"th"},"Message")),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"th"},"Definition")))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Prepare Request"),(0,s.kt)("td",{parentName:"tr",align:null},"Message for starting a new round of consensus")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Prepare Response"),(0,s.kt)("td",{parentName:"tr",align:null},"Message informing other validators that all necessary transactions have been collected for block creation")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Commit"),(0,s.kt)("td",{parentName:"tr",align:null},"Message informing other validators that enough Prepare Response messages have been collected")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Change View Request"),(0,s.kt)("td",{parentName:"tr",align:null},"Message of view changing attempt")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Recovery Request"),(0,s.kt)("td",{parentName:"tr",align:null},"Request for consensus data synchronization")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Recovery Message"),(0,s.kt)("td",{parentName:"tr",align:null},"Response to Recovery Request message")))),(0,s.kt)("h2",{id:"consensus-flow"},"Consensus Flow"),(0,s.kt)("h3",{id:"3-stage-consensus-flow"},"3-Stage Consensus Flow"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(71291).Z})),(0,s.kt)("p",null,"A round of consensus consists of 4 steps, as shown in the Figure above:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Speaker starts consensus by broadcasting a Prepare Request message")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Delegates broadcast Prepare Response after receiving the Prepare Request message")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Validators broadcast Commit after receiving enough Prepare Response messages")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Validators produce & broadcast a new block after receiving enough Commit messages"))),(0,s.kt)("p",null,"Here we introduce two variables as follows:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(31277).Z}),"       "),(0,s.kt)("p",null,"where ",(0,s.kt)("em",{parentName:"p"},"N")," is the number of validators."),(0,s.kt)("p",null,"A normal algorithm flow is shown below."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(50581).Z})),(0,s.kt)("h5",{id:"1--initialize-local-consensus-information"},"1)  Initialize local consensus information"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Initialize consensus context")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Set the validator whose index equals  ",(0,s.kt)("em",{parentName:"p"},"(h - v) mod N"),"  as the speaker. Here h is current block height, v is the current view, and N is the number of validators")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Set timeout period. For speaker, if it's handling RecoveryMessage from other nodes, timeout is set to 2",(0,s.kt)("sup",null,"v+1")," ",(0,s.kt)("em",{parentName:"p"},"T",(0,s.kt)("sub",null,"block"),", where "),"T",(0,s.kt)("sub",null,"block"),(0,s.kt)("em",{parentName:"p"}," is Block time and currently 15s. Otherwise, if the speaker has not participated in block generation in last consensus, timeout is set to "),"T",(0,s.kt)("sub",null,"block"),"*. If the speaker has participated, calculate D = current time - time of last block's generation. Set timeout to T",(0,s.kt)("sub",null,"block")," - D if D < T",(0,s.kt)("sub",null,"block"),", or to 0. ")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Broadcast the Recovery Request message to acquire the current consensus context if consensus is newly started."))),(0,s.kt)("h5",{id:"2--validators-listen-to-the-network-and-collect-transactions-until-timeout"},"2)  Validators listen to the network and collect transactions until timeout"),(0,s.kt)("h5",{id:"3--start-consensus"},"3)  Start consensus"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"For speaker:"),(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Select transactions from memory pool according to consensus policy after timeout, create and broadcast Prepare Request message with these transactions' hashes to start a new round of consensus")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Package and broadcast each 500 selected transactions")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Set timeout to (2",(0,s.kt)("sup",null,"v+1")," - k(v))*T",(0,s.kt)("sub",null,"block"),", where ",(0,s.kt)("img",{src:a(9022).Z}),"   ")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"For delegates:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"In case of receiving Prepare Request from the speaker before timeout:"),(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Verify the validity of the message and whether it conforms to the local consensus context")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Prolong local timeout by ",(0,s.kt)("img",{src:a(6285).Z}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Update local consensus context")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"For each hash contained in the message, attempt to acquire corresponding transactions from memory pool or unverified transaction pool, and add these transactions to consensus context")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Ask for transactions not found in step 4 from other nodes")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Otherwise, attempt to change view"))))),(0,s.kt)("h5",{id:"4--broadcast-prepare-response"},"4)  Broadcast Prepare Response"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"If a delegate collects all transactions required in Prepare Request before timeout:"),(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"For each transaction received, in case of transaction verification failure or against consensus policy, attempt to change view, otherwise add the transaction to consensus context")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Broadcast Prepare Response message")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Prolong local timeout by ",(0,s.kt)("img",{src:a(6285).Z}))))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Otherwise, attempt to change view"))),(0,s.kt)("h5",{id:"5--collect-prepare-response-and-broadcast-commit"},"5)  Collect Prepare Response and broadcast Commit"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"For the speaker and delegates who have received Prepare Request, if Prepare Response messages from M different delegates are received before timeout:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"For each Prepare Response message received:"),(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Verify the validity of the message and whether it conforms to the local consensus context")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Prolong local timeout by ",(0,s.kt)("img",{src:a(6285).Z}))))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Broadcast Commit message")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Otherwise, attempt to change view"))),(0,s.kt)("h5",{id:"6-collect-commit-message-and-create-new-block"},"6) Collect Commit message and create new block"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"For each validator already having all transactions required in Prepare Request message, in case of Commit messages from M different validators received:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"For each Commit message received:"),(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Verify the validity of the message and whether it conforms to the local consensus context")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Prolong local timeout by ",(0,s.kt)("img",{src:a(68001).Z}))))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Create and broadcast the new block")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Otherwise, broadcast the Recovery Message, and set the timeout to 2*T",(0,s.kt)("sub",null,"block")))),(0,s.kt)("h5",{id:"7--go-back-to-step-1-to-start-a-new-round-of-consensus"},"7)  Go back to step 1 to start a new round of consensus."),(0,s.kt)("h3",{id:"change-view-request"},"Change View Request"),(0,s.kt)("h4",{id:"triggering-conditions"},"Triggering conditions"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"If the transaction verification fails, the delegate will broadcast Change View Request attempting to replace speaker")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"In case of timeout while waiting for Prepare Request or Prepare Response, the delegate will broadcast Change View Request, attempting to replace the speaker"))),(0,s.kt)("h4",{id:"flow"},"Flow"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(89559).Z})),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Set the timeout to 2",(0,s.kt)("sup",null,"v+2")," * T",(0,s.kt)("sub",null,"block")," ")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"If the sum of nodes with Commit sent and fault nodes (referring to the validators from which no other validator receives messages during a block time) is greater than F, broadcast Recovery Request message")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Otherwise, broadcast Change View Request message, and check the amount of Change View Request received. If not less than M validators reach consensus upon view changing, change local view, initialize local consensus context, and determine the next round's speaker according to new view."))),(0,s.kt)("h4",{id:"process-logic"},"Process logic"),(0,s.kt)("p",null,"When a validator receives Change View Request message:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"If the message's view is not greater than the local view, this message will be handled as Recovery Request")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Verify the validity of the message")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Check the amount of Change View Request received. If not less than M validators reach consensus upon view changing, change the local view, initialize local consensus context, and determine next round's speaker according to new view"))),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(49067).Z})),(0,s.kt)("h3",{id:"recovery-request-message"},"Recovery Request Message"),(0,s.kt)("h4",{id:"triggering-conditions-1"},"Triggering conditions"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Broadcast Recovery Request message upon enabling the consensus policy to update local consensus context")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Upon creating Change View Request, if there are not enough active validators (sum of nodes with Commit sent and fault nodes is greater than F), broadcast Recovery Request message to update the local consensus context"))),(0,s.kt)("h4",{id:"process-logic-1"},"Process logic"),(0,s.kt)("p",null,"Upon receiving Recovery Request, a validator will generate and broadcast Recovery Message only if the following conditions are met:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"This node has already broadcast Commit message")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"This node's index belongs to the given interval: ",(0,s.kt)("img",{src:a(42857).Z})," , where j is the index of Recovery Request sender"))),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(20849).Z})),(0,s.kt)("h3",{id:"recovery-message"},"Recovery Message"),(0,s.kt)("h4",{id:"content"},"Content"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Change View Request messages from no more than M delegates")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Prepare Request/Response messages")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Commit messages"))),(0,s.kt)("h4",{id:"triggering-conditions-2"},"Triggering conditions"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Upon receiving Recovery Request message, if this node has already broadcast Commit message or its index belongs to the given interval:",(0,s.kt)("img",{src:a(42857).Z})," , where j is the index of Recovery Request sender")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Upon receiving Change View Request message, if the message's view is not greater than the local view, this message is handled as Recovery Request")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"In case of a timeout while waiting for Commit message, broadcast Recovery Message to resend Commit message (common in network issues)"))),(0,s.kt)("h4",{id:"process-flow"},"Process flow"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Verify the validity of the message and the local consensus context. If the message's view is greater than the local view, and this node has already sent Commit message, ignore this message ")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Otherwise, if the message's view is greater than the local view, handle Change View Request messages inside")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"If the message's view equals local view:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Handle Prepare Request message inside"),(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"If this node has neither sent nor received Prepare Request message, handle Prepare Request message inside")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Otherwise if this node is the speaker, broadcast Prepare Request message")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Handle Prepare Response messages inside")))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"If the message view is not greater than the local view, handle Commit messages inside"))),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(76610).Z})),(0,s.kt)("p",null,"The mechanism with Change View Request, Recovery Request and Recovery Message can keep consensus safe from timeout caused by the network, abnormal nodes (malicious nodes, fault nodes, etc.) and other issues."),(0,s.kt)("h2",{id:"consensus-policy"},"Consensus Policy"),(0,s.kt)("p",null,"Consensus policy is used in the following scenarios:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Upon receiving transactions from other nodes, nodes will perform verification to filter out transactions against consensus policy")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Upon receiving transactions, the consensus module needs to verify whether these transactions satisfy the consensus policy, if not, it will attempt to change the view")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The Validator needs to filter transactions in its context upon enabling the consensus policy, only confirmed transactions can be added into the memory pool")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The speaker needs to select transactions from memory pool according to the consensus policy for new Prepare Request"))))}u.isMDXComponent=!0},71291:function(e,t,a){t.Z=a.p+"assets/images/1-9b821fe380c5e8537c9235d520ba8a18.png"},20849:function(e,t,a){t.Z=a.p+"assets/images/10-a415f90476052630cc7c58fec4679220.png"},76610:function(e,t,a){t.Z=a.p+"assets/images/11-abb275f345f310d3296a0d47e0b3e019.png"},31277:function(e,t){t.Z="data:image/png;base64,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"},50581:function(e,t,a){t.Z=a.p+"assets/images/3-ba23936c3a5963596b47b0d363da3e4b.png"},9022:function(e,t){t.Z="data:image/png;base64,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"},6285:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAoCAIAAADBrGu+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAL3SURBVFhH7dcxixRBEAVgf5eBmYFGBpcZXKqYyaUHhoqZYiZiJGIkiIGRBkYimCr4B84/cX67byzr9maR45pdVvaxDDXV1dPvVVXP9lw53XH8FwK+//j56PGTWweHV6/dvH7j4PjBw5OTXxmexdNnz0XO/qaIDWIh4M69I7w/fvrMDrkXL18tR+chnkjGl6/fBL97/4Ft4u3Du8vxjWISoAK5B5x4ppsljIZlcP/oOCWiU3Bs+vtDNobVPYBNr4BMYya7ua5UhpKtZL1jVUA41R5g4K0gdggjzoLGO591fSXez9aaXH8Qf3r1osjc3gjBGQHy3dkDO5JcX795O3mX6BugI5oJnu4b0nImTvcXgYVm5/4VcJ499BayfG+hsFmJD8SbaEk56yXiUbTpZglJmU2tWynjd40HgcytKfFPAixjeF1uVjZxkMpMN2eRBcgwq1fJc4oQJGVGcRJWrRUynL2S7MwVJtjzk7uFAI/o7Bmlbx1MNmWdAAtUrdjWji2+/CFd+8RQwsKvxBQrlMwVT0ZvhIWA/IX13z8FVGSRK1StAzGpAM3sYoZHX8WUPCplibPDXP7+hODMJh4CPIpZWii1jh0/iCnx0mwoye7+QpWFzr6pYLwADGSRgbfa1nolLClUgQrjzxDUdGAk2NxsBk+LUXUYL0Cq5AkP16ICGpdHGyTTrglDyDVVghQq/ipFqbUHjHpI5WW8AGtgI0Pn/8g4iyisC+NZiaS2whh9yngBG8buC9BSu/tbCIiO3cVewLaxF7Bt7AVsG4MF+JPvL+kOZ5tZ/yUxvgL5PEK0n1gcy+LMSW4gxgvA1VER1zrxIp0jZ07CYzFeAKKoE1Affjw5JPfT9SiMF4CokzDSOc2T4TQfSb6DEzMQgwUgmi/afPLaBtqGHmIiLGEDMVhANkCM9H0aiZ7ZT/XLY7AALLU7o74M4/cKqo/AsRgpwNsG6QjQS0jnTaoI/DsgAMv8pvsl+l9bvVgHYnALbR57AdvGjgs4Pf0NbhVH76M/aTMAAAAASUVORK5CYII="},68001:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAjCAIAAACvnktAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAATlSURBVFhH7Zl/TJVlFMdv/ue96GxxL7mGXnRTuYAriWvTBmY5DRGXq+WPNkVsiaK2BJk2KGlUVjYR+rFM0D8Uta0ytWWbiqVTr5JO4QIuAesPget/ea9/0ue95+Xh5eXSMt97B43v7h7OOe953z3nPOec5zwPj/T09NiGP8xmXG649nZpRW7OgsJ1+booEqo/31t3+Fud6Y/zZ0/oVAwxSv8bRnd3oLLqq2AwpPODo8nf8vzcTGa869MK2K0lm6CXvbokKWmiKMQY/cyo/qLmGW+6zvTHR59UHf/xZ52x2eyjRxcWrIZobGxm9D79FGNqyrTpqcna45ijz4zD3xxta789MJbKtu+oP3vebrfHORzEUu3+OoQ7Py53uZwQmMEKCD0na/aWog3aOzGHbkbrzVuHjnxXum2zsEbg9camFqKosnoPbN7KZSIX3GhqHrgCJFhBYTE/PquLeiFy/KLzDwJ51xgUCroZ772/Mz9v+dQpk4UFaON7odvbb/91LzjJPcHpjBeJgOmSSB7PVJ3vxcTEJ1I80zq7AsYPCrwZM67f8DviHDr/IFiYPY93ExJcOm+AZga+YaIf7KicnbWQHxKqEGxYQUuYRTnzyRnGUCgkQSUwJoYREmNpqcn4Av+RVyIHTudjDoc9I/1JnQ8Hc0Q3w24uLkPOKBKiWt5Vr4gcaGYQ09QZ9UNCzYGQPCl/pwQFDLgXDBJRxqAyJoYJBGEgcLej409cePTYT2qKfn9rWkpfEJJ4x06cRGdO1rM4TgUblu+u3uP1prOqbR1/iJDYlncTXPEsCwSlNfzEZmPfMGFWZnbpux/qzODo6uqe9+LLK1YW6Hx/8JGafQcVXfXZ10Kjr+SHjnzPo5bW34XlkaidqT+HnFHkvitXhVi7voh30X+rqFR9RNBXqQS4h/HU6V9UYgyGl15ZRWIQjQM1cSqrb1w3tzuREeehn+SeIEKfr2F6mkflj3Lt6fpzLDIhIKyKQFbg1JlfV7++kfA2VRqzGYSQhNY/7+JA1CJqsvqTJ7mFlnCS/MGvjGp+ofv3iRmhpVrMnKntWkTjwO1L4m1N3goc5Lv8mwgVzGZYAhJDahoO3lt7cPGiBZI/pAruh5A5sYd2B+6KWk3tAR4px4scyK4FgWv4CC54YW7mhUsNSFQigaiYwepfvHSFSvLaqnXUK7Un4shbbR0IpeAuXbpE1N5Yr9Wc7WVbwlpaYSWqkRO3Lme8rB7RyKcgFudmYzYfMa5JVDpcdr1Hx431N98cP/5x09aBCz3JU1RxY0IR1fjCnTudRk2ibuyYMaImu6rxlf9Jox6VoIo9tNWQnXuYglLJOBJUQwkjZgwljDK1x8MUIyk+lGD9atAp0EsLLUVdgR5JunGT/OFh/WrQ6mwt2UQXCG28UuBYEgwGIeRqy1pEJahoyGmnIWjvREJjx4mHQwitnvEgbhWiYgbnDW/GDIj23mM0x4n8vOU08NJsW46omMF06bE5Bsk9au3+Ok5IcQ7tjKGOe9bCejM4Uch1CVNnWUiPH46fLCnewPGNp89lzRI1a2G9GUxX7hExprMrsGv3l7k587FKu0wY5Dbo4WG9GRd9DXKP6HYnSnmVW4yI16RWwWIzqEh4XWi55Htz41po0uPf/L/hP8Pi7U+dwIwbnHFDrCjfpi54LIPN9jd7dOPeQv1L+gAAAABJRU5ErkJggg=="},42857:function(e,t){t.Z="data:image/png;base64,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"},89559:function(e,t,a){t.Z=a.p+"assets/images/8-d432a6a6f64c7638fdc2cf0d290b5c69.png"},49067:function(e,t,a){t.Z=a.p+"assets/images/9-be1cf3cd69dc4d32aa74b755be657fb1.png"}}]);