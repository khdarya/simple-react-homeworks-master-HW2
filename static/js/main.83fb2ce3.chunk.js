(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports={someClass:"Affairs_someClass__ncmZ-"}},,function(e,a,t){e.exports={appWrapper:"Message_appWrapper__1gSRj",ava:"Message_ava__19ySO",textfield:"Message_textfield__yDzle",item1:"Message_item1__1fMwx",item3:"Message_item3__32ms0"}},,function(e,a,t){e.exports={mainNav:"Header_mainNav__32Hr0",list:"Header_list__Yqevp",navlink:"Header_navlink__3RqKk",active:"Header_active__2QtQb"}},,,function(e,a,t){e.exports={someClass:"Greeting_someClass__3UBY_",error:"Greeting_error__vt5Hb"}},,,,,,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__1xOnh",errorInput:"SuperInputText_errorInput__5vI5H",error:"SuperInputText_error__3Wj65"}},function(e,a,t){},,,,,function(e,a,t){e.exports={default:"SuperButton_default__2YhuA",red:"SuperButton_red__3WK4i"}},function(e,a,t){e.exports={blue:"HW4_blue__1hIK9",column:"HW4_column__3OLZz",text:"HW4_text__3_Ewe"}},,,,function(e,a,t){e.exports={App:"App_App__3vV6p"}},function(e,a,t){e.exports={superSpan:"SuperEditableSpan_superSpan__2kQY7"}},function(e,a,t){e.exports={radio:"SuperRadio_radio__fkZ3n"}},,function(e,a,t){e.exports={loader:"Loading_loader__17hiW",spin:"Loading_spin__OfkoW"}},,function(e,a,t){e.exports=t(48)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),c=t.n(l),o=(t(42),t(31)),u=t.n(o),i=t(7),s=t(10),m=t.n(s);var d=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:m.a.mainNav},r.a.createElement("div",{className:m.a.list},r.a.createElement("div",null,r.a.createElement(i.b,{activeClassName:m.a.active,to:"/pre-junior"},"PreJunior")),r.a.createElement("div",null,r.a.createElement(i.b,{activeClassName:m.a.active,to:"/junior"},"Junior")),r.a.createElement("div",null,r.a.createElement(i.b,{activeClassName:m.a.active,to:"/junior-plus"},"JuniorPlus"))),"hover"))},E=t(2),p=t(8),v=t.n(p);var f=function(e){return r.a.createElement("div",{className:v.a.appWrapper},r.a.createElement("img",{className:v.a.ava,src:e.avatar}),r.a.createElement("div",{className:v.a.textfield},r.a.createElement("div",{className:v.a.item1},e.name),r.a.createElement("div",{className:v.a.item2},e.message),r.a.createElement("div",{className:v.a.item3},e.time," ")))},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",b="Some Name",g="some text",_="22:00";var C=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(f,{avatar:h,name:b,message:g,time:_}),r.a.createElement("hr",null),r.a.createElement("hr",null))},O=t(1),j=t(3),k=t(26),N=t.n(k),S=function(e){var a=e.red,t=e.className,n=Object(j.a)(e,["red","className"]),l="".concat(a?N.a.red:N.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},w=t(6),y=t.n(w);var x=function(e){return r.a.createElement("div",null,e.affair.name,r.a.createElement(S,{red:!0,onClick:function(){e.deleteAffairCallback(e.affair._id)},className:y.a.someClass},"X"))};var I=function(e){var a=e.data.map((function(a){return r.a.createElement(x,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement(S,{red:!0,onClick:function(){e.setFilter("all")},className:y.a.someClass},"All"),r.a.createElement(S,{red:!0,onClick:function(){e.setFilter("high")},className:y.a.someClass},"High"),r.a.createElement(S,{red:!0,onClick:function(){e.setFilter("middle")},className:y.a.someClass},"Middle"),r.a.createElement(S,{red:!0,onClick:function(){e.setFilter("low")},className:y.a.someClass},"Low"))},T=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var A=function(){var e=Object(n.useState)(T),a=Object(O.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(O.a)(c,2),u=o[0],i=o[1],s=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):e}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(I,{data:s,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},H=t(16),L=t(13),W=t.n(L),F=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=W.a.greetingInput;return l&&(o+="".concat(W.a.error)),r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:o}),r.a.createElement("span",null,l),r.a.createElement(S,{red:!0,onClick:n,className:W.a.someClass},"add"),r.a.createElement("span",null,c))},P=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(O.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(!1),s=Object(O.a)(i,2),m=s[0],d=s[1],E=a.length;return r.a.createElement(F,{name:o,setNameCallback:function(e){u(e.currentTarget.value)},addUser:function(){""!==o.trim()&&(t(o),alert("Hello ".concat(o," !")),u(""),d(!1)),alert("Insert name, please"),d(!0),u("")},error:m,totalUsers:E})},D=t(50);var U=function(){var e=Object(n.useState)([]),a=Object(O.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(P,{users:t,addUserCallback:function(e){var a={name:e,_id:Object(D.a)()};l([].concat(Object(H.a)(t),[a]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},J=t(20),M=t.n(J),B=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.setError,u=(e.className,e.spanClassName),i=Object(j.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","setError","className","spanClassName"]),s="".concat(M.a.error," ").concat(u||""),m=c?M.a.errorInput:M.a.superInput;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value),o("")},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m},i)),c&&r.a.createElement("span",{className:s},c))},R=t(27),K=t.n(R),G=t(21),Y=t.n(G),Z=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(j.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(Y.a.checkbox," ").concat(n||"");return r.a.createElement("label",{className:Y.a.label},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),a&&a(e)},className:o},c)),l&&r.a.createElement("span",{className:Y.a.spanClassName},l))};var q=function(){var e=Object(n.useState)(""),a=Object(O.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),o=Object(O.a)(c,2),u=o[0],i=o[1],s=function(){i(t?"":"error"),u?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):(alert(t),l(""))},m=Object(n.useState)(!1),d=Object(O.a)(m,2),E=d[0],p=d[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:K.a.column},r.a.createElement(B,{value:t,onChangeText:l,onEnter:s,error:u,setError:i}),r.a.createElement(S,{red:!0,onClick:s},"delete "),r.a.createElement(Z,{checked:E,onChangeChecked:p,className:K.a.text},"some text "),r.a.createElement(Z,{checked:E,onChange:function(e){return p(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},z=t(32),Q=t.n(z),X=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(j.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(O.a)(o,2),i=u[0],s=u[1],m=l||{},d=m.children,E=m.onDoubleClick,p=m.className,v=Object(j.a)(m,["children","onDoubleClick","className"]),f=Object(n.useState)(""),h=Object(O.a)(f,2),b=(h[0],h[1]),g="".concat(Q.a.superSpan," ").concat(p);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(B,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),a&&a(e)},onEnter:function(){s(!1),t&&t()},setError:b},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),E&&E(e)},className:g},v),d||c.value))};function V(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function $(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}V("test",{x:"A",y:1});$("test",{x:"",y:0});var ee=function(){var e=Object(n.useState)(""),a=Object(O.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(X,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(S,{red:!0,onClick:function(){V("editable-span-value",t)}},"save"),r.a.createElement(S,{red:!0,onClick:function(){l($("editable-span-value",t))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ae=function(){return r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(A,null),r.a.createElement(U,null),r.a.createElement(q,null),r.a.createElement(ee,null))};var te=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},ne=function(e){var a=e.options,t=e.onChange,n=e.onChangeOption,l=Object(j.a)(e,["options","onChange","onChangeOption"]),c=a?a.map((function(e){return r.a.createElement("option",{key:e}," ",e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){var a=e.currentTarget.value;t&&t(e),n&&n(a)}},l),c)},re=(t(33),function(e){e.type,e.name;var a=e.options,t=(e.value,e.onChange,e.onChangeOption,Object(j.a)(e,["type","name","options","value","onChange","onChangeOption"]),a?a.map((function(e,a){})):[]);return r.a.createElement(r.a.Fragment,null,t)}),le=["x","y","z"];var ce=function(){var e=Object(n.useState)(le[1]),a=Object(O.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(ne,{options:le,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(re,{name:"radio",options:le,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},oe=function(e,a){switch(a.type){case"SORT":if("up"===a.payload)return e.sort((function(e,a){var t=e.name.toLowerCase(),n=a.name.toLowerCase();return t<n?-1:t>n?1:0})),e;if("down"===a.payload)return e.sort((function(e,a){var t=e.name.toLowerCase(),n=a.name.toLowerCase();return n<t?-1:n>t?1:0})),e;case"CHECK":return e.filter((function(e){return e.age>=a.payload}));default:return e}},ue=function(e){return{type:"SORT",payload:e}},ie=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var se=function(){var e=Object(n.useState)(ie),a=Object(O.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id},e.name)})),o=Object(n.useCallback)((function(){l(oe(ie,ue("up"))),l(Object(H.a)(t))}),[ie]),u=Object(n.useCallback)((function(){l(oe(ie,ue("down"))),l(Object(H.a)(t))}),[ie]),i=Object(n.useCallback)((function(){l(oe(ie,{type:"CHECK",payload:18}))}),[ie]);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",r.a.createElement("p",null),c,r.a.createElement("div",null,r.a.createElement(S,{red:!0,onClick:o},"Sort Up")),r.a.createElement("div",null,r.a.createElement(S,{red:!0,onClick:u},"Sort Down")),r.a.createElement("div",null,r.a.createElement(S,{red:!0,onClick:i},"18+")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var me=function(){var e=Object(n.useState)(0),a=Object(O.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(new Date),o=Object(O.a)(c,2),u=o[0],i=o[1],s=Object(n.useState)(!1),m=Object(O.a)(s,2),d=m[0],E=m[1],p=function(){clearInterval(t)},v="Time   ".concat(u&&u.toLocaleTimeString()),f="Date   ".concat(u&&u.toLocaleDateString());return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){E(!0)},onMouseLeave:function(){E(!1)}},v),d&&r.a.createElement("div",null,f),r.a.createElement(S,{red:!0,className:y.a.someClass,onClick:function(){p();var e=window.setInterval((function(){i(new Date)}),1e3);l(e)}},"start"),r.a.createElement(S,{red:!0,className:y.a.someClass,onClick:p},"stop"))};var de=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(me,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},Ee=t(36),pe={loading:!1},ve=function(e){return{type:"LOADING",loading:e}},fe=t(15),he=t(35),be=t.n(he);var ge=function(){var e=Object(fe.c)((function(e){return e.loading.loading})),a=Object(fe.b)();return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",e?r.a.createElement("div",{className:be.a.loader}):r.a.createElement("div",null,r.a.createElement(S,{red:!0,onClick:function(){a(ve(!0)),setTimeout((function(){a(ve(!1))}),2e3),console.log("loading...")}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},_e=function(){return r.a.createElement("div",null,r.a.createElement(ce,null),r.a.createElement(se,null),r.a.createElement(de,null),r.a.createElement(ge,null))},Ce=function(){return r.a.createElement("div",null,"JUNIORPLUS")},Oe="/pre-junior",je="/junior",ke="/junior-plus";var Ne=function(){return r.a.createElement("div",null,r.a.createElement(E.d,null,'\u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u043c\u044b \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u043c \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 "/" \u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u043c \u0441\u0440\u0430\u0437\u0443 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 PRE_JUNIOR exact \u043d\u0443\u0436\u0435\u043d \u0447\u0442\u043e\u0431 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0435 \u0441\u043e\u0432\u043f\u043e\u0434\u0435\u043d\u0438\u0435 (\u0447\u0442\u043e \u043f\u043e\u0441\u043b\u0435 "/" \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0431\u0443\u0434\u0435\u0442)',r.a.createElement(E.b,{path:"/",exact:!0,render:function(){return r.a.createElement(E.a,{to:Oe})}}),r.a.createElement(E.b,{path:Oe,render:function(){return r.a.createElement(ae,null)}}),r.a.createElement(E.b,{path:je,render:function(){return r.a.createElement(_e,null)}}),r.a.createElement(E.b,{path:ke,render:function(){return r.a.createElement(Ce,null)}}),"// add routes \u0443 \u044d\u0442\u043e\u0433\u043e \u0440\u043e\u0443\u0442\u0430 \u043d\u0435\u0442 \u043f\u0443\u0442\u0438, \u043e\u043d \u043e\u0442\u0440\u0438\u0441\u0443\u0435\u0442\u0441\u044f \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",r.a.createElement(E.b,{render:function(){return r.a.createElement(te,null)}})))};var Se=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement(i.a,null,r.a.createElement(d,null),r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Ne,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var we=t(14),ye=Object(we.b)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOADING":return Object(Ee.a)({},e,{loading:a.loading});default:return e}}}),xe=Object(we.c)(ye),Ie=xe;window.store=xe,c.a.render(r.a.createElement(fe.a,{store:Ie},r.a.createElement(r.a.StrictMode,null,r.a.createElement(Se,null)),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[37,1,2]]]);
//# sourceMappingURL=main.83fb2ce3.chunk.js.map