import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Camera as CameraIcon, Image as ImageIcon } from 'lucide-react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';

export default function CreateScreen() {
  // Only initialize camera-related state on native platforms
  const [cameraPermission, requestPermission] = Platform.select({
    ios: () => useCameraPermissions(),
    android: () => useCameraPermissions(),
    default: () => [null, () => {}],
  })();
  
  const [cameraType, setCameraType] = useState(
    Platform.select({
      ios: () => CameraType.back,
      android: () => CameraType.back,
      default: () => null,
    })()
  );

  // Web platform message
  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Camera functionality is not available on web.</Text>
        <Text style={styles.text}>Please use the mobile app to access camera features.</Text>
      </View>
    );
  }

  // Permission handling for native platforms
  if (!cameraPermission?.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>We need your permission to show the camera</Text>
        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option}>
          <CameraIcon size={32} color="#fff" />
          <Text style={styles.optionText}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <ImageIcon size={32} color="#fff" />
          <Text style={styles.optionText}>Gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 20,
  },
  option: {
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 16,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0095f6',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});