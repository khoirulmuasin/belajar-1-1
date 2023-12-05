import React from "react";
import { Image, Text, TextInput, View } from "react-native";

const App = () => {
  return (
    <View>
      <View style={{ width: 80, height: 80, backgroundColor: 'red', marginTop: 30 }} />
      <Text>Halo</Text>
      <Text>Halo1</Text>
      <Text>Halo2</Text>
      <Foto />
      <Home />
      <TextInput style={{ borderWidth: 2 }} />
    </View>
  );
};

const Home = () => {
  return <Text>Haloooo badud</Text>;
};

const Foto = () => {
  return <Image source={{ uri: 'https://cdn.oneesports.id/cdn-data/sites/2/2022/03/naruto-uzumaki-1-1024x653.jpg' }}
    style={{ width: 100, height: 100, }} />
}

export default App;