import { Outlet } from "react-router-dom";

export const UsersLayout = () => {
  return (
    <div className="users-layout">
      <h2>Users</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        cupiditate minus numquam. Eum, quo commodi. Fugit repellat quam, optio
        tempora accusamus iusto placeat odit ea, a iste, vero ducimus totam!
      </p>

      <Outlet />
    </div>
  );
};
