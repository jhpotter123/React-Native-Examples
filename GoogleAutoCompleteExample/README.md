# Google Places AutoComplete - React Native

A cross-platform React Native application demonstrating Google Places API integration with real-time address autocomplete functionality.

## 🚀 Features

- **Real-time Address Search**: Instant address suggestions as you type
- **Google Places API Integration**: Leverages Google's comprehensive location database
- **Cross-Platform**: Works seamlessly on both iOS and Android
- **Geocoding Support**: Converts addresses to coordinates using custom geocoder
- **Clean UI**: Intuitive search interface with visual icons
- **Country Filtering**: Optional country-specific search results

## 📱 Demo

The app provides a clean search interface where users can:
1. Type an address in the search field
2. See real-time autocomplete suggestions
3. Tap on any suggestion to select it
4. Get geocoded coordinates for the selected address

## 🛠 Technical Implementation

### Key Components

- **PlaceSearch.js**: Main autocomplete component with FlatList for efficient rendering
- **Geocoder.js**: Custom geocoding utility for address-to-coordinates conversion
- **App.js**: Main application wrapper with styling and configuration

### Technical Challenges Solved

1. **Cross-Platform Text Visibility**: 
   - Resolved white-on-white text issues on Android by implementing explicit color styling
   - Ensured consistent text appearance across iOS and Android platforms

2. **React Native Key Prop Optimization**:
   - Fixed FlatList key prop warnings by implementing proper `keyExtractor` using Google's `place_id`
   - Improved list performance and eliminated React warnings

3. **Icon Dependencies**:
   - Replaced vector icon libraries with Unicode emojis to eliminate font linking complexity
   - Simplified deployment process while maintaining visual appeal

4. **API Integration**:
   - Implemented efficient Google Places API calls with proper error handling
   - Added country filtering and customizable search parameters

### Code Highlights

```javascript
// Efficient FlatList with proper key extraction
<FlatList
  data={allAddress}
  renderItem={({ item, index }) => (
    <TouchableOpacity onPress={() => addressSelected(item)}>
      <Text>{item.description}</Text>
    </TouchableOpacity>
  )}
  keyExtractor={(item, index) => item.place_id || index.toString()}
/>
```

```javascript
// Cross-platform text styling
textInput: {
  height: 45,
  backgroundColor: '#fff',
  color: '#333333', // Ensures visibility on all platforms
}
```

## 🔧 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jhpotter123/React-Native-Examples.git
   cd React-Native-Examples/GoogleAutoCompleteExample
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Google Places API**
   - Get your API key from [Google Cloud Console](https://console.cloud.google.com/)
   - Replace the API key in `App.js`:
   ```javascript
   const API_KEY = "YOUR_GOOGLE_PLACES_API_KEY";
   ```

4. **iOS Setup**
   ```bash
   cd ios && pod install && cd ..
   ```

5. **Run the application**
   ```bash
   # iOS
   npx react-native run-ios
   
   # Android
   npx react-native run-android
   ```

## 📋 Requirements

- React Native 0.60+
- Google Places API key with Places API enabled
- iOS 10.0+ / Android API level 16+

## 🎯 Skills Demonstrated

- **React Native Development**: Cross-platform mobile app development
- **API Integration**: RESTful API consumption and data handling
- **State Management**: React Hooks (useState) for component state
- **Component Architecture**: Reusable, configurable components
- **Debugging & Problem Solving**: Resolved platform-specific styling issues
- **Performance Optimization**: Efficient list rendering with FlatList
- **User Experience**: Responsive autocomplete with real-time feedback

## 🔍 Google Places API Usage

This project demonstrates:
- **Autocomplete API**: For real-time address suggestions
- **Geocoding API**: For converting addresses to coordinates
- **Proper API key management** and rate limiting considerations
- **Error handling** for network requests

## 📈 Future Enhancements

- [ ] Add current location detection
- [ ] Implement search history
- [ ] Add map integration for visual address selection
- [ ] Include place details (photos, ratings, etc.)
- [ ] Add offline caching for recent searches

## 🤝 Contributing

Feel free to submit issues and enhancement requests! This project serves as a learning example and welcomes improvements.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 💼 Professional Note

This project demonstrates practical problem-solving skills in React Native development, including:
- Cross-platform compatibility handling
- Third-party API integration
- Performance optimization
- Code maintainability and component reusability

Perfect for showcasing mobile development capabilities to potential employers and clients.