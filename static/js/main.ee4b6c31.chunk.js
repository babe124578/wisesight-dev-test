(this.webpackJsonpsocial_dashboard=this.webpackJsonpsocial_dashboard||[]).push([[0],{41:function(e,t,a){e.exports=a(55)},47:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);a(42);var n=a(0),c=a.n(n),r=a(19),l=a.n(r),o=a(8),s=a(9),u=a(11),i=a(10),m=a(12),h=a(20),d=a(17),p=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(i.a)(t).call(this))).state={text:{}},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:5000/Daily").then((function(e){return e.json()})).then((function(t){var a=t.results.map((function(t){return c.a.createElement("div",{key:t.text.Daily},c.a.createElement("div",null,c.a.createElement("pre",null,JSON.stringify(e.state.text,null,2))))}));e.setState({text:a}),console.log("state",e.state.text)}))}},{key:"render",value:function(){return c.a.createElement("div",null)}}]),t}(n.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Hello hashtagclouds"),c.a.createElement("hr",null),c.a.createElement("img",{src:"https://as1.ftcdn.net/jpg/00/67/37/14/500_F_67371476_2kcWxrItPRtUnz6LcnYYovr7DACyjN3b.jpg",alt:"hashtagclouds"}))}}]),t}(n.Component),E=(a(47),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Hello top10accounts"),c.a.createElement("hr",null),c.a.createElement("img",{src:"https://cdn.bosh.tv/images/stories/_full/2073/A-New-Look-for-Instagram-Inspired-by-the-Community-Think-Marketing.jpg?mtime=20171113104957",alt:"top10accounts"}))}}]),t}(n.Component)),f=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Hello top10messages"),c.a.createElement("hr",null),c.a.createElement("img",{src:"https://hostingwithairbnb.com/wp-content/uploads/2019/12/top10.jpg",alt:"top10messages"}))}}]),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Hello wordcloud"),c.a.createElement("hr",null),c.a.createElement("img",{src:"https://moodle.org/pluginfile.php/154/mod_forum/attachment/1516593/success-word-cloud.jpg?forcedownload=1",alt:"wordcloud"}))}}]),t}(n.Component),g=a(59),O=a(60),v=a(61),y=a(40),k=a(58),w=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(h.a,null,c.a.createElement("div",null,c.a.createElement(g.a,{bg:"dark",variant:"dark"},c.a.createElement(g.a.Brand,null,"Dashboard"),c.a.createElement(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(g.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(O.a,{className:"mr-auto"},c.a.createElement(O.a.Link,{href:"/social-dashboard/#/"},"Daily messages"),c.a.createElement(O.a.Link,{href:"/social-dashboard/#/top-10-accounts"},"Top 10 accounts by messages"),c.a.createElement(O.a.Link,{href:"/social-dashboard/#/top-10-messages"},"Top 10 messages by engagements"),c.a.createElement(O.a.Link,{href:"/social-dashboard/#/word-clouds"},"Word Clouds"),c.a.createElement(O.a.Link,{href:"/social-dashboard/#/hashtag-clouds"},"Hashtag Clouds")),c.a.createElement(v.a,{inline:!0},c.a.createElement(y.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),c.a.createElement(k.a,{variant:"outline-success"},"Search")))),c.a.createElement("div",null,c.a.createElement("div",{className:"content"},c.a.createElement(d.a,{exact:!0,path:"/",component:p}),c.a.createElement(d.a,{path:"/top-10-accounts",component:E}),c.a.createElement(d.a,{path:"/top-10-messages",component:f}),c.a.createElement(d.a,{path:"/word-clouds",component:j}),c.a.createElement(d.a,{path:"/hashtag-clouds",component:b})))))}}]),t}(n.Component);a(54);l.a.render(c.a.createElement(h.a,null,c.a.createElement(w,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.ee4b6c31.chunk.js.map