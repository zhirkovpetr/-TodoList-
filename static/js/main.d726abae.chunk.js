(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{110:function(t,e,n){"use strict";n.r(e);var a,c,i=n(0),o=n.n(i),s=n(10),r=n.n(s),l=(n(83),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,161)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),i(t),o(t)}))}),d=(n(84),n(150)),u=n(151),j=n(145),O=n(153),b=n(148),f=n(154),T=n(155),h=n(152),g=n(18),k=n(8),v=n(45),p=n(64),S=n.n(p).a.create(Object(k.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"abbdd15d-25c5-489b-bf41-880fe8431dc9"}})),m=function(){return S.get("todo-lists")},x=function(t){return S.post("todo-lists",{title:t})},C=function(t){return S.delete("todo-lists/".concat(t))},I=function(t,e){return S.put("todo-lists/".concat(t),{title:e})},y=function(t){return S.get("todo-lists/".concat(t,"/tasks"))},E=function(t,e){return S.delete("todo-lists/".concat(t,"/tasks/").concat(e))},A=function(t,e){return S.post("todo-lists/".concat(t,"/tasks"),{title:e})},D=function(t,e,n){return S.put("todo-lists/".concat(t,"/tasks/").concat(e),n)};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(a||(a={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(c||(c={}));var L={status:"loading",error:null},w=function(t){return{type:"APP/SET-STATUS",status:t}},R=function(t){return{type:"APP/SET-ERROR",error:t}},F=function(t,e){t(R(e)),t(w("failed"))},P=function(t,e){e.messages.length?t(R(e.messages[0])):t(R("ERROR")),t(w("failed"))},N=[],K=n(26),H={},U=function(t,e,n){return function(a,c){var i=c().tasks[n].find((function(e){return e.id===t}));if(i){var o=Object(k.a)({deadline:i.deadline,description:i.description,priority:i.priority,startDate:i.startDate,title:i.title,status:i.status},e);a(w("loading")),D(n,t,o).then((function(c){0===c.data.resultCode?(a(function(t,e,n){return{type:"UPDATE-TASK",model:e,todolistId:n,taskId:t}}(t,e,n)),a(w("succeeded"))):P(a,c.data)})).catch((function(t){F(a,t.message)}))}else console.warn("task not found in the state")}},M=n(149),G=n(111),V=n(32),B=n(156),Y=n(146),J=n(5),q=o.a.memo((function(t){console.log("AddItemForm called");var e=Object(i.useState)(""),n=Object(V.a)(e,2),a=n[0],c=n[1],o=Object(i.useState)(null),s=Object(V.a)(o,2),r=s[0],l=s[1],d=function(){""!==a.trim()?(t.addItem(a),c("")):l("Title is required")};return Object(J.jsxs)("div",{children:[Object(J.jsx)(B.a,{variant:"outlined",error:!!r,value:a,onChange:function(t){c(t.currentTarget.value)},onKeyPress:function(t){null!==r&&l(null),13===t.charCode&&d()},label:"Title",helperText:r,disabled:"loading"===t.entityStatus}),Object(J.jsx)(j.a,{color:"primary",onClick:d,disabled:"loading"===t.entityStatus,children:Object(J.jsx)(Y.a,{})})]})})),z=o.a.memo((function(t){console.log("EditableSpan called");var e=Object(i.useState)(!1),n=Object(V.a)(e,2),a=n[0],c=n[1],o=Object(i.useState)(t.value),s=Object(V.a)(o,2),r=s[0],l=s[1];return a?Object(J.jsx)(B.a,{value:r,onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),t.onChange(r)}}):Object(J.jsx)("span",{onDoubleClick:function(){c(!0),l(t.value)},children:t.value})})),Q=n(147),W=n(158),X=o.a.memo((function(t){var e=Object(i.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),n=Object(i.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?a.Completed:a.New,t.todolistId)}),[t.task.id,t.todolistId]),c=Object(i.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(J.jsxs)("div",{className:t.task.status===a.Completed?"is-done":"",children:[Object(J.jsx)(W.a,{checked:t.task.status===a.Completed,color:"primary",onChange:n}),Object(J.jsx)(z,{value:t.task.title,onChange:c}),Object(J.jsx)(j.a,{onClick:e,children:Object(J.jsx)(Q.a,{})})]},t.task.id)})),Z=o.a.memo((function(t){console.log("Todolist called");var e=Object(g.b)();Object(i.useEffect)((function(){var n,a=(n=t.id,function(t){t(w("loading")),y(n).then((function(e){var a=function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(e.data.items,n);t(a),t(w("succeeded"))}))});e(a)}),[]);var n=Object(i.useCallback)((function(e){t.addTask(e,t.id)}),[t.addTask,t.id]),c=Object(i.useCallback)((function(e){t.changeTodolistTitle(t.id,e)}),[t.id,t.changeTodolistTitle]),o=Object(i.useCallback)((function(){return t.changeFilter("all",t.id)}),[t.id,t.changeFilter]),s=Object(i.useCallback)((function(){return t.changeFilter("active",t.id)}),[t.id,t.changeFilter]),r=Object(i.useCallback)((function(){return t.changeFilter("completed",t.id)}),[t.id,t.changeFilter]),l=t.tasks;return"active"===t.filter&&(l=t.tasks.filter((function(t){return t.status===a.New}))),"completed"===t.filter&&(l=t.tasks.filter((function(t){return t.status===a.Completed}))),Object(J.jsxs)("div",{children:[Object(J.jsxs)("h3",{children:[Object(J.jsx)(z,{value:t.title,onChange:c}),Object(J.jsx)(j.a,{onClick:function(){t.removeTodolist(t.id)},disabled:"loading"===t.entityStatus,children:Object(J.jsx)(Q.a,{})})]}),Object(J.jsx)(q,{addItem:n,entityStatus:t.entityStatus}),Object(J.jsx)("div",{children:l.map((function(e){return Object(J.jsx)(X,{task:e,todolistId:t.id,removeTask:t.removeTask,changeTaskTitle:t.changeTaskTitle,changeTaskStatus:t.changeTaskStatus},e.id)}))}),Object(J.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(J.jsx)(b.a,{variant:"all"===t.filter?"outlined":"text",onClick:o,color:"default",children:"All"}),Object(J.jsx)(b.a,{variant:"active"===t.filter?"outlined":"text",onClick:s,color:"primary",children:"Active"}),Object(J.jsx)(b.a,{variant:"completed"===t.filter?"outlined":"text",onClick:r,color:"secondary",children:"Completed"})]})]})})),$=function(){var t=Object(g.c)((function(t){return t.todolists})),e=Object(g.c)((function(t){return t.tasks})),n=Object(g.b)();Object(i.useEffect)((function(){var t=function(t){t(w("loading")),m().then((function(e){t({type:"SET-TODOLISTS",todolists:e.data}),t(w("succeeded"))}))};n(t)}),[]);var a=Object(i.useCallback)((function(t,e){var a=function(t,e){return function(n){n(w("loading")),E(e,t).then((function(a){0===a.data.resultCode?(n(function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(t,e)),n(w("succeeded"))):P(n,a.data)})).catch((function(t){F(n,t.message)}))}}(t,e);n(a)}),[]),c=Object(i.useCallback)((function(t,e){var a=function(t,e){return function(n){n(w("loading")),A(e,t).then((function(t){if(0===t.data.resultCode){var e=t.data.data.item;n(function(t){return{type:"ADD-TASK",task:t}}(e)),n(w("succeeded"))}else P(n,t.data)})).catch((function(t){F(n,t.message)}))}}(t,e);n(a)}),[]),o=Object(i.useCallback)((function(t,e,a){var c=U(t,{status:e},a);n(c)}),[]),s=Object(i.useCallback)((function(t,e,a){var c=U(t,{title:e},a);n(c)}),[]),r=Object(i.useCallback)((function(t,e){var a={type:"CHANGE-TODOLIST-FILTER",id:e,filter:t};n(a)}),[]),l=Object(i.useCallback)((function(t){var e,a=(e=t,function(t){t(w("loading")),t({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:e,emtityStatus:"loading"}),C(e).then((function(n){0===n.data.resultCode?(t(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e)),t(w("succeeded"))):P(t,n.data)})).catch((function(e){F(t,e.message)}))});n(a)}),[]),d=Object(i.useCallback)((function(t,e){var a=function(t,e){return function(n){n(w("loading")),I(t,e).then((function(a){0===a.data.resultCode?(n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e)),n(w("succeeded"))):P(n,a.data)})).catch((function(t){F(n,t.message)}))}}(t,e);n(a)}),[]),u=Object(i.useCallback)((function(t){var e=function(t){return function(e){e(w("loading")),x(t).then((function(t){0===t.data.resultCode?(e({type:"ADD-TODOLIST",todolist:t.data.data.item}),e(w("succeeded"))):P(e,t.data)})).catch((function(t){F(e,t.message)}))}}(t);n(e)}),[n]);return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(M.a,{container:!0,style:{padding:"20px"},children:Object(J.jsx)(q,{addItem:u})}),Object(J.jsx)(M.a,{container:!0,spacing:3,children:t.map((function(t){var n=e[t.id];return Object(J.jsx)(M.a,{item:!0,children:Object(J.jsx)(G.a,{style:{padding:"10px"},children:Object(J.jsx)(Z,{id:t.id,title:t.title,tasks:n,removeTask:a,changeFilter:r,addTask:c,changeTaskStatus:o,filter:t.filter,removeTodolist:l,changeTaskTitle:s,changeTodolistTitle:d,entityStatus:t.entityStatus})})},t.id)}))})]})},_=n(160),tt=n(157);function et(t){return Object(J.jsx)(tt.a,Object(k.a)({elevation:6,variant:"filled"},t))}function nt(){var t=Object(g.c)((function(t){return t.app.error})),e=Object(g.b)(),n=function(t,n){"clickaway"!==n&&e(R(null))};return Object(J.jsx)(_.a,{open:null!==t,autoHideDuration:6e3,onClose:n,children:Object(J.jsx)(et,{onClose:n,severity:"error",children:t})})}var at=function(){var t=Object(g.c)((function(t){return t.app.status}));return Object(J.jsxs)("div",{className:"App",children:[Object(J.jsx)(d.a,{position:"static",children:Object(J.jsxs)(u.a,{children:[Object(J.jsx)(j.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(J.jsx)(h.a,{})}),Object(J.jsx)(O.a,{variant:"h6",children:"News"}),Object(J.jsx)(b.a,{color:"inherit",children:"Login"})]})}),"loading"===t&&Object(J.jsx)(f.a,{color:"secondary"}),Object(J.jsx)(T.a,{fixed:!0,children:Object(J.jsx)($,{})}),Object(J.jsx)(nt,{})]})},ct=n(46),it=n(69),ot=Object(ct.b)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(k.a)(Object(k.a)({},t),{},Object(K.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!==e.taskId}))));case"ADD-TASK":return Object(k.a)(Object(k.a)({},t),{},Object(K.a)({},e.task.todoListId,[e.task].concat(Object(v.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(k.a)(Object(k.a)({},t),{},Object(K.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(k.a)(Object(k.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(k.a)(Object(k.a)({},t),{},Object(K.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var n=Object(k.a)({},t);return delete n[e.id],n;case"SET-TODOLISTS":var a=Object(k.a)({},t);return e.todolists.forEach((function(t){a[t.id]=[]})),a;case"SET-TASKS":return Object(k.a)(Object(k.a)({},t),{},Object(K.a)({},e.todolistId,e.tasks));default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":return[Object(k.a)(Object(k.a)({},e.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(v.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(k.a)(Object(k.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(k.a)(Object(k.a)({},t),{},{filter:e.filter}):t}));case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(k.a)(Object(k.a)({},t),{},{filter:"all",entityStatus:"idle"})}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(k.a)(Object(k.a)({},t),{},{entityStatus:e.emtityStatus}):t}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(k.a)(Object(k.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(k.a)(Object(k.a)({},t),{},{error:e.error});default:return t}}}),st=Object(ct.c)(ot,Object(ct.a)(it.a));window.store=st,r.a.render(Object(J.jsx)(o.a.StrictMode,{children:Object(J.jsx)(g.a,{store:st,children:Object(J.jsx)(at,{})})}),document.getElementById("root")),l()},83:function(t,e,n){},84:function(t,e,n){}},[[110,1,2]]]);
//# sourceMappingURL=main.d726abae.chunk.js.map