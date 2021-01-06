(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{12:function(e,t){e.exports="3b12114f"},27:function(e,t,n){},28:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),s=n(20),i=n.n(s),o=(n(27),n(10)),u=n(2),l=n(12),j=n.n(l),b=(n(28),function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:"https://images.unsplash.com/photo-1486395130845-ec128138002e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",alt:"ominous lightbulbs",className:"lightbulb-main"}),Object(c.jsx)("marquee",{behavior:"scroll",direction:"left",children:"movies can be...enlightening!"}),Object(c.jsxs)("div",{className:"index-description",children:[Object(c.jsx)("h2",{children:"Welcome to movie finder!"}),Object(c.jsxs)("p",{children:["Movie finder specializes in a simple way to find movies and add them to a list of favorites that you can watch later! Go to the 'Movie Finder' page to find fun movies to watch!  See something you like?  Add it to your favorites with a note. You will be able to edit these notes at any time!",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"Happy viewing!"]})]})]})}),d=n(3),f=n.n(d),p=n(8),h=n(9),m=function(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),n=(t[0],t[1]),a=Object(r.useState)([]),s=Object(h.a)(a,2),i=s[0],o=s[1],u=Object(r.useState)([]),l=Object(h.a)(u,2),b=l[0],d=l[1],m=Object(r.useState)([]),v=Object(h.a)(m,2),x=v[0],O=v[1],y=(Object(r.useRef)(null),function(){var e=Object(p.a)(f.a.mark((function e(t){var n,c,r,a,s,i,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],c=0;case 2:if(!(c<t.length)){e.next=22;break}return r=t[c],e.prev=4,a="https://www.omdbapi.com/?i=".concat(r,"&apikey=").concat(j.a),e.next=8,fetch(a);case 8:return s=e.sent,e.next=11,s.json();case 11:i=e.sent,u=i,n.push(u),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),console.log("Failed to retrieve data");case 19:c++,e.next=2;break;case 22:o(n);case 23:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t){return e.apply(this,arguments)}}()),w=function(){var e=Object(p.a)(f.a.mark((function e(){var t,c,r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://www.omdbapi.com/?s=".concat(b,"&y=").concat(x,"&type=movie&apikey=").concat(j.a),e.next=4,fetch(t);case 4:return c=e.sent,e.next=7,c.json();case 7:r=e.sent,n(r),a=r.Search.map((function(e){return e.imdbID})),y(a),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("Failed to retrieve data");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),o([]),w();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(p.a)(f.a.mark((function e(t,n){var c,r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=n,r=JSON.stringify({imdbID:c,note:""}),t.currentTarget.reset(),e.prev=4,e.next=7,fetch("https://project-3-moviefinder.herokuapp.com/api/favorites",{method:"POST",headers:{"Content-type":"application/json"},body:r});case 7:return a=e.sent,e.next=10,a.json();case 10:e.sent,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){console.log("use effect")}),[]),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"movie-search-section",children:[Object(c.jsx)("h2",{children:"Search for a movie!"}),Object(c.jsx)("p",{children:"Only the title is required, the year can just help you find a specific movie."}),Object(c.jsxs)("form",{onSubmit:g,children:[Object(c.jsx)("label",{htmlFor:"title",children:"Title"}),Object(c.jsx)("input",{type:"text",id:"title",className:"movie-search-input",value:b,onChange:function(e){return d(e.target.value)}}),Object(c.jsx)("label",{htmlFor:"year",children:"Year"}),Object(c.jsx)("input",{type:"number",id:"year",className:"movie-search-input",value:x,onChange:function(e){return O(e.target.value)}}),Object(c.jsx)("input",{type:"submit",value:"Search",className:"movie-search-button"})]})]}),Object(c.jsx)("ul",{children:i.map((function(e){return Object(c.jsxs)("div",{className:"movies-search-results",children:[Object(c.jsxs)("p",{children:[e.Title," (",e.Year,")"]}),Object(c.jsx)("img",{src:"".concat(e.Poster),alt:e.Title}),Object(c.jsx)("form",{onSubmit:function(t){k(t,e.imdbID)},className:"movies-note-form",children:Object(c.jsx)("input",{type:"submit",value:"Add to Favorites",className:"movie-note-button"})}),Object(c.jsxs)("div",{className:"subinfo-for-movies",children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{className:"subinfo-for-movies-header",children:"Director"}),": ",e.Director]},"director-".concat(e.imdbID)),Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{className:"subinfo-for-movies-header",children:"Country"}),": ",e.Country]},"country-".concat(e.imdbID)),Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{className:"subinfo-for-movies-header",children:"Awards"}),": ",e.Awards]},"awards-".concat(e.imdbID)),Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{className:"subinfo-for-movies-header",children:"Genre"}),": ",e.Genre]},"genre-".concat(e.imdbID))]})]})}))})]})},v=function(e){var t=e.mapIndex,n=e.e,a=e.getMovieFromLocalAPI,s=(e.setMovieInfo,e.favorites,e.movieInfo,Object(r.useState)("")),i=Object(h.a)(s,2),o=i[0],u=i[1],l=function(){var e=Object(p.a)(f.a.mark((function e(t,n,c,r){var s,i,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.prev=1,s={note:o},i=JSON.stringify(s),e.next=6,fetch("".concat("https://project-3-moviefinder.herokuapp.com/api/favorites","/").concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:i});case 6:return u=e.sent,e.next=9,u.json();case 9:e.sent,a(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,n,c,r){return e.apply(this,arguments)}}();return Object(c.jsxs)("form",{onSubmit:function(e){l(n._id,n.imdbID,e,t)},className:"movies-note-form",children:[Object(c.jsx)("input",{type:"text",className:"movie-note-input",value:o,onChange:function(e){u(e.target.value)}}),Object(c.jsx)("input",{type:"submit",value:"Update Note",className:"update-movie-note-button"})]})};n(30).config();var x=function(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)([]),i=Object(h.a)(s,2),o=i[0],u=i[1],l=Object(r.useState)([]),b=Object(h.a)(l,2),d=(b[0],b[1],Object(r.useRef)(null),"https://project-3-moviefinder.herokuapp.com/api/favorites"),m=function(){var e=Object(p.a)(f.a.mark((function e(t){var n,c,r,a,s,i,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],c=0;case 2:if(!(c<t.length)){e.next=24;break}return r=t[c].imdbID,e.prev=4,a="https://www.omdbapi.com/?i=".concat(r,"&apikey=").concat(j.a),e.next=8,fetch(a);case 8:return s=e.sent,e.next=11,s.json();case 11:i=e.sent,(o=i)._id=t[c]._id,o.note=t[c].note,n.push(o),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(4),console.log("Failed to retrieve data");case 21:c++,e.next=2;break;case 24:u(n);case 25:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(p.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d,e.next=4,fetch("https://project-3-moviefinder.herokuapp.com/api/favorites");case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,a(n),m(n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("Failed to retrieve data");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(p.a)(f.a.mark((function e(t,n,c){var r,a,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.prev=1,e.next=4,fetch("".concat(d,"/").concat(t),{method:"DELETE",headers:{"Content-type":"application/json"}});case 4:return r=e.sent,e.next=7,r.json();case 7:a=e.sent,s=o.filter((function(e){return e.dbID!==a.dbID})),u(s),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,n,c){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){console.log("use effect"),x()}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{className:"header-for-favorites",children:"Favorites Page"}),o.map((function(e,t){return Object(c.jsxs)("div",{className:"movies-search-results",children:[Object(c.jsxs)("p",{children:[e.Title," (",e.Year,")"]}),Object(c.jsx)("img",{src:"".concat(e.Poster),alt:e.Title}),Object(c.jsx)("button",{onClick:function(t){O(e._id,e.imdbID,t)},children:"Remove from favorites"}),Object(c.jsx)(v,{mapIndex:t,e:e,getMovieFromLocalAPI:x,setMovieInfo:u,movieInfo:o,favorites:n}),Object(c.jsxs)("div",{className:"subinfo-for-movies",children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{className:"subinfo-for-movies-header",children:"Note"}),": ",e.note]},"note-".concat(e.imdbID)),Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{className:"subinfo-for-movies-header",children:"Director"}),": ",e.Director]},"director-".concat(e.imdbID)),Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{className:"subinfo-for-movies-header",children:"Country"}),": ",e.Country]},"country-".concat(e.imdbID)),Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{className:"subinfo-for-movies-header",children:"Awards"}),": ",e.Awards]},"awards-".concat(e.imdbID)),Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{className:"subinfo-for-movies-header",children:"Genre"}),": ",e.Genre]},"genre-".concat(e.imdbID))]})]})}))]})};var O=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("title",{children:"Movie Finder"}),Object(c.jsx)("nav",{children:Object(c.jsxs)("div",{className:"nav-links",children:[Object(c.jsx)(o.b,{className:"nav-links-for-css",to:"/",children:"Home"}),Object(c.jsx)(o.b,{className:"nav-links-for-css",to:"/movies",children:"Movie Finder"}),Object(c.jsx)(o.b,{className:"nav-links-for-css",to:"/favorites",children:"Favorites"})]})}),Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{exact:!0,path:"/",component:b}),Object(c.jsx)(u.a,{path:"/movies",component:m}),Object(c.jsx)(u.a,{path:"/Favorites",component:x})]})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(o.a,{children:Object(c.jsx)(O,{})})}),document.getElementById("root")),y()}},[[38,1,2]]]);
//# sourceMappingURL=main.fbef96d9.chunk.js.map