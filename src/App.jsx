import { Routes, Route, useLocation } from 'react-router-dom';
import { publicLinks } from './data/navbarPublicLinks';
import { adminLinks } from './data/navbarAdminLinks';

import Navbar from './components/organisms/Navbar';
import ProtectedRoute from './routes/ProtectedRoute';
import AdminRoute from './routes/AdminRoute';
import CartSidebar from './components/organisms/CartSidebar';
import Footer from './components/organisms/Footer';

import Home from './pages/user/Home';
import Login from './pages/auth/login';
import CreateUser from './pages/auth/create-user';
import Productos from './pages/user/Productos';
import Contacto from './pages/user/Contacto';
import Nosotros from './pages/user/Nosotros';
import DetalleProducto from './pages/user/DetalleProducto';
import Carrito from './pages/user/Carrito';
import Checkout from './pages/user/Checkout';

import HomeAdmin from './pages/admin/HomeAdmin';
import UsuarioAdmin from './pages/admin/UsuarioAdmin';
import ProductoAdmin from "./pages/admin/ProductoAdmin";
import ProductoEditAdmin from "./pages/admin/ProductoEditAdmin";
import CarritoAdmin from './pages/admin/CarritoAdmin';

function Layout() {
  const location = useLocation();
  const hideNavbarRoutes = ['/create-user'];
  const isAdminRoute = location.pathname.startsWith('/admin');
  const shouldShowNavbarPublic = !isAdminRoute && !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {isAdminRoute ? (
        <Navbar links={adminLinks} title="Admin 미지 Beauty" />
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
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />

          <Route path="/checkout" element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          } />

          <Route path="/admin/dashboard" element={
            <AdminRoute>
              <HomeAdmin />
            </AdminRoute>
          } />

          <Route path="/admin/usuarios" element={
            <AdminRoute>
              <UsuarioAdmin />
            </AdminRoute>
          } />

          <Route path="/admin/productos" element={
            <AdminRoute>
              <ProductoAdmin />
            </AdminRoute>
          } />

          <Route path="/admin/producto/:id" element={
            <AdminRoute>
              <ProductoEditAdmin />
            </AdminRoute>
          } />

          <Route path="/admin/carritos" element={
            <AdminRoute>
              <CarritoAdmin />
            </AdminRoute>
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

