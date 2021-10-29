(this.webpackJsonpxsolla=this.webpackJsonpxsolla||[]).push([[0],{23:function(t,e,s){},24:function(t,e,s){"use strict";s.r(e);var i=s(1),a=s.n(i),r=s(14),n=s.n(r),c=s(8),o=s(13),l=s(15),u=s(6),h=s.n(u),d=s(10),m=s(2),v=s(3),f=s(5),j=s(4),p=s.p+"static/media/bookmark_active.e1bc097d.svg",b=s.p+"static/media/bookmark_disabled.405cea49.svg",O=s(7),k=s.n(O),x=s(0),y=function(t){Object(f.a)(s,t);var e=Object(j.a)(s);function s(t){var i;return Object(m.a)(this,s),(i=e.call(this,t)).state={id:i.props.id},i.bookmark=a.a.createRef(),i.currentImage=b,i}return Object(v.a)(s,[{key:"componentDidMount",value:function(){var t=Boolean(Number(window.localStorage.getItem(this.state.id)));this.setBookmark(t)}},{key:"setBookmark",value:function(t){t?(window.localStorage.setItem(this.state.id,1),this.bookmark.current.src=p,this.setState({currentImage:p})):(window.localStorage.setItem(this.state.id,0),this.bookmark.current.src=b,this.setState({currentImage:b}))}},{key:"addBookmark",value:function(){console.log(window.localStorage.getItem(this.state.id));var t=!Boolean(Number(window.localStorage.getItem(this.state.id)));this.setBookmark(t)}},{key:"render",value:function(){var t=this.props.date;t=(t=k()(t,"DD.MM.YYYY")).date();var e=this.props.image,s=this.props.name;return Object(x.jsxs)("div",{className:"event-card-item",children:[Object(x.jsxs)("div",{className:"event-card-item__image",children:[Object(x.jsx)("div",{className:"event-card-item__overlay"}),Object(x.jsx)("img",{src:e,alt:""})]}),Object(x.jsx)("span",{className:"event-card-item__date",children:t}),Object(x.jsx)("span",{className:"event-card-item__title",children:s}),Object(x.jsx)("span",{className:"event-card-item__bookmark",onClick:this.addBookmark.bind(this),children:Object(x.jsx)("img",{src:this.currentImage,ref:this.bookmark,alt:""})})]})}}]),s}(i.Component),g=s.p+"static/media/arrow.c381148f.svg",w=function(t){Object(f.a)(s,t);var e=Object(j.a)(s);function s(){return Object(m.a)(this,s),e.apply(this,arguments)}return Object(v.a)(s,[{key:"render",value:function(){var t=this,e=this.props.title;return Object(x.jsx)("div",{className:"item-selector__item",onClick:function(){return t.props.onClickEvent(e)},children:Object(x.jsx)("div",{className:"item-selector__item-text",children:e})})}}]),s}(i.Component),_=function(t){Object(f.a)(s,t);var e=Object(j.a)(s);function s(t){var i;return Object(m.a)(this,s),(i=e.call(this,t)).state={title:i.props.title,filterList:i.props.filterList,isShowItems:!1,selectedItem:i.props.filterList[0]},i}return Object(v.a)(s,[{key:"showItems",value:function(){this.setState({isShowItems:!this.state.isShowItems})}},{key:"componentDidUpdate",value:function(t){t.filterList.length!==this.props.filterList.length&&this.setState({title:this.props.title,filterList:this.props.filterList,selectedItem:this.props.filterList[0]})}},{key:"selectFilterItem",value:function(t){this.setState({selectedItem:t,isShowItems:!1}),this.props.updateFilter(t),console.log(t,this)}},{key:"render",value:function(){var t=this,e=this.state,s=e.title,i=e.filterList,a=e.selectedItem,r="item-selector__list ".concat(this.state.isShowItems?"item-selector__list_active":"");return Object(x.jsxs)("div",{className:"filter-item",children:[Object(x.jsxs)("span",{className:"filter-item__title",children:[s,":"]}),Object(x.jsxs)("div",{className:"item-selector",children:[Object(x.jsx)("div",{className:"item-selector__title",children:a}),Object(x.jsx)("div",{className:"item-selector__arrow",onClick:function(){return t.showItems()},children:Object(x.jsx)("img",{src:g,alt:""})}),Object(x.jsx)("div",{className:r,children:i.map((function(e,s){return Object(x.jsx)(w,{title:e,onClickEvent:t.selectFilterItem.bind(t)},s)}))})]})]})}}]),s}(i.Component),M=function(t){Object(f.a)(s,t);var e=Object(j.a)(s);function s(){var t;return Object(m.a)(this,s),(t=e.call(this)).state={isShowFav:!1},t}return Object(v.a)(s,[{key:"changeFav",value:function(){var t=!this.state.isShowFav;this.setState({isShowFav:t}),this.props.updateFilter(t)}},{key:"render",value:function(){var t="favorites__checkbox ".concat(this.state.isShowFav?"favorites__checkbox_active":"");return Object(x.jsxs)("div",{className:"favorites",children:[Object(x.jsx)("div",{className:"favorites__title",children:"Favorites:"}),Object(x.jsx)("div",{className:t,onClick:this.changeFav.bind(this)})]})}}]),s}(i.Component),S=(s(23),function(t){Object(f.a)(s,t);var e=Object(j.a)(s);function s(){var t;return Object(m.a)(this,s),(t=e.call(this)).state={filterListCity:["All"],filterListMonth:["All"],musicEvents:[],filteredMusicEvents:[],filterParams:{city:"All",month:"All"}},t}return Object(v.a)(s,[{key:"fetchEvents",value:function(){var t=Object(d.a)(h.a.mark((function t(){var e,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json");case 2:return e=t.sent,t.next=5,e.json();case 5:return s=t.sent,t.abrupt("return",s);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getEvents",value:function(){var t=Object(d.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetchEvents();case 2:e=t.sent,this.setState({musicEvents:e,filteredMusicEvents:e});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=Object(d.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getEvents();case 2:return t.next=4,this.processEvents();case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"processEvents",value:function(){var t=Object(d.a)(h.a.mark((function t(){var e,s,i,a,r,n,c,u;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e={},s={},k.a.locale("en"),i=Object(l.a)(this.state.musicEvents);try{for(i.s();!(a=i.n()).done;)r=a.value,s["".concat(r.city)]?s["".concat(r.city)].push(r.id):s["".concat(r.city)]=[r.id],n=k()(r.date,"DD.MM.YYYY").format("MMMM"),e["".concat(n)]?e["".concat(n)].push(r.id):e["".concat(n)]=[r.id]}catch(h){i.e(h)}finally{i.f()}c=Object.keys(e),u=Object.keys(s),this.setState({filterListCity:["All"].concat(Object(o.a)(u)),filterListMonth:["All"].concat(Object(o.a)(c))});case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"updateCityFilter",value:function(t){var e=this.state.filterParams;this.setState({filterParams:Object(c.a)(Object(c.a)({},e),{},{city:t})})}},{key:"updateMonthFilter",value:function(t){var e=this.state.filterParams;this.setState({filterParams:Object(c.a)(Object(c.a)({},e),{},{month:t})})}},{key:"updateFavFilter",value:function(t){var e=this.state.filterParams;this.setState({filterParams:Object(c.a)(Object(c.a)({},e),{},{favorites:t})})}},{key:"filterEvents",value:function(t){k.a.locale("en");var e=1,s=this.state.filterParams;e&=Math.max(t.city===s.city,"All"===s.city);var i=k()(t.date,"DD.MM.YYYY").format("MMMM");return e&=Math.max(i===s.month,"All"===s.month),s.favorites&&(e&=Boolean(Number(window.localStorage.getItem(t.id)))),Boolean(e)}},{key:"getFilteredEvents",value:function(){var t=this;return this.state.musicEvents.filter((function(e){return t.filterEvents(e)}))}},{key:"render",value:function(){var t=this.state.filterListCity,e=this.state.filterListMonth,s=this.getFilteredEvents();return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("header",{className:"header",children:Object(x.jsx)("h1",{className:"header__title",children:"Event Listing"})}),Object(x.jsxs)("div",{className:"filter-list",children:[Object(x.jsx)(_,{title:"City",filterList:t,updateFilter:this.updateCityFilter.bind(this)}),Object(x.jsx)(_,{title:"Month",filterList:e,updateFilter:this.updateMonthFilter.bind(this)}),Object(x.jsx)(M,{updateFilter:this.updateFavFilter.bind(this)})]}),Object(x.jsx)("div",{className:"event-card-list",children:s.map((function(t,e){return Object(x.jsx)(y,{city:t.city,date:t.date,genre:t.genre,id:t.id,image:t.image,name:t.name},t.id)}))})]})})}}]),s}(i.Component));n.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(S,{})}),document.getElementById("app"))}},[[24,1,2]]]);
//# sourceMappingURL=main.0c16ef33.chunk.js.map