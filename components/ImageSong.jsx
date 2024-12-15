import { View, Text, Image } from 'react-native'
import React from 'react'


export default function ImageSong() {
    return (
        <View className="w-24 h-24 border">
            <Text>ImageSong</Text>
            <Image sourse={require( "../assets/imagessong/chill_guy.png")} className='w-10 h-10 border' resizeMode='contain' />
        </View>
    )
}