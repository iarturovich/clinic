exports.ids=[5],exports.modules={190:function(e,t,r){"use strict";r.r(t);var m={layout:"admin",middleware:["admin-auth"],asyncData:async({store:e,params:t})=>({patient:await e.dispatch("patient/fetchPatientById",t.id)}),data:()=>({loading:!1,form:{name:"",phone:"",email:"",date:"",time:"",comment:""},rules:{name:[{required:!0,message:"Имя не должно быть пустым",trigger:"blur"}],phone:[{required:!0,message:"Введите номер телефона",trigger:"blur"}]}}),mounted(){this.form={...this.patient}},methods:{save(){this.$refs.form.validate(async e=>{if(e)try{this.loading=!0,await this.$store.dispatch("patient/update",this.form),this.$message.success("Запись обновлена"),this.loading=!1}catch(e){this.loading=!1}})}}},o=r(1),component=Object(o.a)(m,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"form",staticStyle:{width:"50%",margin:"4rem auto 0"},attrs:{model:e.form,rules:e.rules},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("h1",{staticClass:"mb"},[e._v("Редактирование записи приема пациента")]),e._v(" "),r("el-form-item",{attrs:{label:"ФИО пациента",prop:"name"}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Телефон",prop:"phone"}},[r("el-input",{model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"E-mail",prop:"email"}},[r("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Время записи"}},[r("el-date-picker",{staticStyle:{width:"140px"},attrs:{type:"date",placeholder:"Дата"},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}}),e._v(" "),r("el-time-picker",{staticStyle:{width:"100px"},attrs:{format:"HH:mm",type:"fixed-time",placeholder:"Время"},model:{value:e.form.time,callback:function(t){e.$set(e.form,"time",t)},expression:"form.time"}})],1),e._v(" "),r("el-form-item",{staticClass:"mb2",attrs:{label:"Комментарий",prop:"comment"}},[r("el-input",{attrs:{type:"textarea",resize:"none",rows:3},model:{value:e.form.comment,callback:function(t){e.$set(e.form,"comment",t)},expression:"form.comment"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit",round:"",loading:e.loading}},[e._v("\n      Сохранить\n    ")])],1)],1)},[],!1,null,null,"74a5b0ab");t.default=component.exports}};
//# sourceMappingURL=f52fcc23d43f1930df88.js.map