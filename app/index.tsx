
import { View, Text, Button, ImageBackground, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import Mus from '~/components/Mus';

import { useState } from 'react';




export default function Home() {
  const [selectedItem, setSelectedItem] = useState('rain');

  const items = [
    { id: 'rain', label: 'Дождь', image: require('../assets/imagessong/tropical.jpg'), background: require('../assets/imagessong/tropical.jpg'), song: "https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3" },
    { id: 'forest', label: 'Лес', image: require('../assets/imagessong/forest.jpg'), background: require('../assets/imagessong/forest.jpg'), song: "https://onlinetestcase.com/wp-content/uploads/2023/06/1-MB-MP3.mp3" },
    { id: 'mountin', label: 'Гора', image: require('../assets/imagessong/mountin.jpg'), background: require('../assets/imagessong/mountin.jpg'), song: "https://onlinetestcase.com/wp-content/uploads/2023/06/1-MB-MP3.mp3" },
  ];

  const currentItem = items.find((item) => item.id === selectedItem);

  return (
    <ImageBackground source={currentItem?.background} className=' flex-1 justify-center items-center' blurRadius={10}>
      <View className='justify-center items-center '>
        //большой круг с основной картинкой
        <View className='w-52 h-52 rounded-full bg-zinc-500 relative justify-center items-center mb-20'>
          {/* <Image source={currentItem?.image} className="w-full h-full rounded-full" resizeMode='cover' /> */}
           <Mus song={currentItem?.song} title={currentItem?.label} img={currentItem?.image} сlassName="absolute w-full top-0"/>
        </View>

        //набор маленький кружков
        <View className='flex-row justify-around w-10/12'>
          {items.map((item) => (
            <TouchableOpacity
              key={item.id}
              className={`w-18 h-18 rounded-full bg-white/50 mx-2 items-center justify-center ${selectedItem === item.id ? 'border-2 border-yellow-400' : ''
                }`}
              onPress={() => setSelectedItem(item.id)}
            >
           
              <Image source={item.image} className='w-24 h-24 rounded-full' />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      

       
      <StatusBar barStyle="light-content" backgroundColor="#6200ee" />
    </ImageBackground>
  );
}

