import { Text, View } from "react-native";
import Login from "./../components/Login";
import Review from "../app/Review";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >

      <Login />
      <Review />
      
    </View>
  );
}
