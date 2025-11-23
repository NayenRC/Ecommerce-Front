import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductosService from "../../services/ProductosService";
import "../../styles/pages/ProductoEditAdmin.css";
import ProductoEditCard from "../../components/organisms/ProductoEditCard";

export default function ProductoEditAdmin() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [producto, setProducto] = useState({
    nombreProducto: "",
    precio: "",
    stock: ""
  });

  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargar = async () => {
      const res = await ProductosService.getById(id);
      const data = res.data;

      setProducto({
        nombreProducto: data.nombreProducto,
        precio: data.precio,
        stock: data.stock
      });

      setCargando(false);
    };

    cargar();
  }, [id]);

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    });
  };

  const guardar = async () => {
    await ProductosService.patch(id, producto);
    navigate("/admin/productos");
  };

  if (cargando) return <p>Cargando...</p>;

  return (
    <div className="admin-edit-container">
      <ProductoEditCard
        producto={producto}
        handleChange={handleChange}
        guardar={guardar}
        volver={() => navigate("/admin/productos")}
      />
    </div>
  );
}
