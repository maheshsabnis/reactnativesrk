import React,{useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// IMplicitly Invoked Component that provides HTML
// Use this when No Behavior is Needed (e.g. Local Functions)
const MyComponent=()=>(
    <View></View>
);

// Explicitly Invoked Component that returns HTML DOM
// Use this a an Autonomous Compoennt with Following
// View, Data, and Behavior (aka logic)

const FirstComponent=({valueObject, communicator})=>{
  const [msg,setMessage] = useState('I am from Child')  
  return(
    <View>
        <Text>The First Child Component</Text>
        <Text>Values Received from Parent: {valueObject}</Text>
        <Button title='Emit Message'
          onPress={()=>communicator(msg)}
        ></Button>
    </View>
  );
};
// Inline CSS Objects
const styles = StyleSheet.create({

});

export default FirstComponent;