import { useLocation, useNavigate } from 'react-router-dom';

export interface MenuProps {
  label: string;
  path: string;
}

function Menu({ label, path }: MenuProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <li onClick={() => navigate(path)} className={`px-4 py-4 hover:bg-gray-700 cursor-pointer ${pathname === path && "bg-primary"}`}>
      {label}
    </li>
  )
}

const Sidebar = ({ isSidebarOpen }: any) => {


  return (
    <aside className='fixed inset-y-0 left-0 bg-secondary'>
      <div
        className={` text-white w-64 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform lg:translate-x-0 lg:relative lg:flex flex-col z-50`}>
        <div className="h-16 flex items-center justify-center">
          <img width={100} src='brain-a.png' alt='Brain agr' />
        </div>
        <nav className="flex-1">
          <ul>
            <Menu path='/' label='Dashboard' />
            <Menu path='/fazendas' label='Fazendas' />
          </ul>
        </nav>
        <div className="p-4 flex justify-between items-center">
        </div>
      </div>
    </aside>
  )
};

export default Sidebar
