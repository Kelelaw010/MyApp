import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { getSurahList } from '../API/quranAPI';
import axios from 'axios';

export default function SurahDetailScreen({ route }) {
  const { id: surahNumber } = route.params;
  const [surah, setSurah] = useState(null);

  useEffect(() => {
    axios.get(`https://api.quran.gading.dev/surah/${surahNumber}`)
      .then(res => setSurah(res.data.data))
      .catch(err => console.log(err));
  }, [surahNumber]);

  return (
    <ScrollView style={{ padding: 16 }}>
      {surah && (
        <>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{surah.name.transliteration.id}</Text>
          <Text style={{ fontStyle: 'italic' }}>{surah.name.translation.id} - {surah.numberOfVerses} Ayat</Text>
          {surah.verses.map((verse) => (
            <View key={verse.number.inSurah} style={{ marginVertical: 10 }}>
              <Text style={{ fontSize: 20, textAlign: 'right' }}>{verse.text.arab}</Text>
              <Text style={{ color: '#555' }}>{verse.translation.id}</Text>
            </View>
          ))}
        </>
      )}
    </ScrollView>
  );
}
