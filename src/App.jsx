import { Routes, Route, useLocation } from 'react-router-dom';
import { publicLinks } from './data/navbarPublicLinks';
import { adminLinks } from './data/navbarAdminLinks';
import Navbar from './components/organisms/Navbar';

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
import Config from './routes/config';
import Carrito from './pages/user/Carrito';
import CartSidebar from './components/organisms/CartSidebar';


function Layout() {
  const location = useLocation();
  const hideNavbarRoutes = ['/create-user'];
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
        <CartSidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/admin/dashboard" element={
            <Config>
              <HomeAdmin />
            </Config>
          } />

          <Route path="/admin/usuarios" element={
            <Config>
              <UsuarioAdmin />
            </Config>
          } />

          <Route path="/admin/productos" element={
            <Config>
              <ProductoAdmin />
            </Config>
          } />

          <Route path="/admin/producto/:id" element={
            <Config>
              <ProductoEditAdmin/>
            </Config>
          } />

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
