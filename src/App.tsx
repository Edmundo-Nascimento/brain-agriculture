import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppPage from "./pages/app/app";
import DashboardFeature from "./features/dashboard/dashboard.feature";
import { ModalProvider } from "./context/modal-context";
import Modal from "./common/components/modal/modal";
import FarmListFeature from "./features/farm/farm-list.feature";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppPage />,
    children: [
      {
        path: "/",
        element: <DashboardFeature />,
      },
      {
        path: "/fazendas",
        element: <FarmListFeature />,
      }
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
