(this["webpackJsonptesting-with-cypress"]=this["webpackJsonptesting-with-cypress"]||[]).push([[0],{63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(26),c=n.n(a),s=n(11),r=n(27),i=n(28),l=n(8),d=n(31),h=n(30),u=n(10),j=n(2),b=n(1),m=function(e){return Object(b.jsx)("form",{onSubmit:e.handleTodoSubmit,children:Object(b.jsx)("input",{"aria-label":"New Todo",type:"text",autoFocus:!0,value:e.currentTodo,onChange:e.handleNewTodoChange,className:"new-todo",placeholder:"What needs to be done?"})})},p=function(e){return Object(b.jsx)("li",{className:e.isComplete?"completed":null,children:Object(b.jsxs)("div",{className:"view",children:[Object(b.jsx)("input",{id:"".concat(e.id,"-input"),className:"toggle",type:"checkbox",checked:e.isComplete,onChange:function(){return e.handleToggle(e.id)}}),Object(b.jsx)("label",{htmlFor:"".concat(e.id,"-input"),children:e.name}),Object(b.jsx)("button",{"aria-label":"Destroy ".concat(e.name),className:"destroy",onClick:function(){return e.handleDelete(e.id)}})]})})},O=function(e){return Object(b.jsx)("ul",{className:"todo-list","aria-label":"Todo List",children:e.todos.map((function(t){return Object(b.jsx)(p,Object(s.a)(Object(s.a)({},t),{},{handleDelete:e.handleDelete,handleToggle:e.handleToggle}),t.id)}))})},f=function(e){return Object(b.jsxs)("footer",{className:"footer",children:[Object(b.jsxs)("span",{className:"todo-count",children:[Object(b.jsx)("strong",{children:e.remaining}),1===e.remaining?" todo":" todos"," left"]}),Object(b.jsxs)("ul",{className:"filters",children:[Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"/",children:"All"})})," ",Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"/active",children:"Active"})})," ",Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"/completed",children:"Completed"})})]})]})},g=n(13),x=n.n(g),T=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={currentTodo:"",todos:[]},o.handleNewTodoChange=o.handleNewTodoChange.bind(Object(l.a)(o)),o.handleTodoSubmit=o.handleTodoSubmit.bind(Object(l.a)(o)),o.handleDelete=o.handleDelete.bind(Object(l.a)(o)),o.handleToggle=o.handleToggle.bind(Object(l.a)(o)),o}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;x.a.get("http://example.com/api/todos").then((function(t){var n=t.data;return e.setState({todos:n})})).catch((function(){return e.setState({error:!0})}))}},{key:"handleNewTodoChange",value:function(e){this.setState({currentTodo:e.target.value})}},{key:"handleDelete",value:function(e){var t=this;(function(e){return x.a.delete("http://example.com/api/todos/".concat(e))})(e).then((function(){return t.setState({todos:t.state.todos.filter((function(t){return t.id!==e}))})}))}},{key:"handleToggle",value:function(e){var t,n=this,o=this.state.todos.find((function(t){return t.id===e})),a=Object(s.a)(Object(s.a)({},o),{},{isComplete:!o.isComplete});(t=a,x.a.put("http://example.com/api/todos/".concat(t.id),t)).then((function(e){var t=e.data,o=n.state.todos.map((function(e){return e.id===t.id?t:e}));n.setState({todos:o})}))}},{key:"handleTodoSubmit",value:function(e){var t=this;e.preventDefault();var n,o={name:this.state.currentTodo,isComplete:!1};(n=o,x.a.post("http://example.com/api/todos",n)).then((function(e){var n=e.data;return t.setState({todos:t.state.todos.concat(n),currentTodo:""})})).catch((function(){return t.setState({error:!0})}))}},{key:"render",value:function(){var e=this,t=this.state.todos.filter((function(e){return!e.isComplete})).length;return Object(b.jsx)(u.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("h1",{children:"todos"}),this.state.error?Object(b.jsx)("span",{role:"alert",className:"error",children:"Oh no!"}):null,Object(b.jsx)(m,{currentTodo:this.state.currentTodo,handleTodoSubmit:this.handleTodoSubmit,handleNewTodoChange:this.handleNewTodoChange})]}),Object(b.jsx)("section",{className:"main",children:Object(b.jsx)(j.a,{path:"/:filter?",render:function(t){var n,o,a=t.match;return Object(b.jsx)(O,{todos:(n=a.params.filter,o=e.state.todos,n?o.filter((function(e){return e.isComplete===("completed"===n)})):o),handleDelete:e.handleDelete,handleToggle:e.handleToggle})}})}),Object(b.jsx)(f,{remaining:t})]})})}}]),n}(o.Component);n(63);c.a.render(Object(b.jsx)(T,{}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.591f64f6.chunk.js.map