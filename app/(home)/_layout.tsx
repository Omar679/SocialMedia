import { Stack } from "expo-router";
import { useEffect } from "react";
import { StreamChat } from "stream-chat";
import { Chat, OverlayProvider } from "stream-chat-expo";

const client = StreamChat.getInstance("836kvdb7s3dr");

export default function Homelayout() {
  useEffect(() => {
    const connect = async () => {
      await client.connectUser(
        {
          id: "umar",
          name: "Umar Sabiu",
          image: "https://i.imgur.com/fR9Jz14.png",
        },
        client.devToken("umar")
      );

      // const channel = client.channel("messaging", "the_park", {
      //   name: "The Park",
      // });
      // await channel.watch();
    };
    connect();
  }, []);

  return (
    <OverlayProvider>
      <Chat client={client}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </Chat>
    </OverlayProvider>
  );
}
