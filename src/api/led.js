/*
* LED模块api
* */

import axios from '@/http'
import {getUrl} from "./path";

const led={
    getAllLed(){
        return axios({
            method:'GET',
            url:getUrl('/device?deviceType=4')
        })
    },
    updateLed(params){
        return axios({
            method:'PUT',
            url:getUrl('/device'),
            data:{
                type:4,
                devices:params
            }
        })
    },
    createLed(params){
        return axios({
            method:'POST',
            url:getUrl('/device'),
            data:{
                type:4,
                devices:params
            }
        })
    },
    deleteLed(par){
        return axios({
            method:'DELETE',
            url:getUrl('/device'),
            data:{
                type:4,
                ids:par
            }
        })
    }

}

export default led




