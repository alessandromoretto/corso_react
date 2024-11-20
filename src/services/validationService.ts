import {ITodo, UserFormData} from "../lib/interfaces.ts";
import z from "zod";

class ValidationService {
    validateRegistrationForm = (userForm: UserFormData) => {
        const {firstName, category} = userForm;
        return (!firstName || category === 0);
    };


    todoIsNotValid(todoForm: ITodo) {

        let todoValidator = z.object({
            title: z.string().min(1)
        }).required();

        // return todoForm.title.length < 1;
        let result = todoValidator.safeParse(todoForm);

        console.log(result);
        return !result.success
    }
}

export default new ValidationService();