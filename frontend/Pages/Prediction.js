import React, {useState, useEffect} from 'react';
import {View, Button, Image, Text } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';

const Prediction = () => {
  const [imageUri, setImageUri] = useState('');
  const [predictedClass, setPredictedClass] = useState('');

  // useEffect(() => {
  //   fetch('http://192.168.2.12:5000/home')
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //     })
  //     .then(data => {setMessage(data), console.log(data)});
  // }, []);

  const launchImagePicker = () => {
    ImageCropPicker.openPicker({
      width: 180,
      height: 180,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        const uri = image.path;
        setImageUri(uri);
        console.log('Image URI updated:', uri);
      })
      .catch(error => {
        console.log('ImagePicker Error: ', error);
      });
  };

  const makePrediction = async () => {
    const formData = new FormData();
    formData.append('image', {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'image.jpg'
    });
  
    const response = await fetch('http://192.168.2.12:5000/predict', {
      method: 'POST',
      body: formData
    }).catch(error => {
      console.error('Network request failed:', error);
    })
    const predictedClass = await response.text();
    console.log("predictedClass: after", predictedClass)
  
    setPredictedClass(predictedClass);
  
    const imageBuffer = await response.arrayBuffer();
    const imageArray = new Uint8Array(imageBuffer);
    const image = await Jimp.read(imageArray);
  
    image.resize(180, 180).quality(60).write("resized.jpg");
  };

  const skinDetails = (type)=>{
    type_1="Acne"
    type_2="Normal"
    type_3="Varicella"
    acne_message="Acne is a medical condition, and there are many effective treatments available. It's important to work with a dermatologist to find a treatment that works best for you."
    normal_message="Your skin looks great! You have a healthy and well-balanced complexion."
    varicella_message="Chickenpox can be highly contagious, so it's important to take precautions to avoid spreading the virus to others. Please stay home and avoid contact with others until you are no longer contagious"
    if(type==type_1){
      return (<Text style={{fontSize:16, padding:10, color:'#000', textAlign:'center'}}>{acne_message}</Text>)

    }
    if(type==type_2){
      return (<Text style={{fontSize:16, padding:10,color:'#000', textAlign:'center'}}>{normal_message}</Text>)
    }
    if(type==type_3){
      return (<Text style={{fontSize:16, padding:10,color:'#000',textAlign:'center'}}>{varicella_message}</Text>)

    }
  }

  return (
    <View>
      {imageUri ? (
        <View style={{display:'flex',alignContent:'center', alignItems:'center', marginTop:20, marginBottom:20}}>
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
        </View>
      ) : null}
      <View style={{marginTop:20, marginBottom:20, height:50}}>
      <Button color={'#000'} style={{height:100}} title="Select Image" onPress={launchImagePicker} />
      </View>
      <View>
      <Button color={'#000'} title="Make Prediction" onPress={makePrediction} />
      </View>
      {predictedClass?<View>
      <Text style={{fontSize:24, color:'#000', marginTop:20, marginBottom:20, textAlign:'center'}}>Your Skin Disease Type:{predictedClass}</Text>
      </View>:null}
      
      {predictedClass?<View>
        {skinDetails(predictedClass)}
      </View>:null}
    </View>
  );
};

export default Prediction;
