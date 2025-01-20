import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/home/home";
import About from "./components/about-page/about"
import Services from "./components/services/services"
import Blogs from "./components/blogs/blogs"
import Contact from "./components/contact-page/contact";
import Equipment from "./components/services/equipments/equipment"
import Collections from "./components/services/collections/collections"
import Avail from "./components/services/avail/avail"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"services",
        element:<Services/>, 
        children:[
          {
            index:true,
            element: <Equipment/>
          },
          {
            path:"equipment",
            element: <Equipment/>
          },{
            path:'collections',
            element:<Collections/>
          },
          {
            path: 'avail',
            element:<Avail/>
          }
        ]
      },
      {
        path:"blogs",
        element:<Blogs/>
      },
      {
        path:"contact",
        element:<Contact/>
      }
    ],
  },
]);

export default router;
