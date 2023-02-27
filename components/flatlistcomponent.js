import React, { Component } from 'react'
import {StyleSheet, StatusBar, View, FlatList, 
    Text, Button, SafeAreaView, Alert} from 'react-native';


const Item = ({prd})=>(
    <View style={styles.item}>
       <Text style={styles.title} onPress={()=>alert(prd.ProductId)}>{prd.ProductId}</Text>
       <Text style={styles.title}>{prd.ProductName}</Text>
       <Text style={styles.title}>{prd.Price}</Text>
   </View>);

const ItemSeperatorComponent=()=>(
    <View style={styles.seperator}>
        {/* <Text></Text> */}
    </View>
);
const ListEmptyComponent=()=>(
    <View style={styles.seperator}>
        <Text style={styles.norecordtext}> No Recods in the List</Text>
    </View>
);
const ListHeaderComponent=()=>(
    <View style={styles.header}>
    </View>
);
const ListFooterComponent=()=>(
    <View style={styles.footer}>
    </View>
);

const FlatlistComponent =()=>{
    const products =[
        {ProductId:101, ProductName:'Laptop', Price:5000},
        {ProductId:102, ProductName:'Desktop', Price:3000},
        {ProductId:103, ProductName:'RAM', Price:1000},
        {ProductId:104, ProductName:'SSD', Price:4000},
        {ProductId:105, ProductName:'HDD', Price:2000}
    ];

    const endReached=()=>{
        alert('end reached');
    };


    const getSelectedItemData=(item)=>{
        Alert.alert(`Selected Record Value ${item}`);
    };


    return (
        <SafeAreaView style={styles.container}>
        <FlatList  
        // horizontal={true}
        ItemSeparatorComponent={ItemSeperatorComponent}
        ListEmptyComponent={ListEmptyComponent}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
        ListHeaderComponentStyle={styles.header}
        data={products}
        onEndReached={endReached}
        renderItem={(item) => <Item prd={item.item} 
            evt={()=>getSelectedItemData(item.item)} />}
        keyExtractor={item =>item.ProductId} 
    />    
    </SafeAreaView>
    );s
 
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    view :{
        color: 'magenta',
        height:80,
        width:100 
    },
    item: {
      backgroundColor: 'yellow',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    seperator: {
        backgroundColor: 'red',
        width:1000,
        height:10
      },
    title: {
      fontSize: 32,
    },
    header: {
        backgroundColor:'blue',
      },
      footer: {
        backgroundColor:'magenta',
      },
      norecordtext:{
         fontSize:20,
         height:80
      }
  });

export default FlatlistComponent;
