(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1569:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(13),__webpack_require__(75),__webpack_require__(114),__webpack_require__(55);var _handleSendClick,asyncToGenerator=__webpack_require__(52),QMessageBox_MessageBoxFormTestvue_type_script_lang_js_={data:function data(){return{isSending:!1,formModel:{name:"Testname"},rules:{name:{required:!0,message:"Please input name",trigger:"blur"}}}},methods:{handleCancelClick:function handleCancelClick(){this.$emit("close",{action:"cancel"})},handleSendClick:(_handleSendClick=Object(asyncToGenerator.a)(regeneratorRuntime.mark((function _callee(){var promise,payload;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return this.isSending=!0,promise=function promise(){return new Promise((function(resolve){setTimeout((function(){return resolve("done")}),1e3)}))},_context.prev=2,_context.next=5,promise();case 5:payload=_context.sent,this.$emit("close",{action:"confirm",payload:payload}),_context.next=12;break;case 9:_context.prev=9,_context.t0=_context.catch(2),console.log(_context.t0);case 12:this.isSending=!1;case 13:case"end":return _context.stop()}}),_callee,this,[[2,9]])}))),function handleSendClick(){return _handleSendClick.apply(this,arguments)})}},componentNormalizer=__webpack_require__(4);const __vuedocgen_export_0=Object(componentNormalizer.a)(QMessageBox_MessageBoxFormTestvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("q-form",{ref:"form",attrs:{model:_vm.formModel,rules:_vm.rules}},[_c("div",{staticClass:"q-message-box__content"},[_c("q-form-item",{attrs:{prop:"name",label:"Name",required:""}},[_c("q-input",{model:{value:_vm.formModel.name,callback:function($$v){_vm.$set(_vm.formModel,"name",$$v)},expression:"formModel.name"}})],1)],1),_vm._v(" "),_c("div",{staticClass:"q-message-box__actions"},[_c("q-button",{attrs:{loading:_vm.isSending},on:{click:_vm.handleSendClick}},[_vm._v("\n      Send\n    ")]),_vm._v(" "),_c("q-button",{attrs:{theme:"secondary"},on:{click:_vm.handleCancelClick}},[_vm._v("\n      Cancel\n    ")])],1)])}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"MessageBoxFormTest",description:"",tags:{},events:[{name:"close",type:{names:["undefined"]}}]}}}]);
//# sourceMappingURL=4.76ff7db02db02604e3af.bundle.js.map