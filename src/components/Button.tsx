function Button2({ children }: { children: string }) {
  return (
    <button
      style={{
        background: "red",
        color: "white",
        border: "none",
        padding: "5px 20px",
      }}
      type="submit"
    >
      {children}
    </button>
  );
}

export default Button2;
