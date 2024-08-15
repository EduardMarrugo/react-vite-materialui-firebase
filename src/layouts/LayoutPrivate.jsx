import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../utils/useUserContext";
import { useEffect } from "react";
const LayoutPrivate = () => {
  const { user } = useUserContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
  }, [user]);

  return (
    <>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default LayoutPrivate;
