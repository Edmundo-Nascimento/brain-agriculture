import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppPage from "./pages/app/app";
import DashboardFeature from "./features/dashboard/dashboard.feature";
import { ModalProvider } from "./context/modal-context";
import Modal from "./common/components/modal/modal";
import FarmListFeature from "./features/farm/farm-list.feature";
import Error404 from "./pages/404";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppPage />,
    children: [
      {
        path: "/",
        element: <DashboardFeature />,
        errorElement: <Error404 />,
      },
      {
        path: "/fazendas",
        element: <FarmListFeature />,
        errorElement: <Error404 />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
]);

function App() {

  return (
    <ModalProvider>
      <RouterProvider router={router} />
      <Modal />
    </ModalProvider>
  );
}

export default App;
