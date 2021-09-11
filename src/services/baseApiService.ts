import axios from 'axios';

export const getRequest = async (url: string, params: any = null) => {
    return axios.get(url, { params: { ...params } }).then(res => {
        return res.data
    }).catch(error => {

    })
}