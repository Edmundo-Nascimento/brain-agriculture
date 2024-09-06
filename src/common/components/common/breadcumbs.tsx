import { Link, useLocation } from 'react-router-dom';

function Breadcrumbs() {
  const location = useLocation();

  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== "")
    .map((crumb, index, array) => {
      const path = `/${array.slice(0, index + 1).join('/')}`;
      const isLast = index === array.length - 1;

      return isLast ? (
        <span key={path} className="text-gray-500 capitalize">{crumb}</span>
      ) : (
        <Link key={path} to={path} className="text-blue-500 capitalize hover:underline">
          {crumb}
        </Link>
      );
    });

  return (
    <nav className="flex space-x-2 text-sm mb-4">
      <Link to="/" className="text-blue-500 hover:underline">Home</Link>
      {crumbs.length > 0 && <span className="text-gray-500">/</span>}
      {crumbs}
    </nav>
  );
}

export default Breadcrumbs;