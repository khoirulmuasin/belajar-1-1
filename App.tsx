import React, { Component } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import poto1 from './foto1.jpg';

const Home = () => {
  return (
    <StyleComponent />
  );
};

const StyleComponent = () => {
  return (
    <View>
      <Text style={style.Text}>stylr component</Text>
      <View style={{
        width: 200, height: 200, backgroundColor: '#0abde3', borderWidth: 2,
        borderColor: 'blue', marginTop: 20, marginLeft: 20,
      }} ></View>
      <View style={{
        padding: 12, backgroundColor: '#0abde3',
        width: 212, borderRadius: 8,
        marginTop: 19,
      }}>
        <Image style={StylePoto.Image} source={poto1} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 16 }}>Halo Teman Teman</Text>
        <Text style={{ marginTop: 20, color: 'red', fontSize: 20 }}>Salam Kenal</Text>
        <Text style={{ marginTop: 25 }}>HAAAAAA</Text>
        <View style={Tombol.View}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
            Beli
          </Text>
        </View>
      </View>
    </View>
  )
}

const Tombol = StyleSheet.create({
  View: {
    backgroundColor: 'red',
    borderRadius: 10,
    margin: 5,
    paddingVertical: 5,
  }
})

const StylePoto = StyleSheet.create({
  Image: {
    width: 188,
    height: 107,
    borderRadius: 8,
  }
})

const style = StyleSheet.create({
  Text: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
  }
})

const KumpulanKomponet = () => {
  return (
    <View>
      <Text style={{ fontSize: 30, color: 'blue' }}>Halo</Text>
      <Text>Halo1</Text>
      <Text>Halo2</Text>
      <Foto />
      <Kata />
      <Input />
      <Kotak />
      <Profile />
      <Inpu1 />
    </View>
  )
}

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

const Input = () => {
  return (
    <View>
      <TextInput style={{ borderWidth: 1, paddingTop: 5, }}></TextInput>
      <TextInput style={{ borderWidth: 1, paddingTop: 5, }}></TextInput>
    </View>
  )
}

class Kotak extends Component {
  render() {
    return <Text>Class Component</Text>
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image source={{ uri: 'https://assets.kompasiana.com/items/album/2022/08/05/spongebob-jellyfishing-by-athenatt-da6y2g-62ec8cd408a8b514d7326582.jpg?t=o&v=770' }}
          style={{ width: 100, height: 100, marginTop: 39, borderRadius: 50 }} />
        <Text style={{ fontSize: 50, color: 'red' }}>Halo Teman</Text>
      </View>
    )
  }
}

class Inpu1 extends Component {
  render() {
    return <TextInput style={{ borderWidth: 1 }}></TextInput>
  }
}

export default Home;