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

- Access the device camera for photo and video capture.
- Support for React Native **New Architecture**:
  - Fabric Renderer integration
  - TurboModules support
- Custom theming and styles for native Android components.
- Debugging and inspection with **Flipper** integration.

---

## 🛠️ Tech Stack

- **React Native** `0.68.5`
- **React** `17.0.2`
- **React Native Camera** `^4.2.1`
- **Java & Android SDK** (native modules)
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
- Buck or Gradle for Android builds

### Run on Android

```bash
# Install dependencies
npm install

# Start Metro bundler
npm start

# Run the Android app
npm run android

# Navigate to android folder
cd android

# Generate dependencies
./gradlew :app:copyDownloadableDepsToLibs

# Install & run app with Buck
buck install -r android/app
