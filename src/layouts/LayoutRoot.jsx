import { Outlet } from "react-router-dom";
// import NavBar from "../components/NavBar";
import UserProvider from "../context/UserContext";
const LayoutRoot = () => {
    return (
        <UserProvider>
            {/* <NavBar /> */}
            <main>
                <Outlet></Outlet>
            </main>
        </UserProvider>
    );
};

export default LayoutRoot;
