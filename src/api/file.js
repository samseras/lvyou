/*
告警模块api请求
* */
import axios from '@/http'
import {getUrl} from "./path";



const file = {
    getFileType () {
        return axios({
            method: 'get',
            url: getUrl(`/document/type`)
        })
    },
    updataFileType (params) {
        return axios({
            method: 'PUT',
            url: getUrl(`/document/type`),
            data: params
        })
    },
    createdFloder (data) {
        return axios({
            method: 'POST',
            url: getUrl('/document'),
            data: data
        })
    },
    deleteFile (data) {
        return axios({
            method: 'DELETE',
            url: getUrl('/document'),
            data: {
                ids: data
            }
        })
    },
    getFloderList (id) {
        return axios({
            method: 'GET',
            url: getUrl(`/document/type/dir?typeId=${id}`)
        })
    },
    getMoreFile (id) {
        return axios({
            method: 'GET',
            url: getUrl(`/document?folderId=${id}`)
        })
    }

}

export default file
