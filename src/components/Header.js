import * as React from 'react';
import { View,StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

function CustomNavigationBar(props) {
   
  return (<View>
    <View style={styles.bar}></View>
    <Appbar.Header>
        
      <Appbar.Content title={props.scene.route.name} />
    </Appbar.Header>
    </View>
  );
}

const styles= StyleSheet.create({
    bar:{
        height:28,
        backgroundColor:'rgb(85, 6, 196)',
        color:"#fff"
    }
})
export default CustomNavigationBar