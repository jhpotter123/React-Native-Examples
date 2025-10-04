# React Native MaskedExample Portfolio Project

[![React Native](https://img.shields.io/badge/React%20Native-0.68.7-blue.svg)](https://reactnative.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Testing](https://img.shields.io/badge/Testing-Jest%20%26%20React%20Testing%20Library-green.svg)](https://jestjs.io/)
[![iOS](https://img.shields.io/badge/Platform-iOS-lightgrey.svg)](https://developer.apple.com/ios/)
[![Android](https://img.shields.io/badge/Platform-Android-green.svg)](https://developer.android.com/)

## 🚀 Project Overview

A comprehensive React Native portfolio project demonstrating advanced mobile development skills, form handling, animations, testing strategies, and cross-platform compatibility. This project showcases practical implementations of modern React Native development patterns and best practices.

## 🎯 Technical Skills Demonstrated

### **Core React Native Expertise**
- **Cross-Platform Development**: Native iOS and Android app development from a single codebase
- **Modern React Patterns**: Functional components with Hooks (useState, useEffect, useRef)
- **Performance Optimization**: Native driver animations and efficient rendering strategies
- **Platform-Specific Code**: iOS and Android conditional implementations

### **Advanced Form Handling & UX**
- **Input Masking**: Professional implementation using `react-native-masked-text`
- **Custom Validation**: Date format validation and real-time input formatting
- **Accessibility**: Proper testID implementation for automated testing
- **User Experience**: Seamless switching between masked and plain text inputs

### **Animation & Interaction Design**
- **Native Animations**: High-performance animations using React Native's Animated API
- **Complex Animation Sequences**: Chained animations with timing, spring, and easing functions
- **Interactive Components**: Touch handling and gesture recognition
- **Responsive Design**: Dynamic layouts adapting to device dimensions

### **Component Architecture**
- **Reusable Components**: Modular accordion components with clean separation of concerns
- **Props Management**: Type-safe prop handling and component composition
- **State Management**: Efficient local state management with React Hooks
- **Event Handling**: Comprehensive event lifecycle management

## 📱 Key Features

### 1. **Smart Input Masking System**
```javascript
// Dynamic date format switching based on locale
type={'custom'}
options={{
    mask: '99/99/9999'
}}
```
- Real-time input formatting
- Cross-platform keyboard optimization
- Raw and masked value handling

### 2. **Advanced Animation Framework**
- Height, fade, move, and spring animations
- Native driver optimization for 60fps performance
- Easing functions for professional motion design
- Responsive animations adapting to screen dimensions

### 3. **Interactive Accordion Components**
- Collapsible content sections
- Smooth height animations
- State-driven expansion/collapse
- Customizable header and content rendering

## 🧪 Testing Strategy

### **Comprehensive Test Coverage**
- **Unit Testing**: Jest framework with React Native Testing Library
- **Component Testing**: Isolated component behavior verification
- **Integration Testing**: User interaction flow validation
- **Mock Implementation**: Strategic mocking for third-party dependencies

```javascript
// Example test demonstrating TDD approach
test('renders Date Of Birth input and allows typing', () => {
    const { getByPlaceholderText } = render(<App />);
    const input = getByPlaceholderText('Date Of Birth');
    fireEvent.changeText(input, '12/31/1999');
    expect(input.props.value).toBe('12/31/1999');
});
```

## 🛠 Development Environment & DevOps

### **Build System Configuration**
- **Metro Bundler**: Optimized React Native build pipeline
- **Babel Configuration**: Modern JavaScript transpilation
- **ESLint Integration**: Code quality enforcement
- **Jest Configuration**: Custom test environment setup

### **Platform-Specific Builds**
- **iOS**: Xcode project with proper Podfile dependency management
- **Android**: Gradle build system with ProGuard optimization
- **Device Testing**: Real device deployment configurations

### **Dependency Management**
- Strategic use of proven libraries (`react-native-masked-text`)
- Version pinning for stability
- Conflict resolution and compatibility testing

## 📊 Performance Considerations

- **Native Driver Usage**: All animations utilize native driver for optimal performance
- **Efficient Re-renders**: Strategic use of React.memo and callback optimization
- **Memory Management**: Proper cleanup of animations and event listeners
- **Bundle Size Optimization**: Careful dependency selection and tree shaking

## 🔧 Getting Started

### Prerequisites
- Node.js (v14+)
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation & Running
```bash
# Install dependencies
npm install

# iOS Simulator
npm run ios

# Android Emulator
npm run android

# Run tests
npm test
```

## 🎨 Architecture Highlights

### **Component Structure**
```
components/
├── AccordionList.js      # Smart container component
├── AccordionItem.js      # Reusable accordion item
├── AnimationExample.js   # Animation showcase
└── ListItem.js          # Base list item component
```

### **Key Design Patterns**
- **Composition over Inheritance**: Component composition for flexibility
- **Separation of Concerns**: Clear distinction between presentation and logic
- **Prop Drilling Avoidance**: Efficient state management patterns
- **Error Boundary Implementation**: Graceful error handling

## 💼 Professional Development Practices

- **Version Control**: Git workflow with meaningful commit messages
- **Code Review Ready**: Clean, documented, and testable code
- **Documentation**: Comprehensive inline comments and README
- **Debugging**: Console logging and debugging strategies
- **Performance Monitoring**: Built-in performance tracking

## 🌟 Why This Project Matters

This project demonstrates not just coding ability, but a comprehensive understanding of:
- **Mobile Development Lifecycle**: From development to testing to deployment
- **User Experience Design**: Creating intuitive and responsive interfaces
- **Code Quality**: Maintainable, testable, and scalable architecture
- **Cross-Platform Expertise**: Maximizing code reuse while respecting platform differences
- **Modern Development Practices**: Testing, linting, and performance optimization

---

**Ready to discuss how these skills can benefit your team? Let's connect!**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue.svg)](https://linkedin.com/in/yourprofile)
[![Email](https://img.shields.io/badge/Email-Contact-red.svg)](mailto:your.email@example.com)