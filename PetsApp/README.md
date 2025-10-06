# 🐾 Pets Management App - React Native

> A React Native application demonstrating **conditional rendering**, **state management**, and **component lifecycle** patterns with a pet management interface.

![React Native](https://img.shields.io/badge/React%20Native-0.68.5-blue?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![iOS](https://img.shields.io/badge/iOS-Compatible-lightgrey?style=for-the-badge&logo=apple)
![Android](https://img.shields.io/badge/Android-Compatible-green?style=for-the-badge&logo=android)

## 🌟 Project Overview

This application showcases **conditional rendering** and **component state management** in React Native through a pet management interface. It demonstrates toggle functionality, component mounting/unmounting, and efficient state handling patterns.

## 🎯 Key Features Demonstrated

### 🎨 UI/UX Components
- **Toggle Button Interface** with dynamic text and state changes
- **Conditional Component Rendering** showing/hiding the Pets component
- **Responsive Button Design** with custom styling and touch feedback
- **Clean Component Architecture** with separation of concerns

### 🔧 Technical Implementation
- **React Hooks** using `useState` for state management
- **Conditional Rendering** with logical operators
- **Component Lifecycle** management through mounting/unmounting
- **Event Handling** with toggle functionality

## 🛠️ Technology Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React Native 0.68.5 |
| **Language** | JavaScript ES6+ |
| **Components** | Custom Pets Component |
| **Patterns** | React Hooks, Conditional Rendering |

## 📱 App Functionality

### Core Features
1. **Show/Hide Toggle**: Dynamic button to show or hide pets list
2. **State Management**: Efficient boolean state handling
3. **Custom Styling**: Professional button and layout design
4. **Component Architecture**: Modular pets component integration

### Code Highlights

```javascript
const [showPets, setShowPets] = useState(true);

const toggle = () => {
  setShowPets(state => !state);
};

// Conditional rendering with clean boolean logic
{showPets && <Pets />}
```

## 🎨 Design Features

- **Centered Layout**: Professional alignment with `paddingTop: 200`
- **Interactive Button**: 100x40 custom-styled toggle button
- **Dynamic Text**: Button text changes based on state ("hide"/"show")
- **Component Mounting**: Efficient component lifecycle management

## 🚀 Installation & Setup

```bash
# Navigate to project directory
cd PetsApp

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

### **React Native Proficiency**
- ✅ State management with React Hooks
- ✅ Conditional rendering patterns
- ✅ Component lifecycle understanding
- ✅ Custom styling and layout design

### **Development Best Practices**
- ✅ Clean component architecture
- ✅ Efficient state updates
- ✅ Proper event handling
- ✅ Responsive UI design

## 🔮 Learning Outcomes

This project demonstrates:
- **State Management**: Proper use of useState hook
- **Conditional Logic**: Efficient component rendering
- **UI Design**: Custom styling and layout patterns
- **Component Architecture**: Modular design principles

---

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue.svg)](https://www.linkedin.com/in/jeffrey-potter-14196028/)
[![Email](https://img.shields.io/badge/Email-Contact-red.svg)](mailto:jhpotter123@gmail.com)

## 👨‍💻 About the Developer

**Jeff Potter**
- Demonstrates proficiency in React Native development
- Showcases understanding of state management and conditional rendering
- Exhibits clean code practices and component architecture

This project showcases expertise in **React Native development**, **state management**, and **component design patterns**. Focus on creating **efficient**, **maintainable**, and **user-friendly** mobile applications.

### 📫 Connect With Me
- 📧 Email: [jhpotter123@gmail.com](mailto:jhpotter123@gmail.com)
- 💼 LinkedIn: [Jeffrey Potter](https://www.linkedin.com/in/jeffrey-potter-14196028/)
- 🐙 GitHub: [jhpotter123](https://github.com/jhpotter123)

---

<p align="center">
  <i>Built with ❤️ using React Native</i><br>
  <i>Demonstrating professional mobile development skills</i>
</p>