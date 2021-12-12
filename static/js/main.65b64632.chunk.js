(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{20:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(10),r=n.n(s),i=(n(16),n(20),n(11)),o=n(6),b=n(2),u=n(3),h=n(5),l=n(4),j=(n(9),n(0)),d=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){return Object(b.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"navbar",children:[Object(j.jsx)("i",{className:"navbar-logo fas fa-leaf"}),Object(j.jsx)("span",{children:"Habit Tracker"}),Object(j.jsx)("span",{className:"navbar-count",children:this.props.totalCount})]})}}]),n}(a.PureComponent),p=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).handleIncrement=function(){t.props.onIncrement(t.props.habit)},t.handleDecrement=function(){t.props.onDecrement(t.props.habit)},t.handleDelete=function(){t.props.onDelete(t.props.habit)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.habit,e=t.name,n=t.count;return Object(j.jsxs)("li",{className:"habit",children:[Object(j.jsx)("span",{className:"habit-name",children:e}),Object(j.jsx)("span",{className:"habit-count",children:n}),Object(j.jsx)("button",{className:"habit-button habit-increase",onClick:this.handleIncrement,children:Object(j.jsx)("i",{className:"fas fa-plus-square"})}),Object(j.jsx)("button",{className:"habit-button habit-decrease",onClick:this.handleDecrement,children:Object(j.jsx)("i",{className:"fas fa-minus-square"})}),Object(j.jsx)("button",{className:"habit-button habit-delete",onClick:this.handleDelete,children:Object(j.jsx)("i",{className:"fas fa-trash"})})]})}}]),n}(a.PureComponent),m=Object(a.memo)((function(t){var e=c.a.createRef(),n=c.a.createRef();return Object(j.jsxs)("form",{ref:e,className:"add-form",onSubmit:function(a){a.preventDefault();var c=n.current.value;c&&t.onAdd(c),e.current.reset()},children:[Object(j.jsx)("input",{ref:n,type:"text",placeholder:"Habit",className:"add-input"}),Object(j.jsx)("button",{className:"add-button",children:"Add"})]})})),f=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){return Object(b.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsxs)("div",{className:"habits",children:[Object(j.jsx)(m,{onAdd:this.props.onAdd}),Object(j.jsx)("ul",{children:this.props.habits.map((function(e){return Object(j.jsx)(p,{habit:e,onIncrement:t.props.onIncrement,onDecrement:t.props.onDecrement,onDelete:t.props.onDelete},e.id)}))}),Object(j.jsx)("button",{type:"button",className:"habits-reset",onClick:this.props.onReset,children:"Reset All"})]})}}]),n}(a.Component),O=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={habits:[]},t.handleIncrement=function(e){var n=t.state.habits.map((function(t){return t.id===e.id?Object(o.a)(Object(o.a)({},e),{},{count:e.count+1}):t}));t.setState({habits:n})},t.handleDecrement=function(e){var n=t.state.habits.map((function(t){if(t.id===e.id){var n=e.count-1;return Object(o.a)(Object(o.a)({},e),{},{count:n<0?0:n})}return t}));t.setState({habits:n})},t.handleDelete=function(e){var n=t.state.habits.filter((function(t){return t.id!==e.id}));t.setState({habits:n})},t.handleAdd=function(e){var n=Date.now(),a=[].concat(Object(i.a)(t.state.habits),[{id:n,name:e,count:0}]);t.setState({habits:a})},t.handleReset=function(){var e=t.state.habits.map((function(t){return 0!==t.count?Object(o.a)(Object(o.a)({},t),{},{count:0}):t}));t.setState({habits:e})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{totalCount:this.state.habits.filter((function(t){return t.count>0})).length}),Object(j.jsx)(f,{habits:this.state.habits,onAdd:this.handleAdd,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onReset:this.handleReset})]})}}]),n}(a.Component);r.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))},9:function(t,e,n){}},[[22,1,2]]]);
//# sourceMappingURL=main.65b64632.chunk.js.map