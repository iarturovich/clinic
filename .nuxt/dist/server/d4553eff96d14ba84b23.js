exports.ids=[16],exports.modules={125:function(t,e,r){var content=r(130);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(3).default;t.exports.__inject__=function(t){n("2b54b372",content,!0,t)}},126:function(t,e,r){var content=r(134);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(3).default;t.exports.__inject__=function(t){n("4bf98f52",content,!0,t)}},129:function(t,e,r){"use strict";r.r(e);var n=r(125),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},130:function(t,e,r){(t.exports=r(2)(!1)).push([t.i,".card[data-v-66533ac3]{display:flex;justify-content:space-around;flex-wrap:wrap}.card-item[data-v-66533ac3]{width:40%;margin-top:2rem;height:100%}.post-img[data-v-66533ac3]{background-image:contain;width:100%}@media only screen and (max-width:942px){.card[data-v-66533ac3]{width:100%;flex-direction:column;align-items:center}.card-item[data-v-66533ac3]{width:60%}}@media only screen and (max-width:700px){.card-item[data-v-66533ac3]{width:80%}}",""])},133:function(t,e,r){"use strict";r.r(e);var n=r(126),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},134:function(t,e,r){(t.exports=r(2)(!1)).push([t.i,".service[data-v-db11482c]{padding-top:4rem}.wrap[data-v-db11482c]{width:50%;margin:2rem auto -2rem}.wrap ol[data-v-db11482c]{-moz-column-count:2;-webkit-column-count:2;column-count:2;list-style-type:none;height:auto}li[data-v-db11482c]{margin:8px 15%}.link[data-v-db11482c]{color:#000}.link[data-v-db11482c]:hover{color:#ccc}@media only screen and (max-width:942px){.wrap[data-v-db11482c]{width:500px}}@media only screen and (max-width:550px){.wrap[data-v-db11482c]{width:100%}}",""])},147:function(t,e,r){var content=r(183);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(3).default;t.exports.__inject__=function(t){n("7d7c1096",content,!0,t)}},148:function(t,e,r){"use strict";var n={props:{services:Array}},o=r(1);var component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"service"},[t._ssrNode('<h1 style="text-align: center; color: #2a7db0;" data-v-db11482c>Услуги</h1> '),r("el-card",{staticClass:"wrap"},[r("ol",t._l(t.services,function(e){return r("li",{key:e._id},[r("nuxt-link",{staticClass:"link",attrs:{to:"/service/"+e._id}},[t._v(t._s(e.title))])],1)}),0)])],2)},[],!1,function(t){var e=r(133);e.__inject__&&e.__inject__(t)},"db11482c","afe605b2");e.a=component.exports},149:function(t,e,r){"use strict";var n={props:{news:Array},methods:{openPost(t){this.$router.push(`/news/${t}`)}}},o=r(1);var component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{"padding-top":"4rem"}},[t._ssrNode('<h1 style="text-align: center; color: #2a7db0;" data-v-66533ac3>Новости</h1> '),t._ssrNode('<div class="card" data-v-66533ac3>',"</div>",t._l(t.news,function(e){return r("el-card",{key:e._id,staticClass:"card-item",attrs:{shadow:"hover","body-style":{padding:0}}},[r("header",{attrs:{slot:"header"},slot:"header"},[r("h3",[t._v(t._s(e.title))]),t._v(" "),r("small",[t._v(t._s((new Date).toLocaleString()))])]),t._v(" "),r("div",{staticClass:"post-body"},[r("img",{staticClass:"post-img",attrs:{src:e.imageUrl,alt:""}})]),t._v(" "),r("footer",{staticClass:"post-footer"},[r("el-button",{staticStyle:{margin:"1rem"},attrs:{round:""},on:{click:function(r){return t.openPost(e._id)}}},[t._v("Открыть")])],1)])}),1)],2)},[],!1,function(t){var e=r(129);e.__inject__&&e.__inject__(t)},"66533ac3","e7fe562e");e.a=component.exports},182:function(t,e,r){"use strict";r.r(e);var n=r(147),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},183:function(t,e,r){(t.exports=r(2)(!1)).push([t.i,".slider[data-v-38f571e0]{width:75%;margin:0 auto -2rem}.carousel[data-v-38f571e0]{height:100%;padding-top:5rem;display:flex;justify-content:center}.slideImg[data-v-38f571e0]{height:500px;transition:all .5s}button[data-v-38f571e0]{width:40px;height:40px;text-align:center;line-height:39px;border-radius:50px;border:none;background:rgba(170,144,144,.288);position:absolute;z-index:10;top:50%;color:#fff;transition:.5s}button[data-v-38f571e0]:hover{background:rgba(92,73,73,.288);cursor:pointer;transition:.5s}.left[data-v-38f571e0]{left:10%}.rigth[data-v-38f571e0]{right:10%}@media only screen and (max-width:860px){.slider[data-v-38f571e0]{width:90%}.slideImg[data-v-38f571e0]{height:auto}}@media only screen and (max-width:790px){.slider[data-v-38f571e0]{width:100%}.carousel[data-v-38f571e0]{padding-top:2rem}}",""])},184:function(t,e,r){"use strict";r.r(e);var n={data:()=>({path:"2650299.jpg",photos:["2650299.jpg","doktor-1024x676.jpg","doctor-010.png"],number:0,slideImg:null}),mounted(){this.slideImg=document.getElementsByClassName("slideImg")[0].style},methods:{leftHandler(){0===this.number?(this.path=this.photos[this.photos.length-1],this.number=this.photos.length-1):(this.number,this.photos.length,this.number--,this.path=this.photos[this.number])},rigthHandler(){0===this.number?(this.number++,this.path=this.photos[this.number]):this.number===this.photos.length-1?(this.path=this.photos[0],this.number=0):(this.number++,this.path=this.photos[this.number])}}},o=r(1);var c=Object(o.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"slider"},[this._ssrNode('<div class="carousel" data-v-38f571e0><img'+this._ssrAttr("src",this.path)+' alt class="slideImg" data-v-38f571e0> <button class="left" data-v-38f571e0> ◄ </button> <button class="rigth" data-v-38f571e0> ► </button></div>')])},[],!1,function(t){var e=r(182);e.__inject__&&e.__inject__(t)},"38f571e0","0fe005ae").exports,d=r(148),l=r(149),h={components:{AppCarousel:c,AppServices:d.a,AppPost:l.a},asyncData:async({store:t})=>({services:await t.dispatch("service/fetchService"),news:await t.dispatch("news/fetchNews")})};var f=Object(o.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("app-carousel"),this._ssrNode(" "),e("app-services",{attrs:{services:this.services}}),this._ssrNode(" "),e("app-post",{attrs:{news:this.news}})],2)},[],!1,function(t){},null,"4a6eb0be");e.default=f.exports}};
//# sourceMappingURL=d4553eff96d14ba84b23.js.map