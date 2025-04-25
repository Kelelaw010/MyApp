import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity,} from 'react-native';
import { getSurahList } from '../API/quranAPI';

export default function HomeScreen({ navigation }) {
  const [surah, setSurah] = useState([]);

  useEffect(() => {
    getSurahList().then(res => setSurah(res.data));
  }, []);


  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('SurahDetail', { id: item.nomor })}
      style={{
        backgroundColor: '#EADCF0',
        padding: 12,
        marginVertical: 6,
        marginHorizontal: 16,
        borderRadius: 8,
      }}
      >
      <Text style={{ fontSize: 18, padding: 10 }}>{item.nomor}. {item.nama_latin}</Text>
    </TouchableOpacity>
  );
  
 //daftar surah
  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      <FlatList 
        data={surah}
        renderItem={renderItem}
        keyExtractor={item => item.nomor.toString()} 
      />
    </View>
  );
}


