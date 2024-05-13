import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ChatProvider from "@/providers/ChatProvider";
import { client } from "@/providers/ChatProvider";
import { UseAuth } from "@/providers/AuthProvider";
import { router } from "expo-router";

const UsersList = ({ users }) => {
  const { user } = UseAuth();
  const gotoChat = async () => {
    const channel = client.channel("messaging", {
      members: [user.id, users.id],
    });
    // Here, 'travel' will be the channel ID
    await channel.create();
    router.replace(`(home)/channel/${channel.cid}`)
  };

  return (
    <Pressable
      onPress={gotoChat}
      style={{ backgroundColor: "white", padding: 15 }}
    >
      <Text style={{ fontWeight: "800" }}>{users.full_name}</Text>
    </Pressable>
  );
};

export default UsersList;

const styles = StyleSheet.create({});
