import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';


export default function Mus({ title, song, ...props }) {
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
    return (
        <TouchableOpacity onPress={isPlaying ? togglePause : playSound} >
            <View className={`border rounded-full w-24 h-24 ${props.className}`}>
                <Text className='text-center'>{title}</Text>
                {sound ? (
                    <View className='mt-5 bg-rose-600'>
                        {song && (
                            <Slider
                                className="w-full h-full"
                                minimumValue={0}
                                maximumValue={1}
                                value={volume}
                                onValueChange={handleVolumeChange}
                            />
                        )}

                    </View>
                ) : ''}
            </View>
        </TouchableOpacity>
    )
}