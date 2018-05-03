/*
 调度巡更路线api请求
* */
import axios from '@/http'
import {getUrl} from "./path";



const patrol = {
    getAllPatrol () {
        return axios ({
            method: 'GET',
            url: getUrl('/schedule/inspection')
        })
    },
    createdPatrol (item) {
        return axios ({
            method: 'POST',
            url: getUrl('/schedule/inspection'),
            data:item

        })
    },
    deletePatrol(item){
        return axios ({
            method: 'DELETE',
            url: getUrl('/schedule/inspection'),
            data:{
                ids:item
            }

        })
    },
    updataPatrol(info){
        return axios ({
            method: 'PUT',
            url: getUrl('/schedule/inspection'),
            data:info
        })
    },
}

export default patrol
