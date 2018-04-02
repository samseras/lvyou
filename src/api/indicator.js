/*
这是指示牌接口api
* */
import axios from '@/http'
import {getUrl} from './path'


const indicator = {
    getAllIndicator () {
        return axios ({
            method: 'GET',
            url: getUrl('/signboard')
        })

    },
    updateIndicator  (params) {
        return axios ({
            method: 'PUT',
            url: getUrl('/signboard'),
            params
        })
    },
    createIndicator  (params) {
        return axios ({
            method: 'POST',
            url: getUrl('/signboard'),
            params
        })
    },
    deleteIndicator (par) {
        console.log(par, '这是传递的id')
        return axios ({
            method: 'DELETE',
            url: getUrl('/signboard'),
            data:{
                id: par
            }
        })
    }
}

export default indicator
