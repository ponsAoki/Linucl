import { useCallback } from "react";
import axios from "axios";
import CryptoJS from "crypto-js"

import { apiEndPoint } from "../../services/apiEndpoint";
import { SignInData } from "../../types/SignInData";

export const useSendSignInData = () => {
  const sendSignInData = useCallback((email: string, password: string) => {
    const emailRegularExpression = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    const passwordRegularExpression = /\w{8,}/;
    const secretKey: string = "secretKey";   // 秘密鍵の設定
    let encryptedPassword: string = CryptoJS.AES.encrypt(password, secretKey).toString();
    // let signInData: SignInData = {
    //   email: email,
    //   password: encryptedPassword,
    //   secretKey: secretKey,         // 秘密鍵の設定
    let signInData = {
      name: "na",
      email: "hoge@hoge.com",
      password: "aaaaaaaa",
    };
    // if (emailRegularExpression.test(signInData.email) && passwordRegularExpression.test(signInData.password)) {
    axios.create({
      withCredentials: true,
    })
      axios.get(`${apiEndPoint}/sanctum/csrf-cookie`)
        // .then(() => {
        //   axios
        //     .post(`${apiEndPoint}/register`, signInData)
        //     .then((res) => console.log(res))
        //     .catch((err) => console.log(err));
        // });
    console.log(signInData);
    console.log(1);
    // }
  }, [])
  return { sendSignInData } 
}
