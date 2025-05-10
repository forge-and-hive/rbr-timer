"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { register } from "@/actions/register";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RegisterForm() {
  const [error, setError] = useState<string>();
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;

    const r = await register({
      email,
      password,
      name,
    });

    if (r?.error) {
      setError(r.error);
      return;
    }

    // Sign in the user after successful registration
    const signInResult = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (signInResult?.error) {
      setError(signInResult.error);
      return;
    }

    return router.push("/dashboard");
  };

  return (
    <form
      className="p-6 w-full max-w-[400px] flex flex-col justify-between items-center gap-2
      border border-border rounded-lg bg-card"
      action={handleSubmit}
    >
      {error && <div className="text-destructive">{error}</div>}
      <h1 className="mb-5 w-full text-2xl font-bold">Register</h1>

      <div className="w-full space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="Full Name"
          name="name"
          required
        />
      </div>

      <div className="w-full space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
      </div>

      <div className="w-full space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          required
        />
      </div>

      <Button type="submit" className="w-full">
        Sign up
      </Button>

      <Link
        href="/login"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        Already have an account?
      </Link>
    </form>
  );
}