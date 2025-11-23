import { Routes, Route, useLocation } from 'react-router-dom';
import { publicLinks } from './data/navbarPublicLinks';
import { adminLinks } from './data/navbarAdminLinks';
import Navbar from './components/organisms/Navbar';

// Páginas
import Home from './pages/user/Home';
import Login from './pages/auth/login';
import CreateUser from './pages/auth/create-user';
import HomeAdmin from './pages/admin/HomeAdmin';
import Productos from './pages/user/Productos';
import Contacto from './pages/user/Contacto';
import Nosotros from './pages/user/Nosotros';
import DetalleProducto from './pages/user/DetalleProducto';
import Footer from './components/organisms/Footer';
import UsuarioAdmin from './pages/admin/UsuarioAdmin';
import ProductoAdmin from "./pages/admin/ProductoAdmin";
import ProductoEditAdmin from "./pages/admin/ProductoEditAdmin";
import CartSidebar from "./components/organisms/CartSidebar";
import Carrito from "./pages/user/Carrito";


function Layout() {
  const location = useLocation();

  // Rutas donde NO se muestra el NavbarPublic
  const hideNavbarRoutes = ['/login', '/create-user'];

  const isAdminRoute = location.pathname.startsWith('/admin');
  const shouldShowNavbarPublic = !isAdminRoute && !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {isAdminRoute ? (
        <Navbar links={adminLinks} title="Admin Naves Front" />
      ) : (
        shouldShowNavbarPublic && <Navbar links={publicLinks} title="미지 Beauty" />
      )}

      <main>
        <CartSidebar /> {/* SIEMPRE visible */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/admin/dashboard" element={<HomeAdmin />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/carrito" element={<Carrito />} />

          {/* Rutas Admin */}
          <Route path="/admin/dashboard" element={<HomeAdmin />} />
          <Route path="/admin/usuarios" element={<UsuarioAdmin />} />
          <Route path="/admin/productos" element={<ProductoAdmin />} />
          <Route path="/admin/producto/:id" element={<ProductoEditAdmin />} />

          <Route path="*" element={<div>404 - Página no encontrada</div>} />
        </Routes>

        <Footer />
      </main>
    </>
  );
}

function App() {
  return <Layout />;
}

export default App;
/*import { Routes, Route, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { publicLinks } from './data/navbarPublicLinks';
import { adminLinks } from './data/navbarAdminLinks';
import Navbar from './components/organisms/Navbar';
import { appRoutes } from './routes/config';

function Layout() {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith('/admin');
  const currentRoute = appRoutes.find(route => route.path === location.pathname);
  const showNavbar = isAdminRoute || currentRoute?.showNavbar;

  const navbarLinks = isAdminRoute ? adminLinks : publicLinks;
  const navbarTitle = isAdminRoute ? 'Admin Naves Front' : 'Naves Front';

  return (
    <>
      {showNavbar && <Navbar links={navbarLinks} title={navbarTitle} />}

      <main>
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"></div>
            </div>
          }
        >
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

function App() {
  return <Layout />;
}

export default App;* ESTO EL PROFE PUSO QUE ESTA LISTO PARA USAR EL DINAMISMO DEL ROUTES */