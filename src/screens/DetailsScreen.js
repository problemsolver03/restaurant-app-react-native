import React,{useEffect,useState} from 'react';
import {Text, FlatList,StyleSheet,Image} from 'react-native';

import axios from 'axios';

const DetailsScreen = (props) =>{
    
    const[result,setResult] = useState(null)
    const getBusiness = () =>{
        const id = props.route.params.id;
        axios.get('https://yelpapicors.herokuapp.com/business',{
            params:{id}
        })
        .then((res)=>{          
           
            setResult(res.data);
        })
        .catch((err)=>{console.log(err)})
    }
    useEffect(()=>{
        getBusiness()
    },[])

    if(result === null){
        return (<Text>Please wait..</Text>)
    }
    return (
        <>  
            <Text style={style.header}>{result.name}</Text>
            <Text style={style.contact}>{result.phone}</Text>
            <FlatList 
            vertical
            data={result.photos}
            keyExtractor = {(res)=>res}
            renderItem = {({item})=>{
                return(
                    <Image source={{uri:item}} style={style.image}></Image>
                )
            }}>

            </FlatList>
        </>
    )
}


const style = StyleSheet.create({
    image:{
        width:'100%',
        height:350,
        borderWidth:16,
        borderColor:'#fff'
    },
    header:{
        fontSize:24,
        marginLeft:12,
        marginTop:30
    },
    contact:{
        marginLeft:12,
        marginBottom:30
    }
})
export default DetailsScreen