(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Mdw5:function(t,e,a){"use strict";a.r(e);var n=a("gK15"),r=a("epV2"),c=a("nNWW"),i=a("vrFN"),s=(a("4Fbo"),a("CZVI")),o=a("Bl7J"),l=a("Wbzz"),f=a("gGOj"),g=a.n(f),u=a("TepU"),d=a("TWQg"),b=a("H2bQ"),m=a("dar/"),O=a("VHOm");var j=Object(r.a)("div",{target:"e11qty3n0"})({name:"1bdwg0l",styles:"width:100%;max-width:768px;margin-left:auto;margin-right:auto;"}),p={name:"1y7rtor",styles:"margin-top:1rem;padding-left:1rem;padding-right:1rem;font-size:2.25rem;font-weight:700;"},h={name:"b7ldc7",styles:"margin-left:1rem;margin-right:1rem;font-size:1.25rem;"};e.default=function(t){var e=t.data,a=t.location,r=e.allMarkdownRemark.edges,f=e.site.siteMetadata.configs.countOfInitialPost,v=decodeURI(a.pathname).split("/").join(" ").trim(),w=Object(b.a)(v),y=w[0],k=w[1],P=w[2],z=Object(c.useRef)(),L=Object(c.useState)({tag:"ALL",filteredPosts:r}),M=L[0],W=L[1],C=Object(c.useMemo)((function(){var t=[];r.map((function(e){var a=e.node;return t=[].concat(Object(n.a)(t),Object(n.a)(a.frontmatter.tags))}));for(var e=0;e<t.length;++e)for(var a=e+1;a<t.length;++a)t[e]===t[a]&&t.splice(a--,1);return t}),[r]),I=Object(c.useCallback)((function(t){void 0===t&&(t=M.tag),W("ALL"===t?{tag:t,filteredPosts:r}:{tag:t,filteredPosts:r.filter((function(e){return e.node.frontmatter.tags.includes(t)}))})}),[r,M.tag]);Object(d.a)((function(){r.length>k.current*f&&(P(),I())}),z);return Object(c.useEffect)((function(){if(a.href){var t=g.a.parseUrl(a.href).query.tag;t&&I(t)}}),[a.href,I]),Object(O.c)(o.a,null,Object(O.c)(i.a,{title:v}),Object(O.c)(j,null,Object(O.c)("h1",{className:"category-title",css:p},"#",v)),Object(O.c)(m.a,{path:a.pathname}),Object(O.c)(j,null,Object(O.c)(u.a,{tags:C,onTagClick:function(t){Object(l.navigate)("?tag="+t),I(t)},state:M}),0===M.filteredPosts.length&&Object(O.c)("div",{css:h},"no post.."),M.filteredPosts.slice(0,y*f).map((function(t,e){return Object(O.c)(s.a,{post:t,key:"post_"+e})}))),Object(O.c)("div",{ref:z}))}}}]);
//# sourceMappingURL=component---src-templates-category-js-19028cf1e099ed202190.js.map