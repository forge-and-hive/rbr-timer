"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (res?.error) {
      setError(res.error as string);
    }
    if (res?.ok) {
      return router.push("/dashboard");
    }
  };

  return (
    <form
      className="p-6 w-full max-w-[400px] flex flex-col justify-between items-center gap-2
      border border-border rounded-lg bg-card"
      action={handleSubmit}
    >
      {error && <div className="text-destructive">{error}</div>}
      <h1 className="mb-5 w-full text-2xl font-bold">Sign In</h1>

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

      <Button type="submit" className="w-full mt-6">
        Sign In
      </Button>

      <Link
        href="/register"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        Don&apos;t have an account?
      </Link>
    </form>
  );
}