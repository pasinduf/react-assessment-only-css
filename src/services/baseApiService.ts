import axios from 'axios';

export const getRequest = async (url: string, params: QueryParam) => {
    return axios.get(url, { params: { ...params } }).then(res => {
        return res.data
    }).catch(error => {

    })
}