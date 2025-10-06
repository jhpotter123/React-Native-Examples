# ⭐ React Native Star Rating Component

> A React Native application demonstrating **custom star rating** implementation with both **tap** and **swipe** rating components, including SVG icon integration and interactive rating systems.

![React Native](https://img.shields.io/badge/React%20Native-0.68.5-blue?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![iOS](https://img.shields.io/badge/iOS-Compatible-lightgrey?style=for-the-badge&logo=apple)
![Android](https://img.shields.io/badge/Android-Compatible-green?style=for-the-badge&logo=android)

## 🌟 Project Overview

This application showcases **custom star rating components** built from the ground up in React Native. It features both **TapRating** and **SwipeRating** implementations with custom SVG icons, demonstrating advanced component development and user interaction patterns.

## 🎯 Key Features Demonstrated

### 🎨 Interactive Rating Components
- **TapRating Component** with custom SVG icon support
- **SwipeRating Component** for gesture-based rating input
- **Custom Icon Integration** using SVG and PNG images
- **Real-time Rating Updates** with immediate visual feedback

### 🔧 Advanced Technical Implementation
- **Custom Component Development** improving upon existing libraries
- **SVG Icon Support** in TapRating component
- **Gesture Recognition** for swipe-based rating interactions
- **State Synchronization** between text input and rating components

## 🛠️ Technology Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React Native 0.68.5 |
| **Language** | JavaScript ES6+ |
| **Components** | Custom TapRating, SwipeRating |
| **Graphics** | SVG, PNG Image Support |
| **Patterns** | React Hooks, Custom Components |

## 📱 App Functionality

### Core Features
1. **Tap-based Rating**: Click on stars to set rating
2. **Swipe-based Rating**: Drag across stars for precise rating
3. **Custom Icons**: Gear-themed rating icons with selected/unselected states
4. **Text Input Integration**: Numeric input field synchronized with star rating
5. **Real-time Updates**: Immediate visual feedback on rating changes

### Code Highlights

```javascript
const [starCount, setStarCount] = useState(1);
const [starCountStr, setStarCountStr] = useState("1");

const onChangeText = (value) => {
  setStarCount(Number(value));
  setStarCountStr(value);
};

// Custom gear icons for rating
const GEAR_SELECTED = require('./gear-selected.png')
const GEAR_UNSELECTED = require('./gear-unselected.png')
```

## 🎨 Design Features

- **Custom Gear Icons**: Unique visual design with gear-themed rating system
- **Dual Input Methods**: Both touch and swipe interaction support
- **Synchronized State**: Text input and visual rating stay in sync
- **Professional Styling**: Clean layout with proper spacing and alignment

## 🚀 Installation & Setup

```bash
# Navigate to project directory
cd RatingExample

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

### **Advanced Component Development**
- ✅ Custom rating component implementation
- ✅ SVG icon integration and display
- ✅ Gesture recognition and handling
- ✅ State synchronization between components

### **User Experience Design**
- ✅ Multiple interaction methods (tap/swipe)
- ✅ Real-time visual feedback
- ✅ Custom icon design and implementation
- ✅ Intuitive user interface patterns

### **Technical Excellence**
- ✅ Library improvement and customization
- ✅ Cross-platform gesture handling
- ✅ State management and data flow
- ✅ Component architecture and reusability

## 🔮 Use Cases

This pattern is essential for:
- **Product Reviews**: E-commerce and service rating systems
- **User Feedback**: App store ratings and reviews
- **Survey Applications**: Opinion and satisfaction surveys
- **Quality Assessment**: Content and service evaluation

---

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue.svg)](https://www.linkedin.com/in/jeffrey-potter-14196028/)
[![Email](https://img.shields.io/badge/Email-Contact-red.svg)](mailto:jhpotter123@gmail.com)

## 👨‍💻 About the Developer

**Jeff Potter**
- Demonstrates proficiency in React Native development
- Showcases advanced component development and gesture handling
- Exhibits ability to improve upon existing libraries and create custom solutions

This project showcases expertise in **React Native development**, **custom component architecture**, and **advanced user interaction patterns**. Focus on creating **intuitive**, **responsive**, and **highly interactive** mobile components.

### 📫 Connect With Me
- 📧 Email: [jhpotter123@gmail.com](mailto:jhpotter123@gmail.com)
- 💼 LinkedIn: [Jeffrey Potter](https://www.linkedin.com/in/jeffrey-potter-14196028/)
- 🐙 GitHub: [jhpotter123](https://github.com/jhpotter123)

---

<p align="center">
  <i>Built with ❤️ using React Native</i><br>
  <i>Demonstrating professional mobile development skills</i>
</p>