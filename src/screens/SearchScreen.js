import React,{useState} from 'react';
import {View,StyleSheet,Text, ScrollView} from 'react-native';
import {Searchbar} from 'react-native-paper';
import RestaurantsList from '../components/RestaurantsList';
import useResults from '../hooks/useResults'

const SearchScreen = (props) =>{
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    
    const [results,callYelp] = useResults();
 
    const filterByPrice = (price) =>{
        
        return results.filter((res)=>{            
            return res.price===price
        })
    }
    const navi =  (id)=>{
        props.navigation.navigate('Details',{id})
    } 
    return (
        <View style={styles.container}>
             <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                onBlur = {()=>{callYelp(searchQuery)}}
                value={searchQuery}
                />
         
         <ScrollView >
            <RestaurantsList results={filterByPrice('$')} title="Cost Effective" navi={navi}/>
            <RestaurantsList results={filterByPrice('$$')} title="Bit Pricier" navi={navi}/>
            <RestaurantsList results={filterByPrice('$$$')} title="Big Spender" navi={navi}/>
        </ScrollView>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        
        flex:1,        
        
        
    },
    bold:{
        fontWeight:'bold'
    }
    
})

export default SearchScreen