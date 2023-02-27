import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native';

import HttpService from '../services/htytpservice';


const UseEffectComponent=()=> {
  const [products, updateProduct]=useState([]);  
  const [message, setMessage] = useState('');
  const serv = new HttpService();

  useEffect(()=>{
     serv.getProducs().then((resp)=>{
        console.log(`Data = ${JSON.stringify(resp.data)}`);
         updateProduct([...products, resp.data]);
         setMessage(`Success ${message}`);
     }).catch((err)=>{
        setMessage(`Faild ${message}`);
     });
  },[products]);

  const ListRecords=()=>{
    if(products.length === 0 || products === undefined){
        return (
            <View>
                <Text>No Records</Text>
                <Text>{message}</Text>
            </View>
        );
    } else {
        return(
            <View>
                <Text>
                    {products[0].ProductId}
                </Text>
                <Text>{message}</Text>
            </View>
        );
    }
  }


  return (
    <View style={styles.view}>
        <Text style={styles.text}>Receiving the Data from External Service</Text>
        {/* <ListRecords/> */}
    </View>
    
  );
}

const styles = StyleSheet.create({
    view:{
        height:400,
        width:200,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignContent:'center'
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'red'
    }
});


export default UseEffectComponent
