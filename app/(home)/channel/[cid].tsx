import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import { MessageInput, MessageList, useChatContext } from "stream-chat-expo";
import { Channel } from "stream-chat-expo";
import { Channel as ChannelType } from "stream-chat";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Channell() {
  const [channel, setChannel] = useState<ChannelType | null>(null);
  const { cid } = useLocalSearchParams<{ cid: string }>();
  const { client } = useChatContext();

  useEffect(() => {
    const fetchChannels = async () => {
      const respones = await client.queryChannels({ cid });
      setChannel(respones[0]);
    };

    fetchChannels();
  }, [cid]);

  if (!channel) {
    return <ActivityIndicator />;
  }

  return (
    <Channel channel={channel}>
      <MessageList />
      <SafeAreaView edges={["bottom"]}>
        <MessageInput />
      </SafeAreaView>
    </Channel>
  );
}
