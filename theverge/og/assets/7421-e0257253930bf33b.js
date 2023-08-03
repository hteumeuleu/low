"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7421],{39381:function(e,n,t){t.r(n);var a,i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"Admin_authorProfile",selections:[{alias:null,args:null,kind:"ScalarField",name:"uid",storageKey:null},a={alias:"_id",args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,concreteType:"Community",kind:"LinkedField",name:"community",plural:!1,selections:[a],storageKey:null}],type:"AuthorProfile",abstractKey:null};i.hash="c12c965a699737bee2b0dce13292bf90",n.default=i},11265:function(e,n,t){t.r(n);var a,i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"Admin_entry",selections:[{alias:null,args:null,kind:"ScalarField",name:"uid",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"author",plural:!1,selections:a=[{alias:"_id",args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uuid",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null},{alias:null,args:null,concreteType:"Community",kind:"LinkedField",name:"community",plural:!1,selections:a,storageKey:null}],type:"Entry",abstractKey:null};i.hash="6125c8fb594811bebedb59a0a2a5f649",n.default=i},73956:function(e,n,t){t.r(n);var a,i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"Admin_entryGroup",selections:[{alias:null,args:null,kind:"ScalarField",name:"uid",storageKey:null},a={alias:"_id",args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:"entryGroupCommunity",args:null,concreteType:"Community",kind:"LinkedField",name:"community",plural:!1,selections:[a],storageKey:null},{alias:null,args:null,concreteType:"HubPage",kind:"LinkedField",name:"hubPage",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"Admin_hubPage"}],storageKey:null}],type:"EntryGroup",abstractKey:null};i.hash="ce4dcd19e91337306537925966927890",n.default=i},33349:function(e,n,t){t.r(n);var a,i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"Admin_hubPage",selections:[a={alias:"_id",args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,concreteType:"Community",kind:"LinkedField",name:"community",plural:!1,selections:[a],storageKey:null},{alias:null,args:null,concreteType:"EntryGroup",kind:"LinkedField",name:"entryGroup",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uid",storageKey:null}],storageKey:null}],type:"HubPage",abstractKey:null};i.hash="d43e1e642a46e0fb10b93f833a8e8698",n.default=i},10996:function(e,n,t){t.d(n,{Z:function(){return f}});var a,i=t(53520),r=t(97458),o=t(52983),l=t(61198),d=t(61568),u=t(29565),c=t(9326),s=t(81284),E=t(97158),m=t(13546),R=t.n(m);let A=((a={}).ABLE_TO_IP_BAN="ABLE_TO_IP_BAN",a.ASSET_MANAGER="ASSET_MANAGER",a.AUTHOR="AUTHOR",a.BETA_TESTER="BETA_TESTER",a.BYPASS_TWO_FACTOR_AUTHENTICATION="BYPASS_TWO_FACTOR_AUTHENTICATION",a.CAMPAIGNS_ADMIN="CAMPAIGNS_ADMIN",a.CHORUS_MANAGER="CHORUS_MANAGER",a.COMMUNITY_POST_AUTHOR="COMMUNITY_POST_AUTHOR",a.EDITOR="EDITOR",a.EDITORIAL_APPS_ADMIN="EDITORIAL_APPS_ADMIN",a.EMPLOYEE="EMPLOYEE",a.EXTERNAL_API_CLIENT="EXTERNAL_API_CLIENT",a.EXTERNAL_DEVELOPER="EXTERNAL_DEVELOPER",a.FREELANCE="FREELANCE",a.GROWTH_AND_ANALYTICS="GROWTH_AND_ANALYTICS",a.HEADLESS_ADMIN="HEADLESS_ADMIN",a.INTERNAL_MEMBER="INTERNAL_MEMBER",a.MANAGER="MANAGER",a.MEMBER="MEMBER",a.MODERATOR="MODERATOR",a.NETWORK_ADMIN="NETWORK_ADMIN",a.NETWORK_EDITOR="NETWORK_EDITOR",a.NETWORK_OPS="NETWORK_OPS",a.PTE_EDITOR="PTE_EDITOR",a.PUBLIC_AUDIENCE="PUBLIC_AUDIENCE",a.SUPERGROUP_AUTHOR="SUPERGROUP_AUTHOR",a.TRUSTED="TRUSTED",a.TRUSTED_AUTHOR="TRUSTED_AUTHOR",a),T=[A.NETWORK_ADMIN],_={adminMenu:{newQuickPost:[A.AUTHOR,A.COMMUNITY_POST_AUTHOR,A.SUPERGROUP_AUTHOR,A.TRUSTED_AUTHOR,A.EDITOR,A.MANAGER,A.CHORUS_MANAGER,A.HEADLESS_ADMIN,A.NETWORK_EDITOR,A.EXTERNAL_API_CLIENT],newStory:[A.AUTHOR,A.COMMUNITY_POST_AUTHOR,A.SUPERGROUP_AUTHOR,A.TRUSTED_AUTHOR,A.EDITOR,A.MANAGER,A.CHORUS_MANAGER,A.HEADLESS_ADMIN,A.NETWORK_EDITOR,A.EXTERNAL_API_CLIENT],dashboard:[A.AUTHOR,A.COMMUNITY_POST_AUTHOR,A.SUPERGROUP_AUTHOR,A.TRUSTED_AUTHOR,A.EDITOR,A.MANAGER,A.CHORUS_MANAGER,A.HEADLESS_ADMIN,A.NETWORK_EDITOR,A.EXTERNAL_API_CLIENT],editorial:[A.AUTHOR,A.COMMUNITY_POST_AUTHOR,A.SUPERGROUP_AUTHOR,A.TRUSTED_AUTHOR,A.EDITOR,A.MANAGER,A.CHORUS_MANAGER,A.HEADLESS_ADMIN,A.NETWORK_EDITOR,A.EXTERNAL_API_CLIENT],assetManager:[A.AUTHOR,A.COMMUNITY_POST_AUTHOR,A.SUPERGROUP_AUTHOR,A.TRUSTED_AUTHOR,A.EDITOR,A.MANAGER,A.CHORUS_MANAGER,A.HEADLESS_ADMIN,A.NETWORK_EDITOR,A.EXTERNAL_API_CLIENT],groups:[A.EDITOR,A.MANAGER,A.CHORUS_MANAGER,A.HEADLESS_ADMIN,A.NETWORK_EDITOR,A.SUPERGROUP_AUTHOR],hubLayout:[A.EDITOR,A.MANAGER,A.CHORUS_MANAGER,A.HEADLESS_ADMIN,A.NETWORK_EDITOR,A.SUPERGROUP_AUTHOR],network:[A.HEADLESS_ADMIN,A.NETWORK_EDITOR],community:[A.HEADLESS_ADMIN,A.NETWORK_EDITOR],navigation:[A.EDITOR,A.MANAGER,A.CHORUS_MANAGER,A.HEADLESS_ADMIN,A.NETWORK_EDITOR]},entry:{edit:[A.EDITOR,A.MANAGER,A.CHORUS_MANAGER,A.HEADLESS_ADMIN,A.NETWORK_EDITOR],editOwn:[A.EDITOR,A.MANAGER,A.CHORUS_MANAGER,A.HEADLESS_ADMIN,A.NETWORK_EDITOR,A.AUTHOR,A.COMMUNITY_POST_AUTHOR,A.SUPERGROUP_AUTHOR,A.TRUSTED_AUTHOR]},entryGroup:{edit:[A.EDITOR,A.MANAGER,A.CHORUS_MANAGER,A.HEADLESS_ADMIN,A.NETWORK_EDITOR,A.SUPERGROUP_AUTHOR]},authorProfile:{edit:[A.MODERATOR,A.MANAGER,A.CHORUS_MANAGER,A.HEADLESS_ADMIN,A.NETWORK_EDITOR],editOwn:[A.AUTHOR,A.COMMUNITY_POST_AUTHOR,A.SUPERGROUP_AUTHOR,A.TRUSTED_AUTHOR,A.EDITOR,A.MANAGER,A.CHORUS_MANAGER,A.HEADLESS_ADMIN,A.NETWORK_EDITOR,A.EXTERNAL_API_CLIENT]}};var O=function(e){let n=(0,u.aC)();return!!n?.viewer&&function(e,n){if(T.some(n=>e.includes(n)))return!0;let t=R()(_,n),a=Array.isArray(e)?e:[e];return!!t&&t.some(e=>a.includes(e))}(n.viewer.roles,e)},p=t(37782),y=function(){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"206 29.9 642.1 681.3",width:"20",children:(0,r.jsx)("path",{d:"M843 467.2c4.8 3.2 6.3 9.5 4 15-13.5 41.2-36.4 79.2-64.2 111.7-4 4.8-9.5 6.3-15 4l-81.6-28.5c-20.6 16.6-43.6 30.1-67.3 39.6l-16.6 84.7c-.8 5.5-5.5 10.3-11.1 11.1-21.4 4-42.8 6.3-64.2 6.3-22.2 0-43.6-2.4-64.2-6.3-5.5-.8-10.3-5.5-11.1-11.1L435.2 609c-24.6-9.5-48.3-23-67.3-39.6l-81.6 28.5c-5.5 2.4-11.1.8-15-4-28.5-32.5-51.5-70.5-64.2-111.7-2.4-5.5-.8-11.9 4-15l64.9-57c-2.4-12.7-3.2-26.1-3.2-39.6s.8-26.9 3.2-39.6l-65-57c-4.8-3.2-6.3-9.5-4-15 13.5-41.2 36.4-79.2 64.2-111.7 4-4.8 9.5-6.3 15-4l81.6 28.5c19.8-16.6 43.6-30.1 67.3-39.6l16.6-84.7c.8-5.5 5.5-10.3 11.1-11.1 42.8-8.7 86.3-8.7 129.1 0 5.5.8 10.3 5.5 11.1 11.1l15 85.5c24.6 9.5 47.5 23 67.3 39.6l81.6-28.5c5.5-2.4 11.1-.8 15 4 28.5 32.5 51.5 70.5 64.2 111.7 2.4 5.5.8 11.9-4 15l-65.7 57c2.4 12.7 3.2 26.1 3.2 39.6s-.8 26.9-3.2 39.6l66.6 56.2zm-190-95.8c0-69.7-57.8-127.5-127.5-127.5-70.5 0-127.5 57-127.5 127.5s57 127.5 127.5 127.5S653 441.9 653 371.4z"})})},N=function(e){var n=e.href,t=e.children;return(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"inline-block w-full py-2",href:n,children:t})})},f=(0,p.n)(function(e){var n,a,m=e.entry,R=e.entryGroup,A=e.hubPage,T=e.authorProfile,_=(0,c.q)().appConfig.deployEnv,p=(0,l.useFragment)(t(11265),m||null),f=(0,l.useFragment)(t(73956),R||null),g=(0,l.useFragment)(t(33349),(null==f?void 0:f.hubPage)||A||null),h=(0,l.useFragment)(t(39381),T||null),v=(0,d.Z)(),S=(0,i._)((0,o.useState)(!1),2),U=S[0],I=S[1],M=(0,u.aC)(),D=null==M?void 0:null===(n=M.viewer)||void 0===n?void 0:n.id,b={newStory:O("adminMenu.newStory"),newQuickPost:O("adminMenu.newQuickPost"),network:O("adminMenu.network"),hubLayout:O("adminMenu.hubLayout"),groups:O("adminMenu.groups"),editorial:O("adminMenu.editorial"),dashboard:O("adminMenu.dashboard"),community:O("adminMenu.community"),assetManager:O("adminMenu.assetManager"),navigation:O("adminMenu.navigation"),editEntry:O("entry.edit"),editOwnEntry:O("entry.editOwn"),editEntryGroup:O("entryGroup.edit"),editAuthorProfile:O("authorProfile.edit"),editOwnAuthorProfile:O("authorProfile.editOwn")},P=Object.keys(b).some(function(e){return!0===b[e]}),k=(0,o.useMemo)(function(){if(p){var e=b.editEntry,n=b.editOwnEntry&&D===p.author._id;return"QUICK_POST"===p.type?{type:"QuickPost",editURL:"".concat(s.YK,"/quick-compose/").concat(p.uuid),permitted:e||n,uid:p.uid}:{type:"Story",editURL:"".concat(s.YK,"/compose/").concat(p.uuid),permitted:e||n,uid:p.uid}}if(g){var t,a=(null===(t=g.community)||void 0===t?void 0:t._id.toString())||s.vv;return{type:"Hub",editURL:"".concat(s.RQ,"/admin/hub_layout/show?community_id=").concat(encodeURIComponent(a),"&hub_page_id=").concat(g._id),permitted:b.editEntryGroup,uid:g.entryGroup.uid}}if(f){var i="".concat(s.RQ,"/admin/entry_groups/edit/").concat(f._id);return f.entryGroupCommunity?{type:"Group",editURL:"".concat(i,"?community_id=").concat(encodeURIComponent(f.entryGroupCommunity._id.toString()),"&type=SiteGroup"),permitted:b.editEntryGroup,uid:f.uid}:{type:"Super Group",editURL:"".concat(i,"?type=SuperGroup"),permitted:b.editEntryGroup,uid:f.uid}}if(h){var r=b.editAuthorProfile,o=b.editOwnAuthorProfile&&D===h._id;return{type:"Author Profile",editURL:"".concat(s.RQ,"/admin/author_profiles/edit/").concat(h._id,"?community_id=").concat(encodeURIComponent(h.community._id)),permitted:r||o,uid:h.uid}}return null},[h,p,f,g,b.editAuthorProfile,b.editEntry,b.editEntryGroup,b.editOwnAuthorProfile,b.editOwnEntry,D]);return((0,o.useEffect)(function(){if(null==k?void 0:k.permitted){var e="";return document.body.addEventListener("keydown",n),function(){document.body.removeEventListener("keydown",n)}}function n(n){var t=n.key;1===t.length&&n.target===document.body&&((e+=t)!==s.wb.slice(0,e.length)?e=t===s.wb[0]?t:"":e.length===s.wb.length&&(e="",window.open(k.editURL,"_blank")))}},[k]),v&&P)?(0,r.jsxs)("div",{className:"fixed top-[10%] z-20 rounded-r bg-white p-8 font-polysans shadow-md hover:px-14",onMouseOver:function(){I(!0)},onMouseLeave:function(){I(!1)},children:[!U&&(0,r.jsx)(y,{}),U&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{className:"leading-14 text-sm mb-4 cursor-default bg-repeating-lines-dark text-15 font-bold uppercase tracking-15 text-black",children:"Quick Admin"}),(0,r.jsxs)("ul",{className:"text-sm pt-2 text-13 uppercase leading-140 tracking-15 text-blurple",children:[b.newQuickPost&&(0,r.jsx)(N,{href:"".concat(s.YK,"/newstory?community_id=").concat(encodeURIComponent(s.vv),"&entry_type=QuickPost"),children:"New QuickPost"}),b.newStory&&(0,r.jsx)(N,{href:"".concat(s.YK,"/newstory?community_id=").concat(encodeURIComponent(s.vv)),children:"New Story"}),(null==k?void 0:k.permitted)&&(0,r.jsxs)(N,{href:k.editURL,children:["Edit ",k.type]}),b.dashboard&&(0,r.jsx)(N,{href:"".concat(s.YK,"/?community_id=").concat(encodeURIComponent(s.vv)),children:"Dashboard"}),b.editorial&&(0,r.jsx)(N,{href:"".concat(s.RQ,"/admin/dashboard/editorial?community_id=").concat(encodeURIComponent(s.vv)),children:"Editorial"}),b.assetManager&&(0,r.jsx)(N,{href:"".concat(s.YK,"/assets?community_id=").concat(encodeURIComponent(s.vv)),children:"Assets Manager"}),b.groups&&(0,r.jsx)(N,{href:"".concat(s.RQ,"/admin/entry_groups/list?community_id=").concat(encodeURIComponent(s.vv),"&type=SiteGroup"),children:"Groups"}),b.hubLayout&&(0,r.jsx)(N,{href:"".concat(s.RQ,"/admin/hub_layout/show?community_id=").concat(encodeURIComponent(s.vv)),children:"Hub Layout"}),b.network&&(0,r.jsx)(N,{href:"".concat(s.RQ,"/admin/networks/2/edit?community_id=").concat(encodeURIComponent(s.vv)),children:"The Verge Network"}),b.community&&(0,r.jsx)(N,{href:"".concat(s.RQ,"/admin/communities/network_edit/372?community_id=").concat(encodeURIComponent(s.vv)),children:"Verge Community"}),b.navigation&&(0,r.jsx)(N,{href:"".concat(s.RQ,"/admin/nav/show?community_id=").concat(encodeURIComponent(s.vv)),children:"Navigation"}),E.dm&&(null==M?void 0:null===(a=M.viewer)||void 0===a?void 0:a.coral)&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(N,{href:"".concat(E.dm,"/admin/moderate#accessToken=").concat(encodeURIComponent(M.viewer.coral)),children:"Comment Moderation"})})]}),"staging"!==_&&"production"!==_&&k&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{className:"leading-14 text-sm mb-4 mt-8 cursor-default bg-repeating-lines-dark text-15 font-bold uppercase tracking-15 text-black",children:"Developer"}),(0,r.jsx)("ul",{className:"text-sm pt-2 text-13 uppercase leading-140 tracking-15 text-blurple",children:(0,r.jsx)(N,{href:"/api/revalidate?uid=".concat(k.uid,"&path=").concat(location.pathname,"&skip=fastly&skip=aws&skip=slack"),children:"Revalidate"})})]})]})]}):null},{context:"AdminErrorBoundary"})},32242:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(97458),i=t(28934),r=t(70094),o=t(20672),l=function(e){var n=e.caption,t=e.credit,l=e.className,d=void 0===l?"":l;return n||t?(0,a.jsxs)("div",{className:(0,i.Z)(o.Z.Caption,"pt-6 font-polysans-mono text-12 font-light leading-130 tracking-1",d),children:[n&&(0,a.jsx)(r.Z,{component:"figcaption",className:(0,i.Z)("inline text-gray-13 dark:text-gray-e9 [&>a:hover]:text-black [&>a:hover]:shadow-underline-black dark:[&>a:hover]:text-gray-e9 dark:[&>a:hover]:shadow-underline-gray-63 [&>a]:shadow-underline-gray-13 dark:[&>a]:shadow-underline-gray-63"),html:n}),t&&(0,a.jsxs)(a.Fragment,{children:[" ",(0,a.jsx)(r.Z,{component:"cite",className:(0,i.Z)("inline not-italic text-gray-63 dark:text-gray-bd [&>a:hover]:text-gray-63 [&>a:hover]:shadow-underline-black dark:[&>a:hover]:text-gray-bd dark:[&>a:hover]:shadow-underline-gray [&>a]:shadow-underline-gray-63 dark:[&>a]:text-gray-bd dark:[&>a]:shadow-underline-gray"),html:t})]})]}):null}},31767:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(53520),i=t(97458),r=t(28934),o=t(52983),l=t(20672),d=function(e){var n=e.contentWarning,t=e.children,d=e.aspectRatio,u=e.posterUrl,c=(0,a._)((0,o.useState)(!!n),2),s=c[0],E=c[1];return s?(0,i.jsx)("div",{style:{paddingTop:"".concat(d,"%"),backgroundImage:u?"url(".concat(u,")"):"none"},className:"relative m-0 overflow-hidden bg-cover",children:(0,i.jsxs)("button",{className:(0,r.Z)(l.Z.ContentWarning,"absolute inset-0 flex h-full w-full flex-col items-center justify-center bg-gray-e9/90 font-polysans text-14 backdrop-blur-md"),onClick:function(){return E(!1)},children:[(0,i.jsx)("span",{className:"mb-10 font-light",children:n}),(0,i.jsx)("span",{className:"font-medium",children:"Tap to display"})]})}):(0,i.jsx)("div",{className:(0,r.Z)(l.Z.ContentWarning,"relative"),style:{paddingTop:"".concat(d,"%")},children:t})}},44763:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(53520),i=t(97458),r=t(28934),o=t(55717),l=t(52983),d=t(20672),u=(0,t(37782).n)(function(e){var n=e.html,t=e.type,u=e.className,c=void 0===u?null:u,s=e.suppressHydrationWarning,E=(0,a._)((0,l.useState)(!1),2),m=E[0],R=E[1],A=(0,l.createRef)();return(0,l.useEffect)(function(){var e=A.current;if("undefined"==typeof IntersectionObserver){R(!0);return}if(e){var n=new IntersectionObserver(function(t){var i=(0,a._)(t,1)[0];i&&i.isIntersecting&&(R(!0),n.unobserve(e))},{rootMargin:"0px 0px 100% 0px"});return n.observe(e),function(){n.unobserve(e)}}},[A]),(0,l.useEffect)(function(){var e,n,a;"Instagram"===t&&m&&(null===(e=window.instgrm)||void 0===e||e.Embeds.process()),"Twitter"===t&&m&&(null===(a=window.twttr)||void 0===a||null===(n=a.widgets)||void 0===n||n.load())},[m,t]),(0,i.jsx)("div",{ref:A,className:(0,r.Z)(d.Z.Embed,"TikTok"===t?"min-h-[700px] [&>div>blockquote]:!min-w-0":"min-h-[270px]","Instagram"===t&&"[&>div>iframe]:!min-w-0",c||["mb-20","Twitter"===t?"w-full md:max-w-[460px]":"w-full"]),suppressHydrationWarning:void 0!==s&&s,children:m&&(0,i.jsx)(o.Z,{html:n})})},{context:"EmbedErrorBoundary"})},62403:function(e,n,t){t.d(n,{Z:function(){return R}});var a=t(53520),i=t(97458),r=t(28934),o=t(52983),l=t(32242),d=t(31767),u=t(36935),c=t(9326),s=t(20672),E=t(37782),m=t(55148),R=(0,E.n)(function(e){var n=e.autoplay,t=e.caption,E=e.contentWarning,R=e.title,A=e.playerType,T=e.posterUrl,_=e.uuid,O=(0,c.q)().communityConfig.communityDomain,p=(0,u.z$)(),y=(0,u.ST)(),N=(0,m.Z)(O),f=n?"true":"false",g=A.toLowerCase(),h=(0,a._)((0,o.useState)(!1),2),v=h[0],S=h[1],U=(0,o.createRef)();return(0,o.useEffect)(function(){if(p&&y)return y.install(N),function(){y.uninstall()}},[p,N,y]),(0,o.useEffect)(function(){if(!v){var e=U.current;if("undefined"==typeof IntersectionObserver||!n){S(!0);return}var t=new IntersectionObserver(function(n){var i=(0,a._)(n,1)[0];(null==i?void 0:i.isIntersecting)&&(S(!0),t.unobserve(e))},{rootMargin:"10px"});return t.observe(e),function(){t.unobserve(e)}}},[U,v,n]),(0,i.jsxs)("div",{className:(0,r.Z)(s.Z.VideoEmbed,"mb-20"),ref:U,children:[(0,i.jsx)("div",{className:"relative aspect-video",children:(0,i.jsx)(d.Z,{aspectRatio:9/16*100,contentWarning:E,posterUrl:T,children:(0,i.jsx)("div",{className:"absolute top-0 h-full w-full",children:v&&n||!n?(0,i.jsx)("iframe",{id:"video-".concat(_),allowFullScreen:!0,frameBorder:"0",className:"h-full w-full",title:R||"Verge video",allow:"autoplay",src:"".concat(N,"/embed/").concat(_,"?autoplay=").concat(f,"&loop=true&placement=article&player_type=").concat(g,"&tracking=article:middle"),"data-analytics-placement":"article:middle","data-volume-placement":"article","data-analytics-action":"volume:view:article:middle","data-volume-uuid":_,loading:"lazy"}):null})})}),t&&(0,i.jsx)(l.Z,{caption:t})]})},{context:"VideoEmbedErrorBoundary"})},61568:function(e,n,t){var a=t(53520),i=t(52983);n.Z=function(){var e=(0,a._)((0,i.useState)(!1),2),n=e[0],t=e[1];return(0,i.useEffect)(function(){t(!0)},[]),n}}}]);