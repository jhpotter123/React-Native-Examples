# Flexbox Integration Guide

## Adding the FlexboxDemo Component

To showcase additional flexbox concepts in your app, you can integrate the `FlexboxDemo` component:

### Option 1: Replace Current Content
```javascript
import FlexboxDemo from './components/FlexboxDemo';

const App = () => {
  return <FlexboxDemo />;
};
```

### Option 2: Add as Additional Screen
```javascript
import { ScrollView } from 'react-native';
import FlexboxDemo from './components/FlexboxDemo';

const App = () => {
  return (
    <ScrollView style={{flex: 1}}>
      {/* Your existing team dashboard */}
      <YourExistingContent />
      
      {/* Additional flexbox demonstrations */}
      <FlexboxDemo />
    </ScrollView>
  );
};
```

### Option 3: Tab Navigation (Future Enhancement)
Consider implementing React Navigation to switch between:
- Team Dashboard (current app)
- Flexbox Concepts (FlexboxDemo component)
- Interactive Playground

## Key Flexbox Properties Demonstrated

1. **flexDirection**: Controls main axis direction
2. **justifyContent**: Distributes items along main axis
3. **alignItems**: Aligns items along cross axis
4. **flex**: Defines how items grow and shrink
5. **flexWrap**: Controls item wrapping behavior

## Color Coding in Demo
- 🔴 Red: First item
- 🔵 Blue: Second item  
- 🟢 Green: Third item