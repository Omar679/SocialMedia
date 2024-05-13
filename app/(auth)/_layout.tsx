import { UseAuth } from "@/providers/AuthProvider";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const { user } = UseAuth();
  if (user) {
    return <Redirect href={"/(home)"} />;
  }

  return <Stack />;
}
