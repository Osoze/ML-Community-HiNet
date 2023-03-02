
webpackJsonp([21],{684:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(11),s=r(n),u=a(118),c=r(u),o=a(280),d=a(177);t.default={namespace:"workspace",state:{list:[],loading:!1,workspace:{name:"",id:null},models:[]},effects:{add:c.default.mark(function e(t,a){var r,n,s=t.payload,u=a.call,d=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({type:"changeLoading",payload:!0});case 2:return e.next=4,u(o.addWorkspace,s);case 4:return r=e.sent,n=r.result,e.next=8,d({type:"fetch"});case 8:case"end":return e.stop()}},e,this)}),addModel:c.default.mark(function e(t,a){var r,n,s,u=t.payload,d=a.call,p=a.put,l=a.select;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p({type:"changeLoading",payload:!0});case 2:return e.next=4,l(function(e){return e.workspace.workspace.id});case 4:return r=e.sent,e.next=7,d(o.addModel,{workspaceId:r,name:u});case 7:return n=e.sent,s=n.result,e.next=11,p({type:"fetchModels"});case 11:case"end":return e.stop()}},e,this)}),rm:c.default.mark(function e(t,a){var r=t.payload,n=a.call,s=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"changeLoading",payload:!0});case 2:return e.next=4,n(o.deleteWorkspace,r);case 4:return e.next=6,s({type:"fetch"});case 6:case"end":return e.stop()}},e,this)}),rmModel:c.default.mark(function e(t,a){var r=t.payload,n=a.call,s=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"changeLoading",payload:!0});case 2:return e.next=4,n(o.deleteModel,r);case 4:return e.next=6,s({type:"fetchModels"});case 6:case"end":return e.stop()}},e,this)}),fetch:c.default.mark(function e(t,a){var r,n,s=a.call,u=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeLoading",payload:!0});case 2:return e.next=4,s(o.queryWorkspaces);case 4:return r=e.sent,n=r.result,e.next=8,u({type:"queryList",payload:Array.isArray(n)?n:[]});case 8:return e.next=10,u({type:"changeLoading",payload:!1});case 10:case"end":return e.stop()}},e,this)}),fetchModels:c.default.mark(function e(t,a){var r,n,s,u,p=t.payload,l=a.call,i=a.put,f=a.select;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i({type:"changeLoading",payload:!0});case 2:if(!p){e.next=13;break}return e.next=5,l(o.queryWorkspaceById,p);case 5:if(r=e.sent,200===r.code){e.next=11;break}return e.next=9,i(d.routerRedux.push("/404"));case 9:e.next=13;break;case 11:return e.next=13,i({type:"setWorkspace",payload:r.result});case 13:return e.next=15,f(function(e){return e.workspace.workspace});case 15:if(n=e.sent,!n.id){e.next=23;break}return e.next=19,l(o.queryModels,n.id);case 19:return s=e.sent,u=s.result,e.next=23,i({type:"queryModels",payload:Array.isArray(u)?u:[]});case 23:return e.next=25,i({type:"changeLoading",payload:!1});case 25:case"end":return e.stop()}},e,this)}),appendFetch:c.default.mark(function e(t,a){var r,n=t.payload,s=a.call,u=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeLoading",payload:!0});case 2:return e.next=4,s(queryFakeList,n);case 4:return r=e.sent,e.next=7,u({type:"appendList",payload:Array.isArray(r)?r:[]});case 7:return e.next=9,u({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)})},reducers:{queryList:function(e,t){return(0,s.default)({},e,{list:t.payload})},queryModels:function(e,t){return(0,s.default)({},e,{models:t.payload})},setWorkspace:function(e,t){return(0,s.default)({},e,{workspace:t.payload})},appendList:function(e,t){return(0,s.default)({},e,{list:e.list.concat(t.payload)})},changeLoading:function(e,t){return(0,s.default)({},e,{loading:t.payload})}}},e.exports=t.default}});