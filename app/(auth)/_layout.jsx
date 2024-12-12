import { View, Text } from "react-native";
import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { Loader } from "../../components";


const AuthLayout = () => {
  return (
    <>
      <Stack sreenOptions = {{headerTitle : "title"}}>
        <Stack.Screen name="sign-in" options={{ headerShown: false, title : "Sign In" }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default AuthLayout;
