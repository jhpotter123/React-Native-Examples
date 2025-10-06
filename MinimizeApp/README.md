# 📱 App State Monitor - React Native

> A React Native application demonstrating **AppState API** usage and lifecycle management for detecting when the app goes to background/foreground.

![React Native](https://img.shields.io/badge/React%20Native-0.68.5-blue?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![iOS](https://img.shields.io/badge/iOS-Compatible-lightgrey?style=for-the-badge&logo=apple)
![Android](https://img.shields.io/badge/Android-Compatible-green?style=for-the-badge&logo=android)

## 🌟 Project Overview

This application showcases the implementation of **React Native's AppState API** to monitor and respond to application state changes. It demonstrates proper event listener management, lifecycle hooks, and state monitoring patterns essential for mobile app development.

## 🎯 Key Features Demonstrated

### 📱 App Lifecycle Management
- **AppState API Integration** for monitoring app state transitions
- **Event Listener Management** with proper cleanup and memory management
- **State Change Detection** between `active`, `background`, and `inactive` states
- **Cross-platform Compatibility** handling differences between iOS and Android

### 🔧 Technical Implementation
- **React Hooks Pattern** using `useState` and `useEffect`
- **Memory Leak Prevention** with proper event listener cleanup
- **Backward Compatibility** supporting both old and new React Native versions
- **Console Logging** for debugging and monitoring state changes

## 🛠️ Technology Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React Native 0.68.5 |
| **Language** | JavaScript ES6+ |
| **APIs** | AppState API |
| **Patterns** | React Hooks, Event Listeners |

## 📱 App Functionality

### Core Features
1. **Real-time State Monitoring**: Tracks when app moves between foreground/background
2. **Proper Event Cleanup**: Prevents memory leaks by properly removing listeners
3. **Cross-version Support**: Handles both modern and legacy React Native versions
4. **Debug-friendly**: Console logs for easy state change tracking

### Code Highlights

```javascript
// Modern event listener with proper cleanup
useEffect(() => {
  const subscription = AppState.addEventListener("change", handleAppStateChange);
  
  return () => {
    if (subscription && typeof subscription.remove === 'function') {
      subscription.remove();
    } else {
      // Fallback for older RN versions
      AppState.removeEventListener("change", handleAppStateChange);
    }
  };
}, []);
```

## 🚀 Installation & Setup

```bash
# Navigate to project directory
cd MinimizeApp

# Install dependencies
npm install

# iOS setup (Mac only)
cd ios && pod install && cd ..

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

## 🎯 Skills Demonstrated

### **Mobile Development Expertise**
- ✅ AppState API implementation and lifecycle management
- ✅ Event listener patterns and memory management
- ✅ Cross-platform mobile development
- ✅ React Native hooks and state management

### **Technical Proficiency**
- ✅ Modern JavaScript (ES6+) and React patterns
- ✅ Proper cleanup and memory leak prevention
- ✅ Backward compatibility handling
- ✅ Debugging and monitoring implementations

## 🔮 Use Cases

This pattern is essential for:
- **Background sync management** (pause/resume operations)
- **Analytics tracking** (session duration, app usage)
- **Resource optimization** (pause animations, stop timers)
- **User experience** (save state, pause video/audio)

---

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue.svg)](https://www.linkedin.com/in/jeffrey-potter-14196028/)
[![Email](https://img.shields.io/badge/Email-Contact-red.svg)](mailto:jhpotter123@gmail.com)

## 👨‍💻 About the Developer

**Jeff Potter**
- Demonstrates proficiency in React Native development
- Showcases understanding of mobile app lifecycle patterns
- Exhibits clean code practices and proper resource management

This project showcases expertise in **React Native development**, **mobile lifecycle management**, and **performance optimization**. Focus on creating **efficient**, **memory-safe**, and **cross-platform** mobile applications.

### 📫 Connect With Me
- 📧 Email: [jhpotter123@gmail.com](mailto:jhpotter123@gmail.com)
- 💼 LinkedIn: [Jeffrey Potter](https://www.linkedin.com/in/jeffrey-potter-14196028/)
- 🐙 GitHub: [jhpotter123](https://github.com/jhpotter123)

---

<p align="center">
  <i>Built with ❤️ using React Native</i><br>
  <i>Demonstrating professional mobile development skills</i>
</p>