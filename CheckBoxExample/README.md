# License

This project is open-source under the MIT License.

# CheckBoxExample

A **React Native** example project demonstrating a customizable checkbox component for iOS and Android. This project showcases reusable component design, styling flexibility, and event handling in React Native.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

---

## Demo

This project implements a fully functional checkbox component with the following features:

- Customizable size, color, and style
- Supports toggle events with callback
- Cross-platform support (iOS and Android)
- Simple integration in any React Native app

---

## Features

- ✅ **Reusable Component**: `CheckBox.js` is designed for easy reuse and customization.
- 🎨 **Custom Styling**: Supports background color, border radius, border width, margin, and color.
- 📱 **Cross-Platform**: Works seamlessly on iOS (simulator or device) and Android.
- ⚡ **Event Handling**: Fires `onChange` callback whenever the checkbox state changes.
- 🔧 **Modern React Native Setup**: Uses React Native 0.68.5 with vector icons and Metro bundler optimizations.

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/CheckBoxExample.git
cd CheckBoxExample
```

## Usage

Start the Metro bundler and run the app on your platform of choice:

## iOS (Simulator):

npm run ios

## iOS (Device):

npm run ios-device

## Android:

npm run android

## Example:

```
import CheckBox from './CheckBox';

<CheckBox
  name="checkbox1"
  checked={false}
  size={50}
  color="red"
  style={{
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 2,
    margin: 10,
    borderColor: 'black'
  }}
  onChange={(name, checked) => console.log(name, checked)}
/>
```

### Project Structure

```
CheckBoxExample/
├─ App.js           # Main app component
├─ CheckBox.js      # Custom reusable checkbox component
├─ index.js         # Entry point
├─ package.json
├─ babel.config.js
├─ metro.config.js
├─ android/         # Android project files
├─ ios/             # iOS project files
└─ scripts/         # Optional postinstall scripts
```

## Technologies

- React Native 0.68.5
- React 17.0.2
- React Native Vector Icons 8.1.0
- Babel 7.x
- Metro Bundler
- Jest for testing
- ESLint for linting

## Contributing

Contributions are welcome! Please fork this repository, create a feature branch, and submit a pull request.
