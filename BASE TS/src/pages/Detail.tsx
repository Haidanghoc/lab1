import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const API_URL = "http://localhost:3000/products";

const Detail: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center py-5 text-muted">Đang tải...</p>;

  return (
    // bg-light + min-vh-100 đã có ở App wrapper; site-inner đảm bảo content centered
    <div className="py-3">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="text-success fw-semibold text-decoration-none">
              Trang chủ
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {product.title}
          </li>
        </ol>
      </nav>

      {/* Content: 2 cột chia đều */}
      <div className="row g-4 align-items-center">
        {/* Ảnh */}
        <div className="col-12 col-lg-6">
          <div className="card shadow-sm border-0 p-4 text-center h-100">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
              style={{ maxHeight: "500px", objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Thông tin */}
        <div className="col-12 col-lg-6">
          <div className="card shadow-sm border-0 p-4 h-100 d-flex flex-column justify-content-center">
            <h2 className="fw-bold mb-3">{product.title}</h2>
            <p className="text-muted">{product.description}</p>
            <h3 className="text-danger fw-bold my-4">{product.price.toLocaleString()}đ</h3>

            <div className="d-flex gap-3">
              <button className="btn btn-success btn-lg rounded-pill px-4">🛒 Mua ngay</button>
              <Link to="/" className="btn btn-outline-secondary btn-lg rounded-pill px-4">⬅ Quay lại</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
