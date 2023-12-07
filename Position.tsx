import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Position() {
    return (
        <View style={styles.Luar}>
            <View style={styles.Lingkaran}>
                <Image source={{ uri: 'https://fotoprodukkatalog.com/wp-content/uploads/2022/07/Tutorial-membuat-keranjang-1024x684.png' }}
                    style={styles.Icon} />
                <Text style={styles.Notif}>10</Text>
            </View>
            <Text style={styles.Text}>Yuk Belanja</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Luar: {
        padding: 20,
        alignItems: 'center',
    },
    Icon: {
        width: 50,
        height: 50
    },
    Lingkaran: {
        borderWidth: 1,
        borderColor: '#4398D1',
        width: 93,
        height: 93,
        borderRadius: 93 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    Text: {
        fontSize: 12,
        color: '#777777',
        fontWeight: '700',
        marginTop: 10
    },
    Notif: {
        fontSize: 12,
        color: 'white',
        backgroundColor: '#6FCF97',
        padding: 4,
        borderRadius: 25,
        width: 24,
        height: 24,
        position: 'absolute',
        top: 0,
        right: 0,
    },
})

export default Position;