// import Counter from "./components/Counter";
import { useState } from "react";
import "./App.css";
import AddProduct from "./pages/AddProduct";
import ProductList from "./pages/ProductList";
// import Timer from "./components/Timer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditProduct from "./pages/EditProduct";
// import Welcome from "./components/Welcome";
// import Button2 from "./components/Button";
// import Timer from "./components/Timer";
// import Todos from "./components/Todos";

// interface PropsButton1 {
//   color: string;
//   padding?: string;
//   status: boolean;
//   children: React.ReactNode;
// }
// const Button1 = ({ color, status, children }: PropsButton1) => {
//   return (
//     <button
//       style={{
//         background: status ? "green" : "red",
//         color: color,
//         border: "none",
//         padding: "5px 20px",
//       }}
//     >
//       {children}
//     </button>
//   );
// };

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string | number;
}

const DataProduk = [
  {
    id: 1,
    name: "Xiaomi Redmi Note 10",
    category: "Category A",
    price: 100000,
  },
  {
    id: 2,
    name: "Product B",
    category: "Category A",
    price: 800000,
  },
  {
    id: 3,
    name: "Product C",
    category: "Category A",
    price: 400000,
  },
  {
    id: 4,
    name: "Product D",
    category: "Category A",
    price: 600000,
  },
  {
    id: 5,
    name: "Shock DBS 722",
    category: "Category A",
    price: 200000,
  },
];

function App() {
  const [products, setProducts] = useState<Product[]>(DataProduk);
  console.log(products);
  const AddData = (newProduct: Omit<Product, "id">) => {
    const newProductWithId = { id: Date.now(), ...newProduct };
    setProducts([...products, newProductWithId]);
  };
  const UpdateData = (updatedProduct: Product) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };
  const deleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };
  return (
    <>
      {/* <Welcome />
      <div
        style={{
          margin: "20px 0 ",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button1 status={true} color="white">
          Buy Now 1
        </Button1>
        <Button2>Never By</Button2>
      </div>
      <Counter /> */}
      {/* <Timer /> */}
      {/* <Todos /> */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProductList products={products} onDelete={deleteProduct} />
            }
          />
          <Route path="/add" element={<AddProduct onAdd={AddData} />} />
          <Route
            path="/edit/:id"
            element={<EditProduct products={products} onUpdate={UpdateData} />}
          />
        </Routes>
      </Router>

      {/* <Timer /> */}
    </>
  );
}

export default App;
