export default function CButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ margin: "10px", padding: "5px", cursor: "pointer" }}
    >
      {children}
    </button>
  );
}
