import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const API_URL = "http://localhost:3000/products";

const List: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-fluid">

      {/* Tiêu đề */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-success">
          📦 Danh sách sản phẩm
        </h2>
        <p className="text-muted">Khám phá những sản phẩm nổi bật nhất</p>
      </div>

      {/* Ô tìm kiếm */}
      <div className="row mb-4 justify-content-center">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control form-control-lg shadow-sm rounded-pill px-4"
            placeholder="🔍 Tìm sản phẩm..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="row">
        {filtered.map((p) => (
          <div className="col-md-3 mb-4" key={p.id}>
            <div className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden">
              <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: "220px" }}>
                <img
                  src={p.image}
                  alt={p.title}
                  className="img-fluid"
                  style={{ maxHeight: "200px", objectFit: "contain" }}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h6 className="card-title fw-bold text-dark">{p.title}</h6>
                <p className="card-text text-muted small flex-grow-1">
                  {p.description.length > 60
                    ? p.description.substring(0, 60) + "..."
                    : p.description}
                </p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="fw-bold text-danger fs-5">
                    {p.price.toLocaleString()}đ
                  </span>
                  <Link to={`/products/${p.id}`} className="btn btn-success btn-sm rounded-pill px-3">
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Nếu không tìm thấy sản phẩm */}
        {filtered.length === 0 && (
          <div className="text-center text-muted mt-5">
            ❌ Không tìm thấy sản phẩm nào
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
