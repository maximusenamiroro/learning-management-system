import { useRoutes } from "react-router-dom";

import {
  Dashboard,
  Faq,
  Classroom,
  Help,
  Community,
  Feedback,
  Task,
  SharedLayouts
} from "../pages/Dashboard";


// import Home from "../pages/home/Home";

export default function Routes() {
  let element = useRoutes([
    {
      children: [
        {
          element: <SharedLayouts/>,
          children: [
            {
              path: "/dashboard",
              element: <Dashboard/>,
            },
            {
              path: "/faq",
              element: <Faq />,
            },
            {
              path: "/task",
              element: <Task />,
            },
            {
              path: "/community",
              element: <Community />,
            },
            {
              path: "/feedback",
              element: <Feedback />,
            },
            {
              path: "/help",
              element: <Help />,
            },
          
          ],
        },
      ],
    },

  
  ]);

  return element;
}
