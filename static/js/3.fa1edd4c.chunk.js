(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{306:function(e,t,s){e.exports={profileInfo:"ProfileInfo_profileInfo__1ovs_",header:"ProfileInfo_header__2jr-s",photo:"ProfileInfo_photo__1jeyv",page_info:"ProfileInfo_page_info__26PKe",row_info:"ProfileInfo_row_info__1pQ9t",info:"ProfileInfo_info__34LPy",contact:"ProfileInfo_contact__263HQ"}},310:function(e,t,s){e.exports={page:"Profile_page__3G1zr",header:"Profile_header__15Tlp",photo:"Profile_photo__vsghj",page_info:"Profile_page_info__2ENJS",row_info:"Profile_row_info__dyNej",info:"Profile_info__3PhXB"}},311:function(e,t,s){e.exports={posts:"MyPosts_posts__imbdZ"}},312:function(e,t,s){e.exports={photo:"Post_photo__3fQAs",author:"Post_author__355K9",content:"Post_content__34sUe",wrap:"Post_wrap__2yBf0",like:"Post_like__3Yu-F"}},313:function(e,t,s){e.exports={like:"Like_like__1mJCS"}},314:function(e,t,s){e.exports={post:"NewPost_post__y4sSa",textarea:"NewPost_textarea__1c2M0"}},315:function(e,t,s){"use strict";s.r(t);var o=s(5),c=s(38),n=s(39),i=s(41),r=s(40),a=s(1),j=s.n(a),l=s(310),u=s.n(l),d=s(104),b=(s.p,s(102)),p=s(306),h=s.n(p),f=s(56),O=s.p+"static/media/user.ccb66e80.jpg",x=s(0),_=function(e){var t=Object(a.useState)(!1),s=Object(d.a)(t,2),o=s[0],c=s[1],n=Object(a.useState)(e.status),i=Object(d.a)(n,2),r=i[0],j=i[1];Object(a.useEffect)((function(){j(e.status)}),[e.status]);return Object(x.jsxs)("div",{children:[!o&&Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"\u0421\u0442\u0430\u0442\u0443\u0441:  "}),Object(x.jsx)("span",{onDoubleClick:function(){c(!0)},children:r||"-------"})]}),o&&Object(x.jsx)("div",{children:Object(x.jsx)("input",{onChange:function(e){j(e.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),e.updateStatus(r)},value:r})})]})},m=s(52),v=s(136),P=s(137),g=s(53),k=s.n(g),N=Object(P.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,s=e.profile,o=e.error;return Object(x.jsxs)("form",{onSubmit:t,children:[o&&Object(x.jsx)("div",{className:k.a.formSummaryError,children:o}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f"}),": ",Object(x.jsx)(v.a,{placeholder:"Full name",name:"fullName",component:m.a})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"\u0412 \u043f\u043e\u0438\u0441\u043a\u0435 \u0440\u0430\u0431\u043e\u0442\u044b"}),":  ",Object(x.jsx)(v.a,{name:"lookingForAJob",component:m.a,type:"checkbox"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438"}),": ",Object(x.jsx)(v.a,{placeholder:"My professional skills",name:"lookingForAJobDescription",component:m.b})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"\u041e\u0431\u043e \u043c\u043d\u0435"}),": ",Object(x.jsx)(v.a,{placeholder:"About me",name:"aboutMe",component:m.b})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),": ",Object.keys(s.contacts).map((function(e){return Object(x.jsx)("div",{className:h.a.contact,children:Object(x.jsxs)("b",{children:[e,": ",Object(x.jsx)(v.a,{placeholder:e,name:"contacts."+e,component:m.a})]})},e)}))]}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})}));var S=function(e){var t=e.profile,s=e.isOwner,o=e.goToEditMode;return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f"}),": ",t.fullName]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"\u0412 \u043f\u043e\u0438\u0441\u043a\u0435 \u0440\u0430\u0431\u043e\u0442\u044b"}),": ",t.lookingForAJob?"yes":"no"]}),t.lookingForAJob&&Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438"}),": ",t.lookingForAJobDescription]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"\u041e\u0431\u043e \u043c\u043d\u0435"}),": ",t.aboutMe]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),": ",Object.keys(t.contacts).map((function(e){return Object(x.jsx)(y,{contactTitle:e,contactValue:t.contacts[e]},e)}))]}),console.log(s),s?Object(x.jsx)("div",{children:Object(x.jsx)("button",{onClick:o,children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})}):Object(x.jsx)("div",{})]})},y=function(e){var t=e.contactTitle,s=e.contactValue;return Object(x.jsxs)("div",{className:h.a.contact,children:[Object(x.jsx)("b",{children:t}),": ",s]})},w=function(e){var t=e.profile,s=e.status,o=e.updateStatus,c=e.isOwner,n=e.savePhoto,i=e.saveProfile,r=(e.userId,Object(a.useState)(!1)),j=Object(d.a)(r,2),l=j[0],u=j[1];if(!t)return Object(x.jsx)(f.a,{});var b=t.photos.large;return b||(b=O),Object(x.jsx)("div",{className:h.a.profileInfo,children:Object(x.jsxs)("div",{className:h.a.page_info,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:h.a.photo,children:Object(x.jsx)("img",{src:b,alt:"photo"})}),c&&Object(x.jsx)("input",{placeholder:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0444\u043e\u0442\u043e",type:"file",onChange:function(e){e.target.files.length&&n(e.target.files[0])}})]}),Object(x.jsxs)("div",{className:h.a.info,children:[Object(x.jsx)("h3",{children:t.fullName}),Object(x.jsx)("div",{children:Object(x.jsx)(_,{status:s,updateStatus:o})}),l?Object(x.jsx)(N,{initialValues:t,profile:t,onSubmit:function(e){i(e).then((function(){u(!1)}))}}):Object(x.jsx)(S,{goToEditMode:function(){u(!0)},profile:t,isOwner:c})]})]})})},I=s(101),A=s(15),C=s(311),F=s.n(C),J=(s.p,s(312)),T=s.n(J),M=s(313),D=s.n(M),E=s(76),U=s(26);var z=function(e){return Object(x.jsxs)("div",{className:D.a.like,children:[Object(x.jsxs)("div",{className:D.a.icon,children:[" ",Object(x.jsx)(U.a,{icon:E.c})]}),Object(x.jsx)("span",{children:e.count})]})};var B=function(e){return Object(x.jsxs)("div",{className:T.a.post,children:[Object(x.jsxs)("div",{className:T.a.wrap,children:[Object(x.jsx)("div",{className:T.a.author,children:Object(x.jsx)("img",{src:b.a,alt:"photo"})}),Object(x.jsx)("div",{className:T.a.content,children:Object(x.jsx)("p",{children:e.message})})]}),Object(x.jsx)("div",{className:T.a.like,children:Object(x.jsx)(z,{count:e.likesCount})})]})},Q=s(314),V=s.n(Q),K=s(103),L=s(72),G=Object(L.a)(10);var H=Object(P.a)({form:"profileAddNewPostForm"})((function(e){return Object(x.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(x.jsx)(v.a,{name:"newPostText",className:V.a.textarea,placeholder:"\u0427\u0442\u043e \u0443 \u0432\u0430\u0441 \u043d\u043e\u0432\u043e\u0433\u043e?",component:m.b,validate:[L.b,G]}),Object(x.jsx)(K.a,{buttonText:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"})]})})),X=function(e){return Object(x.jsx)("div",{className:V.a.post,children:Object(x.jsx)(H,{onSubmit:function(t){e.onAddPost(t.newPostText)}})})};var Y=function(e){var t=e.posts.map((function(e){return Object(x.jsx)(B,{likesCount:e.likesCount,message:e.message},e.id)}));return Object(x.jsxs)("div",{className:F.a.posts,children:[Object(x.jsx)("h3",{children:"\u041c\u043e\u0438 \u043f\u043e\u0441\u0442\u044b"}),Object(x.jsx)(X,{onAddPost:e.addPost}),t]})},Z=Object(A.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(Object(I.a)(t))}}}))(Y);var q=function(e){return Object(x.jsxs)("div",{className:u.a.page,children:[Object(x.jsx)(w,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto,isOwner:e.isOwner,saveProfile:e.saveProfile}),Object(x.jsx)(Z,{})]})},R=s(11),W=s(10),$=function(e){Object(i.a)(s,e);var t=Object(r.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.iserId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(x.jsx)(q,Object(o.a)(Object(o.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,isOwner:!this.props.match.params.iserId}))}}]),s}(j.a.Component);t.default=Object(W.compose)(Object(A.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{setUserProfile:I.g,getProfile:I.c,getStatus:I.d,updateStatus:I.h,savePhoto:I.e,saveProfile:I.f}),R.f)($)}}]);
//# sourceMappingURL=3.fa1edd4c.chunk.js.map