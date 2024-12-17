import { View, Text, Image } from 'react-native'
import React from 'react'
// import {imageData} from '../constants'
import forest from "../assets/imagessong/forest.jpg"


export default function ImageSong() {
    return (
        <View >
            <Image 
            source={forest} 
            className="w-24 h-24"
            resizeMode="contain"
             />
        </View>
    )
}