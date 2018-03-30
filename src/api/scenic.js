/*
景点配置模块api
* */
import axios from '@/http'



const scenic = {
    getAllScenic () {
        return axios ({
            method: 'GET',
            url: '/droreone/scenicspot'
        })

    },
    updateScenic (params) {
        return axios ({
            method: 'PUT',
            url: '/droreone/scenicspot ',
            params
        })
    },
    createScenic (params) {
        return axios ({
            method: 'POST',
            url: '/droreone/scenicspot',
            params
        })
    },
    deleteScenic (par) {
        console.log(par, '这是传递的id')
        return axios ({
            method: 'DELETE',
            url: '/droreone/scenicspot',
            data:{
                id: par.id
            }
        })
    }
}

export default scenic
