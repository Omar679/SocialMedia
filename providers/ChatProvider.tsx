import React, { PropsWithChildren, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { StreamChat } from "stream-chat";
import { Chat, OverlayProvider } from "stream-chat-expo";
import { UseAuth } from "./AuthProvider";
import { supabase } from "@/lib/supabase";

export const client = StreamChat.getInstance(process.env.EXPO_PUBLIC_STREAM_API_KEY);

const ChatProvider = ({ children }: PropsWithChildren) => {
  const [isReady, setIsReady] = useState(false);

  const { profile } = UseAuth();

  useEffect(() => {
    if (!profile) {
      return;
    }
    const connect = async () => {
      await client.connectUser(
        {
          id: profile.id,
          name: profile.full_name,
          image: supabase.storage
            .from("avatars")
            .getPublicUrl(profile.avatar_url).data.publicUrl,
        },
        client.devToken(profile.id)
      );
      setIsReady(true);

      // const channel = client.channel("messaging", "the_park", {
      //   name: "The Park",
      // });
      // await channel.watch();
    };
    connect();
    return () => {
      if (client) {
        client.disconnectUser();
      }
      setIsReady(false);
    };
  }, [profile?.id]);

  if (!isReady) {
    return <ActivityIndicator />;
  }

  return (
    <>
      <OverlayProvider>
        <Chat client={client}>{children}</Chat>
      </OverlayProvider>
    </>
  );
};

export default ChatProvider;
