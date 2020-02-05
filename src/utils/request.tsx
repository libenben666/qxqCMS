import axios from 'axios';
import router from 'umi/router'
import { host } from '@/config/setting';

/**
 *
 * @param  {string} api       The URL we want to request
 *
 */

export default function request(api:string) {

    /**
     * host: http://103.45.106.115:3000
     *
     */

    const url = host.url + api;

    return axios(url)
        .then((response: any) => {
            return response;
        })
        .catch((e: { name: any; }) => {
            const status = e.name;
            if (status === 401) {
                // 此处判断为未登录
                // 处理...
                return;
            }
            if (status === 403) {
                // 处理403页面
                return;
            }
            if (status <= 504 && status >= 500) {
                // 处理500页面
                return;
            }
            if (status >= 404 && status < 422) {
                // 处理404页面
                router.push('/404/');
            }
        });
}
