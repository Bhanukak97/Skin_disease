import React, { useState } from "react";
import { Text } from "react-native/types";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Prediction = ()=>{
    const[selectImage, setSelectImage]  = useState("")

async function launchImageLibrary(options, callback){
    const result = await launchImageLibrary(options);
console.log(result)
}

// You can also use as a promise without 'callback':
    return(
        <Text>Prediction</Text>

    )
}

export default Prediction;