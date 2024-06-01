import Link from "next/link";

export default function CLink({ label, href }) {
  return (
    <button style={{ margin: "10px", color: "black" }}>
      <Link
        href={href}
        style={{ color: "black", padding: "5px", textDecoration: "none" }}
      >
        {label}
      </Link>
    </button>
  );
}
