import CryptoJS from "crypto-js";
import { AppConfig } from "../../core";

export const Encrypt=(value:any)=>{
  if(value){
      return CryptoJS.AES.encrypt(JSON.stringify(value), AppConfig.cryptoKey).toString();    
  } 
return null;
}

export const Decrypt = <T>(value: any) => {
  if (value) {
    var bytes = CryptoJS.AES.decrypt(value, AppConfig.cryptoKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8)) as T;
  }
  return "";
};
