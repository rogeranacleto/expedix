import { createBrowserRouter } from "react-router";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Admin } from "./pages/Admin";
import { Layout } from "./Layout";
import { PrivateRoute } from "./components/PrivateRoute";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
const router = createBrowserRouter([
  {
    element: <Home/>,
    path: "/"
  },
  {
    element: <Login/>,
    path: "/login"
  },
  {
    element: <Signup/>,
    path: "/signup"
  },
  {
    element: <PrivateRoute/>,
    children:[
      {
        element: <Layout/>,
        children:[
          {
            element: <Admin/>,
            path: "/admin"
          }
        ]
      }
    ]
  },
  {
    element: <NotFound/>,
    path: "*"
  }
])

export { router }