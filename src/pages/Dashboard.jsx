import { Button } from "@mui/material";
import { logOut } from "../config/firebase";
import { useUserContext } from "../utils/useUserContext";
import Form from "./Form";

const Dashboard = () => {
    const { user } = useUserContext();

    const handleLogOut = async () => {
        try {
            await logOut(user);
        } catch (error) {
            console.error(error);
        }
    };

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <div>
            <h1>Dashboard</h1>

            <Form
                onSubmit={onSubmit}
                initialStateValues={{
                    text: "Un texto",
                    otherText: "Otro texto",
                }}
            >
                {({ values, handleChangeValues, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Text"
                            value={values.text}
                            onChange={handleChangeValues}
                            name="text"
                        />
                        <input
                            type="text"
                            placeholder="OtherText"
                            value={values.otherText}
                            onChange={handleChangeValues}
                            name="otherText"
                        />

                        <button type="submit">Submit</button>
                    </form>
                )}
            </Form>
            <Button variant="contained" onClick={handleLogOut}>
                LogOut
            </Button>
        </div>
    );
};

export default Dashboard;
