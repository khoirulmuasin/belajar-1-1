import React from "react";
import { ScrollView, View } from "react-native";
import KumpulanKomponet from './KumpulanKomponet'
import StyleComponent from "./StyleComponent";
import Coba2 from "./Coba2";
import Coba3 from "./Coba3";
import FlexBox from "./FlexBox";

const Home = () => {
  return (
    <ScrollView>
      <View>
        <StyleComponent />
        <KumpulanKomponet />
        <Coba2 />
        <Coba3 />
        <FlexBox />
      </View>
    </ScrollView>
  );
};

export default Home;