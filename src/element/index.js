//按需加载element
import { Button,
         Select,
         Radio,
         Dialog,
         Loading,
         ColorPicker,
         Message
        } from 'element-ui';

const element = {
    install: function (Vue) {
        Vue.use(Button)
        Vue.use(Select)
        Vue.use(Radio)
        Vue.use(Dialog)
        Vue.use(Loading.directive)
        Vue.use(ColorPicker)
        Vue.component(Message.name, Message)//防止自动弹框
        Vue.prototype.$loading = Loading.service;
        Vue.prototype.$message = Message;
    }
}
export default element