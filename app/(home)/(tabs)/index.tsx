import { UseAuth } from "@/providers/AuthProvider";
import { router } from "expo-router";
import { useState } from "react";
import { Text } from "react-native";
import {
  Channel,
  ChannelList,
  MessageInput,
  MessageList,
} from "stream-chat-expo";

export default function MainTab() {
  const [channel, setChannel] = useState();

  const {user} = UseAuth()

  return (
    <ChannelList
    filters={{members:{$in:[user.id]}}}
      onSelect={(channel) => router.push(`/channel/${channel.cid}`)}
    />
  );
}
