import * as Yup from "yup";

export const validationRegisterSchema = Yup.object().shape({
    email: Yup.string().email("Email no valido").required("Email requerido"),
    password: Yup.string()
        .trim()
        .min(6, "Minimo 6 caracteres")
        .required("Contraseña requerida"),
});
