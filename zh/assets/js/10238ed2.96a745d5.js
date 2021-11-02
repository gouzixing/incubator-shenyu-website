"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[1554],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(n),m=o,h=f["".concat(u,".").concat(m)]||f[m]||s[m]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},98511:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={title:"\u53cc\u56e0\u7d20\u8ba4\u8bc1",sidebar_position:9,description:"Apache ShenYu Two FA",author:"xiaoyu",categories:"Apache ShenYu",tags:["Two-FA"]},u=void 0,p={unversionedId:"two-fa",id:"two-fa",isDocsHomePage:!1,title:"\u53cc\u56e0\u7d20\u8ba4\u8bc1",description:"Apache ShenYu Two FA",source:"@site/i18n/zh/docusaurus-plugin-content-docs-community/current/8-two-fa.md",sourceDirName:".",slug:"/two-fa",permalink:"/zh/community/two-fa",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs-community/current/8-two-fa.md",version:"current",lastUpdatedBy:"Zhang Yonglun",lastUpdatedAt:1635846098,formattedLastUpdatedAt:"2021/11/2",sidebarPosition:9,frontMatter:{title:"\u53cc\u56e0\u7d20\u8ba4\u8bc1",sidebar_position:9,description:"Apache ShenYu Two FA",author:"xiaoyu",categories:"Apache ShenYu",tags:["Two-FA"]},sidebar:"community",previous:{title:"\u63d0\u540d\u65b0\u7684PPMC\u6210\u5458",permalink:"/zh/community/vote-ppmc"},next:{title:"\u7b7e\u7f72ICLA\u6307\u5357",permalink:"/zh/community/icla"}},l=[{value:"\u53cc\u56e0\u7d20\u8ba4\u8bc1(2FA)",id:"\u53cc\u56e0\u7d20\u8ba4\u8bc12fa",children:[]},{value:"\u5728GitHub\u4e0a\u542f\u75282FA",id:"\u5728github\u4e0a\u542f\u75282fa",children:[]},{value:"\u5982\u4f55\u63d0\u4ea4\u4ee3\u7801",id:"\u5982\u4f55\u63d0\u4ea4\u4ee3\u7801",children:[]}],s={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u53cc\u56e0\u7d20\u8ba4\u8bc12fa"},"\u53cc\u56e0\u7d20\u8ba4\u8bc1(2FA)"),(0,i.kt)("p",null,"\u53cc\u56e0\u5b50\u9a8c\u8bc1\uff082FA\uff09\u662f\u6307\u7ed3\u5408\u5bc6\u7801\u4ee5\u53ca\u5b9e\u7269\uff08\u4fe1\u7528\u5361\u3001SMS\u624b\u673a\u3001\u4ee4\u724c\u6216\u6307\u7eb9\u7b49\u751f\u7269\u6807\u5fd7\uff09\u4e24\u79cd\u6761\u4ef6\u5bf9\u7528\u6237\u8fdb\u884c\u8ba4\u8bc1\u7684\u65b9\u6cd5\u3002\n\u4e3a\u4fdd\u8bc1\u63d0\u4ea4\u8005\u8d26\u6237\u7684\u5b89\u5168\uff0c\u6211\u4eec\u9700\u8981\u60a8\u5728GitHub\u4e0a\u542f\u75282FA\u6765\u9a8c\u8bc1\u767b\u5f55\u7528\u6237\u3001\u5e76\u8d21\u732e\u4ee3\u7801\u3002"),(0,i.kt)("p",null,"\u5177\u4f53\u5185\u5bb9\u53ef\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"https://help.github.com/articles/requiring-two-factor-authentication-in-your-organization/"},"2FA"),"\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u82e5\u60a8\u4e0d\u542f\u75282FA\uff0c\u60a8\u5c06\u4f1a\u4ece\u672c\u9879\u76ee\u4e2d\u9664\u540d\uff0c\u5e76\u4e14\u65e0\u6cd5\u8bbf\u95ee\u6211\u4eec\u7684\u4ed3\u5e93\u4ee5\u53ca\u6765\u81ea\u6211\u4eec\u79c1\u6709\u4ed3\u5e93\u7684fork\u4ed3\u5e93\u3002")),(0,i.kt)("h2",{id:"\u5728github\u4e0a\u542f\u75282fa"},"\u5728GitHub\u4e0a\u542f\u75282FA"),(0,i.kt)("p",null,"\u5177\u4f53\u64cd\u4f5c\uff0c\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"https://help.github.com/articles/configuring-two-factor-authentication-via-a-totp-mobile-app/"},"\u4f7f\u7528TOTP\u542f\u7528\u53cc\u56e0\u7d20\u8ba4\u8bc1"),"\u3002"),(0,i.kt)("p",null,"\u5f53\u60a8\u5f00\u542f2FA\u9a8c\u8bc1\u540e\uff0c\u60a8\u9700\u8981\u4f7f\u7528\u7528\u6237\u540d/\u5bc6\u7801 + \u624b\u673a\u8ba4\u8bc1\u7801\u7684\u65b9\u5f0f\u6765\u767b\u5f55GitHub\u3002"),(0,i.kt)("p",null,"\u63d0\u793a\uff1a\u82e5\u65e0\u6cd5\u901a\u8fc7\u9875\u9762\u94fe\u63a5\u4e0b\u8f7d\u5bf9\u5e94APP\uff0c\u53ef\u5728\u624b\u673a\u7684\u5e94\u7528\u5e02\u573a\u6216\u662fAPP Store\u91cc\u641c\u7d22\u5e76\u4e0b\u8f7dGoogle Authenticator\u3002"),(0,i.kt)("h2",{id:"\u5982\u4f55\u63d0\u4ea4\u4ee3\u7801"},"\u5982\u4f55\u63d0\u4ea4\u4ee3\u7801"),(0,i.kt)("p",null,"\u5f53\u542f\u75282FA\u8ba4\u8bc1\u540e\uff0c\u60a8\u9700\u8981\u751f\u6210\u79c1\u6709\u8bbf\u95eeToken\u6765\u8fdb\u884cgit\u63d0\u4ea4\u7b49\u64cd\u4f5c\u3002\u6b64\u65f6\uff0c\u60a8\u5c06\u4f7f\u7528\u7528\u6237\u540d + \u79c1\u6709\u8bbf\u95eeToken \u6765\u4ee3\u66ff \u7528\u6237\u540d + \u5bc6\u7801\u7684\u65b9\u5f0f\n\u8fdb\u884c\u4ee3\u7801\u7684\u63d0\u4ea4\u3002"),(0,i.kt)("p",null,"\u5177\u4f53\u64cd\u4f5c\uff0c\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/"},"\u521b\u5efa\u79c1\u6709Token"),"\u3002"))}f.isMDXComponent=!0}}]);