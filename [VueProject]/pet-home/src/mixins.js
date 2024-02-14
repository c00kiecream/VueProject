// eslint-disable-next-line
/* eslint-disable */
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default {
    methods: {
        async $api(url, data) {
            return (await axios({
                method: 'post',
                url,
                data
            }).catch(e => {
                console.log(e);
            })).data;
        },
        $base64(file) {
            return new Promise(resolve => {
                var a = new FileReader();
                a.onload = e => resolve(e.target.result);
                a.readAsDataURL(file);
            })
        }
    }
}
