import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home Screen</Text>
      <Link href="/cart">Go to Cart</Link>
      <Link href="/auth/login">Login</Link>
      <Link href="/auth/register">Register</Link>
    </SafeAreaView>
  );
}
