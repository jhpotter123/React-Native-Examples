# 🚀 React Native Splash Screen Demo

> A React Native application demonstrating **splash screen** implementation using `react-native-splash-screen` with automatic dismissal and lifecycle management.

![React Native](https://img.shields.io/badge/React%20Native-0.68.5-blue?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![iOS](https://img.shields.io/badge/iOS-Compatible-lightgrey?style=for-the-badge&logo=apple)
![Android](https://img.shields.io/badge/Android-Compatible-green?style=for-the-badge&logo=android)

## 🌟 Project Overview

This application demonstrates the implementation of **native splash screens** in React Native using the `react-native-splash-screen` library. It showcases proper app initialization patterns, timing control, and seamless user experience transitions.

## 🎯 Key Features Demonstrated

### 📱 App Launch Experience
- **Native Splash Screen Integration** using react-native-splash-screen
- **Automatic Dismissal** with controlled timing
- **Smooth Transitions** from splash to main app content
- **Cross-platform Implementation** supporting both iOS and Android

### 🔧 Technical Implementation
- **Lifecycle Management** with proper useEffect usage
- **Timer-based Control** for splash screen duration
- **Native Module Integration** bridging JavaScript and native code
- **App Initialization Patterns** for professional app launches

## 🛠️ Technology Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React Native 0.68.5 |
| **Language** | JavaScript ES6+ |
| **Library** | react-native-splash-screen |
| **Patterns** | React Hooks, Native Modules |

## 📱 App Functionality

### Core Features
1. **Native Splash Display**: Shows splash screen on app launch
2. **Timed Dismissal**: Automatically hides splash after 3 seconds
3. **Smooth Transition**: Seamless switch to main app content
4. **Professional UX**: Industry-standard app launch experience

### Code Highlights

```javascript
useEffect(() => {
  // Hide the splash screen after 3 seconds for demo purposes
  setTimeout(() => {
    SplashScreen.hide();
  }, 3000);
}, []);
```

## 🎨 Design Features

- **Centered Layout**: Clean and professional main screen design
- **Minimal Interface**: Focus on splash screen functionality
- **Responsive Design**: Adapts to different screen sizes
- **Professional Timing**: 3-second display duration for optimal UX

## 🚀 Installation & Setup

```bash
# Navigate to project directory
cd SplashExample

# Install dependencies
npm install

# iOS setup (Mac only)
cd ios && pod install && cd ..

# Additional setup for splash screen (platform-specific)
# Follow react-native-splash-screen documentation for:
# - iOS: Configure LaunchScreen.storyboard
# - Android: Configure theme and drawable resources

# Run on iOS
npx react-native run-ios

# Run on Android
npx react-native run-android
```

## 📋 Requirements

- **Node.js** 16.0 or higher
- **React Native CLI**
- **Xcode** 14.0+ (for iOS development)
- **Android Studio** (for Android development)
- **iOS** 12.0+ / **Android** API level 21+

## 🔧 Platform Configuration

### iOS Setup
- Configure `LaunchScreen.storyboard`
- Update `AppDelegate` for splash screen control

### Android Setup
- Configure splash theme in `styles.xml`
- Update `MainActivity` for splash screen management

## 🎯 Skills Demonstrated

### **Native Module Integration**
- ✅ Third-party native library integration
- ✅ Cross-platform native module usage
- ✅ App lifecycle and initialization management
- ✅ Timer-based UI control

### **User Experience Design**
- ✅ Professional app launch experience
- ✅ Smooth transition animations
- ✅ Timing optimization for user engagement
- ✅ Cross-platform consistency

## 🔮 Use Cases

This pattern is essential for:
- **App Branding**: Display company logo and branding during launch
- **Initialization Time**: Mask app loading and setup processes
- **Professional UX**: Create polished, commercial-grade app experience
- **Performance Perception**: Improve perceived app performance

---

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue.svg)](https://www.linkedin.com/in/jeffrey-potter-14196028/)
[![Email](https://img.shields.io/badge/Email-Contact-red.svg)](mailto:jhpotter123@gmail.com)

## 👨‍💻 About the Developer

**Jeff Potter**
- Demonstrates proficiency in React Native development
- Showcases native module integration and app lifecycle management
- Exhibits understanding of user experience and professional app design

This project showcases expertise in **React Native development**, **native module integration**, and **app launch optimization**. Focus on creating **professional**, **polished**, and **user-friendly** mobile app experiences.

### 📫 Connect With Me
- 📧 Email: [jhpotter123@gmail.com](mailto:jhpotter123@gmail.com)
- 💼 LinkedIn: [Jeffrey Potter](https://www.linkedin.com/in/jeffrey-potter-14196028/)
- 🐙 GitHub: [jhpotter123](https://github.com/jhpotter123)

---

<p align="center">
  <i>Built with ❤️ using React Native</i><br>
  <i>Demonstrating professional mobile development skills</i>
</p>