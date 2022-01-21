import React from 'react';
import { View, Text, Button, Image, Alert } from 'react-native';
import { useState } from 'react/cjs/react.development';

export default function quantity() {

    const [num, setnum] = useState(0) // Hooks
let additon = false
    let condition = true
    if (num > 0) {
        condition = false
    }
    else {
        condition = true  
    }
    if (num>=10) {
        additon = true
    }
    else{
        additon = false
    }

    let x
    x = 5;
    let y = 10;


    return (
        <View>
            <Image
                style={{
                    width: 150, height: 190
                }}
                source={require('./img.webp')}
            />
            <View style={{ flexDirection: 'row', marginTop: 100, marginLeft: 50 }}>
                <Button
                    title='add'
                    disabled={additon}  
                                      onPress={() => setnum(num + 1)}
                />
                <View style={{ borderTopWidth: 2, borderBottomWidth: 2, borderColor: 'blue' }}>
                    <View style={{ marginLeft: 10, marginRight: 10 }}><Text style={{ fontSize: 30 }}>{num}</Text></View>
                </View>
                <Button
                    title='sub'
                    disabled={condition}
                    onPress={() => setnum(num - 1)}
                />

            </View>
        </View>


    );
}
