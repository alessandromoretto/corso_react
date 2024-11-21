import {IRegister} from "../lib/interfaces.ts";
import {httpClient} from "../app/utils/httpClient.ts";

export function signup(signupBody: IRegister) {
    return httpClient.post('register', signupBody);
}