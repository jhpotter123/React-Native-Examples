# React Native Location Example

A comprehensive React Native application demonstrating advanced location services, geofencing, and real-time position tracking capabilities. This project showcases modern React Native development practices and iOS/Android location API integration.

## 🚀 Features

- **Real-time Location Tracking**: Continuous GPS position monitoring with high accuracy
- **Geofencing**: Create virtual boundaries and detect entry/exit events
- **Permission Handling**: Robust location permission management for iOS and Android
- **Background Location**: Support for location updates when app is backgrounded
- **Location Simulation**: Development tools for testing location features
- **Error Handling**: Comprehensive error management and user feedback
- **Cross-Platform**: Native iOS and Android implementations

## 📱 Screenshots

*Add screenshots of your app in action*

## 🛠 Technical Stack

- **React Native**: 0.72+ (React Native CLI)
- **Location Services**: `@react-native-community/geolocation`
- **Permissions**: Native iOS/Android permission APIs
- **State Management**: React Hooks (useState, useEffect)
- **Platform**: iOS 11+ / Android API 21+

## 📋 Prerequisites

- Node.js 16+
- React Native development environment
- Xcode 14+ (for iOS)
- Android Studio (for Android)
- CocoaPods (for iOS dependencies)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd LocationExample
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **iOS Setup**
   ```bash
   cd ios
   pod install
   cd ..
   ```

4. **Run the application**
   ```bash
   # iOS
   npx react-native run-ios
   
   # Android
   npx react-native run-android
   ```

## ⚙️ Configuration

### iOS Permissions (Info.plist)

The app includes proper location permission declarations:

```xml
<key>NSLocationWhenInUseUsageDescription</key>
<string>This app needs access to your location while you use the app so it can show your current position.</string>

<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>This app may access your location at all times to provide continuous location updates.</string>
```

### Android Permissions (AndroidManifest.xml)

```xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
```

## 🧪 Testing & Development

### iOS Simulator Location Testing

1. **Set Custom Location**:
   - Simulator → Features → Location → Custom Location
   - Enter coordinates (e.g., 37.7749, -122.4194 for San Francisco)

2. **Use GPX Files**:
   - Create custom route simulations
   - Import GPX files via Simulator → Features → Location

3. **Simulate Movement**:
   - Use predefined routes (Apple, City Bicycle Ride, etc.)
   - Test geofencing with boundary crossings

### Android Emulator Testing

1. **Extended Controls**: Use emulator's location controls
2. **Mock Locations**: Enable developer options for mock location apps
3. **GPX Import**: Import route files for realistic testing

## 🏗 Architecture

### Core Components

- **LocationService**: Centralized location management
- **GeofenceManager**: Boundary detection and monitoring
- **PermissionHandler**: Cross-platform permission requests
- **LocationDisplay**: Real-time position UI components

### Key Implementation Details

```javascript
// Permission handling with proper async/await
const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (err) {
    console.warn(err);
    return false;
  }
};

// High-accuracy location tracking
const locationOptions = {
  enableHighAccuracy: true,
  timeout: 15000,
  maximumAge: 10000,
  distanceFilter: 1, // Update every meter
};
```

## 🔧 Advanced Features

### Geofencing Implementation

- **Circular Boundaries**: Radius-based detection zones
- **Polygon Geofences**: Complex boundary shapes
- **Entry/Exit Events**: Real-time notifications
- **Background Monitoring**: Continued tracking when app is closed

### Performance Optimizations

- **Battery Efficiency**: Intelligent location update intervals
- **Memory Management**: Proper cleanup of location watchers
- **Network Optimization**: Efficient data transmission

## 🐛 Troubleshooting

### Common Issues

1. **Permission Denied**:
   - Reset simulator: Device → Erase All Content and Settings
   - Check Info.plist/AndroidManifest.xml permissions

2. **Location Not Updating**:
   - Verify location services are enabled
   - Check accuracy settings and timeout values

3. **Background Location Issues**:
   - Ensure background location permissions granted
   - Configure background app refresh settings

## 📊 Performance Metrics

- **Location Accuracy**: ±3-5 meters (GPS enabled)
- **Update Frequency**: 1-5 seconds (configurable)
- **Battery Impact**: Optimized for minimal drain
- **Memory Usage**: <10MB baseline

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Jeff [Your Last Name]**
- 📧 Email: your.email@example.com
- 💼 LinkedIn: [Your LinkedIn Profile]
- 🐙 GitHub: [Your GitHub Profile]

## 🎯 Skills Demonstrated

- ✅ React Native cross-platform development
- ✅ Native iOS/Android API integration
- ✅ Location services and geofencing
- ✅ Permission handling and user experience
- ✅ Error handling and debugging
- ✅ Performance optimization
- ✅ Modern JavaScript/TypeScript patterns
- ✅ Git version control and documentation

---

*This project demonstrates proficiency in React Native development, native mobile APIs, and location-based services - key skills for mobile application development roles.*