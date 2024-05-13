import { UseAuth } from "@/providers/AuthProvider";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const { user } = UseAuth();
  console.log("Login User", user);
  if (user) {
    return <Redirect href={"/(home)/(tabs)"} />;
  }
  return <Stack />;
}
