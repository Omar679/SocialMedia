import UsersList from "@/components/UsersList";
import { supabase } from "@/lib/supabase";
import { UseAuth } from "@/providers/AuthProvider";
import { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";

export default function UserScreen() {
  const [users, setUsers] = useState([]);

  const { user } = UseAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      let { data: profiles, error } = await supabase
        .from("profiles")
        .select("*")
        .neq("id", user?.id);
      setUsers(profiles);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <FlatList
        data={users}
        renderItem={({ item }) => <UsersList users={item} />}
      />
    </>
  );
}
