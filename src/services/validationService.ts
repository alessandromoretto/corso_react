import {IRegister} from "../lib/interfaces.ts";
import z from "zod";

class ValidationService {

    signupValidator(signup: IRegister) {
        const registerRequest = z.object({
            firstName: z.string().min(2).max(20),
            lastName: z.string().min(2).max(20),
            email: z.string().min(6).email(),
            password: z.string().min(8)//.max(18).regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{12,18}$/)
        }).required();

        return registerRequest.safeParse(signup);
    }

}

export default new ValidationService();