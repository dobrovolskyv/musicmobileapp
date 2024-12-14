import { View, Text, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';


export default function Mus({ song }) {
    const [sound, setSound] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);

    //функция для загрузки и воспроизведения звука
    async function loadSound() {
    }
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
        <View className='mt-6 border'>
            <Button
                title={isPlaying ? 'Pause' : 'Play'}
                onPress={isPlaying ? togglePause : playSound} />
            {sound && (
                <View className='mt-5 bg-rose-600'>
                    <Text>Volume: {Math.round(volume * 100)}%</Text>
                    <Slider
                        className="w-full h-10"
                        minimumValue={0}
                        maximumValue={1}
                        value={volume}
                        onValueChange={handleVolumeChange}
                    />
                </View>
            )}
        </View>
    )
}