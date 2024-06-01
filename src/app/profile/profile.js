"use client";

import CButton from "@/common/components/button";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const redirectToHome = () => {
    router.push("/");
  };

  return (
    <div>
      <p>Welcome to Profile Page - client side</p>
      <CButton onClick={redirectToHome}>Goto Home</CButton>
    </div>
  );
}
