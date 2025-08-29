interface ButtonProps {
  bgcolor: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
}

function Button({ bgcolor, type = "button", onClick, children }: ButtonProps) {
  return (
    <button
      style={{
        background: bgcolor,
        color: "white",
        border: "none",
        padding: "5px 20px",
      }}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
