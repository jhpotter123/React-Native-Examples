### CameraExample 📸 (React Native 0.68)

A React Native application demonstrating how to integrate and utilize the device camera in a mobile app. Built with a focus on modern React Native architecture, this project showcases both the classic and new Fabric & TurboModules approach.

This is an older React Native project demonstrating use of native modules and camera functionality.  

⚠️ Note: `react-native-camera` triggers a ViewPropTypes deprecation warning on RN 0.68+. This is expected for older libraries.  

This project showcases:
- Integration with native Android modules
- Understanding of React Native architecture (TurboModules, Fabric)
- Older library management and troubleshooting

For newer camera projects, see my work with [React Native Vision Camera](link-to-new-project).

---

## 🚀 Features

- Access the device camera for photo capture.
- Toggle between front and back cameras.
- Toggle flash on/off.
- View captured image immediately.
- Debugging and inspection with Flipper integration.

---

## 🛠️ Tech Stack

- **React Native** `0.68.5`
- **React** `17.0.2`
- **React Native Camera** `^4.2.1`
- **TypeScript** `^5.9`
- **Android & iOS** (native modules)
- **C++** for TurboModules and Fabric component integration
- **Flipper** for debugging
- **Buck & Gradle** for builds

---

## 📁 Project Structure

- `android/app/src/main/java/com/cameraexample/` – Main Android code and React Native integration.
- `android/app/src/main/jni/` – C++ TurboModule and Fabric component implementations.
- `android/app/src/main/res/` – Android resources (drawables, styles, strings).
- `android/app/BUCK` – Buck build system configuration.
- `android/app/proguard-rules.pro` – ProGuard rules for code obfuscation.

---

## ⚡ Key Implementations

### New Architecture Support

- **MainApplicationReactNativeHost** – Loads TurboModules and Fabric Renderer.
- **MainComponentsRegistry** – Registers custom Fabric components.
- **MainApplicationTurboModuleManagerDelegate** – Loads native modules via C++ JNI integration.

### Native Debugging

- **ReactNativeFlipper.java** – Enables Flipper plugins for network, database, and UI inspection.
- Custom C++ JNI modules enhance performance and flexibility for complex native functionality.

---

## 📦 Installation & Running

### Prerequisites

- Node.js & npm
- React Native CLI
- Android Studio & SDK setup
- Xcode for iOS builds
- CocoaPods (sudo gem install cocoapods)
- Buck or Gradle for Android builds

## Steps

### Clone the repository:

git clone <repo-url>
cd CameraExample


## Install dependencies:

npm install


## Start Metro Bundler:

npm start

## Run on Android

npm run android


## Or inside android/ folder:

```
cd android
./gradlew installDebug
```

## Run on iOS

```cd ios
pod install
cd ..
npm run ios
```

## Or open in Xcode:

open ios/CameraExample.xcworkspace

## Project Structure

```
CameraExample/
├─ android/
│  ├─ app/
│  │  ├─ src/main/java/com/cameraexample/
│  │  ├─ src/main/jni/
│  │  ├─ res/
│  │  ├─ build.gradle
│  │  └─ proguard-rules.pro
│  ├─ build.gradle
│  ├─ gradle.properties
│  └─ settings.gradle
├─ ios/
│  ├─ CameraExample.xcodeproj
│  ├─ CameraExample.xcworkspace
│  └─ Podfile
├─ App.tsx
├─ index.js
├─ package.json
├─ tsconfig.json
├─ metro.config.js
└─ babel.config.js
```

## Complete App.tsx (with fixed styles)

```
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { RNCamera } from 'react-native-camera';

const App = () => {
  const [type, setType] = useState(RNCamera.Constants.Type.front);
  const [image, setImage] = useState<string | null>(null);
  const cameraRef = useRef<RNCamera | null>(null);
  const [flash, setFlash] = useState(RNCamera.Constants.FlashMode.off);

  async function takePicture() {
    if (cameraRef.current) {
      const options = { quality: 0.5 };
      const data = await cameraRef.current.takePictureAsync(options);
      setImage(data.uri);
    }
  }

  const toggleType = () => {
    setType(
      type === RNCamera.Constants.Type.front
        ? RNCamera.Constants.Type.back
        : RNCamera.Constants.Type.front
    );
  };

  const toggleFlash = () => {
    setFlash(
      flash === RNCamera.Constants.FlashMode.off
        ? RNCamera.Constants.FlashMode.on
        : RNCamera.Constants.FlashMode.off
    );
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={type}
        flashMode={flash}
      >
        <TouchableOpacity style={styles.flashButton} onPress={toggleFlash}>
          <Text style={styles.flashText}>
            {flash === RNCamera.Constants.FlashMode.off ? '⚡ Off' : '⚡ On'}
          </Text>
        </TouchableOpacity>
      </RNCamera>

      <View style={styles.buttonBar}>
        <TouchableOpacity style={styles.button} onPress={toggleType}>
          <Text style={styles.buttonText}>Flip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={takePicture}>
          <Text style={styles.buttonText}>Snap</Text>
        </TouchableOpacity>
      </View>

      {image && <Image style={styles.image} source={{ uri: image }} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  preview: {
    width: 300,
    height: 400,
    borderRadius: 10,
  },
  buttonBar: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  flashButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 25,
  },
  flashText: {
    color: 'white',
    fontSize: 16,
  },
  image: {
    width: 150,
    height: 200,
    marginTop: 20,
  },
});

export default App;
```


