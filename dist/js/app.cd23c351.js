(function(e){function t(t){for(var s,r,o=t[0],c=t[1],l=t[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],s=!0,o=1;o<i.length;o++){var c=i[o];0!==n[c]&&(s=!1)}s&&(a.splice(t--,1),e=r(r.s=i[0]))}return e}var s={},n={app:0},a=[];function r(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=s,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(i,s,function(t){return e[t]}.bind(null,s));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/blogsystem/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("cd49")},"075c":function(e,t,i){},"0907":function(e,t,i){"use strict";var s=i("5b5a"),n=i.n(s);n.a},1771:function(e,t,i){var s={"./hamburger_Menu.png":"dec8","./hamburger_menu.svg":"3d5e","./logo.svg":"9b19","./pictureUnknown.png":"4ccf","./pictureUnknown.svg":"9eac","./search-icon.svg":"d8e7","./social_network_icon.svg":"9494"};function n(e){var t=a(e);return i(t)}function a(e){if(!i.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=a,e.exports=n,n.id="1771"},"1bfb":function(e,t,i){},2168:function(e,t,i){"use strict";var s=i("de36"),n=i.n(s);n.a},2698:function(e,t,i){},"3d5e":function(e,t,i){e.exports=i.p+"img/hamburger_menu.440ed785.svg"},"412e":function(e,t,i){},"4a71":function(e,t,i){"use strict";var s=i("9e73"),n=i.n(s);n.a},"4ccf":function(e,t,i){e.exports=i.p+"img/pictureUnknown.4b864516.png"},5644:function(e,t,i){},"5b5a":function(e,t,i){},"61ab":function(e,t,i){},"68de":function(e,t,i){},6929:function(e,t,i){},"6e92":function(e,t,i){"use strict";var s=i("6f31"),n=i.n(s);n.a},"6f31":function(e,t,i){},"6fb9":function(e,t,i){"use strict";var s=i("61ab"),n=i.n(s);n.a},8047:function(e,t,i){"use strict";var s=i("6929"),n=i.n(s);n.a},"82c0":function(e,t,i){"use strict";var s=i("c7e9"),n=i.n(s);n.a},"82ea":function(e,t,i){"use strict";var s=i("fc27"),n=i.n(s);n.a},9494:function(e,t,i){e.exports=i.p+"img/social_network_icon.b1e5b4e3.svg"},"9b19":function(e,t,i){e.exports=i.p+"img/logo.b5093752.svg"},"9e73":function(e,t,i){},"9eac":function(e,t,i){e.exports=i.p+"img/pictureUnknown.00e19368.svg"},a553:function(e,t,i){},a859:function(e,t,i){"use strict";var s=i("5644"),n=i.n(s);n.a},a98b:function(e,t,i){"use strict";var s=i("68de"),n=i.n(s);n.a},c7e9:function(e,t,i){},cd49:function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("router-view")},a=[],r=i("2877"),o={},c=Object(r["a"])(o,n,a,!1,null,null,null),l=c.exports,u=i("8c4f"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main-homepage"},[s("header",[e._m(0),e.windowScreen<1024?s("div",{staticClass:"hamburger-menu"},[s("div",{staticClass:"hamburger-menu-area",attrs:{id:"dropDownMenu"}},[s("div",{staticClass:"hamburger-menu-area-container-list",class:{"hidden-element":e.menuVisible}},[e._m(1)]),s("img",{class:{"hidden-element":!e.menuVisible},attrs:{src:i("3d5e"),alt:"picture-menu"},on:{click:e.showMenu}})])]):s("div",{staticClass:"link-sign-up"},[e._m(2)])]),s("main",[s("div",{staticClass:"wrapper-rewiews-section"},[s("article",{staticClass:"main-reviews"},[s("div",{staticClass:"main-reviews-container"},[e._m(3),s("SlideShowReview")],1)]),e._m(4)])]),s("footer",[s("div",{staticClass:"wrapper-content-footer"},[s("router-link",{attrs:{to:"/listusers"}},[s("div",[s("p",[e._v("List Users")])])]),e._m(5)],1)])])},p=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"logo"},[s("img",{attrs:{src:i("9b19")}}),s("div",{staticClass:"title"},[s("h1",[e._v("MyPBlog")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",{staticClass:"hamburger-menu-area-container-list-dropdown-menu"},[i("li",{staticClass:"hamburger-menu-area-container-list-dropdown-menu-container"},[e._v("Sign up")]),i("li",{staticClass:"hamburger-menu-area-container-list-dropdown-menu-container"},[e._v("item 2")]),i("li",{staticClass:"hamburger-menu-area-container-list-dropdown-menu-container"},[e._v("item 3")]),i("li",{staticClass:"hamburger-menu-area-container-list-dropdown-menu-container"},[e._v("item 4")]),i("li",{staticClass:"hamburger-menu-area-container-list-dropdown-menu-container"},[e._v("item 5")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"link-sign-up-container"},[i("a",{attrs:{href:"###"}},[e._v("Sign Up")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-reviews-container-title"},[i("h2",[e._v("Some reviews of our systems")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"section-sign-in"},[i("form",{staticClass:"section-sign-in-form"},[i("div",{staticClass:"section-sign-in-form-title-phrase-Intro"},[i("div",{staticClass:"section-sign-in-form-title-phrase-Intro-title"},[i("h2",[e._v("Join now")])]),i("div",{staticClass:"section-sign-in-form-title-phrase-Intro-phrase-Intro"},[i("p",[e._v("Join now, enjoy the experience of share thoughts with the world.")])])]),i("div",{staticClass:"section-sign-in-form-input-area"},[i("input",{attrs:{type:"text",id:"emailAdress",placeholder:"Your email adress"}}),i("input",{attrs:{type:"text",id:"yourPass",placeholder:"Your password"}}),i("input",{attrs:{type:"Submit",value:"Sign In"}})])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("div",{staticClass:"Title-icons"},[s("h3",[e._v("Social networks:")])]),s("div",{staticClass:"container-models-social-network-icon"},[s("img",{attrs:{src:i("9494"),alt:"social_media_link"}}),s("img",{attrs:{src:i("9494"),alt:"social_media_link"}}),s("img",{attrs:{src:i("9494"),alt:"social_media_link"}})])])}],m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"template-card"},[s("div",{staticClass:"main-card"},[s("div",{staticClass:"main-review-text-box"},[s("div",{staticClass:"main-review-text-box-paragraph"},[s("p",[e._v(e._s(e.review))])])]),s("div",{staticClass:"container-picture-box"},[s("div",{staticClass:"container-picture-box-picture"},[s("img",{attrs:{src:i("1771")("./"+e.picturePath),alt:"picture-user"}})]),s("div",{staticClass:"container-picture-box-title"},[s("p",[e._v(e._s(e.userName))])])])])])},h=[],f={props:{userName:{type:String,default:"Unknown user"},review:{type:String,default:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit doloremque omnis in ex harum, tenetur laborum a,quod nihil quasi. Similique ea quae autem iusto commodi repellat rem incidunt."},picturePath:{type:String,default:"pictureUnknown.svg"}}},v=f,w=(i("e60d"),Object(r["a"])(v,m,h,!1,null,null,null)),g=w.exports,b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-reviews-container-slide-reviews"},[i("button",{on:{click:e.previousSlide}},[e._v(" ❮")]),i("div",{staticClass:"main-reviews-container-slide-reviews-card-area"},e._l(e.listReviews,(function(e){return i("Card",{key:e.id,class:{"hidden-element":e.notVisibility},attrs:{review:e.review,userName:e.UserNameReviews}})})),1),i("button",{on:{click:e.nextSlide}},[e._v("❯")]),i("div",{staticClass:"main-reviews-container-slide-reviews-options-cards"},[i("span",{staticClass:"main-reviews-container-slide-reviews-options-cards-link-dot",class:{"active-span":!this.listReviews[0].notVisibility},on:{click:function(t){return e.changeToSlide(0)}}}),i("span",{staticClass:"main-reviews-container-slide-reviews-options-cards-link-dot",class:{"active-span":!this.listReviews[1].notVisibility},on:{click:function(t){return e.changeToSlide(1)}}}),i("span",{staticClass:"main-reviews-container-slide-reviews-options-cards-link-dot",class:{"active-span":!this.listReviews[2].notVisibility},on:{click:function(t){return e.changeToSlide(2)}}})])])},C=[],_=(i("4160"),i("159b"),{name:"SlideShowReview",components:{Card:g},data:function(){return{actualSlideShowed:0,sizeListReviews:3,listReviews:[{review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ullam praesentium eum repudiandae magni dignissimos aspernatur accusamus quam fugiat. Deleniti, earum eligendi. Et consequatur fugit suscipit blanditiis laborum iure aspernatur.",UserNameReviews:"Unknown user 1",id:0,notVisibility:!1},{review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ullam praesentium eum repudiandae magni dignissimos aspernatur accusamus quam fugiat. Deleniti, earum eligendi. Et consequatur fugit.",UserNameReviews:"Unknown user 2",id:1,notVisibility:!0},{review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ullam praesentium eum repudiandae magni dignissimos aspernatur accusamus quam fugiat. Deleniti, earum eligendi. Et consequatur fugit suscipit blanditiis laborum iure aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ullam praesentium eum repudiandae magni dignissimos aspernatur accusamus quam fugiat. Deleniti, earum eligendi. Et consequatur fugit suscipit blanditiis laborum iure aspernatur.",UserNameReviews:"Unknown user 3",id:2,notVisibility:!0}]}},methods:{nextSlide:function(){this.actualSlideShowed==this.sizeListReviews-1?(this.actualSlideShowed=0,this.listReviews[this.sizeListReviews-1].notVisibility=!0,this.listReviews[0].notVisibility=!1):(this.listReviews[this.actualSlideShowed].notVisibility=!0,this.actualSlideShowed++,this.listReviews[this.actualSlideShowed].notVisibility=!1)},previousSlide:function(){0==this.actualSlideShowed?(this.listReviews[0].notVisibility=!0,this.actualSlideShowed=this.sizeListReviews-1,this.listReviews[this.actualSlideShowed].notVisibility=!1):(this.listReviews[this.actualSlideShowed].notVisibility=!0,this.actualSlideShowed--,this.listReviews[this.actualSlideShowed].notVisibility=!1)},hideAllSlides:function(){this.listReviews.forEach((function(e){e.notVisibility=!0}))},changeToSlide:function(e){this.listReviews[this.actualSlideShowed].notVisibility=!0,this.actualSlideShowed=e,this.listReviews[e].notVisibility=!1}}}),S=_,y=(i("0907"),Object(r["a"])(S,b,C,!1,null,null,null)),U=y.exports,k={name:"Homepage",components:{Card:g,SlideShowReview:U},data:function(){return{menuVisible:!0,iconVisible:!1,windowScreen:window.innerWidth}},methods:{showMenu:function(e){e.preventDefault(),this.menuVisible=!this.menuVisible},updateSizeScreen:function(){this.windowScreen=window.innerWidth},ItsMobile:function(){return this.windowScreen<1024},CheckIfClickInsideOrInChildMenu:function(e,t){return e!==t&&!e.contains(t)},closeMenu:function(e){e.preventDefault();var t=document.getElementById("dropDownMenu"),i=e.target;this.ItsMobile()&&!1===this.menuVisible&&this.CheckIfClickInsideOrInChildMenu(t,i)&&(this.menuVisible=!this.menuVisible)}},created:function(){window.addEventListener("resize",this.updateSizeScreen),window.addEventListener("click",this.closeMenu)},destroyed:function(){window.removeEventListener("resize",this.updateSizeScreen),window.removeEventListener("click",this.closeMenu)}},P=k,A=(i("fc54"),Object(r["a"])(P,d,p,!1,null,null,null)),L=A.exports,E=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-user"},[i("header",[i("div",{staticClass:"area-logo"},[i("LogoComponent")],1)]),i("main",{staticClass:"main-area"},[i("div",{staticClass:"area-search"},[i("SearchUserArea",{on:{searchUser:e.updateQuery}})],1),i("div",{staticClass:"results-search"},[i("LoadAndSearchUsers",{attrs:{querySearch:e.searchQuery}})],1)]),i("footer",[i("FooterComponent")],1)])},O=[],x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("router-link",{staticClass:"redirect",attrs:{to:{name:"Home"}}},[s("div",{staticClass:"main-logo"},[s("div",{staticClass:"logo"},[s("img",{attrs:{src:i("1771")("./"+e.path)}}),s("div",{staticClass:"title"},[s("h1",[e._v("MyPBlog")])])])])])},R=[],j={name:"LogoComponent",props:{path:{type:String,default:"logo.svg"}}},q=j,N=(i("82ea"),Object(r["a"])(q,x,R,!1,null,null,null)),V=N.exports,$=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-footer"},[i("div",{staticClass:"wrapper-content-footer"},[i("router-link",{attrs:{to:"/contact"}},[i("div",{staticClass:"page-contact"},[i("p",[e._v("Contact")])])]),e._m(0)],1)])},I=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("div",{staticClass:"Title-icons"},[s("h3",[e._v("Social networks:")])]),s("div",{staticClass:"container-models-social-network-icon"},[s("img",{attrs:{src:i("9494"),alt:"social_media_link"}}),s("img",{attrs:{src:i("9494"),alt:"social_media_link"}}),s("img",{attrs:{src:i("9494"),alt:"social_media_link"}})])])}],M={name:"FooterComponent"},z=M,T=(i("4a71"),Object(r["a"])(z,$,I,!1,null,null,null)),D=T.exports,F=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-area"},[i("div",{staticClass:"main-area-input-search"},[e._m(0),i("div",{staticClass:"main-area-input-search-bar"},[i("input",{attrs:{type:"search",id:"searchArea"}}),i("a",{on:{click:function(t){t.preventDefault(),e.$emit("searchUser",e.collectContentInput())}}})])])])},Y=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-area-input-search-title"},[i("h2",[e._v("Search for a user:")])])}],B={name:"SearchUserArea",methods:{collectContentInput:function(){return document.getElementById("searchArea").value}}},Q=B,H=(i("82c0"),Object(r["a"])(Q,F,Y,!1,null,null,null)),J=H.exports,W=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main-load-and-search-users"},[e.searchRunning?s("ul",{staticClass:"main-load-and-search-users-area-profile"},e._l(e.contentConsultUsersLinks,(function(t){return s("li",{key:t.id,staticClass:"main-load-and-search-users-area-profile-profile-card"},[s("router-link",{attrs:{to:{name:"User",params:{idUser:t.id}}}},[s("div",{staticClass:"container-profile"},[s("div",{staticClass:"container-profile-pic"},[s("img",{attrs:{src:i("1771")("./"+e.picturePath),alt:"picture-user"}})]),s("div",{staticClass:"container-profile-name"},[s("p",[e._v(e._s(t.name))])])])])],1)})),0):e._e()])},G=[],X=i("bc3a"),K=i.n(X),Z={name:"LoadAndSearchUsers",props:{querySearch:{type:String,default:""}},data:function(){return{contentConsultUsersLinks:[],picturePath:"pictureUnknown.svg",searchRunning:!1}},watch:{querySearch:function(e,t){this.updateConsultContent(e),this.searchRunning=!0}},methods:{updateConsultContent:function(e){var t=this;K()({url:"https://jsonplaceholder.typicode.com/users",method:"POST",data:JSON.stringify({name:e}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return t.contentConsultUsersLinks.push(e.data)}))["catch"]((function(e){console.log("Error detected:".concat(e)),alert("Error detected please reload the page or try again later")}))}}},ee=Z,te=(i("2168"),Object(r["a"])(ee,W,G,!1,null,null,null)),ie=te.exports,se={name:"MainUser",data:function(){return{searchQuery:""}},components:{LoadAndSearchUsers:ie,SearchUserArea:J,LogoComponent:V,FooterComponent:D},methods:{updateQuery:function(e){this.searchQuery=e}}},ne=se,ae=(i("a98b"),Object(r["a"])(ne,E,O,!1,null,null,null)),re=ae.exports,oe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-user"},[e.state?i("div",{staticClass:"main-loader"},[i("LoaderAnimation")],1):e._e(),e.notState?i("header",[i("div",{staticClass:"main-logo"},[i("LogoComponent")],1),i("div",{staticClass:"wrapper-main-profile"},[i("div",{staticClass:"main-profile"},[i("ProfileUser",{attrs:{idProfile:e.$route.params.idUser.toString(),numberOfPublishedPosts:this.propNumberPosts}})],1)])]):e._e(),e.notState?i("main",[i("section",{staticClass:"main-user-posts-area"},[i("div",{staticClass:"main-user-posts-area-arr"},e._l(e.arrPosts,(function(e){return i("div",{key:e.id,staticClass:"main-user-posts-area-arr-element"},[i("UserPost",{attrs:{publishedPost:e}})],1)})),0)])]):e._e(),e.notState?i("footer",[i("FooterComponent")],1):e._e()])},ce=[],le=(i("26e9"),i("fb6a"),i("4795"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("article",{class:{"main-profile-user":!e.state.hidden,"pic-showed":e.state.hidden}},[s("div",{staticClass:"main-profile-user-pic",on:{click:e.changeState}},[s("img",{attrs:{src:i("1771")("./"+e.profile.picPath),alt:"pic-profile"}})]),e.state.hidden?s("div",{staticClass:"pic-showed-empty"}):s("div",{staticClass:"main-profile-user-info-profile"},[s("div",{staticClass:"main-profile-user-info-profile-wrapper"},[s("span",[e._v("Name: "+e._s(e.profile.name))])]),s("div",{staticClass:"main-profile-user-info-profile-wrapper"},[s("span",[e._v("Unique Id: "+e._s(e.profile.id))])]),s("div",{staticClass:"main-profile-user-info-profile-wrapper"},[s("span",[e._v("Published posts: "+e._s(e.profile.numberPost))])])])])}),ue=[],de=(i("b0c0"),i("a9e3"),{name:"ProfileUser",props:{numberOfPublishedPosts:{type:Number,default:0},idProfile:{type:String}},computed:{NumberOfPublishedPosts:function(){this.profile.numberPost=this.numberOfPublishedPosts}},data:function(){return{profile:{picPath:"pictureUnknown.svg",name:"",id:"",numberPost:this.numberOfPublishedPosts},state:{hidden:!0}}},methods:{loadProfileInfos:function(e){var t=e.length,i=!0,s=0;while(i){if(s>t-1)i=!1;else{var n=e[s];Number(n.id)===Number(this.idProfile)&&(this.profile.name=n.name,this.profile.id=n.id,i=!1)}s++}},consultProfile:function(){var e=this;K()({method:"get",url:"https://jsonplaceholder.typicode.com/users",headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(t){return e.loadProfileInfos(t.data)}))["catch"]((function(e){return console.log("An error occur in profile user ".concat(e))}))},changeState:function(){this.state.hidden=!this.state.hidden}},mounted:function(){this.consultProfile()}}),pe=de,me=(i("6e92"),Object(r["a"])(pe,le,ue,!1,null,null,null)),he=me.exports,fe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-user-post"},[i("div",{staticClass:"main-user-post-title"},[i("h3",[e._v(e._s(e.publishedPost.title))])]),i("div",{staticClass:"main-user-post-body"},[i("p",[e._v(e._s(e.publishedPost.body))])]),i("div",{staticClass:"main-user-post-id"},[i("p",[e._v(e._s(e.publishedPost.id))])])])},ve=[],we={name:"UserPost",props:{publishedPost:{type:Object,default:{UserId:0,id:0,title:"lorem ipsum",body:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"}}}},ge=we,be=(i("8047"),Object(r["a"])(ge,fe,ve,!1,null,null,null)),Ce=be.exports,_e=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Se=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-pre-loader"},[i("div",{staticClass:"main-pre-loader-wrapper"},[i("div",{staticClass:"main-pre-loader-wrapper-sphere second"}),i("div",{staticClass:"main-pre-loader-wrapper-sphere second"}),i("div",{staticClass:"main-pre-loader-wrapper-sphere third"}),i("div",{staticClass:"main-pre-loader-wrapper-sphere first"}),i("div",{staticClass:"main-pre-loader-wrapper-sphere third"}),i("div",{staticClass:"main-pre-loader-wrapper-sphere first"}),i("div",{staticClass:"main-pre-loader-wrapper-sphere four"}),i("div",{staticClass:"main-pre-loader-wrapper-sphere four"})])])}],ye={name:"LoaderAnimation"},Ue=ye,ke=(i("fb7f"),Object(r["a"])(Ue,_e,Se,!1,null,null,null)),Pe=ke.exports,Ae={name:"User",components:{LoaderAnimation:Pe,UserPost:Ce,LogoComponent:V,ProfileUser:he,FooterComponent:D},data:function(){return{widthScreen:window.innerWidth,numberPosts:0,arrPosts:{},state:!0,notState:!1,propNumberPosts:0}},filters:{reverseArr:function(e){return e.slice().reverse()}},watch:{numberPosts:function(){this.propNumberPosts=this.numberPosts}},methods:{getNumberPosts:function(){return this.numberPosts},updateSizeScreen:function(){this.widthScreen=window.innerWidth},consultPosts:function(){var e=this;K.a.defaults.timeout=1e4,K()({method:"get",url:"https://jsonplaceholder.typicode.com/users/".concat(this.$route.params.idUser,"/posts"),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(t){e.numberPosts=t.data.length,e.arrPosts=t.data.reverse()}))["catch"]((function(e){window.alert("An error it happened please try later, no answer from API."),console.log(e)}))},startLoading:function(){var e=this,t=2e4;setTimeout((function(){e.state=!e.state,e.notState=!e.notState}),t)}},mounted:function(){window.addEventListener("resize",this.updateSizeScreen),this.consultPosts(),this.startLoading()},destroyed:function(){window.removeEventListener("resize",this.updateSizeScreen)}},Le=Ae,Ee=(i("db8b"),Object(r["a"])(Le,oe,ce,!1,null,null,null)),Oe=Ee.exports,xe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main"},[i("header",[i("div",{staticClass:"area-logo"},[i("LogoComponent")],1)]),i("main",[i("div",{staticClass:"list-btn"},[i("BtnListUsers",{on:{requestedList:e.genList}})],1),i("div",{staticClass:"list-search"},[i("MountListUsers",{attrs:{searchRequested:e.searchRequested}})],1)]),i("footer",[i("FooterComponent")],1)])},Re=[],je=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main"},[i("div",{staticClass:"main-wrapper"},[i("button",{on:{click:function(t){return e.$emit("requestedList")}}},[e._v("List Users")])])])},qe=[],Ne={name:"BtnListUsers"},Ve=Ne,$e=(i("a859"),Object(r["a"])(Ve,je,qe,!1,null,null,null)),Ie=$e.exports,Me=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main-load-and-search-users"},[e.searchRequested?s("ul",{staticClass:"main-load-and-search-users-area-profile"},e._l(e.contentConsultUsersLinks,(function(t){return s("li",{key:t.id,staticClass:"main-load-and-search-users-area-profile-profile-card"},[s("router-link",{attrs:{to:{name:"User",params:{idUser:t.id}}}},[s("div",{staticClass:"container-profile"},[s("div",{staticClass:"container-profile-pic"},[s("img",{attrs:{src:i("1771")("./"+e.picturePath),alt:"picture-user"}})]),s("div",{staticClass:"container-profile-name"},[s("p",[e._v(e._s(t.name))])])])])],1)})),0):e._e()])},ze=[],Te={name:"MountListUsers",props:{searchRequested:{type:Boolean,default:!1}},data:function(){return{contentConsultUsersLinks:[],picturePath:"pictureUnknown.svg"}},methods:{getUsers:function(){var e=this;K()({method:"get",url:"https://jsonplaceholder.typicode.com/users",headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(t){return e.contentConsultUsersLinks=t.data}))["catch"]((function(e){return console.log("Error detected:".concat(e))}))}},mounted:function(){this.getUsers()}},De=Te,Fe=(i("ef28"),Object(r["a"])(De,Me,ze,!1,null,null,null)),Ye=Fe.exports,Be={name:"ListUsers",props:{},data:function(){return{searchQuery:"",searchRequested:!1}},components:{MountListUsers:Ye,BtnListUsers:Ie,LogoComponent:V,FooterComponent:D},methods:{updateQuery:function(e){this.searchQuery=e},genList:function(){this.searchRequested=!0}}},Qe=Be,He=(i("f6c6"),Object(r["a"])(Qe,xe,Re,!1,null,null,null)),Je=He.exports,We=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-not-Found"},[i("header",[i("LogoComponent")],1),e._m(0),i("footer",[i("FooterComponent")],1)])},Ge=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("main",[i("p",[e._v("Sorry, This Page does not Exist 404 error.")])])}],Xe={name:"NotFound",components:{FooterComponent:D,LogoComponent:V}},Ke=Xe,Ze=(i("6fb9"),Object(r["a"])(Ke,We,Ge,!1,null,null,null)),et=Ze.exports;s["a"].use(u["a"]);var tt=[{path:"/",name:"Home",component:L},{path:"/researchuser",name:"Researchuser",component:re},{path:"/listusers",name:"listusers",component:Je},{path:"/user/:idUser",name:"User",component:Oe},{path:"/about",name:"Aboutus",component:et},{path:"/contact",name:"Contact",component:et},{path:"*",name:"Notfound",component:et}],it=new u["a"]({mode:"history",base:"/blogsystem/",routes:tt}),st=it;s["a"].config.productionTip=!1,new s["a"]({router:st,render:function(e){return e(l)}}).$mount("#app")},d8e7:function(e,t,i){e.exports=i.p+"img/search-icon.9e787897.svg"},db8b:function(e,t,i){"use strict";var s=i("a553"),n=i.n(s);n.a},de36:function(e,t,i){},dec8:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAjCAYAAADv0ujUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADkSURBVHgB7ZbhCYMwEIWf4gDZoI7iKk6gG4gT6AY6giN0lHQDN0hzVkNp/zS0V3NwHzz0IMrjOC4P8zw7Y4wDkKzKsnTjONI7QEXKZl9k8nVdIYppmlzqXaaRHYZhG4nMeSCEzJNDGGqYGzXMjRrmRg1zUyzLgrqu8c9M4aNAzHH4qxlt24aPk84ReMoTkJTWgk8JaY3Udd15ac1aG3N8m2ESpTWNl9yoYW7UMDdqmJuClnjf99HL/BOOhf+L/zRN8yikhJ/d59YBEYZ3XfLQ6sSpqooet+yowYPZ9S3W6wpFeecOy0pnGfjS4P8AAAAASUVORK5CYII="},e60d:function(e,t,i){"use strict";var s=i("e9ec"),n=i.n(s);n.a},e9ec:function(e,t,i){},ef28:function(e,t,i){"use strict";var s=i("1bfb"),n=i.n(s);n.a},f6c6:function(e,t,i){"use strict";var s=i("2698"),n=i.n(s);n.a},fb7f:function(e,t,i){"use strict";var s=i("412e"),n=i.n(s);n.a},fc27:function(e,t,i){},fc54:function(e,t,i){"use strict";var s=i("075c"),n=i.n(s);n.a}});
//# sourceMappingURL=app.cd23c351.js.map