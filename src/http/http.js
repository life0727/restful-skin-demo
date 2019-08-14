import axios from 'axios';
import { Message } from 'element-ui';

const errorHandle = (status,msg) => {
    switch (status) {
        case 404:
            Message.success({message:'请求资源不存在'})
        break;
        default:
            console.log(msg)   
    }
}

var instance = axios.create({ timeout: 1000 * 12 });

instance.interceptors.response.use(
    //成功
    res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res), 
    error => {
        const { response } = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围 
            errorHandle(response.status, response.data.message);
            return Promise.reject(response);
        } else {
            // 处理断网的情况
            Message.success({message:error});
            return Promise.reject('dwawwww');
            // if (!window.navigator.onLine) {
            //     console.log('断网了') 
            // } else {
            //     return Promise.reject(error);
            // }
        }
    });

export default instance; 