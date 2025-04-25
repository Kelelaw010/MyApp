import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [quran, setQuran] = useState([]);

  // ambil data dari api
  const getQuran = async () => {
    const response = await fetch("https://equran.id/apidev/v2");
    const data = await response.json();
    setQuran(data.response);
    console.log(data);
  };
  //panggil si quran
  useEffect(() => {
    getQuran();
  }, []);

  return (
    <View  style= {{fontSize:28, fontWeight: 'bold', color: '#212121'}}>
      <Text>Daftar Surah</Text>
    </View>
  );
}