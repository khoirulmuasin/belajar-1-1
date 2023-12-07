import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

export default class FlexBox extends Component {
    render() {
        return (
            <View>
                <View>
                    <View style={{ backgroundColor: '#ee5253', width: 100, height: 100, }} />
                    <View style={{ backgroundColor: '#feca57', width: 100, height: 100, }} />
                    <View style={{ backgroundColor: '#1dd1a1', width: 100, height: 100, }} />
                    <View style={{ backgroundColor: '#4f27cd', width: 100, height: 100, }} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                    <Image source={{ uri: 'https://cdn0-production-images-kly.akamaized.net/Mz5FZubd5cMXAYjYthSy3eXnSOM=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/792516/original/067576500_1420786914-gambar-spongebob.jpg' }}
                        style={{ width: 100, height: 100, borderRadius: 50, marginRight: 15 }} />
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Aku LOOO</Text>
                        <Text>100000</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-around',
                    margin: 20
                }}>
                    <Text>HALO</Text>
                    <Text>HALO</Text>
                    <Text>HALO</Text>
                    <Text>HALO</Text>
                    <Text>HALO</Text>
                </View>
            </View>
        )
    }
}

export default FlexBox;