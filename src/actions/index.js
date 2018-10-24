import axios from 'axios';
import { stringify } from 'query-string';
import cookie from 'react-cookies';

const ROOT_URL = "http://jsonplaceholder.typicode.com/users"; // Local Dev URL

function API_CALL(method, url, data, type, callback, file) {
    console.log("Calling API for the method of " + method + " : " + ROOT_URL + url);
    // axios.interceptors.response.use(undefined, function (err) {
    //     if (refresh_flag == 0) {
    //         refresh_flag = 1;
    //         axios({
    //             method: 'post',
    //             url: ROOT_URL + 'token',
    //             data: stringify({
    //                 grant_type: 'refresh_token',
    //                 refresh_token: getToken().refresh_token
    //             })
    //         }).then((res) => {
    //             refresh_flag = 0;
    //             cookie.remove('session', { path: '/' });
    //             cookie.save('session', res.data, { path: '/' });
    //             console.log("New token:" + getToken().refresh_token);
    //             window.location.reload();
    //         }).catch((Error) => {
    //             if (Error) {
    //                 cookie.remove('session', { path: '/' });
    //                 window.location.href = '/';
    //             }
    //         });
    //     }
    //     throw err;
    // });
    let request;
    if (callback) {
        return (dispatch) => {
            request = axios({
                method,
                url: ROOT_URL + url,
                data,
                headers: {
                    Authorization: 'Bearer ' // + getToken().access_token
                },
                requestseType: file ? 'arraybuffer' : 'json'
            }).then((data) => callback(data));
        }
    } else {
        return (dispatch) => {
            request = axios({
                method,
                url: ROOT_URL + url,
                data,
                headers: {
                    Authorization: 'Bearer ' // + getToken().access_token
                }
            }).then(({ data }) => {
                dispatch({ type: type, payload: data })
            })
        }
    }
}

export function sampleCallbackCall(callback) {
    return API_CALL('get', '', null, 'SAMPLE_CALLBACK', callback)
}

export function sampleReducerCall() {
    return API_CALL('get', '', null, 'SAMPLE_CALL')
}
