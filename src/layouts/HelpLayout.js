import { NavLink, Outlet } from "react-router-dom";

export const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Help Layout</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        cupiditate minus numquam. Eum, quo commodi. Fugit repellat quam, optio
        tempora accusamus iusto placeat odit ea, a iste, vero ducimus totam!
      </p>
      <nav>
        <NavLink to="contact">Contact</NavLink>
        <NavLink to="faq">Faq</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
