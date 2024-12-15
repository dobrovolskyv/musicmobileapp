
import { View, Text, Button } from 'react-native';
import Track from '~/components/Track';
import Mus from '~/components/Mus';
import ImageSong from '~/components/ImageSong';
import { SafeAreaView } from 'react-native-safe-area-context';




export default function Home() {

  return (
    <SafeAreaView>
      <Text className="text-3xl text-red-400">Звуки</Text>
      <ImageSong/>
      <Mus className="ml-6"
        title="Rain"
        song={"https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3"} />
      <Mus className="mt-6 ml-16"
        title="Fire"
        song={"https://onlinetestcase.com/wp-content/uploads/2023/06/1-MB-MP3.mp3"} />
    </SafeAreaView>
  );
}