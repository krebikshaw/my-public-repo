(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{30:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),i=n.n(c),a=n(8),s=n.n(a),o=n(3),u=n(4),j=n(5),b=n(17),d=n(9),l=Object(d.b)({name:"user",initialState:{reps:[],rep:{},isLoading:!1},reducers:{setReps:function(e,t){var n;(n=e.reps).push.apply(n,Object(b.a)(t.payload))},setRep:function(e,t){e.rep=t.payload},setIsLoading:function(e,t){e.isLoading=t.payload}}}),p=l.actions,h=p.setReps,O=p.setRep,f=p.setIsLoading,x=function(){return function(e){return e(f(!0)),fetch("".concat("https://api.github.com/user/repos"),{method:"GET",headers:{Authorization:"token b158363e582e00aa4a76f8b6827ba0d3a9db0367","content-type":"application/json",Accept:"application/vnd.github.v3+json"}}).then((function(e){return e.json()})).then((function(t){e(f(!1)),e(h(t)),e(O(t[0]))}))}},v=function(e){return e.user.reps},m=function(e){return e.user.isLoading},y=l.reducer;function g(){var e=Object(j.b)(),t=Object(j.c)(v),n=Object(j.c)(m);return window.addEventListener("scroll",(function(){document.documentElement.scrollTop+window.innerHeight>document.body.clientHeight-200&&!n&&e(x())})),{reps:t,handleGetRepos:function(){return e(x())}}}function R(){var e=Object(o.a)([""]);return R=function(){return e},e}function w(){var e=Object(o.a)(["\n  cursor: pointer;\n"]);return w=function(){return e},e}function L(){var e=Object(o.a)([""]);return L=function(){return e},e}function k(){var e=Object(o.a)([""]);return k=function(){return e},e}function E(){var e=Object(o.a)([""]);return E=function(){return e},e}function N(){var e=Object(o.a)(["\n  margin: 10px 0;\n"]);return N=function(){return e},e}function G(){var e=Object(o.a)([""]);return G=function(){return e},e}var H=u.a.table(G()),I=u.a.div(N()),T=u.a.thead(E()),A=u.a.tbody(k()),J=u.a.tr(L()),M=u.a.th(w()),S=u.a.td(R()),z=function(e){var t=e.rep;Object(j.b)();return Object(r.jsxs)(J,{children:[Object(r.jsx)(S,{children:t.name}),Object(r.jsx)(S,{children:t.description}),Object(r.jsx)(S,{children:t.html_url})]})};function B(){var e=g().reps;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(I,{children:Object(r.jsxs)(H,{className:"table table-sm table-bordered table-hover",children:[Object(r.jsx)(T,{className:"thead-dark",children:Object(r.jsxs)(J,{children:[Object(r.jsx)(M,{children:"Title"}),Object(r.jsx)(M,{children:"Description"}),Object(r.jsx)(M,{children:"Url"})]})}),Object(r.jsx)(A,{children:e.map((function(e){return Object(r.jsx)(z,{rep:e},e.id)}))})]})})})}function D(){var e=Object(o.a)([""]);return D=function(){return e},e}var F=u.a.div(D());var U=function(){var e=g(),t=e.reps,n=e.handleGetRepos;return Object(c.useEffect)((function(){n()}),[]),Object(r.jsxs)(F,{className:"container",children:[Object(r.jsx)("h1",{className:"h5 text-center",children:"My Own GitHub Repository"}),Object(r.jsx)("hr",{}),Object(r.jsx)("h2",{className:"h5 text-black-50",children:"Repository List"}),t&&Object(r.jsx)(B,{})]})},_=Object(d.a)({reducer:{user:y}});s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(j.a,{store:_,children:Object(r.jsx)(U,{})})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.89813117.chunk.js.map