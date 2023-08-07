// 07-08-2023 When you click the button image should show
    import React, { useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Image } from 'react-native';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      uri:
        'https://static.vecteezy.com/system/resources/previews/018/871/732/original/cute-and-happy-dog-png.png',
      title: 'Dog',
    },
    {
      uri:
        'https://e7.pngegg.com/pngimages/151/483/png-clipart-the-waving-cat-cats-paw-cat.png',
      title: 'Cat',
    },
    {
      uri:
        'https://w7.pngwing.com/pngs/955/614/png-transparent-goldfish-graphy-goldfish-miscellaneous-photography-orange-thumbnail.png',
      title: 'Fish',
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {selectedImage && (
          <Image
            source={{ uri: selectedImage.uri }}
            style={{ width: 250, height: 250 }}
          />
        )}
      </View>
      <View style={styles.buttonContainer}>
        {images.map((image, index) => (
          <Button
            key={index}
            title={image.title}
            onPress={() => setSelectedImage(image)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default App; 
