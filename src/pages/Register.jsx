import { register } from "../config/firebase";
import { useFormik } from "formik";
import { validationRegisterSchema } from "../validations/validationRegisterSchema";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../utils/useUserContext";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";

import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { LoadingButton } from "@mui/lab";

const Register = () => {
    const navigate = useNavigate();
    const { user } = useUserContext();
    useRedirectActiveUser(user, "/dashboard");
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationRegisterSchema,
        onSubmit: async (
            { email, password },
            { setSubmitting, setErrors, resetForm }
        ) => {
            try {
                await register({ email, password });
                resetForm();
            } catch (error) {
                setErrors({ email: error.code });
            } finally {
                setSubmitting(false);
            }
        },
    });

    const {
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        touched,
        errors,
        isSubmitting,
    } = formik;

    return (
        <Box sx={{ mt: 8, maxWidth: 400, mx: "auto", textAlign: "center" }}>
            <Avatar sx={{ mx: "auto", bgcolor: "#111" }}>
                <LockOutlinedIcon></LockOutlinedIcon>
            </Avatar>

            <Typography component="h1" variant="h5">
                Sign Up
            </Typography>

            <h1>Register</h1>

            <Box component="form" sx={{ mt: 8 }} onSubmit={handleSubmit}>
                <TextField
                    sx={{ mb: 3 }}
                    fullWidth
                    type="text"
                    placeholder="******"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    id="email"
                    label="Ingrese un email"
                    error={touched.email && errors.email ? true : false}
                    helperText={touched.email && errors.email && errors.email}
                />

                <TextField
                    sx={{ mb: 3 }}
                    fullWidth
                    type="password"
                    placeholder="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                    id="password"
                    label="Ingrese la contraseña"
                    error={touched.password && errors.password ? true : false}
                    helperText={
                        touched.password && errors.password && errors.password
                    }
                />

                <LoadingButton
                    type="submit"
                    disabled={isSubmitting}
                    loading={isSubmitting}
                    variant="contained"
                    fullWidth
                    sx={{ mb: 3 }}
                >
                    Register
                </LoadingButton>

                <Button fullWidth component={Link} to="/">
                    ¿Ya tienes cuenta? Ingresa
                </Button>
            </Box>
        </Box>
    );
};

export default Register;
