import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Tracks } from '~/types'


export default function Track({ title, ...props }: any) {


    return (
        <TouchableOpacity >
            <View className={`border rounded-full w-24 h-24 ${props.className}`} >
                <Text className='py-8 text-center'>{title}</Text>
               
            </View>
        </TouchableOpacity>
    )
}