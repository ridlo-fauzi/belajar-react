// import Counter from "./components/Counter";
import "./App.css";
// import Welcome from "./components/Welcome";
// import Button2 from "./components/Button";
// import Timer from "./components/Timer";
import Todos from "./components/Todos";

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

function App() {
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
      <Todos />
    </>
  );
}

export default App;
