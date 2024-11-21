import {AddCourseRequest, ILogin, IRegister} from "../lib/interfaces.ts";
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

    loginValidator(login: ILogin) {
        const loginRequest = z.object({
            email: z.string().min(6).email(),
            password: z.string().min(8)//.max(18).regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{12,18}$/)
        }).required();

        return loginRequest.safeParse(login);
    }

    addCourseValidator(course: AddCourseRequest) {
        const addCourseRequest = z.object({
            title: z.string().min(2).max(20),
            description: z.string().min(2).max(200),
            duration: z.coerce.number().min(1),
            category: z.coerce.number().min(1)
        }).required();

        return addCourseRequest.safeParse(course);
    }

    editCourseValidator(course: AddCourseRequest) {
        const updateCourseRequest = z.object({
            title: z.string().min(2).max(20),
            description: z.string().min(2).max(200),
            duration: z.coerce.number().min(1),
            categoryId: z.coerce.number().min(1)
        }).required();
        return updateCourseRequest.safeParse(course);

    }
}

export default new ValidationService();