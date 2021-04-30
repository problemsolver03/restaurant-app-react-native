import React from 'react';
import {View,StyleSheet,Text,FlatList} from 'react-native';
import Restaurant from './Restaurant';



const RestaurantsList = ({title,results,navi}) =>{
  
  return(
      <View style={styles.view}>
           <Text style={styles.header}>{title}</Text>
           <FlatList 
            horizontal
            data={results}
            keyExtractor = {(res)=>res.id}
            renderItem = {({item})=>{
                return(
                    <Restaurant restaurant={item} style={styles.card} navi={navi}/>
                )
            }}
           />

      </View>
  )
}

const styles = StyleSheet.create({
    view:{
       marginLeft:20,
       marginTop:12,
       marginBottom:16,
    },
    card:{
        width:200,
        overflow:'hidden'
    },
    header:{
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4,
        marginTop:12
    }
})

export default RestaurantsList;