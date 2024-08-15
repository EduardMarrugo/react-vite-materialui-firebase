import { useEffect, useState } from "react";
import { login } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../utils/useUserContext";
import { useFormik } from "formik";
import { validationLoginSchema } from "../validations/validationLoginSchema";

import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { LoadingButton } from "@mui/lab";

const Login = () => {
    const navigate = useNavigate();
    const { user, setUser } = useUserContext();

    useEffect(() => {
        if (user) navigate("/dashboard");
    }, [user]);

    /**
     * ! Esta tambien es una opción utilizando un custom hook
     * @hook
     * useRedirectActiveUser(user, "/dashboard");
     */

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async (
            { email, password },
            { setSubmitting, setErrors, resetForm }
        ) => {
            try {
                const credentialUser = await login({ email, password });
                setUser(credentialUser);
                resetForm();
            } catch (error) {
                const { code } = error;

                switch (code) {
                    case "auth/invalid-login-credentials":
                        setErrors({ email: "Usuario no registrado" });
                        break;
                    case "auth/user-not-found":
                        setErrors({ email: "Usuario no registrado" });
                        break;
                }
            } finally {
                setSubmitting(false);
            }
        },
        validationSchema: validationLoginSchema,
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
                Sign in
            </Typography>
            <h1>Login</h1>
            <Box component="form" sx={{ mt: 8 }} onSubmit={handleSubmit}>
                <TextField
                    type="text"
                    sx={{ mb: 3 }}
                    fullWidth
                    placeholder="example@email.com"
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
                    type="password"
                    sx={{ mb: 3 }}
                    fullWidth
                    placeholder="******"
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
                    Acceder
                </LoadingButton>

                <Button fullWidth component={Link} to="/register">
                    ¿No tienes cuenta? Regístrate
                </Button>
                {/* <button type="submit" disabled={isSubmitting}>
                    Login
                </button> */}
                {/* <button type="submit" onClick={() => navigate("/register")}>
                    Register
                </button> */}

                {isSubmitting && <span>Loading...</span>}
            </Box>
        </Box>
    );
};

export default Login;
