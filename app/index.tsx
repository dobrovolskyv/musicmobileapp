
import { View, Text, Button, ImageBackground, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import Mus from '~/components/Mus';

import { useState } from 'react';




export default function Home() {
  const [selectedItem, setSelectedItem] = useState('rain');

  const items = [
    { id: 'rain', label: 'Дождь', image: require('../assets/imagessong/tropical.jpg'), background: require('../assets/imagessong/tropical.jpg'), song: "https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3" },
    { id: 'forest', label: 'Лес', image: require('../assets/imagessong/forest.jpg'), background: require('../assets/imagessong/forest.jpg'), song: "https://onlinetestcase.com/wp-content/uploads/2023/06/1-MB-MP3.mp3" },
    { id: 'mountin', label: 'Гора', image: require('../assets/imagessong/mountin.jpg'), background: require('../assets/imagessong/mountin.jpg'), song: "https://onlinetestcase.com/wp-content/uploads/2023/06/1-MB-MP3.mp3" },
    { id: 'rain2', label: 'Дождь', image: require('../assets/imagessong/tropical.jpg'), background: require('../assets/imagessong/tropical.jpg'), song: "https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3" },
    { id: 'forest2', label: 'Лес', image: require('../assets/imagessong/forest.jpg'), background: require('../assets/imagessong/forest.jpg'), song: "https://onlinetestcase.com/wp-content/uploads/2023/06/1-MB-MP3.mp3" },
    { id: 'mountin2', label: 'Гора', image: require('../assets/imagessong/mountin.jpg'), background: require('../assets/imagessong/mountin.jpg'), song: "https://onlinetestcase.com/wp-content/uploads/2023/06/1-MB-MP3.mp3" },
  ];

  const currentItem = items.find((item) => item.id === selectedItem);

  return (
    <ImageBackground source={currentItem?.background} className="flex-1 justify-center items-center" blurRadius={10}>
    <View className="w-full h-full justify-center items-center">
      {/* Большой круг с основной картинкой */}
      <View className="w-[300px] h-[300px] rounded-full bg-zinc-500 justify-center items-center absolute -left-24">
        <Mus 
        song={currentItem?.song} 
        title={currentItem?.label} 
        img={currentItem?.image} 

        items={items}className="w-[70%] h-full pt-20 pl-[0px]" />
      </View>

      {/* Набор маленьких кружков вокруг видимой части большого круга */}
      <View style={{ position: 'absolute', width: 400, height: 400 }}>
        {items.map((item, index) => {
          const startAngle = -90; // Угол начала (верхний центр круга)
          const endAngle = 90; // Угол конца (нижний центр круга)
          const angle = startAngle + ((endAngle - startAngle) / (items.length - 1)) * index; // Распределение кружков
          const radius = 220; // Радиус окружности
          const x = radius * Math.cos((angle * Math.PI) / 180); // Координата X
          const y = radius * Math.sin((angle * Math.PI) / 180); // Координата Y

          return (
            <TouchableOpacity
              key={item.id}
              style={{
                position: 'absolute',
                left: 80 + x - 40, // Центрируем относительно большого круга
                top: 200 + y - 40, // Центрируем относительно большого круга
                width: 84,
                height: 84,
                borderRadius: '50%',
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: selectedItem === item.id ? 4 : 0,
                borderColor: selectedItem === item.id ? 'yellow' : 'transparent',
              }}
              onPress={() => setSelectedItem(item.id)}
            >
              <Image source={item.image} style={{ width: 80, height: 80, borderRadius: '50%'}} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
    <StatusBar barStyle="light-content" backgroundColor="#6200ee" />
  </ImageBackground>
  );
}

