import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const UsersList = ({ users }) => {

    console.log(users.avatar_url);
 
  return (
    <View style={{ backgroundColor: "white", padding: 15 }}>
      <Text style={{ fontWeight: "800" }}>{users.full_name}</Text>
    </View>
  );
};

export default UsersList;

const styles = StyleSheet.create({});
