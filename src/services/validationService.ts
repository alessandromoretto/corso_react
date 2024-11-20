import {UserFormData} from "../lib/interfaces.ts";

class ValidationService {
    validateRegistrationForm = (userForm: UserFormData) => {
        const {firstName, category} = userForm;
        return (!firstName || category === 0);
    };
}

export default new ValidationService();