(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4953],{7872:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getSingleMerchantByPriority=t.getMerchantsByPriority=t.getRetailersPriority=t.getAffiliatePriority=t.getAffiliateMetadata=t.affiliateSuppressSkimlinks=t.affiliateAllowsCustomRetailer=t.getAffiliateByUrl=t.affiliateList=void 0;let i=n(r(69312)),a=n(r(13546)),o=n(r(69107)),l=n(r(71635)),s=r(72663);t.affiliateList=s.orderedAffiliates.map(e=>e.name),t.getAffiliateByUrl=e=>{if(!e)return"";let t=s.orderedAffiliates.find(t=>{let r=!!t.domains.find(t=>e.includes(t.toLowerCase()));return"Amazon Associates"===t.name?r&&e.includes("tag="):r});return(0,a.default)(t,"name","")},t.affiliateAllowsCustomRetailer=e=>{let r=(0,t.getAffiliateMetadata)(e);return r&&r.allowCustomRetailer},t.affiliateSuppressSkimlinks=e=>{let r=(0,t.getAffiliateMetadata)(e);return!!Object.prototype.hasOwnProperty.call(r,"defaultToSkimlinks")&&!r.defaultToSkimlinks},t.getAffiliateMetadata=(e="")=>s.orderedAffiliates.find(t=>{let r=RegExp(t.name,"i");return e&&e.match(r)})||{},t.getAffiliatePriority=(e="")=>(0,i.default)(s.orderedAffiliates,t=>{let r=RegExp(t.name,"i");return!!(e&&e.match(r))}),t.getRetailersPriority=(e="")=>(0,i.default)(s.orderedRetailers,t=>{let r=RegExp(t,"i");return!!(e&&e.match(r))}),t.getMerchantsByPriority=(e=[])=>{let r=[],n=[];e.forEach(e=>{let i=(0,a.default)(e,"name"),o=(0,t.getRetailersPriority)(i);if(o>-1)e.orderIndex=o,r.push(e);else{let r=(0,a.default)(e,"affiliate"),i=(0,t.getAffiliatePriority)(r);e.orderIndex=i>-1?i:1/0,n.push(e)}});let i=(0,l.default)(r,e=>e.orderIndex).concat((0,l.default)(n,e=>e.orderIndex));return(0,o.default)(i,e=>(delete e.orderIndex,e))},t.getSingleMerchantByPriority=(e=[])=>{let r=(0,t.getMerchantsByPriority)(e);return r.length?r[0]:{}}},87821:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.impactDomains=t.blockDomains=void 0,t.blockDomains=["paypal.com","newyorker.com","nature.com","nytimes.com","thetimes.co.uk","link.springer.com","rev.com","linkedin.com","vanityfair.com","wired.com","theatlantic.com","washingtonpost.com","thedailybeast.com","theinformation.com","goo.gl","espn.com","nba.com","nfl.com","dazn.com","aboutamazon.com","surveymonkey.com","liverpoolfc.com","apple.com"],t.impactDomains=["adidas.njih.net","adorama.rfvk.net","airbnb.pvxt.net","allbirds.pxf.io","allswellhome.mvvx.net","apple.sjv.io","arhaus.fx3vf7.net","avocadomattress.n5ka.net","bala.pxf.io","balooliving.xayxet.net","bearmattress.pxf.io","becausemarket.sjv.io","bestbuy.7tiv.net","birch.fziv.net","boody-eco-wear.pxf.io","brandless.pxf.io","brooklinen.pxf.io","bulletproof.fdf2.net","burstoralcare.bts6.net","by-humankind.ayph.net","caraway-home.pxf.io","casper.5ad6.net","caviar.n76h.net","caviar.pxf.io","cbsallaccess.qflm.net","cocoonbysealy.sjv.io","cornbread.pxf.io","cuyana.64ud.net","devacurl.pxf.io","dieux.sjv.io","discoverycommunications.pxf.io","disneyplus.bn5x.net","eastbay.wrjfga.net","eight-sleep.ioym.net","eyebobs.pxf.io","fanatics.ncw6.net","feather-home-inc.lf49oc.net","felixgray.ntaf.net","foco.vegb.net","fubo.tv","funimation.8u86.net","getquip.d67ag4.net","ghostbed.3uu8.net","glossier.79ic8e.net","goby.pxf.io","goto.target.com","goto.walmart.com","go.web.plus.espn.com","hairstory.pxf.io","happy-dance.pxf.io","harrys.3tvl.net","hedley-and-bennett.sjv.io","helix-sleep.tkjf.net","homedepot.sjv.io","huma.pxf.io","iliabeauty.nhuie7.net","imp.i141824.net","imp.i168918.net","imp.i209368.net","imp.i240138.net","imp.i277339.net","imp.i305175.net","imp.i309903.net","imp.i312864.net","imp.i358707.net","jayson-home.jvam.net","john-lewis-and-partners.pxf.io","johnny-was.sjv.io","kin-euphorics.pxf.io","leesasleep.lvuv.net","levis.pfm4.net","logitech.cfzu.net","lord-jones.sjv.io","lowes.sjv.io","lovehoneyus.sjv.io","lsg.zlwlj8.net","luminary.imlz.net","maisonette.sjv.io","mamask.sjv.io","mancrates.ln72.net","mejuri.pxf.io","mirrorco.hu6f.net","mynuface.pxf.io","nectar.xovt.net","nestbedding.uxsi.net","nomadnoe.pxf.io","nuturelife.pxf.io","oliveandjune.kk2kau.net","onepluscom.pxf.io","parachutehome.sjv.io","paulachoiceusca.l3km.net","paramountplus.qflm.net","prima.xq2wid.net","razer.a9yw.net","savagexfentyaffiliate.pxf.io","serta.qq3wj3.net","showtime.i7cdw9.net","sling-tv.pxf.io","splendidspoon.z724.net","stasher.thj6q2.net","stockx.pvxt.net","studs.pxf.io","sun-basket-meal-delivery-purchase.sjv.io","surlatable.aiy7.net","the-company-store.7eer.net","thefarmersdog.otegtm.net","thetot.deg5.net","tommyjohn.bxvfun.net","tonic-cbd.pxf.io","tradecoffee.pxf.io","traeger.uym8.net","tuftandneedle.attfm2.net","ubisoft.pxf.io","ulta.ztk5.net","ultimate-ears.dubn.net","visible.pxf.io","wealthfront.4fq8.net","westelm.e54b.net","winc.mivh.net","xula.pxf.io","yetius.pxf.io","zola.pxf.io"]},8017:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.__tests__=t.getAffiliateDomain=t.destructureAutomatedLink=t.matchesAffiliateDomain=t.buildAutomatedLinkForMerchant=t.buildVanityLink=t.buildAutomatedLink=void 0;let l=o(r(13546)),s=o(r(29787)),u=a(r(12948)),d=r(87821),f=r(48877),c=(e,t,r)=>{if((0,s.default)(t))return e;let{order:n}=t;return n.forEach(n=>{r[n]&&(e=`${e}${t[n]}${r[n]}`)}),e},m=(e,t,r="nymag-us")=>{if(["nymag-us","nymag-uk"].includes(r))return{settings:e,params:t};let[n]=r.split("-"),{locale:i,siteCode:a}=t,o=(0,l.default)(e,`networks.${n}.${i}`);return t.siteCode=(0,l.default)(o,"siteCode",a),{settings:e,params:t}};t.buildAutomatedLink=(e,r,n="nymag-us")=>{let i=(0,f.getConfigByAffiliate)(e),{settings:a,params:o}=m(i,r,n),{buyUrl:l,siteCode:p,retailerCode:y,campaignCode:h}=o,{parameters:g={},joinedBy:v="",encode:b=!0,linkAddons:_={}}=a,{order:k}=g,w=b?encodeURIComponent(l):l,x=(0,t.getAffiliateDomain)(a,o),C=c(x,_,{siteCode:p,retailerCode:y,campaignCode:h}),{host:j,searchParams:S}=new URL(l.toLowerCase()),A="tag=theverge02-20",O=[],$="";return d.blockDomains.includes(j.replace("www.",""))?null:"verge-us"===n&&e.match(/amazon/i)?S.size?`${l}&${A}`:`${l}?${A}`:(0,s.default)(i)||"Skimlinks"!==e&&(0,f.isDisabledAffiliate)(e)?"":(k.forEach(e=>{r[e]&&("buyUrl"===e?O.push(`${g[e]}${w}`):"function"==typeof g[e]?O.push(g[e](r[e])):O.push(`${g[e]}${r[e]}`))}),$=`${C}${O.join(v)}`,u.isUri($))?$:l},t.buildVanityLink=(e,r)=>{let{affiliateName:n}=e,i=Object.assign({},e,{buyUrl:r});if(!n||(0,f.isDisabledAffiliate)(n))return"";let a=(0,f.getConfigByAffiliate)(n),{parameters:o={},joinedBy:l="",encode:u=!0,linkAddons:d={}}=a,{order:m}=o,p=u?encodeURIComponent(r):r,y=(0,t.getAffiliateDomain)(a,e),h=c(y,d,i),g=[];return(0,s.default)(a)?"":(m.forEach(e=>{i[e]&&("buyUrl"===e?g.push(`${o[e]}${p}`):"function"==typeof o[e]?g.push(o[e](i[e])):g.push(`${o[e]}${i[e]}`))}),`${h}${g.join(l)}`)},t.buildAutomatedLinkForMerchant=(e,r="nymag-us")=>(0,t.buildAutomatedLink)(e.affiliateName||e.affiliate,e,r),t.matchesAffiliateDomain=e=>{let r=(0,f.getAvailableSettings)().map(e=>{let r=(0,f.getConfigByAffiliate)(e),n=(0,t.getAffiliateDomain)(r);return n?n.replace("www.",""):""}).filter(e=>!!e);return e=e.replace("www.",""),!!r.find(t=>e.includes(t))};let p=(e,r,n)=>{var i;let{siteCode:a}=r,o=(0,l.default)(r,"name","").toLowerCase().split(" ")[0],s=(0,t.getAffiliateDomain)(e),u=(null===(i=e.domains)||void 0===i?void 0:i.some(e=>n.includes(e.replace("https://",""))))||n.includes(s.replace("https://","")),d={baseUrl:null,campaignCode:null,retailerCode:null,success:!1};return(0,f.isDisabledAffiliate)(o)?(d.success=!0,d):u&&(n.includes(a)||(0,f.isSiteCodeOptional)(o))?y(d,e,r,n,s):d},y=(e,t,r,n,i)=>{let{paramsOnly:a,joinedBy:o,domains:l=[],codes:u,removeTrailingSlash:d,restoreTrailingSlashOnComplete:f=!1}=t,{order:c,baseUrl:m}=u,p=`https://${n.replace(/^https?:\/\//i,"")}`;try{let r=new URL(p);if(a)c.forEach(t=>{u[t]&&(e[t]=r.searchParams.get(u[t].replace("=","")))});else{if((0,s.default)(t)||(0,s.default)(u))return{baseUrl:null,campaignCode:null,retailerCode:null,success:!0};let a=m?`https://${r.hostname}${m}`:void 0,y=l.find(e=>n.includes(e))||i,h=p.replace(`${a||y}`,""),g=h.split("?")[0],v=g.split(o),b=d?a.slice(0,-1):a;a&&v.unshift(b),c.forEach((t,r)=>{if(u[t]){if(e[t]=v[r].replace(u[t],""),"retailerCode"===t&&!e[t])throw"required code";"baseUrl"===t&&f&&(e[t]=`${e[t]}/`)}})}e.success=!0}catch(e){}return e};t.destructureAutomatedLink=e=>{if((0,s.default)(e)||(0,s.default)(e.affiliateSelection))return{};let{affiliateSelection:t,link:r=""}=e,n=(0,l.default)(t,"name","").toLowerCase().split(" ")[0],i=(0,f.getConfigByAffiliate)(n),a=p(i,t,r),o=(0,l.default)(a,"siteCode","");return o&&delete a.siteCode,a},t.getAffiliateDomain=(e,t={})=>{let{defaultDomain:r="",masterDomain:n=""}=e,{baseUrl:i=""}=t;return n||i||r},t.__tests__={constructBaseUrl:c,retrieveCodeStructures:p,overrideSettingsAndValuesByNetworkId:m}},48877:function(e,t,r){"use strict";var n=r(73656);Object.defineProperty(t,"__esModule",{value:!0}),t.__tests__=t.isSiteCodeOptional=t.getAvailableSettings=t.isDisabledAffiliate=t.getConfigByAffiliate=void 0;let i={shareasale:{masterDomain:"https://shareasale.com/r.cfm?",codes:{campaignCode:"b=",retailerCode:"m=",order:["campaignCode","retailerCode"]},parameters:{campaignCode:"b=",retailerCode:"m=",siteCode:"u=",buyUrl:"urllink=",order:["campaignCode","siteCode","retailerCode","buyUrl"]},encode:!0,paramsOnly:!0,joinedBy:"&"},impact:{masterDomain:"",codes:{baseUrl:"/c/",campaignCode:"/",retailerCode:"/",siteCode:"/",order:["baseUrl","siteCode","campaignCode","retailerCode"]},linkAddons:{campaignCode:"/",retailerCode:"/",siteCode:"/",order:["siteCode","campaignCode","retailerCode"]},parameters:{buyUrl:"?u=",order:["buyUrl"]},encode:!0,paramsOnly:!1,joinedBy:"/",removeTrailingSlash:!0,networks:{verge:{US:{siteCode:"482924"}}}},partnerize:{masterDomain:"",defaultDomain:"https://prf.hn/click/",codes:{baseUrl:"/click/",retailerCode:"camref:",order:["baseUrl","retailerCode"]},parameters:{retailerCode:"camref:",campaignCode:"pubref:",buyUrl:"destination:",siteCode:e=>`%5Bp_id:${e}%5D`,order:["retailerCode","campaignCode","siteCode","buyUrl"]},encode:!0,paramsOnly:!1,joinedBy:"/",removeTrailingSlash:!0,restoreTrailingSlashOnComplete:!0,networks:{verge:{US:{siteCode:"1011l394533"}}}},rakuten:{masterDomain:"https://click.linksynergy.com/deeplink?",codes:{retailerCode:"mid=",order:["retailerCode"]},parameters:{campaignCode:"u1=",retailerCode:"mid=",siteCode:"id=",buyUrl:"murl=",order:["siteCode","retailerCode","campaignCode","buyUrl"]},encode:!0,paramsOnly:!0,joinedBy:"&",networks:{verge:{US:{siteCode:"nOD/rLJHOac"}}}},avantlink:{masterDomain:"https://www.avantlink.com/click.php?tt=cl&",codes:{retailerCode:"merchant_id=",order:["retailerCode"]},parameters:{retailerCode:"merchant_id=",siteCode:"website_id=",buyUrl:"url=",order:["retailerCode","siteCode","buyUrl"]},encode:!0,paramsOnly:!0,joinedBy:"&",networks:{verge:{US:{siteCode:"0f9b0f6f-13ac-4498-8e0f-b3beae765e07"}}}},pepperjam:{masterDomain:"https://www.pjatr.com/t",codes:{retailerCode:"/",order:["retailerCode"]},linkAddons:{retailerCode:"/",order:["retailerCode"]},parameters:{siteCode:"?website=",buyUrl:"url=",order:["siteCode","buyUrl"]},domains:["https://www.gopjn.com/t","https://www.pntrac.com/t","https://www.pjtra.com/t","https://www.pntrs.com/t","https://www.pntra.com/t"],encode:!0,paramsOnly:!1,joinedBy:"&",networks:{verge:{US:{siteCode:"309942"}}}},cj:{masterDomain:"https://www.anrdoezrs.net/links",codes:{},linkAddons:{siteCode:"/",order:["siteCode"]},parameters:{buyUrl:"/type/dlg/",order:["buyUrl"]},encode:!1,paramsOnly:!1,joinedBy:"/",networks:{verge:{US:{siteCode:"8836598"}}}},skimlinks:{masterDomain:"https://go.redirectingat.com/?xs=1",codes:{},parameters:{retailerCode:"merchant_id=",siteCode:"&id=",buyUrl:"url=",order:["siteCode","buyUrl"]},paramsOnly:!0,encode:!0,joinedBy:"&",networks:{verge:{US:{siteCode:n.env.SKIMLINKS_US_VERGE_SITE_CODE||"1025X1701640"}}}},awin:{masterDomain:"https://www.awin1.com/cread.php?",codes:{retailerCode:"awinmid=",order:["retailerCode"]},parameters:{retailerCode:"awinmid=",siteCode:"awinaffid=",buyUrl:"ued=",order:["retailerCode","siteCode","buyUrl"]},encode:!0,paramsOnly:!0,joinedBy:"&"},amazon:{masterDomain:"",codes:{baseUrl:"/",order:["baseUrl"]},paramsOnly:!1,joinedBy:"/"},narrativ:{codes:{}},"non-monetizeable":{codes:{}},"non-network":{codes:{}}},a={amazon:"Amazon Associates",narrativ:"Narrativ",skimlinks:"Skimlinks","non-monetizeable":"Non-Monetizeable","non-network":"Non-Network Affiliate Partner"},o={cj:"cj",partnerize:"partnerize",pepperjam:"pepperjam"};t.getConfigByAffiliate=e=>{if(!e)return{};let t=e.toLowerCase().split(" ")[0];return i[t]||{}},t.isDisabledAffiliate=e=>{let t=e.toLowerCase().split(" ")[0];return!!a[t]},t.getAvailableSettings=()=>Object.keys(i),t.isSiteCodeOptional=e=>!!o[e],t.__tests__={linkAutoSettings:i}},78001:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.subtags=t.rankings=t.linkAutomationSettings=t.linkAutomation=t.affiliates=void 0,t.affiliates=a(r(7872)),t.linkAutomation=a(r(8017)),t.linkAutomationSettings=a(r(48877)),t.rankings=a(r(72663)),t.subtags=a(r(30839))},72663:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.orderedRetailers=t.orderedAffiliates=void 0;let n=r(87821);t.orderedAffiliates=[{name:"Amazon Associates",alwaysInclude:!0,defaultToSkimlinks:!1,domains:["amazon.com","amazon.co.uk"]},{name:"Shareasale",alwaysInclude:!1,defaultToSkimlinks:!1,domains:["shareasale.com"]},{name:"Rakuten",alwaysInclude:!1,defaultToSkimlinks:!1,domains:["click.linksynergy.com/deeplink","linksynergy.walmart.com/deeplink","click.linksynergy.com/link"]},{name:"CJ",alwaysInclude:!1,allowCustomRetailer:!1,domains:["tkqlhce.com","jdoqocy.com","dpbolvw.net","anrdoezrs.net","kqzyfj.com"]},{name:"Pepperjam",alwaysInclude:!1,defaultToSkimlinks:!1,domains:["gopjn.com","pntrac.com","pjtra.com","pjatr.com","pntrs.com","pntra.com"]},{name:"Impact",alwaysInclude:!1,defaultToSkimlinks:!1,domains:n.impactDomains},{name:"Partnerize",alwaysInclude:!1,defaultToSkimlinks:!1,domains:["prf.hn","voxmediapartner.go2cloud.org","hbomax.prf.hn"]},{name:"Avantlink",alwaysInclude:!1,defaultToSkimlinks:!1,domains:["avantlink.com"]},{name:"Awin",alwaysInclude:!0,defaultToSkimlinks:!1,domains:["awin1.com"]},{name:"Skimlinks",alwaysInclude:!0,allowCustomRetailer:!0,defaultToSkimlinks:!1,domains:["go.redirectingat.com","go.skimresources.com"]},{name:"Narrativ",alwaysInclude:!0,defaultToSkimlinks:!1,domains:["shop-links.co/"]},{name:"Non-Network Affiliate Partner",alwaysInclude:!0,defaultToSkimlinks:!0,domains:[]},{name:"Non-Monetizeable",alwaysInclude:!0,defaultToSkimlinks:!0,domains:[]}],t.orderedRetailers=["Amazon","Nordstrom","Dermstore","Chewy","Skinstore","Sephora","REI","West Elm","Backcountry","Target","Best Buy","Walmart","Shopbop","Ssense","Zappos"]},30839:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.__tests__=t.ensureSubtagOnUrl=t.getSubtagData=void 0;let i=n(r(90311)),a=n(r(69107)),o=n(r(61230)),l=n(r(57383)),s=r(7872),u=["siteKey","pageId","productId","abTest","variation","utmMedium","utmSource","sessionCount","format","utmCampaign","itmSearch","referrer","device","zone"],d={"Amazon Associates":{subtagKey:"ascsubtag",maxLength:99,delimiter:"alt",encode:!1},Narrativ:{subtagKey:"u1",maxLength:99,delimiter:"standard",encode:!0},Rakuten:{subtagKey:"u1",maxLength:72,delimiter:"standard",encode:!1},Shareasale:{subtagKey:"afftrack",maxLength:99,delimiter:"standard",encode:!1},Skimlinks:{subtagKey:"xcust",maxLength:100,delimiter:"alt",encode:!1},Impact:{subtagKey:"subId2",maxLength:99,delimiter:"standard",encode:!1},Avantlink:{subtagKey:"ctc",maxLength:64,delimiter:"alt",encode:!1},CJ:{subtagKey:"sid",maxLength:64,delimiter:"alt",encode:!1,joinBy:"/",assignBy:"/",positioned:!0,position:"after",positionKey:"type/dlg/"},Partnerize:{subtagKey:"pubref",maxLength:100,delimiter:"alt",encode:!1,joinBy:"/",assignBy:":",positioned:!0,position:"before",positionKey:"destination"},Pepperjam:{subtagKey:"sid",maxLength:100,delimiter:"alt",encode:!1},Awin:{subtagKey:"pref1",maxLength:100,delimiter:"alt",encode:!1,positioned:!0,position:"before",positionKey:"ued"}},f={siteKey:"",pageId:"p",productId:"i",zone:"z",device:"d",utmSource:"s",utmMedium:"m",utmCampaign:"c",sessionCount:"u",itmSearch:"q",referrer:"r",format:"t",abTest:"a",variation:"v"},c={standard:["[","]"],alt:["__","_"]},m=(e,t,r)=>{let n=t[0]+e+t[1],i=r.split(n)[1]||"";return i?i.split(t[0])[0]:null},p=(e,t=c.standard)=>(0,l.default)((0,o.default)(f,r=>m(r,t,e))),y=(e="")=>e.split("&").reduce((e,t)=>{let r=t.split("=")[0],n=t.split("=")[1];return void 0!==n&&(e[r]=n),e},{}),h=(e,t)=>{let r=t-3*(e.split(",").length-1+e.split("|").length-1);return e.substr(0,r)},g=(e,t=c.standard,r=!1)=>{let n=e=>`${t[0]}${e}${t[1]}`,i=u.reduce((t,r)=>{let i=n(f[r]),a=e[r];return a?`${t}${i}${a}`:t},"");return r&&(i=encodeURIComponent(i)),i};t.getSubtagData=e=>{let t={};return u.forEach(r=>{e[r]&&(t[r]=e[r])}),t};let v=({url:e,positionKey:t,subtagKey:r,subtagString:n,joinBy:i,assignBy:a,position:o="after"})=>{let[l,s]=e.split(t),u=`${r}${a}${n}`,d=[];if("after"===o){if(!s)return e;let[n,o=""]=s.split(`${r}${a}`),f=o.split(i).slice(1).join(i);d.push(`${l}${t}`,u),n&&d.push(n),f&&d.push(f)}if("before"===o){let[e,n=""]=l.split(`${r}${a}`),o=n.split(i).slice(1).join(i);d.push(e),o&&d.push(o),d.push(u,`${t}${s}`)}return d.reduce((e,t)=>{let r=e.slice(-1)===i;return r&&(e=e.slice(0,-1)),e.length?[e,t].join(i):t},"")},b=({affiliate:e,subtagKeys:r,url:n,fullSubtag:o})=>{let s=d[e].subtagKey,u=d[e].maxLength,f=d[e].encode,m=d[e].delimiter,b=d[e].positioned||!1,_=d[e].position,k=d[e].positionKey,w=d[e].assignBy||"=",x=d[e].joinBy||"&",C=c[m],j=n.indexOf("?")>=0?n.split("?").pop():"",S=(0,t.getSubtagData)(r),A,O=y(j);A=O[s]||"",S=(0,i.default)(p(A,C),(0,l.default)(S));let $=g(S,C,f);return A=h($,u),O[s]=A,j=(0,a.default)(O,(e,t)=>`${t}=${e}`).join("&"),n=b?v({url:n,positionKey:k,subtagKey:s,subtagString:A,joinBy:x,assignBy:w,position:_}):n.split("?")[0]+`?${j}`,o?{urlWithSubtag:n,subtag:$}:n};t.ensureSubtagOnUrl=(e,{siteKey:t,pageId:r,device:n,utmSource:i,utmMedium:a,utmCampaign:o,referrer:l,format:u,sessionCount:d,itmSearch:f,productId:c,zone:m,abTest:p,variation:y},h=!1,g)=>{let v=(0,s.getAffiliateByUrl)(e)||g||"";return v?b({subtagKeys:{siteKey:t,pageId:r,productId:c,utmMedium:a,utmSource:i,sessionCount:d,format:u,utmCampaign:o,itmSearch:f,referrer:l,device:n,zone:m,abTest:p,variation:y},affiliate:v,url:e,fullSubtag:h}):e},t.__tests__={processSubtag:b,processSubtagPosition:v,generateSubtag:g,parseQuery:y,parseSubtag:p}},61701:function(e,t,r){var n=r(44003),i=r(96313)(n);e.exports=i},85117:function(e,t,r){var n=r(52624);e.exports=function(e,t,r){for(var i=-1,a=e.length;++i<a;){var o=e[i],l=t(o);if(null!=l&&(void 0===s?l==l&&!n(l):r(l,s)))var s=l,u=o}return u}},44770:function(e){e.exports=function(e,t,r,n){for(var i=e.length,a=r+(n?1:-1);n?a--:++a<i;)if(t(e[a],a,e))return a;return -1}},22825:function(e,t,r){var n=r(10111),i=r(67123);e.exports=function e(t,r,a,o,l){var s=-1,u=t.length;for(a||(a=i),l||(l=[]);++s<u;){var d=t[s];r>0&&a(d)?r>1?e(d,r-1,a,o,l):n(l,d):o||(l[l.length]=d)}return l}},44003:function(e,t,r){var n=r(39943),i=r(62096);e.exports=function(e,t){return e&&n(e,t,i)}},46718:function(e){e.exports=function(e,t){return e<t}},78068:function(e,t,r){var n=r(61701),i=r(30568);e.exports=function(e,t){var r=-1,a=i(e)?Array(e.length):[];return n(e,function(e,n,i){a[++r]=t(e,n,i)}),a}},54466:function(e,t,r){var n=r(29233),i=r(40548),a=r(55833),o=r(78068),l=r(53340),s=r(31525),u=r(20315),d=r(80229),f=r(55589);e.exports=function(e,t,r){t=t.length?n(t,function(e){return f(e)?function(t){return i(t,1===e.length?e[0]:e)}:e}):[d];var c=-1;return t=n(t,s(a)),l(o(e,function(e,r,i){return{criteria:n(t,function(t){return t(e)}),index:++c,value:e}}),function(e,t){return u(e,t,r)})}},57121:function(e,t,r){var n=r(40548),i=r(32619),a=r(24007);e.exports=function(e,t,r){for(var o=-1,l=t.length,s={};++o<l;){var u=t[o],d=n(e,u);r(d,u)&&i(s,a(u,e),d)}return s}},32619:function(e,t,r){var n=r(93192),i=r(24007),a=r(5023),o=r(93702),l=r(86040);e.exports=function(e,t,r,s){if(!o(e))return e;t=i(t,e);for(var u=-1,d=t.length,f=d-1,c=e;null!=c&&++u<d;){var m=l(t[u]),p=r;if("__proto__"===m||"constructor"===m||"prototype"===m)break;if(u!=f){var y=c[m];void 0===(p=s?s(y,m,c):void 0)&&(p=o(y)?y:a(t[u+1])?[]:{})}n(c,m,p),c=c[m]}return e}},53340:function(e){e.exports=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}},21656:function(e,t,r){var n=r(62438),i=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(i,""):e}},88899:function(e,t,r){var n=r(52624);e.exports=function(e,t){if(e!==t){var r=void 0!==e,i=null===e,a=e==e,o=n(e),l=void 0!==t,s=null===t,u=t==t,d=n(t);if(!s&&!d&&!o&&e>t||o&&l&&u&&!s&&!d||i&&l&&u||!r&&u||!a)return 1;if(!i&&!o&&!d&&e<t||d&&r&&a&&!i&&!o||s&&r&&a||!l&&a||!u)return -1}return 0}},20315:function(e,t,r){var n=r(88899);e.exports=function(e,t,r){for(var i=-1,a=e.criteria,o=t.criteria,l=a.length,s=r.length;++i<l;){var u=n(a[i],o[i]);if(u){if(i>=s)return u;return u*("desc"==r[i]?-1:1)}}return e.index-t.index}},96313:function(e,t,r){var n=r(30568);e.exports=function(e,t){return function(r,i){if(null==r)return r;if(!n(r))return e(r,i);for(var a=r.length,o=t?a:-1,l=Object(r);(t?o--:++o<a)&&!1!==i(l[o],o,l););return r}}},55713:function(e,t,r){var n=r(4468),i=r(94969),a=r(9882);e.exports=function(e){return n(e,a,i)}},94969:function(e,t,r){var n=r(10111),i=r(18490),a=r(44450),o=r(84506),l=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)n(t,a(e)),e=i(e);return t}:o;e.exports=l},67123:function(e,t,r){var n=r(70861),i=r(79312),a=r(55589),o=n?n.isConcatSpreadable:void 0;e.exports=function(e){return a(e)||i(e)||!!(o&&e&&e[o])}},62438:function(e){var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},90311:function(e,t,r){var n=r(93192),i=r(78618),a=r(66948),o=r(30568),l=r(32840),s=r(62096),u=Object.prototype.hasOwnProperty,d=a(function(e,t){if(l(t)||o(t)){i(t,s(t),e);return}for(var r in t)u.call(t,r)&&n(e,r,t[r])});e.exports=d},69312:function(e,t,r){var n=r(44770),i=r(55833),a=r(96843),o=Math.max;e.exports=function(e,t,r){var l=null==e?0:e.length;if(!l)return -1;var s=null==r?0:a(r);return s<0&&(s=o(l+s,0)),n(e,i(t,3),s)}},29787:function(e,t,r){var n=r(41351),i=r(87493),a=r(79312),o=r(55589),l=r(30568),s=r(85778),u=r(32840),d=r(50922),f=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(l(e)&&(o(e)||"string"==typeof e||"function"==typeof e.splice||s(e)||d(e)||a(e)))return!e.length;var t=i(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(u(e))return!n(e).length;for(var r in e)if(f.call(e,r))return!1;return!0}},3224:function(e,t,r){var n=r(69823),i=r(50440);e.exports=function(e){return"number"==typeof e||i(e)&&"[object Number]"==n(e)}},69107:function(e,t,r){var n=r(29233),i=r(55833),a=r(78068),o=r(55589);e.exports=function(e,t){return(o(e)?n:a)(e,i(t,3))}},61230:function(e,t,r){var n=r(87500),i=r(44003),a=r(55833);e.exports=function(e,t){var r={};return t=a(t,3),i(e,function(e,i,a){n(r,i,t(e,i,a))}),r}},65071:function(e,t,r){var n=r(85117),i=r(46718),a=r(80229);e.exports=function(e){return e&&e.length?n(e,a,i):void 0}},57383:function(e,t,r){var n=r(29233),i=r(55833),a=r(57121),o=r(55713);e.exports=function(e,t){if(null==e)return{};var r=n(o(e),function(e){return[e]});return t=i(t),a(e,r,function(e,r){return t(e,r[0])})}},71635:function(e,t,r){var n=r(22825),i=r(54466),a=r(29735),o=r(98132),l=a(function(e,t){if(null==e)return[];var r=t.length;return r>1&&o(e,t[0],t[1])?t=[]:r>2&&o(t[0],t[1],t[2])&&(t=[t[0]]),i(e,n(t,1),[])});e.exports=l},99558:function(e,t,r){var n=r(29153),i=1/0;e.exports=function(e){return e?(e=n(e))===i||e===-i?(e<0?-1:1)*17976931348623157e292:e==e?e:0:0===e?e:0}},96843:function(e,t,r){var n=r(99558);e.exports=function(e){var t=n(e),r=t%1;return t==t?r?t-r:t:0}},29153:function(e,t,r){var n=r(21656),i=r(93702),a=r(52624),o=0/0,l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,d=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return o;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=s.test(e);return r||u.test(e)?d(e.slice(2),r?2:8):l.test(e)?o:+e}},77986:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(52071),i=r(88966);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return s},default:function(){return u}});var a=r(60005),o=(r(52983),a._(r(31937)));function l(e){return{default:(null==e?void 0:e.default)||e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}function u(e,t){var r=o.default,a={loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};e instanceof Promise?a.loader=function(){return e}:"function"==typeof e?a.loader=e:"object"==typeof e&&(a=n._({},a,e));var u=(a=n._({},a,t)).loader;return(a.loadableGenerated&&(a=n._({},a,a.loadableGenerated),delete a.loadableGenerated),"boolean"!=typeof a.ssr||a.ssr)?r(i._(n._({},a),{loader:function(){return null!=u?u().then(l):Promise.resolve(l(function(){return null}))}})):(delete a.webpack,delete a.modules,s(r,a))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},28700:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return n}});var n=r(60005)._(r(52983)).default.createContext(null)},31937:function(e,t,r){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0});var n=r(15992),i=r(52617),a=r(52071),o=r(88966);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});var l=r(60005)._(r(52983)),s=r(28700),u=[],d=[],f=!1;function c(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(function(e){return r.loading=!1,r.loaded=e,e}).catch(function(e){throw r.loading=!1,r.error=e,e}),r}var m=function(){function e(t,r){n._(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return i._(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"==typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},r.delay)),"number"==typeof r.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},r.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(t){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=a._(o._(a._({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading}),e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function p(e){return function(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function i(){if(!n){var t=new m(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!f){var a=r.webpack?r.webpack():r.modules;a&&d.push(function(e){var t=!0,r=!1,n=void 0;try{for(var o,l=a[Symbol.iterator]();!(t=(o=l.next()).done);t=!0){var s=o.value;if(e.includes(s))return i()}}catch(e){r=!0,n=e}finally{try{t||null==l.return||l.return()}finally{if(r)throw n}}})}function o(e,t){i(),(a=l.default.useContext(s.LoadableContext))&&Array.isArray(r.modules)&&r.modules.forEach(function(e){a(e)});var a,o=l.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return l.default.useImperativeHandle(t,function(){return{retry:n.retry}},[]),l.default.useMemo(function(){var t;return o.loading||o.error?l.default.createElement(r.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:n.retry}):o.loaded?l.default.createElement((t=o.loaded)&&t.default?t.default:t,e):null},[e,o])}return o.preload=function(){return i()},o.displayName="LoadableComponent",l.default.forwardRef(o)}(c,e)}function y(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then(function(){if(e.length)return y(e,t)})}p.preloadAll=function(){return new Promise(function(e,t){y(u).then(e,t)})},p.preloadReady=function(e){return void 0===e&&(e=[]),new Promise(function(t){var r=function(){return f=!0,t()};y(d,e).then(r,r)})},window.__NEXT_PRELOADREADY=p.preloadReady;var h=p},52318:function(e,t,r){e.exports=r(77986)},12948:function(e,t,r){!function(e){"use strict";e.exports.is_uri=r,e.exports.is_http_uri=n,e.exports.is_https_uri=i,e.exports.is_web_uri=a,e.exports.isUri=r,e.exports.isHttpUri=n,e.exports.isHttpsUri=i,e.exports.isWebUri=a;var t=function(e){return e.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/)};function r(e){if(!(!e||/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(e)||/%[^0-9a-f]/i.test(e)||/%[0-9a-f](:?[^0-9a-f]|$)/i.test(e))){var r=[],n="",i="",a="",o="",l="",s="";if(n=(r=t(e))[1],i=r[2],a=r[3],o=r[4],l=r[5],n&&n.length&&a.length>=0){if(i&&i.length){if(!(0===a.length||/^\//.test(a)))return}else if(/^\/\//.test(a))return;if(/^[a-z][a-z0-9\+\-\.]*$/.test(n.toLowerCase()))return s+=n+":",i&&i.length&&(s+="//"+i),s+=a,o&&o.length&&(s+="?"+o),l&&l.length&&(s+="#"+l),s}}}function n(e,n){if(r(e)){var i=[],a="",o="",l="",s="",u="",d="",f="";if(a=(i=t(e))[1],o=i[2],l=i[3],u=i[4],d=i[5],a){if(n){if("https"!=a.toLowerCase())return}else if("http"!=a.toLowerCase())return;if(!o)return;return/:(\d+)$/.test(o)&&(s=o.match(/:(\d+)$/)[0],o=o.replace(/:\d+$/,"")),f+=a+"://"+o,s&&(f+=s),f+=l,u&&u.length&&(f+="?"+u),d&&d.length&&(f+="#"+d),f}}}function i(e){return n(e,!0)}function a(e){return n(e)||i(e)}}(e=r.nmd(e))},55432:function(e,t,r){"use strict";r.d(t,{_:function(){return i}});var n=r(23557);function i(e){var t=function(e,t){if("object"!==(0,n.j)(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!==(0,n.j)(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===(0,n.j)(t)?t:String(t)}}}]);