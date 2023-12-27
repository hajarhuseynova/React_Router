import { RouterProvider, createBrowserRouter } from "react-router-dom";
//pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";

import { Users, usersLoader } from "./pages/users/Users";
import { UsersError } from "./pages/users/UsersError";

import { UserDetails, userDetailsLoader } from "./pages/users/UserDetails";

//layouts
import { MainLayout } from "./layouts/MainLayout";
import { HelpLayout } from "./layouts/HelpLayout";

//pages/layout
import { Contact, contactAction } from "./pages/help/Contact";
import { Faq } from "./pages/help/Faq";
import { UsersLayout } from "./layouts/UsersLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "help",
        element: <HelpLayout />,
        children: [
          { path: "contact", element: <Contact />, action: contactAction },
          { path: "faq", element: <Faq /> },
        ],
      },
      {
        path: "users",
        element: <UsersLayout />,
        errorElement: <UsersError />,
        children: [
          {
            index: true,
            element: <Users />,
            loader: usersLoader,
          },
          {
            path: ":userid",
            element: <UserDetails />,
            loader: userDetailsLoader,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
