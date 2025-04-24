import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [quran, setQuran] = useState([]);

  // ambil data dari api
  const getQuran = async () => {
    const response = await fetch("https://equran.id/apidev/v2");
    const data = await response.json();
    setQuran(data);
  };

  useEffect(() => {
    getQuran();
  }, []);

  return (
    <View>
      <Text>Daftar Surah</Text>
    </View>
  );
}