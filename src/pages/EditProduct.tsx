// import { useState } from "react";
import { useState } from "react";
import Button from "../components/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import type { Product } from "../App";

type EditProductProps = {
  products: Product[];
  onUpdate: (updatedProduct: Product) => void;
};

const EditProduct = ({ products, onUpdate }: EditProductProps) => {
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));

  const [name, setName] = useState(product?.name || "");
  const [category, setCategory] = useState(product?.category || "");
  const [price, setPrice] = useState(product?.price || 0);
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setName("");
    setPrice("");
    setCategory("");
    onUpdate({ id: Number(id), name, category, price });
    navigate("/");
  };
  return (
    <div className="add-product-container">
      <Link className="btn-back" to="/">
        Kembali
      </Link>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="name">Nama Produk</label>
          <input
            value={name}
            id="name"
            type="text"
            placeholder="Product Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label htmlFor="price">Harga</label>
          <input
            value={price}
            id="price"
            type="number"
            min={0}
            placeholder="Price"
            onChange={(e) => setPrice(parseInt(e.target.value))}
          />
        </div>
        <div className="form-input">
          <label htmlFor="category">Kategori</label>
          <select
            name="category"
            id="category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Pilih Kategori
            </option>
            <option value="Category A">Category A</option>
            <option value="Category B">Category B</option>
            <option value="Category C">Category C</option>
          </select>
        </div>

        <Button bgcolor="blue" type="submit">
          Edit New Product
        </Button>
      </form>
    </div>
  );
};

export default EditProduct;
