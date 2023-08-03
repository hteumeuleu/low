"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6723],{77194:function(e,n,a){a.r(n);var t,l,i,r,o,s,c,d,m=(t=[{defaultValue:null,kind:"LocalArgument",name:"communityId"}],i={alias:null,args:null,kind:"ScalarField",name:"placeholderImageUrl",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},s=[{alias:null,args:l=[{kind:"Variable",name:"id",variableName:"communityId"}],concreteType:"Community",kind:"LinkedField",name:"community",plural:!1,selections:[o={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],{fragment:{argumentDefinitions:t,kind:"Fragment",metadata:null,name:"SubscriptionsPageLayoutQuery",selections:[{alias:null,args:l,concreteType:"Community",kind:"LinkedField",name:"community",plural:!1,selections:[i,r,{args:null,kind:"FragmentSpread",name:"PageAnalytics_community"}],storageKey:null},{kind:"InlineDataFragmentSpread",name:"commandLine_query",selections:s,args:null,argumentDefinitions:c=[{kind:"RootArgument",name:"communityId"}]},{kind:"InlineDataFragmentSpread",name:"hotPod_query",selections:s,args:null,argumentDefinitions:c}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:t,kind:"Operation",name:"SubscriptionsPageLayoutQuery",selections:[{alias:null,args:l,concreteType:"Community",kind:"LinkedField",name:"community",plural:!1,selections:[i,r,d={alias:null,args:null,kind:"ScalarField",name:"domain",storageKey:null},{alias:null,args:null,concreteType:"Network",kind:"LinkedField",name:"network",plural:!1,selections:[d],storageKey:null},o],storageKey:null}]},params:{id:"199b59675a67643b8e06dbf487998067",metadata:{},name:"SubscriptionsPageLayoutQuery",operationKind:"query",text:null}});m.hash="cbc12ba3235d96cf8278cb1dae975ffe",n.default=m},96164:function(e,n,a){a.d(n,{Vh:function(){return T},ZP:function(){return Z}});var t=a(80762),l=a(53520),i=a(92869),r=a(97458),o=a(67914),s=a(28934),c=a(36851),d=a(56503),m=a.n(d),u=a(96664),p=a(52983),f=a(61198),h=a(91694),g=a(17703),y=function(e){var n=e.children,a=e.header,t=e.backgroundColor,i=void 0===t?"bg-black":t,o=e.border,c=void 0===o?"none":o,d=e.iconFill,m=(0,l._)((0,p.useState)(!1),2),u=m[0],f=m[1];return(0,r.jsxs)("div",{className:(0,s.Z)("mb-10 w-full overflow-hidden px-16 pt-4",i,c),children:[(0,r.jsxs)("button",{"aria-expanded":u,"aria-controls":a,onClick:function(){f(!u)},className:"flex w-full justify-between py-12",children:[(0,r.jsx)("p",{className:"text-left leading-120",children:a}),(0,r.jsx)("span",{className:(0,s.Z)("my-auto ml-20 h-18 w-18 shrink-0",d),children:u?(0,r.jsx)(h.Z,{className:""}):(0,r.jsx)(g.Z,{className:""})})]}),u&&(0,r.jsx)("div",{id:a,children:n})]})},x=a(86399),b=a(36935),k=a(9326),v=a(62044),j=a(81284),w=a(70094),N=a(19421);let C=e=>{let n=(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"});return n.replace(".00","")};var S=a(80604),A=a(77194),T=function(e){var n,a=e.plan,t=e.pricingInfo,l=e.theme,i=e.onClick,o=e.href,c=e.buttonClassName,d=a.id,m=a.name,u=a.description,p=t||{},f=p.priceCents,h=void 0===f?0:f,g=p.intervalUnit,y=void 0===g?"year":g,x=p.includedMembers,b=(null===(n=(0,k.q)().memberfulConfig)||void 0===n?void 0:n.memberfulUrl)||"",v=null!=o?o:"".concat(b,"/checkout?plan=").concat(d),j="".concat(C(h)," / ").concat(y," after 30-day free trial"),w="".concat(C(h/(x||1))," / ").concat(y).concat(x?" / person":"");return(0,r.jsxs)("div",{className:(0,s.Z)(l.color,l.text,"mb-20 flex flex-1 flex-col justify-between rounded p-20 last:m-0 md:mb-0 md:mr-20 md:max-w-content-block-standard",t?"":"h-64 w-full animate-pulse md:w-56"),children:[t&&(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"pb-10 font-polysans md:pb-30",children:[(0,r.jsx)("h3",{className:"text-30 font-semibold",children:m}),(0,r.jsx)("p",{className:"text-14 font-semibold tracking-widest",children:"PAY ".concat("month"===y?"MONTHLY":"YEARLY")}),(0,r.jsx)("p",{className:"text-18 -tracking-1",children:"".concat(x?w:j)})]}),(0,r.jsx)("p",{className:"pb-20 font-fkroman leading-110 -tracking-1",children:u})]}),(0,r.jsx)("a",{href:v,children:(0,r.jsx)("button",{disabled:!t,onClick:i,className:(0,s.Z)(null!=c?c:"w-full rounded bg-black py-12 font-polysans-mono text-14 font-medium tracking-widest text-white hover:bg-white hover:text-black"),children:"".concat(x?"SUBSCRIBE":"START YOUR TRIAL")})})]})},Z=function(e){var n=e.theme,a=e.info,d=e.plans,h=e.faqs,g=a.title,C=a.seoTitle,Z=a.gaTitle,F=a.oneLineDescription,L=a.description,_=a.img,P=n.headerColor,I=n.headerText,q=n.headerGradient,K=n.contentColor,D=n.contentText,R=n.backgroundColor,U=n.backgroundText,E=n.faqBackgroundColor,B=n.faqBorder,Q=n.faqIconColor,O=(0,f.useLazyLoadQuery)(A,{communityId:j.vv});if(!O.community)throw Error("Community not found");var Y=(0,l._)((0,p.useState)({}),2),$=Y[0],z=Y[1],J=(0,b.z$)(),V=(0,c.useRouter)().pathname,G=(0,k.q)().communityConfig.communityName,W=O.community;return(0,p.useEffect)(function(){var e;(e=(0,t._)(function(){return(0,i.Jh)(this,function(e){switch(e.label){case 0:return[4,(0,x.Z)(d)];case 1:return z.apply(void 0,[e.sent()]),[2]}})}),function(){return e.apply(this,arguments)})().catch(function(e){(0,o.Tb)(e,{tags:{layout:"SubscriptionsPageLayout",context:"newsletters"}})})},[d]),(0,r.jsxs)("div",{className:(0,s.Z)(P,I),children:[(0,r.jsx)(m(),{strategy:"lazyOnload",src:"https://www.google.com/recaptcha/api.js?render=".concat("6LeCFmwfAAAAAA4qBtkgg3WVJWVYGkt05yKT6gi1")}),(0,r.jsx)(v.Z,{pageType:"subscriptions-paid",pageTypeCategory:"ecommerce",community:W}),(0,r.jsx)(u.PB,{title:(0,S.F)([C],G),canonical:"".concat(j.RQ,"/").concat(V)}),(0,r.jsxs)("main",{id:"content",className:"relative flex flex-col items-center justify-center md:pt-28",children:[(0,r.jsx)("div",{className:"w-full px-10 md:ml-70 md:mr-0 md:max-w-container-lg md:pl-100",children:(0,r.jsxs)("h1",{className:"mb-20 font-manuka text-100 leading-80 tracking-1 md:text-160",children:[(0,r.jsx)("span",{className:"sr-only",children:C}),g]})}),(0,r.jsxs)("div",{className:(0,s.Z)("relative flex w-full justify-center pb-80",R,U),children:[(0,r.jsx)("div",{className:(0,s.Z)("absolute -top-40 left-0 h-40 w-full md:-top-50 md:h-50",q)}),(0,r.jsxs)("div",{className:"max-w-container-lg px-10",children:[F&&(0,r.jsx)("p",{className:(0,s.Z)("mb-40 grid font-polysans text-16 font-semibold uppercase tracking-15 md:mb-50 md:ml-30 md:pl-100",I),children:F}),(0,r.jsxs)("div",{className:"mx-10 md:mx-0 md:mb-40 md:flex md:flex-row",children:[(0,r.jsx)("div",{className:"float-left mr-20 h-50 w-50 flex-none md:mr-30 md:w-100",children:_&&(0,r.jsx)(N.Z,{alt:F||"",src:_,priority:!0,width:120,height:120,layout:"responsive",className:"rounded-full"},_)}),(0,r.jsx)(w.Z,{html:L,className:(0,s.Z)("font-fkroman text-19 leading-140 -tracking-1 md:text-22",I)})]}),(0,r.jsx)("hr",{className:"mx-10 mb-20 mt-30 opacity-50 md:hidden"}),(0,r.jsx)("h2",{className:(0,s.Z)("mb-20 font-polysans text-30 font-semibold leading-110 md:text-35",I),children:"Select Newsletter Plan"}),(0,r.jsx)("div",{className:"mb-20 flex flex-col justify-between md:mb-40 md:flex-row",children:d.map(function(e){var n;return(0,r.jsx)(T,{plan:e,pricingInfo:$[e.name],theme:{color:K,text:D},onClick:(n=e.gaName,function(){null==J||J.emit({event:"newsletter",newsletter:{action:"paid_newsletter_subscribe",name:"".concat(Z,"_").concat(n)}})})},e.name)})}),(0,r.jsx)("p",{className:(0,s.Z)("text-fkroman mx-auto mb-80 w-content-block-compact text-center text-14 -tracking-1 md:mb-70 md:block",U),children:"We accept credit card, Apple Pay, and Google Pay."}),(0,r.jsx)("p",{id:"faq",className:"pb-12 font-polysans text-24 font-semibold leading-110 md:text-28",children:"Frequently Asked Questions"}),(0,r.jsx)("div",{className:(0,s.Z)("font-polysans text-20 font-light -tracking-1","rounded"!==B&&"border-b border-blurple"),children:h.map(function(e){var n=e.header,a=e.content;return(0,r.jsx)(y,{header:n,backgroundColor:E,border:B,iconFill:Q,children:(0,r.jsx)(w.Z,{html:a,className:"pb-20 text-left text-15 leading-120 [&_a]:font-semibold"})},n)})})]})]})]})]})}},55953:function(e,n,a){a.d(n,{r:function(){return t}});var t=[{id:94391,name:"Monthly",gaName:"monthly",description:"A flexible plan you can cancel anytime. The first month is on us."},{id:95731,name:"Annual",gaName:"annual",description:"Another plan. Some more text goes here."},{id:95732,name:"Corporate",gaName:"group",description:"Another plan. Get your company to pay for it."}]},86399:function(e,n,a){var t,l=a(80762),i=a(92869),r=(t=(0,l._)(function(e){var n;return(0,i.Jh)(this,function(a){switch(a.label){case 0:return[4,fetch("/api/subscriptions",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({plans:e})})];case 1:if(!(n=a.sent()).ok)throw Error("Could not get subscriptions");return[4,n.json()];case 2:return[2,a.sent().data]}})}),function(e){return t.apply(this,arguments)});n.Z=r},20709:function(e,n,a){var t;a.r(n);let l={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PageAnalytics_community",selections:[t={alias:null,args:null,kind:"ScalarField",name:"domain",storageKey:null},{alias:null,args:null,concreteType:"Network",kind:"LinkedField",name:"network",plural:!1,selections:[t],storageKey:null}],type:"Community",abstractKey:null};l.hash="6a89a6dae316cb11b27de3d77e87d8a0",n.default=l},62044:function(e,n,a){var t,l=a(52983),i=a(61198),r=a(80821),o=a(24714),s=a(90107),c=a(36935),d=a(29565),m=a(37782),u=a(87514);n.Z=(0,m.n)(e=>{let{community:n,pageType:m,pageTypeCategory:p}=e,f=(0,c.z$)(),h=(0,d.aC)(),g=(0,i.useFragment)((void 0!==t||(t=a(20709)).hash&&"6a89a6dae316cb11b27de3d77e87d8a0"!==t.hash&&console.error("The definition of 'PageAnalytics_community' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data."),t),n),y=(0,l.useRef)(!1);return(0,l.useEffect)(()=>{if(!f||y.current)return;let e=g.domain.replace(/\.com$/,""),n=g.network.domain.replace(/\.com$/,""),a={event:"dataLayer-initalized",Network:n,Community:e,"All Categories":`${n},${e}`,"Page Type":m,"Page Type Category":p,"Unique Pageload ID":(0,r.m3)(),"User ID":h?.viewer?.id??"Logged Out",...o.HW},t=(0,u.e)("sailthru_hid");t&&(a["Sailthru User ID"]=t),a["Scroll Subscription"]=!!(0,u.e)("scroll0");let l=(0,s.XJ)();l&&(a={...a,...l}),y.current=!0,f.emit(a)},[h,f,g,m,p]),null},{context:"PageAnalyticsErrorBoundary"})}}]);