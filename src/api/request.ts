import service from "./service";
import qs from "qs";
import { message } from 'antd'

export function commonRequest(params) {
    let { url,method,data,isParams = true, } = params;
    method = method.toUpperCase();
    let _data = data,_url= url,key = null;
    if(method === 'GET'){
      if(isParams){
        key = 'params';
      }else{
        _data = qs.stringify(data,{ indices: false });
        _url = url+"?"+_data;
        key = null;
      }
    }else if(method === 'POST' || method === 'PUT'){
      key = 'data';
    }else if(method === 'DELETE'){
      key = 'params';
    }
    let pData = key?{[key]:_data}:{};
    return service({
      url: _url,
      method: method,
      ...pData
    });
}

export function Request(args) {
  return new Promise((resolve, reject) => {
    commonRequest({ ...args })
      .then((res) => {
        if (res.data.code === "200" ) {
          resolve(res.data.data);
        } else {
          // message.error(res?.msg);
          reject();
        }
      })
      .catch((error) => {
        message.error(error);
        reject(error);
      });
  });
}