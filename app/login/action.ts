"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const data = {
    username: formData.get("username"),
    password: formData.get("password"),
  };
  const res = await fetch("http://127.0.0.1:8080/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const resJson = await res.json();

  revalidatePath("/");

  cookies().set("access_token", resJson.access_token);
  cookies().set("refresh_token", resJson.refresh_token);

  redirect(`/`);
}
