import React from "react";
import { Image, Text, TextInput, View } from "react-native";

const Home = () => {
  return (
    <View>
      <Text style={{ fontSize: 30, color: 'blue' }}>Halo</Text>
      <Text>Halo1</Text>
      <Text>Halo2</Text>
      <Foto />
      <Kata />
    </View>
  );
};

const Foto = () => {
  return (
    <Image source={{ uri: 'https://cdn0-production-images-kly.akamaized.net/FTOfaG5coODpnvPfVcka2r4P5V4=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3167999/original/084845700_1593662619-Template_Landscape_1_.jpg' }}
      style={{ width: 300, height: 300, marginBottom: 10, marginLeft: 10 }} />
  )
}

const Kata = () => {
  return (
    <Text>INI BARU</Text>
  )
}

export default Home;