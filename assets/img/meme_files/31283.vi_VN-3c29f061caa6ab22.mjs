"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[31283],{762587:e=>{e.exports=function(e,t,r,i){t=t||"&",r=r||"=";var n={};if("string"!=typeof e||0===e.length)return n;var a=/\+/g;e=e.split(t);var o=1e3;i&&"number"==typeof i.maxKeys&&(o=i.maxKeys);var s=e.length;o>0&&s>o&&(s=o);for(var l=0;l<s;++l){var d,c,u,p,_=e[l].replace(a,"%20"),m=_.indexOf(r);(m>=0?(d=_.substr(0,m),c=_.substr(m+1)):(d=_,c=""),u=decodeURIComponent(d),p=decodeURIComponent(c),Object.prototype.hasOwnProperty.call(n,u))?Array.isArray(n[u])?n[u].push(p):n[u]=[n[u],p]:n[u]=p}return n}},712361:e=>{var t=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,r,i,n){return(r=r||"&",i=i||"=",null===e&&(e=void 0),"object"==typeof e)?Object.keys(e).map(function(n){var a=encodeURIComponent(t(n))+i;return Array.isArray(e[n])?e[n].map(function(e){return a+encodeURIComponent(t(e))}).join(r):a+encodeURIComponent(t(e[n]))}).join(r):n?encodeURIComponent(t(n))+i+encodeURIComponent(t(e)):""}},817673:(e,t,r)=>{t.decode=t.parse=r(762587),t.encode=t.stringify=r(712361)},809394:(e,t,r)=>{r.d(t,{Z:()=>o});var i=r(297728),n=r(730212),a=r(410150);function o(e){let{isAuthenticated:t,isRTL:r}=(0,n.B)(),o=(0,a.HG)(),{checkExperiment:s}=(0,i.F)(),l="";return e&&t&&o&&!r?l=s("closeup_auth_related_pins_above_fold_2024_dweb").group:e||t||!o||r||(l=s("closeup_unauth_related_pins_above_fold_2024_dweb").group),{isCloseupRelatedPinsAboveTheFoldEnabled:!!l&&"control"!==l&&"control_1"!==l,closeupWithinMasonryEnabled:"enabled_side_by_side"===l||"enabled_side_by_side_1"===l,peekCloseupEnabled:"enabled_peek"===l||"enabled_peek_1"===l,closeupRelatedPinsAboveTheFoldExperimentGroup:l}}},264147:(e,t,r)=>{r.d(t,{Z:()=>o});var i=r(191855),n=r(914896),a=r(937304);function o(e,t){let r=Math.round(1e3*Math.random())+"",o=Math.round(1e3*Math.random())+"";n.t8((0,i.GS)(r),o);let s={token:`${r}-${o}`,url:e,...t&&!t.params?t.queryParams:t?.params&&{pin:t.params.pinId??void 0,isThirdPartyAd:t.params.isThirdPartyAd??void 0,csr:t.params.csrId&&!t.params.pinId?t.params.csrId:void 0,client_tracking_params:t.params.clientTrackingParams,aux_data:t.params.auxData?JSON.stringify(t.params.auxData):void 0}};return`/offsite/?${(0,a.Z)(s)}`}},526789:(e,t,r)=>{r.d(t,{Z:()=>o});var i=r(400416),n=r(786974),a=r(604759);let o=async({clientTrackingParams:e,href:t,isMounted:r,pinId:o,spamCheckCallback:s})=>{let l=await function(e){let t=(0,n.Z)(e),r=a.y8.get("ApiResource",t);if(r)return r;let o=(0,i.Z)(e);return a.y8.add("ApiResource",t,o),o}({url:"/v3/offsite/",data:{check_only:!0,client_tracking_params:e,pin_id:o,url:t}});if(!l.resource_response.error&&r){let{message:e,redirect_status:t,url:r}=l.resource_response.data||{};s({blocked:["blocked","suspicious","porn"].includes(t),message:e,redirectStatus:t,sanitized_url:r})}}},353096:(e,t,r)=>{r.d(t,{Z:()=>i});function i({isOffsiteUrl:e,event:t}){return!e&&(t.metaKey||t.ctrlKey)}},937637:(e,t,r)=>{r.d(t,{Z:()=>d});var i=r(449112),n=r(564573);let a=e=>"string"!=typeof e&&e?e.state:null;var o=r(723184),s=r(809604),l=r(592174);let d=({event:e,onHistoryChange:t,href:r,history:d,target:c})=>{let u=(0,n.Z)(r),p=a(r)??{},_=(0,o.Z)(u);_===l.Z.TRUSTED_DIFFERENT_ORIGIN||"blank"===c?(0,i.Z)(u,"blank"===c):d&&_===l.Z.SAME_ORIGIN&&(d.push((0,s.Z)({url:u}),{from:d.location,...p}),t&&t({event:e}))}},256277:(e,t,r)=>{r.d(t,{Z:()=>a});var i=r(449112),n=r(264147);function a(e,t){(0,i.Z)((0,n.Z)(e,t),!0,t?.features)}},125265:(e,t,r)=>{r.d(t,{Z:()=>n});var i=r(225669);function n({location:e,pinId:t,surface:r}){return!!r&&!i.ZF.includes(r)||e.pathname.includes(t)}},343583:(e,t,r)=>{r.d(t,{Z:()=>m});var i=r(667294),n=r(616550),a=r(526789),o=r(353096),s=r(937637),l=r(125265),d=r(853559),c=r(564573),u=r(648089),p=r(638966),_=r(415787);function m(e){let{clientTrackingParams:t,externalData:r,href:m,onHistoryChange:h,target:g}=e,[b,f]=(0,i.useState)(null),[y,k]=(0,i.useState)(!1),P=(0,n.k6)(),A=(0,n.TH)(),I=(0,c.Z)(m),v=(0,u.Z)({url:I}),{showWarning:w}=(0,p.s)()??{},{pin:S,surface:Z}=r||{},x=t||S?.trackingParams,T=(0,d.Z)();return(0,i.useEffect)(()=>(k(!0),()=>{k(!1)}),[]),(0,i.useEffect)(()=>{v&&S&&null===b&&y&&(!S.promoter||S.isDownstreamPromotion)&&(0,l.Z)({location:A,pinId:S.entityId,surface:Z})&&(0,a.Z)({clientTrackingParams:x,isMounted:y,pinId:S.entityId,spamCheckCallback:e=>f(e),href:I})},[x,S,Z,I,v,y,A,b]),({event:e})=>{if(!(0,o.Z)({isOffsiteUrl:v,event:e})){if(e.preventDefault(),!m||"string"==typeof m&&m.startsWith("#")){(0,_.nP)("link_navigation_empty_href",{sampleRate:1,tags:{route:A.pathname,href:m}});return}v||r?.dangerouslyForceOffsiteUrl?T({auxData:r?.auxData,clientTrackingParams:x,pin:r?.pin&&{attributionSourceId:r.pin.attributionSourceId,campaignId:r.pin.campaignId,isPromoted:r.pin.isPromoted,pinPromotionId:r.pin.pinPromotionId,isThirdPartyAd:r.pin.isThirdPartyAd,advertiserId:r.pin.advertiserId,destinationUrl:r.pin.destinationUrl,link:r.pin.link,domain:r.pin.domain},pinId:r?.pin?.entityId,queryParams:r?.queryParams,showWarning:w,spamCheck:b,url:I}):(0,s.Z)({event:e,href:m,history:P,onHistoryChange:h,target:"blank"===g?"blank":null})}}}},853559:(e,t,r)=>{r.d(t,{Z:()=>m});var i=r(548466),n=r(431705),a=r(829196),o=r(118755),s=r(573706),l=r(264147),d=r(256277),c=r(590238);let u=(e,t,r)=>{let i=document.createElement("a");i.setAttribute("href",t),i.setAttribute("target","_blank"),i.setAttribute("rel","noopener nofollow noreferrer"),i.style.cursor="pointer",i.style.display="block",i.setAttribute(n.$N.ATTRIBUTION_SOURCE_ID,e),i.setAttribute(n.$N.ATTRIBUTE_DESTINATION,r),i.setAttribute(n.$N.ATTRIBUTE_ON,r),i.click()},p=(e,t,r,i,o,s,l)=>{let d=(0,a.m_)(e,[r,i,o],!0,s,l),c=document.createElement("a");c.setAttribute("href",t),c.setAttribute("target","_blank"),c.setAttribute("rel","noopener nofollow noreferrer"),c.style.cursor="pointer",c.style.display="block",c.setAttribute(n.NR.SOURCE,d),c.click()},_=()=>{let{logContextEvent:e}=(0,s.v)();return({attributionSourceId:t,auxData:r,campaignId:n,clientTrackingParams:a,href:s,isPromoted:d,pinId:c,pinPromotionId:_,isThirdPartyAd:m,advertiserId:h,destinationUrl:g,link:b,domain:f})=>{if(!d)return!1;let y=(0,i.Z)(),k=(0,l.Z)(s,{params:{pinId:c,csrId:null,clientTrackingParams:a,auxData:r,isThirdPartyAd:m}}),P=y?.userAgent.browserName??"";if((0,o.G6)(P)){let{group:r}=y?.experimentsClient.checkExperiment("m10n_event_conversion_measurement")??{},i=y?.userAgent.browserVersion?y.userAgent.browserVersion:"0.0",o=parseFloat(i.split(".")[0]+"."+i.split(".")[1]);if(t&&o>=14.1&&["enabled_safari"].includes(r))return u(t,k,s),e({event_type:101,clientTrackingParams:a,object_id_str:c||"",aux_data:{pin_id:c||"",click_measurement_ppid:_||"",click_measurement_campaign_id:n||"",is_pcm:!0,attribution_source_id:t,page_url:s}}),!0}else if((0,o.i7)(P)&&window.document.featurePolicy?.allowsFeature("attribution-reporting"))return p(t,k,g,b,f,n,h),e({event_type:101,clientTrackingParams:a,object_id_str:c||"",aux_data:{pin_id:c||"",click_measurement_ppid:_||"",click_measurement_campaign_id:n||"",is_arapi:!0,attribution_source_id:t,page_url:s}}),!0;return!1}},m=e=>{let t=_();return({auxData:r,clientTrackingParams:i,pin:n,pinId:a,queryParams:o,showWarning:s,spamCheck:l,url:u})=>{if("undefined"!=typeof window&&window.Windows){(0,c.Z)(u,{clientTrackingParams:i,pinId:a,hasPin:!!n,auxData:r,isThirdPartyAd:n?.isThirdPartyAd});return}if(!n&&!e?.isFromClickthroughLink){(0,d.Z)(u,o?{queryParams:o}:{params:{pinId:a}});return}if(l?.blocked){s?.(l);return}n&&t({attributionSourceId:n.attributionSourceId,auxData:r,campaignId:n.campaignId?String(n.campaignId):null,clientTrackingParams:i,href:u,isPromoted:n.isPromoted,pinId:a,pinPromotionId:n.pinPromotionId?String(n.pinPromotionId):null,isThirdPartyAd:n.isThirdPartyAd,advertiserId:n.advertiserId?n.advertiserId:null,destinationUrl:n.destinationUrl,link:n.link,domain:n.domain})||(0,d.Z)(u,{params:{clientTrackingParams:i,auxData:r,pinId:a,isThirdPartyAd:n?.isThirdPartyAd}})}}},564573:(e,t,r)=>{r.d(t,{Z:()=>i});let i=e=>e?"string"==typeof e?e:e.pathname?e.pathname:"":""},590238:(e,t,r)=>{r.d(t,{Z:()=>a});var i=r(400416),n=r(256277);function a(e,t){let{auxData:r,clientTrackingParams:a,hasPin:o,pinId:s,isThirdPartyAd:l}=t||{},d={pin_id:s,check_only:!0,client_tracking_params:o?a:void 0,url:e,aux_data:JSON.stringify(r)};l&&(d.third_party_ad=s,delete d.pin_id),(0,i.Z)({url:"/v3/offsite/",data:d}).then(t=>{if(t&&t.resource_response&&!t.resource_response.error){let{resource_response:e}=t,{redirect_status:r,url:i}=e.data;if(!["blocked","suspicious","porn"].includes(r)){if(window.Windows.Foundation&&window.Windows.System&&window.Windows.System.Launcher&&window.Windows.System.Launcher.launchUriAsync){let e=new window.Windows.Foundation.Uri(i);window.Windows.System.Launcher.launchUriAsync(e)}return}}(0,n.Z)(e,{params:o?{pinId:s,clientTrackingParams:a,auxData:r,isThirdPartyAd:l}:{pinId:s}})})}},225669:(e,t,r)=>{r.d(t,{Wv:()=>n,ZF:()=>i,zI:()=>a,zl:()=>o});let i=["AuthHomefeed","CloseupRelatedProducts","FollowingFeedGrid","RelatedPinGrid","RelatedProductsFeed","SearchItem"],n=["ArticleProductsStory","CloseupRelatedProducts","ProductPinsFeed","RelatedProductsFeed","ShoppingPackageItem","RelatedProductsFeed","UserProfilePinGrid","ShoppingGridShippedMetadataWithVisitButton"],a=[...n,"ShoppingGridShippedMetadata","ShoppingSquareGridDomain","ShoppingSquareGridDomainNoMetadata","ProductPinsFeed","ShoppingCatalogsProductsMetadata","ShoppingDynamicHeightGrid","SearchAdsOnlyModule","ShoppingTool","ProductPinRetrieval"],o=["ShoppingSquareGridDomain","ShoppingGridShippedMetadata","ShoppingGridShippedMetadataWithVisitButton"]},638966:(e,t,r)=>{r.d(t,{Z:()=>g,s:()=>h});var i=r(667294),n=r(498490),a=r(608575),o=r(883119),s=r(758339),l=r(144326),d=r(240760),c=r(785893);let u=()=>{let e=(0,l.ZP)(),{dismissWarning:t}=h()??{};return(0,c.jsx)(o.xu,{paddingX:3,children:(0,c.jsx)(o.zx,{color:"red",fullWidth:!0,onClick:t,text:e.bt("Đồng ý", "Okay", "Dismiss a modal stating that clicking through to a link has been blocked", undefined, true)})})},p=()=>{let e=(0,l.ZP)();return(0,c.jsx)(o.xv,{inline:!0,weight:"bold",children:(0,c.jsx)(o.rU,{display:"inlineBlock",href:"https://policy.pinterest.com/community-guidelines#section-spam",target:"blank",underline:"hover",children:e.bt("Tìm hiểu thêm", "Learn more", "Link text leading to policy website", undefined, true)})})},_=({message:e,sanitized_url:t})=>{let r=(0,l.ZP)(),{dismissWarning:i}=h()??{};return(0,c.jsx)(s.ZP,{accessibilityModalLabel:r.bt("Chúng tôi đã chặn liên kết này", "We have blocked this link", "Modal label when clicking a spammy link", undefined, true),footer:(0,c.jsx)(u,{}),heading:r.bt("Chú ý!", "Heads up!", "Modal heading when clicking through to a link has been blocked", undefined, true),onDismiss:i,children:(0,c.jsxs)(o.xu,{padding:6,children:[(0,c.jsx)(o.xv,{children:(0,d.nk)("{{ message }} {{ learnMore }}",{message:e,learnMore:(0,c.jsx)(p,{},"learnMoreLink")})}),(0,c.jsxs)(o.xu,{alignItems:"center",display:"flex",marginTop:4,children:[(0,c.jsx)(o.xu,{marginEnd:3,children:(0,c.jsx)(o.JO,{accessibilityLabel:r.bt("Địa chỉ liên kết đã chặn", "Blocked link address", "Icon label preceding a block url", undefined, true),color:"error",icon:"report",inline:!0,size:24})}),(0,c.jsx)(o.xv,{inline:!0,lineClamp:1,weight:"bold",children:a.parse(t).hostname})]})]})})},{Provider:m,useMaybeHook:h}=(0,n.Z)("SpammyClickthrough");function g({children:e}){let[t,r]=(0,i.useState)(null),n=(0,i.useCallback)(()=>{r(null)},[r]),a=(0,i.useCallback)(e=>{r(e)},[r]),o=(0,i.useMemo)(()=>({dismissWarning:n,showWarning:a}),[n,a]);return(0,c.jsxs)(m,{value:o,children:[t&&(0,c.jsx)(_,{...t}),e]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/31283.vi_VN-3c29f061caa6ab22.mjs.map