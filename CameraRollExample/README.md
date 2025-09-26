# CameraRollExample 📸

A **React Native 0.68** application demonstrating how to integrate and use the device's camera roll/gallery with custom components. This project showcases expertise in both **Android** and **iOS** platforms, including the new React Native architecture with **Fabric** and **TurboModules**.

---

## Features

- Browse and select photos from the device camera roll.
- Fully compatible with the **New Architecture** (Fabric + TurboModules) on React Native.
- Custom styling for `EditText` and UI elements on Android.
- Debugging support using **Flipper** for network, database, and crash inspection.
- Designed for production with ProGuard optimization on Android.

---

## Tech Stack

- **React Native 0.68**
- **React** 17.0.2
- **Android**: New Architecture with TurboModules, Fabric Renderer, JNI/C++ integration
- **iOS**: Native bridging for Camera Roll (can demonstrate on request)
- **Libraries**:
  - `@react-native-community/cameraroll`
  - `react-native-camera-roll-selector`
  - Flipper for debugging
- **Build Tools**:
  - Android: Gradle, Buck (optional)
  - iOS: Xcode 14+ (demonstrated native integration)
- **Testing & Linting**:
  - Jest
  - ESLint

---

## Android Architecture Highlights

This project includes advanced Android setup demonstrating:

- **Custom TurboModules** via JNI/C++ integration.
- **Fabric Components** registration with `MainComponentsRegistry`.
- Use of **ReactPackageTurboModuleManagerDelegate** to manage TurboModules.
- **ProGuard rules** for release optimization.
- **Debug builds** configured for Flipper plugins: network, databases, shared preferences, and crash reporting.
- Native C++ modules built via `Android.mk` and integrated into the app.

---

## iOS Considerations

- Full support for native bridging to access Camera Roll.
- Designed with **modular architecture** so that Fabric and TurboModules could be implemented for iOS.
- Can demonstrate Xcode integration, build settings, and debugging process to recruiters.

---

## Installation

### Android

# Install dependencies
npm install

# Run on connected device or emulator
npm run android

```
android/
├── app/
│   ├── src/main/java/com/camerarollexample
│   │   ├── MainApplication.java
│   │   ├── MainActivity.java
│   │   └── newarchitecture/
│   │       ├── components/MainComponentsRegistry.java
│   │       └── modules/MainApplicationTurboModuleManagerDelegate.java
│   ├── res/                  # Android resources
│   ├── jni/                  # Native C++ modules
│   └── build_defs.bzl        # Buck build definitions
├── proguard-rules.pro
...
