import { View, Text, Button, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function Mus({ title, song, img, ...props }) {
    const [sound, setSound] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);

    //функция для загрузки и воспроизведения звука
    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync({
            uri: song
        },
            {
                shouldPlay: true,
                isLooping: true,
                volume: volume
            })
        setSound(sound);
        console.log('Playing Sound');
        await sound.playAsync(); //начало воспроизведения
        setIsPlaying(true); //обновляем состояние на воспроизведение
    }

    //функция для паузы и возобновления воспроизведения
    async function togglePause() {
        if (isPlaying) {
            await sound.pauseAsync(); //пауза
            console.log("pause song");

        } else {
            await sound.playAsync(); //воспроизведение
        }
        setIsPlaying(!isPlaying); //изменить состояния воспроизведения
    }

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync(); //очистка ресурсап при размонтировании
            }
            : undefined;
    }, [sound]);

    //обработчик изменения громкости
    const handleVolumeChange = (volume) => {
        setVolume(volume);
        if (sound) {
            sound.setVolumeAsync(volume);
        }
    }


    useEffect(() => {
        const enableBackgroundAudio = async () => {
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: false,
                staysActiveInBackground: true,
                interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
                playsInSilentModeIOS: true,
                interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
                shouldDuckAndroid: true,
                playThroughEarpieceAndroid: false,
            });
        };
    
        enableBackgroundAudio();
    }, []);
    return (
        <TouchableOpacity
            onPress={isPlaying ? togglePause : playSound}
            className="w-full h-full rounded-full"
        >
            {/* Внешний View для закругления и обрезки содержимого */}
            <View className="flex justify-center items-center">
                {/* Используем Image вместо ImageBackground */}
                <Image
                    source={img}
                    className='w-full h-full rounded-full'
                    resizeMode="cover"
                />
                {/* Текст и элементы управления */}
                <View className={`pt-10 text-2xl pl-20 absolute left-0 right-0 z-10 ${props.className}`}>
                    {/* <Text className="text-center text-white text-6xl font-bold">{title}</Text> */}
                    <Text className="text-center text-white mt-4">{isPlaying ? <AntDesign name="pause" size={30} color="white" /> : <AntDesign name="caretright" size={30} color="white" />
                    }</Text>
                    
                        <View className="mt-10 pt-10">
                       
                                <Slider
                                    className="w-full h-full"
                                    minimumValue={0}
                                    maximumValue={1}
                                    value={volume}
                                    onValueChange={handleVolumeChange}
                                />
                       
                        </View>
                   
                </View>
            </View>
        </TouchableOpacity>
    )
}