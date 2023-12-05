import React, { Component } from "react";
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
      <Nama />
      <TextInput style={{ borderWidth: 2 }} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Home = () => {
  return <Text>Haloooo badud</Text>;
};

const Foto = () => {
  return <Image source={{ uri: 'https://cdn.oneesports.id/cdn-data/sites/2/2022/03/naruto-uzumaki-1-1024x653.jpg' }}
    style={{ width: 100, height: 100, }} />
};

const Nama = () => {
  return <Text>Nama Ku AAA</Text>
};

class BoxGreen extends Component {
  render() {
    return <Text style={{ marginLeft: 10, marginTop: 10 }}>Ini Class</Text>
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image source={{ uri: 'https://cdn0-production-images-kly.akamaized.net/FTOfaG5coODpnvPfVcka2r4P5V4=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3167999/original/084845700_1593662619-Template_Landscape_1_.jpg' }}
          style={{ width: 100, height: 100, borderRadius: 50 }} />
        <Text style={{ color: 'red', fontSize: 30, marginHorizontal: 10 }}>Ini Siapa</Text>
      </View>
    )
  }
}

export default App;