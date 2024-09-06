import { useState } from "react";
import Sidebar from "../../common/components/layout/sidebar";
import { Outlet } from "react-router-dom";
import { useModal } from "../../context/modal-context";

function AppPage() {
  const { isOpen }: any = useModal();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={`flex min-h-screen bg-gray-100 dark:bg-gray-900 ${isOpen ? 'blurred' : ''}`}>
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white dark:bg-secondary shadow-md p-4 flex justify-between items-center">
          <button
            className="lg:hidden text-gray-800 dark:text-white"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </header>

        <main className="flex-1 overflow-y-auto pl-[290px]  p-6 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto">
            <div>
            </div>
            <div>
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AppPage;
