(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"463D":function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("q1tI"),a=n.n(r),o=n("vOnD"),c=n("+Wdg"),u=n("cVt8"),i=n("otPn"),l=n("/Rk8"),s=o.default.a.withConfig({displayName:"StyledAnchor",componentId:"sc-1rp7lwl-0"})(["box-sizing:border-box;"," color:",";"," text-decoration:",";cursor:pointer;"," "," "," "," "," ",""],(function(e){return function(e){if(e.size){var t=e.size||"medium",n=e.theme.text[t];return Object(o.css)(["font-size:",";line-height:",";"],n.size,n.height)}return Object(o.css)(["font-size:inherit;line-height:inherit;"])}(e)}),(function(e){return Object(u.c)(e.colorProp||e.theme.anchor.color,e.theme)}),(function(e){return e.theme.anchor.fontWeight&&"font-weight: "+e.theme.anchor.fontWeight+";"}),(function(e){return e.hasIcon?"none":e.theme.anchor.textDecoration}),l.g,(function(e){return!e.disabled&&e.theme.anchor.hover&&Object(o.css)(["&:hover{"," "," ","}"],e.theme.anchor.hover.textDecoration&&"text-decoration: "+e.theme.anchor.hover.textDecoration+";",e.theme.anchor.hover.fontWeight&&"font-weight: "+e.theme.anchor.hover.fontWeight+";",e.theme.anchor.hover.extend)}),(function(e){return e.hasIcon&&!e.hasLabel&&"\n    padding: "+e.theme.global.edgeSize.small+";\n  "}),(function(e){return e.disabled&&"\n  opacity: 0.3;\n  cursor: default;\n  text-decoration: none;\n"}),(function(e){return e.focus&&Object(l.f)()}),(function(e){return e.theme.anchor.extend}));function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}s.defaultProps={},Object.setPrototypeOf(s.defaultProps,c.a);var f=Object(r.forwardRef)((function(e,t){var n=e.a11yTitle,l=e.children,f=e.color,h=e.disabled,v=e.href,b=e.icon,O=e.label,g=e.onBlur,j=e.onClick,m=e.onFocus,D=e.reverse,p=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["a11yTitle","children","color","disabled","href","icon","label","onBlur","onClick","onFocus","reverse"]),y=Object(r.useContext)(o.ThemeContext)||c.a.theme,E=Object(r.useState)(),w=E[0],S=E[1];Object(r.useEffect)((function(){(b||O)&&l&&console.warn("Anchor should not have children if icon or label is provided")}),[l,b,O]);var k=b;b&&!b.props.color&&(k=Object(r.cloneElement)(b,{color:Object(u.c)(f||y.anchor.color,y)}));var F=D?O:k,M=D?k:O;return a.a.createElement(s,d({},p,{ref:t,"aria-label":n,colorProp:f,disabled:h,hasIcon:!!b,focus:w,hasLabel:O,reverse:D,href:h?void 0:v,onClick:h?void 0:j,onFocus:function(e){S(!0),m&&m(e)},onBlur:function(e){S(!1),g&&g(e)}}),F&&M?a.a.createElement(i.a,{as:"span",direction:"row",align:"center",gap:"small",style:{display:"inline-flex"}},F,M):F||M||l)}));f.displayName="Anchor";var h=f},"77pL":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var r=n("sWYD"),a=n("4+6U"),o=function(e){return Object(r.a)(e,"yyyy-MM-dd HH:mm")},c=function(e){return isNaN(Object(a.a)(e).getTime())?new Date:Object(a.a)(e)}},"9/EM":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("/h9T"),a=n("/Tr7"),o=n("jIYg");function c(e,t){Object(o.a)(2,arguments);var n=Object(a.a)(e),c=Object(r.a)(t);return isNaN(c)?new Date(NaN):c?(n.setDate(n.getDate()+c),n):n}},FGIF:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={"青龍返首":function(e){var t=e.heaven,n=e.earth;e.door,e.god,e.star;return"戊"===t&&"丙"===n},"飞鸟跌穴":function(e){var t=e.heaven,n=e.earth;e.door,e.god,e.star;return"丙"===t&&"戊"===n},"玉女守門":function(e){var t=e.heaven,n=e.envoy;return!!["丁"===t&&n].find((function(e){return e}))},"雲遁":function(e,t){var n=e.heaven,r=e.earth,a=e.door;e.god,e.star;return!!["乙"===n&&"辛"===r&&("休"===a||"生"===a||"開"===a),"乙"===n&&("休"===a||"開"===a)&&2===t].find((function(e){return e}))},"龍遁":function(e,t){var n=e.heaven,r=(e.earth,e.door);e.god,e.star;return!![!("乙"!==n||"休"!==r&&"開"!==r||7!==t&&8!==t)].find((function(e){return e}))},"天遁":function(e){var t=e.heaven,n=e.earth,r=e.door;e.god,e.star;return!!["丙"===t&&"丁"===n&&"生"===r,"丙"===t&&"戊"===n&&"生"===r,"丙"===t&&"開"===r].find((function(e){return e}))},"地遁":function(e){var t=e.heaven,n=e.earth,r=e.door;e.god,e.star;return"乙"===t&&"己"===n&&"開"===r},"人遁":function(e){var t=e.heaven,n=(e.earth,e.door),r=e.god;e.star;return"丁"===t&&"休"===r&&"陰"===n},"風遁":function(e,t){var n=e.heaven,r=(e.earth,e.door);e.god,e.star;return!!["乙"===n&&("休"===r||"開"===r||"生"===r)&&0===t,"丙"===n&&"開"===r||0===t].find((function(e){return e}))},"虎遁":function(e,t){var n=e.heaven,r=e.earth,a=e.door;e.god,e.star;return!!["乙"===n&&"辛"===r&&"休"===a&&6===t,"乙"===n&&"生"===a&&6===t,"庚"===n&&"開"===a&&5===t,"辛"===n&&"生"===a&&6===t].find((function(e){return e}))},"神遁":function(e){var t=e.heaven,n=(e.earth,e.door),r=e.god;e.star;return"丙"===t&&"天"===r&&"生"===n||"乙"===t&&"天"===r&&"休"===n},"鬼遁":function(e,t){var n=e.heaven,r=e.earth,a=e.door,o=e.god;e.star;return!!["乙"===n&&"杜"===r&&"地"===o,"乙"===n&&"生"===a&&6===t&&"地"===o,"乙"===n&&"開"===a&&"地"===o,"丁"===n&&"開"===a&&"地"===o,"丁"===n&&"休"===a&&"地"===o,"丁"===n&&"生"===a&&"地"===o].find((function(e){return e}))},"日奇得使":function(e,t){var n=e.heaven,r=e.earth;e.door,e.god,e.star;return!!["乙"===n&&8===t,"乙"===n&&1===t,"乙"===n&&"己"===r].find((function(e){return e}))},"月奇得使":function(e,t){var n=e.heaven,r=e.earth;e.door,e.god,e.star;return!!["丙"===n&&7===t||2===t,"丙"===n&&1===t,"乙"===n&&"戊"===r].find((function(e){return e}))},"星奇得使":function(e,t){var n=e.heaven,r=e.earth;e.door,e.god,e.star;return!!["丁"===n&&0===t||6===t,"丁"===n&&"壬"===r].find((function(e){return e}))},"日奇昇殿":function(e,t){var n=e.heaven;e.earth,e.door,e.god,e.star;return!!["乙"===n&&3===t].find((function(e){return e}))},"月奇昇殿":function(e,t){var n=e.heaven;e.earth,e.door,e.god,e.star;return!!["丙"===n&&1===t].find((function(e){return e}))},"星奇昇殿":function(e,t){var n=e.heaven;e.earth,e.door,e.god,e.star;return!!["丁"===n&&5===t].find((function(e){return e}))},"真詐":function(e,t){var n=e.heaven,r=(e.earth,e.door),a=e.god;e.star;return!!["乙"===n&&"休"===r&&6===t&&"陰"===a,"丙"===n&&"生"===r&&6===t&&"陰"===a,"丁"===n&&"開"===r&&6===t&&"陰"===a].find((function(e){return e}))},"重詐":function(e,t){var n=e.heaven,r=(e.earth,e.door),a=e.god;e.star;return!!["乙"===n&&"休"===r&&6===t&&"地"===a,"丙"===n&&"生"===r&&6===t&&"地"===a,"丁"===n&&"開"===r&&6===t&&"地"===a].find((function(e){return e}))},"休詐":function(e,t){var n=e.heaven,r=(e.earth,e.door),a=e.god;e.star;return!!["乙"===n&&"休"===r&&6===t&&"合"===a,"丙"===n&&"生"===r&&6===t&&"合"===a,"丁"===n&&"開"===r&&6===t&&"合"===a].find((function(e){return e}))},"天假":function(e,t){var n=e.heaven,r=(e.earth,e.door),a=e.god;e.star;return!!["乙"===n&&"景"===r&&"天"===a,"丙"===n&&"景"===r&&"天"===a,"丁"===n&&"景"===r&&"天"===a].find((function(e){return e}))},"地假":function(e,t){var n=e.heaven,r=(e.earth,e.door),a=e.god;e.star;return!![["丁","己","癸"].includes(n)&&"杜"===r&&["地","陰","合"].includes(a)].find((function(e){return e}))},"人假":function(e,t){var n=e.heaven,r=(e.earth,e.door),a=e.god;e.star;return!!["壬"===n&&"驚"===r&&"天"===a,["丁","己","癸"].includes(n)&&"杜"===r&&"陰"===a].find((function(e){return e}))},"神假":function(e,t){var n=e.heaven,r=(e.earth,e.door),a=e.god;e.star;return!!["壬"===n&&"驚"===r&&"天"===a,["丁","己","癸"].includes(n)&&"傷"===r&&["地","陰","合"].includes(a)].find((function(e){return e}))},"鬼假":function(e,t){var n=e.heaven,r=(e.earth,e.door),a=e.god;e.star;return!![["丁"].includes(n)&&"死"===r&&["地","陰","合"].includes(a),["己"].includes(n)&&"死"===r&&["陰"].includes(a),["癸"].includes(n)&&"死"===r&&["地"].includes(a)].find((function(e){return e}))},"日旺":function(e,t){var n=e.heaven;e.earth,e.door,e.god,e.star;return!![["乙"].includes(n)&&3===t].find((function(e){return e}))},"交泰格":function(e,t){var n=e.heaven,r=e.earth;e.door,e.god,e.star;return!![["乙"].includes(n)&&["丙","丁"].includes(r)].find((function(e){return e}))},"天遇昌氣格":function(e,t){var n=e.heaven,r=e.earth;e.door,e.god,e.star;return!![["丁"].includes(n)&&["乙"].includes(r)].find((function(e){return e}))},"雀含花格":function(e,t){var n=e.heaven,r=e.earth;e.door,e.god,e.star;return!![["丙"].includes(n)&&["乙"].includes(r)].find((function(e){return e}))},"三奇之靈":function(e,t){var n=e.heaven,r=(e.earth,e.door),a=e.god;e.star;return!![["乙"].includes(n)&&"休"===r&&["地","陰","合"].includes(a),["丙"].includes(n)&&"生"===r&&["地","陰","合"].includes(a),["丁"].includes(n)&&"開"===r&&["地","陰","合"].includes(a)].find((function(e){return e}))},"星隨月轉":function(e,t){var n=e.heaven,r=e.earth;e.door,e.god,e.star;return!![["丁"].includes(n)&&"丙"===r].find((function(e){return e}))},"奇儀相合":function(e,t){var n=e.heaven,r=e.earth;e.door,e.god,e.star;return!![["乙"].includes(n)&&"庚"===r].find((function(e){return e}))}}},"OuL/":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("/Tr7"),a=n("jIYg");function o(e){Object(a.a)(1,arguments);var t=Object(r.a)(e),n=t.getFullYear(),o=t.getMonth(),c=new Date(0);return c.setFullYear(n,o+1,0),c.setHours(0,0,0,0),c.getDate()}},S5Wa:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("otPn"),c=n("XDYV");t.a=function(e){var t=e.onClick,n=e.buttons,u=e.activeIndex,i=Object(r.useState)(u&&n[u]||n&&n[0]),l=i[0],s=i[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{direction:"row-responsive"},n&&n.map((function(e,n){return a.a.createElement(o.a,{key:n,onClick:function(){return t&&t(e,n),s(e)},align:"center",color:"white",background:l.label===e.label?"brand":"black",fill:"horizontal",pad:"small"},a.a.createElement(c.a,{color:"white"}," ",e.label))}))))}},rZgq:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("cl0r"),c=n("eMlM"),u=function(){return a.a.createElement(c.a,{client:"ca-pub-6343289823091285",slot:"5114483936"})},i=n("XDYV"),l=n("463D"),s=n("otPn"),d=n("gaAl"),f=n("T1Te"),h=n("9/EM"),v=n("sWYD"),b=n("zpb6"),O=n("FGIF"),g=n("nJ0v"),j=n("9Koi"),m=function(){var e=Object(b.c)(),t=Object(b.d)(e.start,new Date),n=Object(j.a)().t,o=Object(r.useState)(e.f||""),c=o[0],u=o[1],m=Object(r.useState)(t>new Date?new Date:t),D=m[0],p=(m[1],Object(r.useState)(Object(h.a)(D,3))),y=p[0],E=(p[1],Object(r.useState)([])),w=E[0],S=E[1];return Object(r.useEffect)((function(){S(Object(g.i)(D,y,c))}),[D]),a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,null," Help us to get more ",a.a.createElement(l.a,{href:"https://www.facebook.com/openfengshui/",target:"_blank"},"likes")," for our facebook Page to increase the number of search days. We will increase to 7 days when we hit 1500 likes. Thanks!"),a.a.createElement("h2",null,"Search Hour Chart for next ",3," days"),a.a.createElement(s.a,{direction:"row"},a.a.createElement(d.a,{options:Object.keys(O.a).map((function(e){return{label:e+" "+n(e),value:e}})),placeholder:"Formation",labelKey:"label",valueKey:{key:"value",reduce:!0},value:c,onChange:function(e){var t=e.value;return u(t)}}),a.a.createElement(f.a,{disabled:!c,primary:!0,label:"Search",onClick:function(e){var t=Object(v.a)(D,"yyyy-MM-dd HH:mm");Object(b.a)("?start="+t+"&f="+c)}})),w&&w.length?w.map((function(e){return a.a.createElement(s.a,null,a.a.createElement(l.a,{href:"/?dt="+Object(v.a)(e,"yyyy-MM-dd HH:mm"),label:Object(v.a)(e,"yyyyMMdd hh:mm")}))})):"No Dates Found")},D=n("KQm4"),p=n("/h9T"),y=n("/Tr7"),E=n("jIYg");function w(e,t){Object(E.a)(2,arguments);var n=Object(y.a)(e),r=Object(p.a)(t);if(isNaN(r))return new Date(NaN);if(!r)return n;var a=n.getDate(),o=new Date(n.getTime());o.setMonth(n.getMonth()+r+1,0);var c=o.getDate();return a>=c?o:(n.setFullYear(o.getFullYear(),o.getMonth(),a),n)}var S=n("4+6U"),k=n("OuL/"),F=n("S5Wa"),M=n("tSzD"),I=n("77pL"),C=function(e){e.sector,e.type;var t=e.isoDate,n=Object(r.useState)([]),o=n[0],c=n[1],u=Object(D.a)(Array(2).keys()).map((function(e){return{value:Object(v.a)(w(new Date,e),"yyyy-MM-dd"),label:Object(v.a)(w(new Date,e),"MMM")}})),l=Object(r.useState)(new Date),d=l[0],f=l[1],h=Object(r.useState)([]),O=(h[0],h[1],Object(r.useState)([])),j=(O[0],O[1],Object(r.useState)([])),m=(j[0],j[1],Object(S.a)(t)),p=Object(g.d)(m);return Object(r.useEffect)((function(){var e=Object(g.c)(d),t=Object(g.h)(e.structure,e.pillar),n=Object(k.a)(d),r=Object(D.a)(Array(n).keys()).map((function(e){var n=e+1;d.setDate(n);var r=Object(g.b)(d),a=Object(g.h)(r.structure,r.pillar);return{isDivineLightDate:Object(g.g)(p.p.divineLight,t.chart,a.chart),isDivineBlessDate:Object(g.e)(p.p.divineLight,t.chart,a.chart),isDivineForceDate:Object(g.f)(p.p.divineLight,t.chart,a.chart)}})).filter((function(e){return!(!e.isDivineLightDate&&!e.isDivineBlessDate&&!e.isDivineForceDate)}));c(r)}),[d]),a.a.createElement(a.a.Fragment,null,a.a.createElement("br",null),a.a.createElement(i.a,null,"Date Of Birth"),a.a.createElement(M.a,{label:"Find 3V",onClick:function(e){return Object(b.a)("?dt="+Object(I.a)(e)+"&mode=1")},dateObject:m}),a.a.createElement("br",null),a.a.createElement(F.a,{onClick:function(e){return f(Object(S.a)(e.value))},buttons:u}),o.length?o.map((function(e,t){return a.a.createElement(s.a,null,e.isDivineLightDate&&a.a.createElement(s.a,null," ",t+1," Divine Light"),e.isDivineBlessingDate&&a.a.createElement(s.a,null," ",t+1," Divine Blessing"),e.isDivineForceDate&&a.a.createElement(s.a,null," ",t+1," Divine Force"))})):"No Dates Found")};t.default=function(){var e=Object(b.c)(),t=[{label:"Formation",component:a.a.createElement(m,null)},{label:"3 Victories",component:a.a.createElement(C,{isoDate:e.dt||Object(I.a)(new Date)})}],n=Object(r.useState)(t[parseInt(e.mode)]?e.mode:0),c=n[0];n[1];return a.a.createElement(o.a,null,a.a.createElement(F.a,{activeIndex:c,onClick:function(e,t){Object(b.a)("?mode="+t)},buttons:t}),t[c].component,a.a.createElement(u,{client:"ca-pub-6343289823091285",slot:"5114483936"}))}},tSzD:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("otPn"),c=n("P3Am"),u=n("T1Te"),i=n("sWYD"),l=n("4+6U"),s=n("/h9T"),d=n("/Tr7"),f=n("jIYg");var h=n("OuL/");t.a=function(e){var t=e.label,n=void 0===t?"Get Chart":t,v=e.dateObject,b=e.selectDate,O=e.onClick,g=Object(r.useState)(v||new Date),j=g[0],m=g[1],D=Object(r.useState)(Object(i.a)(j,"yyyy")),p=D[0],y=D[1],E=Object(r.useState)(Object(i.a)(j,"M")),w=E[0],S=E[1],k=Object(r.useState)(Object(i.a)(j,"d")),F=k[0],M=k[1],I=Object(r.useState)(j.toISOString())[0],C=Object(r.useState)(Object(i.a)(j,"H")),N=C[0],x=C[1],T=Object(r.useState)(Object(i.a)(j,"m")),Y=T[0],L=T[1];return Object(r.useEffect)((function(){var e=Object(l.a)(I);e=function(e,t){Object(f.a)(2,arguments);var n=Object(d.a)(e),r=Object(s.a)(t);return n.setMinutes(r),n}(e=function(e,t){Object(f.a)(2,arguments);var n=Object(d.a)(e),r=Object(s.a)(t);return n.setHours(r),n}(e=function(e,t){Object(f.a)(2,arguments);var n=Object(d.a)(e),r=Object(s.a)(t);return n.setDate(r),n}(e=function(e,t){Object(f.a)(2,arguments);var n=Object(d.a)(e),r=Object(s.a)(t),a=n.getFullYear(),o=n.getDate(),c=new Date(0);c.setFullYear(a,r,15),c.setHours(0,0,0,0);var u=Object(h.a)(c);return n.setMonth(r,Math.min(o,u)),n}(e=function(e,t){Object(f.a)(2,arguments);var n=Object(d.a)(e),r=Object(s.a)(t);return isNaN(n)?new Date(NaN):(n.setFullYear(r),n)}(e,p),w-1),F),N),Y),isNaN(e.getTime())?alert("invalid date"):m(e)}),[N,Y,I,p,w,F]),a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{direction:"row",pad:{bottom:"small"}},a.a.createElement(c.a,{focusIndicator:!0,value:p,onChange:function(e){return y(e.target.value)}}),a.a.createElement(c.a,{focusIndicator:!0,value:w,onChange:function(e){return S(e.target.value)}}),a.a.createElement(c.a,{focusIndicator:!0,value:F,onChange:function(e){return M(e.target.value)}}),a.a.createElement(c.a,{focusIndicator:!0,value:N,onChange:function(e){return x(e.target.value)}}),a.a.createElement(c.a,{focusIndicator:!0,value:Y,onChange:function(e){return L(e.target.value)}})),a.a.createElement(o.a,{align:"end"},a.a.createElement(u.a,{onClick:function(){O&&O(j),b&&b(j)},label:n})))}}}]);
//# sourceMappingURL=component---src-pages-qmdj-finder-js-9f8dfb0e84e83b0b3755.js.map