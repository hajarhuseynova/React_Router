import { useRouteError, Link } from "react-router-dom";

export const UsersError = () => {
  const error = useRouteError();
  return (
    <div className="usersError">
      <h1>Error</h1>
      <p>{error.data}</p>
      <Link to="/">HomePage</Link>
    </div>
  );
};
