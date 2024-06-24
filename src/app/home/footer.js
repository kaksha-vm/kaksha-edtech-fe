"use client";

import { useEffect, useState } from "react";
import { foo1 } from "../actions";
import { useRouter } from "next/navigation";
import CButton from "@/common/components/button";

export default function Footer() {
  const [dynamicServerValue, setDynamicServerValue] = useState("");
  const router = useRouter();

  useEffect(() => {
    const callServerAction = async () => {
      const result1 = await foo1("initial");
      setDynamicServerValue(result1);
    };

    callServerAction();
  }, []);

  const updateDynamicServerValue = async () => {
    setTimeout(() => {
      router.push("/profile");
    }, 0);
  };

  return (
    <div>
      {/* <p>Home page client component start here</p>
      <p>
        Dynamic value from server action at client side is :{" "}
        {dynamicServerValue.name}
      </p> */}

      <CButton
        onClick={() => {
          router.push("/java");
        }}
      >
        Goto Java
      </CButton>
      <CButton onClick={updateDynamicServerValue}>Goto Profile</CButton>
    </div>
  );
}
