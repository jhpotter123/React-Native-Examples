### License

This project is open-source and available under the MIT License

### Architecture Highlights

- TurboModules: Optimized native module loading
- Fabric: Modern UI rendering
- C++ / JNI: Native integration examples
- Flipper: Debugging integration
- ActionSheetExample

[![React Native](https://img.shields.io/badge/React_Native-0.68.5-blue)](https://reactnative.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A clean and functional **React Native** example app demonstrating the usage of **ActionSheet**. Built with the latest React Native architecture, including **TurboModules** and **Fabric Components**, this project serves as a reference for implementing native and modern React Native features on Android and iOS.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
- [Running the App](#running-the-app)  
- [Usage](#usage)  
- [Architecture Highlights](#architecture-highlights)  
- [License](#license)  

---

## Project Overview

This project showcases the integration of **React Native ActionSheet**, with support for:

- Android and iOS platforms  
- Modern React Native architecture:
  - **TurboModules** for optimized native module loading  
  - **Fabric renderer** for high-performance UI  
- Native C++ integration via JNI for custom modules  

It demonstrates best practices for building modern React Native apps while providing a simple and extendable example.

---

## Features

- Display native **ActionSheet** menus  
- Supports **new React Native architecture** with TurboModules and Fabric  
- Handles user selection with proper callbacks  
- Integrated with **Flipper** for debugging (Databases, Network, Crash Reporting)  
- Fully compatible with Android and iOS  
- Example of bridging C++ TurboModules with JavaScript  

---

## Tech Stack

- **React Native 0.68.5**  
- **React 17**  
- **react-native-action-sheet**  
- **Android SDK** with Gradle & Buck support  
- **C++ / JNI** for native modules  
- **Flipper** for debugging  

---

## Getting Started

### Prerequisites

- Node.js >= 16  
- npm or yarn  
- Android Studio & SDK  
- Java JDK 11+  
- Xcode & CocoaPods for iOS  

### Installation

## Clone the repository
```
git clone https://github.com/jhpotter123/ActionSheetExample.git
cd ActionSheetExample
```

## Install dependencies
```
npm install
or
yarn install
```

## Install CocoaPods for iOS
```
cd ios
pod install
cd ..
```

## Running the App

# Android
```
npm run android
yarn android
```

## iOS

## Simulator
```
npm run ios
or
yarn ios
```

## Physical Device
```
npm run ios-device
or
yarn ios-device
```

## Usage

In `App.js`, the Action Sheet is triggered via a touchable button:

```javascript
import ActionSheet from 'react-native-action-sheet';

const BUTTONS = ['Option 0', 'Option 1', 'Option 2', 'Cancel'];
const CANCEL_INDEX = 3;

const showActionSheet = () => {
  ActionSheet.showActionSheetWithOptions(
    {
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX,
      tintColor: 'blue',
    },
    (buttonIndex) => {
      if (buttonIndex !== undefined) {
        console.log('button clicked:', buttonIndex);
      } else {
        console.log('clicked outside the action sheet');
      }
    }
  );
};
```

### What This Demonstrates

This example project highlights my ability to:

- Build cross-platform React Native apps (Android & iOS) with modern architecture.
- Integrate and customize native modules using TurboModules, Fabric, and C++ / JNI.
- Use third-party libraries effectively, e.g., react-native-action-sheet.
- Set up and configure development environments including Metro, CocoaPods, Gradle, and Flipper for debugging.
- Write clean, maintainable code and structure projects for clarity and scalability.
- Demonstrate practical React Native knowledge that can be applied to production apps.


---

## 👨‍💻 About the Developer

**Jeff Potter**
- Demonstrates proficiency in React Native development
- Showcases understanding of modern mobile UI patterns
- Exhibits clean code practices and component architecture
---

This project showcases my expertise in **React Native development**, **mobile UX design**, and **cross-platform application architecture**. I focus on creating **performant**, **scalable**, and **user-friendly** mobile applications that deliver exceptional user experiences.

### 📫 Connect With Me
- 📧 Email: [jhpotter123@gmail.com]((mailto:jhpotter123@gmail.com))
- 💼 LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/jeffrey-potter-14196028/)
- 🐙 GitHub: [Your GitHub Profile](https://github.com/jhpotter123)

---

<p align="center">
  <i>Built with ❤️ using React Native</i><br>
  <i>Demonstrating professional mobile development skills</i>
</p>
