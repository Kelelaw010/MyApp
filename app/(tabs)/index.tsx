import { useState }  from "react";
// import { Text, View } from "react-native-web";

export default function index(){
  const [Quran, setQuran] = useState([]);
  //data dari API
  const getQuran = async () =>{
    const response = await fetch("https://equran.id/apidev/v2")
    const data = await response.json()
    setQuran (data.response)
  }
}
