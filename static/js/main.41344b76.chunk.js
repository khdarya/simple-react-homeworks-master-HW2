(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,t,a){e.exports={superInput:"SuperInputText_superInput__1xOnh",errorInput:"SuperInputText_errorInput__5vI5H",error:"SuperInputText_error__3Wj65"}},function(e,t,a){},function(e,t,a){e.exports={someClass:"Greeting_someClass__3UBY_",error:"Greeting_error__vt5Hb"}},function(e,t,a){e.exports={blue:"HW4_blue__1hIK9",column:"HW4_column__3OLZz",text:"HW4_text__3_Ewe"}},function(e,t,a){e.exports={default:"SuperButton_default__2YhuA",red:"SuperButton_red__3WK4i"}},,,function(e,t,a){e.exports={App:"App_App__3vV6p"}},,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=(a(19),a(12)),u=a.n(o);var i=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement("hr",null),r.a.createElement("hr",null))},s=a(1);var m=function(e){return r.a.createElement("div",null,e.affair.name,r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var d=function(e){var t=e.data.map((function(t){return r.a.createElement(m,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},h=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var p=function(){var e=Object(n.useState)(h),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(s.a)(c,2),u=o[0],i=o[1],m=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):e}(a,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(d,{data:m,setFilter:i,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},f=a(13),E=a(7),b=a.n(E),_=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=b.a.greetingInput;return l&&(o+="".concat(b.a.error)),r.a.createElement("div",null,r.a.createElement("input",{value:t,onChange:a,className:o}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",null,c))},g=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(s.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(!1),m=Object(s.a)(i,2),d=m[0],h=m[1],p=t.length;return r.a.createElement(_,{name:o,setNameCallback:function(e){u(e.currentTarget.value)},addUser:function(){""!==o.trim()&&(a(o),alert("Hello ".concat(o," !")),u(""),h(!1)),alert("Insert name, please"),h(!0),u("")},error:d,totalUsers:p})},v=a(22);var C=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(g,{users:a,addUserCallback:function(e){var t={name:e,_id:Object(v.a)()};l([].concat(Object(f.a)(a),[t]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},k=a(2),O=a(5),j=a.n(O),w=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.setError,u=(e.className,e.spanClassName),i=Object(k.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","setError","className","spanClassName"]),s="".concat(j.a.error," ").concat(u||""),m=c?j.a.errorInput:j.a.superInput;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value),o("")},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m},i)),c&&r.a.createElement("span",{className:s},c))},N=a(8),y=a.n(N),x=a(9),I=a.n(x),S=function(e){var t=e.red,a=e.className,n=Object(k.a)(e,["red","className"]),l="".concat(t?I.a.red:I.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:l},n))},A=a(6),T=a.n(A),H=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(k.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(T.a.checkbox," ").concat(n||"");return r.a.createElement("label",{className:T.a.label},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e.currentTarget.checked),t&&t(e)},className:o},c)),l&&r.a.createElement("span",{className:T.a.spanClassName},l))};var U=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(s.a)(c,2),u=o[0],i=o[1],m=function(){i(a?"":"error"),u?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):(alert(a),l(""))},d=Object(n.useState)(!1),h=Object(s.a)(d,2),p=h[0],f=h[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:y.a.column},r.a.createElement(w,{value:a,onChangeText:l,onEnter:m,error:u,setError:i}),r.a.createElement(S,{red:!0,onClick:m},"delete "),r.a.createElement(H,{checked:p,onChangeChecked:f,className:y.a.text},"some text "),r.a.createElement(H,{checked:p,onChange:function(e){return f(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var W=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(i,null),r.a.createElement(p,null),r.a.createElement(C,null),r.a.createElement(U,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.41344b76.chunk.js.map