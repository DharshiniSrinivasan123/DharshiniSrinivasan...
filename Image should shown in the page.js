/ 07-08-2023 only image should shown in the page
    import React from 'react';
    import { View, Image, StyleSheet } from 'react-native';
    
    const FixedSizeImage = () => {
      return (
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('./assets/pikachu.png')}/>
          
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: 250,
        height: 250,
      },
    });
    
    export default FixedSizeImage;