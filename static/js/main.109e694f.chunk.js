(this["webpackJsonpweb-project-task-manager"]=this["webpackJsonpweb-project-task-manager"]||[]).push([[0],{13:function(t,e,s){},14:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var a=s(1),n=s.n(a),r=s(8),c=s.n(r),i=(s(13),s(2)),o=s(3),l=s(5),d=s(4),h=(s(14),s(0)),j=function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(){var t;Object(i.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).onDisplayTaskForm=function(){t.props.onReceiverDisplayTaskForm(!t.props.onSenderDisplayTaskForm)},t}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("button",{className:"btn btn-primary",onClick:this.onDisplayTaskForm,children:[Object(h.jsx)("span",{className:this.props.onSenderDisplayTaskForm?"fa fa-minus me-2":"fa fa-plus me-2"})," ",this.props.onSenderDisplayTaskForm?"Hide task form":"Adding Task"]})})}}]),s}(a.Component),u=s(6),m=function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(t){var a;return Object(i.a)(this,s),(a=e.call(this,t)).onHandleChange=function(t){var e=t.target,s=e.name,n="checkbox"===e.type?e.checked:e.value;a.setState(Object(u.a)({},s,n))},a.onHanldeSubmit=function(t){t.preventDefault(),a.props.onSearchTask(a.state.dataSearch)},a.state={dataSearch:""},a}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("form",{className:"input-group",onSubmit:this.onHanldeSubmit,children:[Object(h.jsx)("input",{type:"text",className:"form-control",value:this.state.dataSearch,name:"dataSearch",onChange:this.onHandleChange,placeholder:"Searching..."}),Object(h.jsxs)("button",{type:"submit",className:"btn btn-primary",children:[Object(h.jsx)("span",{className:"fa fa-search me-2",children:" "}),"Search"]})]})}}]),s}(a.Component),b=function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(){var t;Object(i.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).SortAZ=function(e){e.preventDefault(),t.props.onSortTask("nameTask",1)},t.SortZA=function(e){e.preventDefault(),t.props.onSortTask("nameTask",0)},t.SortActivated=function(e){e.preventDefault(),t.props.onSortTask("statusTask",1)},t.SortPaused=function(e){e.preventDefault(),t.props.onSortTask("statusTask",0)},t}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"navbar p-0 ",children:Object(h.jsxs)("div",{className:" dropdown ",children:[Object(h.jsx)("a",{className:"btn btn-primary dropdown-toggle",href:" ",type:"button","data-bs-toggle":"dropdown",children:" Sorting"}),Object(h.jsxs)("ul",{className:"dropdown-menu",children:[Object(h.jsx)("li",{onClick:this.SortAZ,children:Object(h.jsx)("a",{className:"dropdown-item",href:" ",children:"Name A-Z"})}),Object(h.jsx)("li",{onClick:this.SortZA,children:Object(h.jsx)("a",{className:"dropdown-item",href:" ",children:"Name Z-A"})}),Object(h.jsx)("li",{children:Object(h.jsx)("hr",{className:"dropdown-divider"})}),Object(h.jsx)("li",{onClick:this.SortActivated,children:Object(h.jsx)("a",{className:"dropdown-item",href:" ",children:"Status activated"})}),Object(h.jsx)("li",{onClick:this.SortPaused,children:Object(h.jsx)("a",{className:"dropdown-item",href:" ",children:"Status paused"})})]})]})})}}]),s}(a.Component),p=function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(){var t;Object(i.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).onUpdateStatus=function(){t.props.onUpdateStatus(t.props.idTask)},t.onTaskFormEdit=function(){t.props.onTaskFormEdit(t.props.idTask)},t.onDeleteTaskItem=function(){t.props.onDeleteTaskItem(t.props.idTask)},t}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:this.props.index}),Object(h.jsx)("td",{children:this.props.nameTask}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{className:1===Number(this.props.statusTask)?"btn btn-success text-white m-1":"btn btn-danger text-white me-1 ms-1",onClick:this.onUpdateStatus,children:1===Number(this.props.statusTask)?"Activated":"Paused"})}),Object(h.jsxs)("td",{children:[Object(h.jsxs)("button",{className:"btn btn-warning text-white m-1 ",onClick:this.onTaskFormEdit,children:[" ",Object(h.jsx)("span",{className:"fa fa-pencil-alt"})," Edit"]}),Object(h.jsxs)("button",{className:"btn btn-danger text-white m-1",onClick:this.onDeleteTaskItem,children:[" ",Object(h.jsx)("span",{className:"fa fa-trash"})," Delete"]})]})]})}}]),s}(a.Component),k=function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(t){var a;return Object(i.a)(this,s),(a=e.call(this,t)).onHandleChange=function(t){var e=t.target,s=e.name,n="checkbox"===e.type?e.checked:e.value;a.setState(Object(u.a)({},s,n))},a.state={nameFilter:"",statusFilter:-1,sortFilter:-1},a}return Object(o.a)(s,[{key:"listFilter",value:function(){for(var t=[],e=0;e<this.props.onSenderTask.length;e++)this.props.onSenderTask[e].nameTask.toLowerCase().includes(this.props.onSenderDataSearch.toLowerCase())&&this.props.onSenderTask[e].nameTask.toLowerCase().includes(this.state.nameFilter.toLowerCase())&&(Number(this.state.statusFilter)===Number(this.props.onSenderTask[e].statusTask)||-1===Number(this.state.statusFilter))&&t.push(this.props.onSenderTask[e]);return t}},{key:"listSortName",value:function(){var t=this.props.onSenderTask;return t.sort((function(t,e){var s=t.nameTask.toLowerCase(),a=e.nameTask.toLowerCase();return s<a?-1:s>a?1:0})),t}},{key:"listSortStatus",value:function(){var t=this.props.onSenderTask;return t.sort((function(t,e){var s=t.statusTask,a=e.statusTask;return s<a?-1:s>a?1:0})),t}},{key:"render",value:function(){var t=this,e=("nameTask"===this.props.onSortTaskItem.name?this.props.onSortTaskItem.key?this.listSortName():this.listSortName().reverse():"statusTask"===this.props.onSortTaskItem.name?this.props.onSortTaskItem.key?this.listSortStatus().reverse():this.listSortStatus():this.listFilter()).map((function(e,s){return Object(h.jsx)(p,{index:s,idTask:e.id,nameTask:e.nameTask,statusTask:e.statusTask,onUpdateStatus:t.props.onUpdateStatus,onTaskFormEdit:t.props.onTaskFormEdit,onDeleteTaskItem:t.props.onDeleteTaskItem},e.id)}));return Object(h.jsxs)("table",{className:"table table-hover table-bordered text-center",children:[Object(h.jsx)("thead",{className:"bg-info bg-gradient",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"NO"}),Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Satus"}),Object(h.jsx)("th",{children:"Function"})]})}),Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:" "}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",className:"form-control",value:this.state.nameFilter,name:"nameFilter",onChange:this.onHandleChange})}),Object(h.jsx)("td",{children:Object(h.jsxs)("select",{className:"form-select",value:this.state.statusFilter,name:"statusFilter",onChange:this.onHandleChange,children:[Object(h.jsx)("option",{value:-1,children:"All"}),Object(h.jsx)("option",{value:0,children:"Paused"}),Object(h.jsx)("option",{value:1,children:"Activated"})]})}),Object(h.jsx)("td",{})]}),e]})]})}}]),s}(a.Component),O=function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(t){var a;return Object(i.a)(this,s),(a=e.call(this,t)).onReceiverDisplayTaskForm=function(t){a.setState({taskList:a.props.onSenderTask,displayTaskForm:t}),a.props.onReceiverDisplayTaskForm(t)},a.onSearchTask=function(t){a.setState({dataSearch:t})},a.onSortTask=function(t,e){a.setState({dataSort:{name:t,key:e}})},a.state={dataSearch:"",dataSort:{name:"",key:0},taskList:a.props.onSenderTask,displayTaskForm:!1},a}return Object(o.a)(s,[{key:"render",value:function(){return localStorage.setItem("task",JSON.stringify(this.props.onSenderTask)),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"row mb-3",children:Object(h.jsx)("div",{className:"col-md-6 mb-3 mt-2",children:Object(h.jsx)(j,{onSenderDisplayTaskForm:this.props.onSenderDisplayTaskForm,onReceiverDisplayTaskForm:this.onReceiverDisplayTaskForm})})}),Object(h.jsxs)("div",{className:"row mb-3",children:[Object(h.jsx)("div",{className:"col-md-6 mb-3",children:Object(h.jsx)(m,{onSearchTask:this.onSearchTask})}),Object(h.jsx)("div",{className:"col-md-6 mb-3",children:Object(h.jsx)(b,{onSortTask:this.onSortTask})})]}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)(k,{onSenderDataSearch:this.state.dataSearch,onSenderTask:this.props.onSenderTask,onUpdateStatus:this.props.onUpdateStatus,onTaskFormEdit:this.props.onTaskFormEdit,onDeleteTaskItem:this.props.onDeleteTaskItem,onSortTaskItem:this.state.dataSort})})]})}}]),s}(a.Component),f=function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"pb-3",children:[Object(h.jsx)("h1",{style:{textAlign:"center"},children:"Task Manager"}),Object(h.jsx)("hr",{})]})}}]),s}(a.Component),v=function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(t){var a;return Object(i.a)(this,s),(a=e.call(this,t)).onHandleChange=function(t){var e=t.target,s=e.name,n="checkbox"===e.type?e.checked:e.value;a.setState(Object(u.a)({id:a.generateID()},s,n)),console.log(a.state.statusTask)},a.onHandleSubmit=function(t){t.preventDefault(),console.log(a.state.statusTask),a.props.onReceiverTask(a.state)},a.state={id:"",nameTask:"",statusTask:1},a}return Object(o.a)(s,[{key:"onHandleReset",value:function(t){this.setState({nameTask:"",statusTask:1})}},{key:"s4",value:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}},{key:"generateID",value:function(){return this.s4()+this.s4()+"-"+this.s4()+"-"+this.s4()+"-"+this.s4()+this.s4()+"-"+this.s4()}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"card border border-warning",children:[Object(h.jsx)("div",{className:"card-header bg-warning bg-gradient text-dark",children:Object(h.jsxs)("h5",{className:"card-title pt-3",children:[Object(h.jsx)("p",{className:"float-start",children:"Adding task"}),Object(h.jsx)("span",{className:"fa fa-times-circle float-end"})]})}),Object(h.jsx)("div",{className:"card-body",children:Object(h.jsxs)("form",{onSubmit:this.onHandleSubmit,onReset:this.onHandleReset,children:[Object(h.jsxs)("div",{className:"form-floating mb-3 ",children:[Object(h.jsx)("input",{type:"text",className:"form-control",value:this.state.nameTask,name:"nameTask",onChange:this.onHandleChange}),Object(h.jsx)("label",{children:"Name:"})]}),Object(h.jsxs)("div",{className:"form-floating mb-3 ",children:[Object(h.jsxs)("select",{className:"form-select",value:this.state.statusTask,name:"statusTask",onChange:this.onHandleChange,children:[Object(h.jsx)("option",{value:1,children:"Activated"}),Object(h.jsx)("option",{value:0,children:"Paused"})]}),Object(h.jsx)("label",{children:"Status"})]}),Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsxs)("button",{type:"submit",className:"btn btn-primary m-2",children:[Object(h.jsx)("span",{className:"fa fa-pencil-alt me-2"})," Save"]}),Object(h.jsxs)("button",{type:"reset",className:"btn btn-danger m-2",children:[Object(h.jsx)("span",{className:"fa fa-times me-2"})," Cancel"]})]})]})})]})}}]),s}(a.Component),x=function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(t){var a;return Object(i.a)(this,s),(a=e.call(this,t)).onHandleChange=function(t){var e=t.target,s=e.name,n="checkbox"===e.type?e.checked:e.value;a.setState(Object(u.a)({id:a.props.onSenderTaskUpdate.id},s,n))},a.onHandleSubmit=function(t){t.preventDefault(),a.props.onReciverTaskUpdate(a.state)},a.onHandleReset=function(t){a.setState({id:a.props.onSenderTaskUpdate.id,nameTask:a.props.onSenderTaskUpdate.nameTask,statusTask:Number(a.props.onSenderTaskUpdate.statusTask)})},a.state={id:"",nameTask:"",statusTask:1},a}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"card border border-warning",children:[Object(h.jsx)("div",{className:"card-header bg-warning bg-gradient text-dark",children:Object(h.jsxs)("h5",{className:"card-title pt-3",children:[Object(h.jsx)("p",{className:"float-start",children:"Edit task"}),Object(h.jsx)("span",{className:"fa fa-times-circle float-end"})]})}),Object(h.jsx)("div",{className:"card-body",children:Object(h.jsxs)("form",{onSubmit:this.onHandleSubmit,onReset:this.onHandleReset,children:[Object(h.jsxs)("div",{className:"form-floating mb-3 ",children:[Object(h.jsx)("input",{type:"text",className:"form-control",value:this.state.nameTask,name:"nameTask",onChange:this.onHandleChange}),Object(h.jsx)("label",{children:"Name:"})]}),Object(h.jsxs)("div",{className:"form-floating mb-3 ",children:[Object(h.jsxs)("select",{className:"form-select",value:this.state.statusTask,name:"statusTask",onChange:this.onHandleChange,children:[Object(h.jsx)("option",{value:1,children:"Activated"}),Object(h.jsx)("option",{value:0,children:"Paused"})]}),Object(h.jsx)("label",{children:"Status"})]}),Object(h.jsxs)("div",{className:"text-center ",children:[Object(h.jsxs)("button",{type:"submit",className:"btn btn-primary m-2 text-white",children:[Object(h.jsx)("span",{className:"fa fa-pencil-alt me-2"})," Save"]}),Object(h.jsxs)("button",{type:"reset",className:"btn btn-warning m-2 text-white",children:[Object(h.jsx)("span",{className:"fa fa-undo-alt me-2"})," Reset"]})]})]})})]})}}]),s}(a.Component),T=function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(t){var a;return Object(i.a)(this,s),(a=e.call(this,t)).onReceiverTask=function(t){var e=0,s=a.state.taskList;s.forEach((function(s){s.id===t.id&&e++})),0===e?(console.log("success"),s.push(t)):console.log(e),a.setState({taskList:s})},a.onReceiverDisplayTaskForm=function(t){a.setState({display:t,taskUpdate:{id:"",nameTask:"",statusTask:0}})},a.onUpdateStatus=function(t){var e=a.findIndex(t),s=a.state.taskList;-1!==e&&(s[e].statusTask=0===Number(s[e].statusTask)?1:0,a.setState({taskList:s}))},a.findIndex=function(t){for(var e=0;e<a.state.taskList.length;e++)if(a.state.taskList[e].id===t)return e;return-1},a.onTaskFormEdit=function(t){var e=a.findIndex(t);a.setState({display:!1,taskUpdate:a.state.taskList[e]})},a.onReciverTaskUpdate=function(t){var e=a.findIndex(t.id),s=a.state.taskList;s[e]=t,a.setState({taskList:s,taskUpdate:{id:"",nameTask:"",statusTask:0}})},a.onDeleteTaskItem=function(t){for(var e=a.findIndex(t),s=[],n=0;n<a.state.taskList.length;n++)n!==e&&s.push(a.state.taskList[n]);a.setState({taskList:s,taskUpdate:{id:"",nameTask:"",statusTask:0}})},a.state={taskList:[],display:!1,taskUpdate:{id:"",nameTask:"",statusTask:0}},a.state.taskList.length||a.onLoadLocalStorage(),a}return Object(o.a)(s,[{key:"onLoadLocalStorage",value:function(){var t=this;localStorage&&localStorage.getItem("task")&&JSON.parse(localStorage.getItem("task")).forEach((function(e){t.state.taskList.push(e)}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"container pt-2",children:[Object(h.jsx)(f,{}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:this.state.display?"col-md-4 mt-2":"d-none",children:Object(h.jsx)(v,{onReceiverTask:this.onReceiverTask})}),Object(h.jsx)("div",{className:""===this.state.taskUpdate.id||this.state.display?"d-none":"col-md-4 mt-2",children:Object(h.jsx)(x,{onSenderTaskUpdate:this.state.taskUpdate,onReciverTaskUpdate:this.onReciverTaskUpdate})}),Object(h.jsx)("div",{className:this.state.display||""!==this.state.taskUpdate.id?"col-md-8":"col-md-12",children:Object(h.jsx)(O,{onSenderTask:this.state.taskList,onSenderDisplayTaskForm:this.state.display,onReceiverTask:this.onReceiverTask,onReceiverDisplayTaskForm:this.onReceiverDisplayTaskForm,onUpdateStatus:this.onUpdateStatus,onTaskFormEdit:this.onTaskFormEdit,onDeleteTaskItem:this.onDeleteTaskItem})})]})]})}}]),s}(a.Component),S=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(e){var s=e.getCLS,a=e.getFID,n=e.getFCP,r=e.getLCP,c=e.getTTFB;s(t),a(t),n(t),r(t),c(t)}))};c.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(T,{})}),document.getElementById("root")),S()}},[[16,1,2]]]);
//# sourceMappingURL=main.109e694f.chunk.js.map