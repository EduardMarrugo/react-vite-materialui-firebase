import { Link, useRouteError } from "react-router-dom";

const NotFound404 = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <p>{error.statusText || error.message}</p>
      <Link to={"/"} >
        Volver
      </Link>
    </div>
  );
};

export default NotFound404;
