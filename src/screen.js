import React, { useState } from 'react'
import { View, Text, TouchableOpacity,Image, Button,TextInput } from 'react-native'
import { initial,final } from './data'
import {storage} from './storage'

const  screen=(props) =>{

let argument = "On click change text";
const [count,setcount] = useState(0)
const [num,setnum] = useState(count)
let dis = false;
if (count == 0){
  dis=true
}
else{
  dis=false
}

const [state,setstate] = useState("you can change this and will show initially") // Hooks


  return (
    <View>
      <TouchableOpacity onPress={()=>setstate(argument)}>
      <View style={{padding:20,backgroundColor:'#ff0000'}}>
        <Text style={{ fontSize: 20, padding: 50, color: 'white', backgroundColor: 'black' }}>{initial}</Text>
      </View>
      </TouchableOpacity>
      <View style={{marginTop:30}}>
      <Button
      title='change text to final'
      onPress={()=>setstate(final)}
      />
      </View>
      <View style={{padding:20,backgroundColor:'#ff0000'}}>
        <Text style={{ fontSize: 20, padding: 50, color: 'white', backgroundColor: 'black' }}>{state}</Text>
      </View>
    </View>
  )
}
export default (screen);