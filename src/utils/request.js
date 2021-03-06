import axios from 'axios'

const ajax = axios.create({
    baseURL:'127.0.0.1:8080',
    timeout:5000
})

ajax.interceptors.request.use(
    config => {
        if (config.method === 'post'){
            config.headers['Content-Type'] = 'application/x-www-form-urlencode';
        }

        if(1){
            config.headers.common['token'] = '234234'
        }

        return config

    },error => {
        console.log(error)
        Promise.reject(error)
    }
);

ajax.interceptors.response.use(
    response => {
        const res = response.data;

        if(response.status !== 200){
            return Promise.reject('error')
        }else{
            if(res.code !== '200'){
                return Promise.reject(res)
            }

            return res
        }

    },error => {
        console.log(error);
        
        return Promise.reject(error)
    }
)

export default ajax