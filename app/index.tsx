
import { View, Text, Button } from 'react-native';
import Track from '~/components/Track';
import Mus from '~/components/Mus';




export default function Home() {
  
  return (
    <View>
      <Text className="text-3xl text-red-400">gfdgdgdf</Text>
      <Track title={"rain"} className="ml-6" />
      <Track title={"snow"} className="mt-6 ml-16" />
     <Mus song={"https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3"}/>
     <Mus song={"https://onlinetestcase.com/wp-content/uploads/2023/06/1-MB-MP3.mp3"}/>
    </View>
  );
}