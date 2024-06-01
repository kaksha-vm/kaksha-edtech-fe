"use client";

import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const redirectToHome = () => {
    router.push("/");
  };

  return (
    <div>
      <p>Welcome to Profile Page - client side</p>
      <button onClick={redirectToHome}>Goto Home</button>
    </div>
  );
}
