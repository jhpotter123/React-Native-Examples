# useReducer Counter App

A modern, beautifully styled React Native counter application demonstrating the power and flexibility of the `useReducer` hook for state management.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)
![iOS](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white)

## 🎯 Overview

This project showcases a clean implementation of React Native's `useReducer` hook through an interactive counter application. The app features a modern dark theme with smooth animations and intuitive controls, making it perfect for demonstrating React Native development skills and state management concepts.

## ✨ Features

- **Modern UI Design**: Dark theme with gradient backgrounds and smooth shadows
- **Animated Interactions**: Counter scales up when values change for visual feedback
- **Dynamic Color Coding**: 
  - 🟢 Green for positive numbers
  - 🔴 Red for negative numbers  
  - 🔵 Blue for zero
- **Multiple Actions**: Increment, decrement, and reset functionality
- **Responsive Layout**: Optimized for various screen sizes
- **Splash Screen Integration**: Professional app launch experience

## 🛠️ Technologies & Skills Demonstrated

### React Native Core Concepts
- **useReducer Hook**: Advanced state management for complex state logic
- **useEffect Hook**: Component lifecycle management
- **Functional Components**: Modern React development patterns
- **Custom Hooks**: Reusable stateful logic

### UI/UX Development
- **StyleSheet API**: Efficient styling with React Native
- **Animated API**: Smooth animations and transitions
- **TouchableOpacity**: Interactive button components
- **StatusBar**: Platform-specific status bar customization
- **Responsive Design**: Flexible layouts using Flexbox

### Mobile Development
- **Cross-platform Development**: Single codebase for iOS and Android
- **Native Bridge**: Integration with platform-specific features
- **Performance Optimization**: Efficient rendering and memory management

### Development Best Practices
- **Component Architecture**: Clean, maintainable component structure
- **Action-Based State Updates**: Predictable state management pattern
- **Type Safety**: Consistent action type definitions
- **Code Organization**: Logical separation of concerns

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development - macOS only)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jhpotter123/React-Native-Examples.git
   cd React-Native-Examples/UseReducerExample2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **iOS Setup** (macOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

4. **Run the application**
   
   For Android:
   ```bash
   npm run android
   ```
   
   For iOS:
   ```bash
   npm run ios
   ```

## 📱 How It Works

### State Management with useReducer

The app uses `useReducer` instead of `useState` to demonstrate more advanced state management patterns:

```javascript
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case ACTIONS.RESET:
      return { count: 0 };
    default:
      return state;
  }
};
```

### Why useReducer?

- **Predictable State Updates**: All state changes go through a single reducer function
- **Action-Based Logic**: Clear separation between what happens (actions) and how it happens (reducer)
- **Easier Testing**: Pure functions are easier to unit test
- **Scalability**: Better for complex state logic than multiple useState calls

## 🎨 Design Features

### Color System
- **Background**: Deep dark blue (#0f0f23) for modern appearance
- **Primary**: Dynamic colors based on counter value
- **Accent**: Orange (#FF9800) for reset button
- **Text**: High contrast white and gray for accessibility

### Animations
- **Scale Animation**: Counter circle animates when value changes
- **Touch Feedback**: Buttons have opacity changes on press
- **Smooth Transitions**: 150ms duration for responsive feel

## 📊 Project Structure

```
UseReducerExample2/
├── App.js                 # Main application component
├── package.json          # Project dependencies and scripts
├── android/              # Android-specific configuration
├── ios/                  # iOS-specific configuration
└── README.md            # Project documentation
```

## 🧪 Learning Outcomes

By studying this project, developers can learn:

1. **Advanced React Hooks**: Practical useReducer implementation
2. **React Native Styling**: Modern UI design patterns
3. **Animation Basics**: Using the Animated API for better UX
4. **State Management Patterns**: When and why to use useReducer over useState
5. **Mobile App Architecture**: Clean component organization
6. **Cross-Platform Development**: Building for both iOS and Android

## 🔄 Future Enhancements

Potential improvements for learning purposes:
- [ ] Add Redux integration for global state management
- [ ] Implement TypeScript for type safety
- [ ] Add unit and integration tests
- [ ] Include custom hooks for animation logic
- [ ] Add haptic feedback for mobile devices
- [ ] Implement theme switching (light/dark mode)

## 🤝 Contributing

This project is part of a portfolio showcasing React Native development skills. Feel free to:
- Report issues
- Suggest improvements
- Fork and create your own versions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

Created by **Jeff Potter** as part of a React Native development portfolio.

- Portfolio: [GitHub Profile](https://github.com/jhpotter123)
- LinkedIn: [Connect with me](https://linkedin.com/in/your-profile)

---

⭐ **Star this repository if it helped you learn React Native!**