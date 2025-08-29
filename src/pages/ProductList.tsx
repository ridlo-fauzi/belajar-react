import { Link } from "react-router-dom";
import Button from "../components/Button";

type Product = {
  id: number;
  name: string;
  category: string;
  price: string | number;
};

type ProductListProps = {
  products: Product[];
  onDelete: (id: number) => void;
};
const ProductList = ({ products, onDelete }: ProductListProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
      }}
    >
      <div className="title">ProductList</div>
      <div>
        <Link className="btn-add" to="/add">
          Add
        </Link>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div>
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: Rp. {product.price.toLocaleString("id-ID")}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Link className="btn-edit" to={`/edit/${product.id}`}>
                Edit
              </Link>
              <Button
                bgcolor="red"
                onClick={() => confirm("Are you sure?") && onDelete(product.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
