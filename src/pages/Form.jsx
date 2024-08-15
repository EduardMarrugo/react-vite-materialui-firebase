import { useState } from "react";

const Form = ({ children, initialStateValues, onSubmit }) => {
    const [values, setValues] = useState(initialStateValues);

    const handleChangeValues = (e) => {
        const { value, name } = e.target;

        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(values);
    };

    return (
        <>
            <h6> From FormComponent</h6>
            {children({ values, handleChangeValues, handleSubmit })}
        </>
    );
};

export default Form;
