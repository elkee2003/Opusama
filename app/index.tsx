import { Text, View } from "react-native";
import { Link, Redirect, Stack} from "expo-router";

export default function Index() {
  return (
    <Redirect href={'/home'}/>
  );
}
