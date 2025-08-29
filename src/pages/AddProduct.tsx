// import { useState } from "react";
import { useState } from "react";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";

type AddProductProps = {
  name: string;
  category: string;
  price: number | string;
};

const AddProduct = ({
  onAdd,
}: {
  onAdd: (product: AddProductProps) => void;
}) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setName("");
    setPrice("");
    setCategory("");
    onAdd({ name, category, price: Number(price) });
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
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label htmlFor="category">Kategori</label>
          <select
            name="category"
            id="category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" selected disabled>
              Pilih Kategori
            </option>
            <option value="Category A">Category A</option>
            <option value="Category B">Category B</option>
            <option value="Category C">Category C</option>
          </select>
        </div>

        <Button bgcolor="blue" type="submit">
          Add New Product
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
