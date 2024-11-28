"use client";

import { useRouter } from "next/navigation";

export default function CustomSignUpButton() {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/sign-up"); // Navigate to the custom /sign-up route
  };

  return (
    <button onClick={handleSignUp} className="custom-sign-up-button">
      Sign Up
    </button>
  );
}
