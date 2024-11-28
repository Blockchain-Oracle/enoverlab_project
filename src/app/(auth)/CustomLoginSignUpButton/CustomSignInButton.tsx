"use client";

import { useRouter } from "next/navigation";

export default function CustomSignInButton() {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/login");
  };

  return (
    <button onClick={handleSignIn} className="custom-sign-in-button">
      Login
    </button>
  );
}
