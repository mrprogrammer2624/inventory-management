import { HomeLayout } from "@/Layout/Home";
import { Home, InventoryItemForm, SupplierManagement } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

const TaskPilotRoute = createBrowserRouter(
  /* All Paths */
  [
    {
      path: "/",
      children: [
        {
          element: <HomeLayout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "add-item",
              element: <InventoryItemForm />,
            },
            {
              path: "/edit-item/:id",
              element: <InventoryItemForm />,
            },
            {
              path: "suppliers",
              element: <SupplierManagement />,
            },
          ],
        },
      ],
    },
    {
      /* Default Route (404) */
      path: "*",
      element: <>404 - Page Not Found</>,
    },
  ],
  {
    /* Base URL */
    basename: "/",
  }
);

export default TaskPilotRoute;
