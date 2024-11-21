import {ILogin, IRegister} from "../lib/interfaces.ts";
import {httpClient} from "../app/utils/httpClient.ts";

export function signupService(signupBody: IRegister) {
    return httpClient.post('register', signupBody);
}

export function loginService(loginBody: ILogin) {
    return httpClient.post('login', loginBody);
}