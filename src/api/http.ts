import axios,{type AxiosInstance,type AxiosRequestConfig} from 'axios'

class Serve{
    instance:AxiosInstance;
    constructor(config:AxiosRequestConfig){
        this.instance=axios.create(config);

        this.instance.interceptors.request.use((config)=>{
            let token = localStorage.getItem('token')
            if(token){
                config.headers.Authorization=`Bearer ${token}`
          }

            return config
        })
        this.instance.interceptors.response.use((res)=>{
            return res.data
        })
    }

    get(url:string,params={}){
        return this.instance.get(url,{params})
    }

    post(url:string,data={}){
        return this.instance.post(url,data)
    }

    put(url:string,data={}){
        return this.instance.put(url,data)
    }

    delete(url:string,data={}){
        return this.instance.delete(url,data)
    }
    
}

export default new Serve({
    baseURL:'http://qnadmin.9yuecloud.com/dev-api',
    timeout:5000

})