import React from 'react';
import{Card,Title,Paragraph} from 'react-native-paper'
import {Image,StyleSheet,TouchableOpacity} from 'react-native'

const Restaurant  = ({restaurant,navi}) =>{

    return (
      <TouchableOpacity onPress={()=>{console.log('hmm');navi(restaurant.id) }}>
        <Card style={{marginRight:12,width:230}}>       
        <Card.Content>
          <Title style={{lineHeight:21,fontSize:17,fontWeight:'bold'}}>{restaurant.name}</Title>    
          <Image source={{ uri: restaurant.image_url }} style={styles.image} />      
          <Paragraph>Rating:{restaurant.rating} Reviews:{restaurant.review_count}</Paragraph>  
        </Card.Content>          
       
      </Card>
      </TouchableOpacity>
    )
}


const styles= StyleSheet.create({
    image:{
        width:200,
        height:150
    }
})

export default Restaurant