import { UseAuth } from "@/providers/AuthProvider";
import ChatProvider from "@/providers/ChatProvider";
import { Redirect, Stack } from "expo-router";

export default function Homelayout() {
  const { user } = UseAuth();
  if (!user) {
    return <Redirect href={"/(auth)/Login"} />;
  }
  return (
    <ChatProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ChatProvider>
  );
}
