# License

This project is open-source under the MIT License.

# CheckBoxExample

A **React Native** example project demonstrating a customizable checkbox component for iOS and Android. This project showcases reusable component design, styling flexibility, and event handling in React Native.

# CheckBoxExample — Stylish Checkboxes Demo

A compact, polished React Native example that demonstrates an animated, accessible, and stylable checkbox component — ideal for a portfolio screenshot or quick UI demo for recruiters.

---

## Highlights

- Animated checkbox with a subtle "pop" animation on toggle.
- Accessibility-friendly (`accessibilityRole="checkbox"`, `accessibilityState`).
- Works controlled or uncontrolled (supports `checked` prop).
- Dynamically loads FontAwesome icons with a safe unicode fallback (keeps tests and minimal environments working without the icon package).
- Demo screen includes labels, per-item colors, a `Toggle All` button, and a live JSON state preview — perfect for screenshots.

---

## Quick demo screenshot

Add a screenshot here to make the README pop. A short looped GIF or a high-quality PNG of the running app in simulator looks great on GitHub.

---

## Quick start

Prerequisites

- Node.js and npm
- React Native CLI (for device/simulator builds)
- Xcode (macOS) for iOS simulator

Install dependencies

```bash
cd CheckBoxExample
npm install
```

If you plan to run on iOS, install CocoaPods inside the `ios/` folder:

```bash
cd ios
pod install
cd ..
```

Run the app

iOS (simulator):

```bash
npx react-native run-ios
```

Android:

```bash
npx react-native run-android
```

Run the tests

```bash
npm test
```

---

## What changed (short summary for reviewers)

- Replaced the old single plain checkbox with an animated `CheckBox` component (`CheckBox.js`) that supports props: `name`, `checked`, `size`, `color`, `style`, and `onChange`.
- Implemented demo screen in `App.js` showing multiple labeled items, `Toggle All` control, and JSON state preview for easy inspection.
- Added dynamic import + fallback for `react-native-vector-icons/FontAwesome` to avoid test/build-time issues while keeping icon visuals on device.

---

## Component usage

Example:

```js
import CheckBox from './CheckBox';

<CheckBox
  name="apple"
  checked={true}
  size={28}
  color="#ff6b6b"
  style={{ borderRadius: 6, borderWidth: 2, borderColor: '#eee', backgroundColor: '#fff' }}
  onChange={(name, newValue) => console.log(name, newValue)}
/>
```

Props

- `name` — string id passed to `onChange` callback.
- `checked` — boolean (controlled). If omitted, the component manages its own state.
- `size` — numeric pixel size of the checkbox.
- `color` — color of the check glyph.
- `style` — object merged into the box: `borderRadius`, `borderWidth`, `borderColor`, `backgroundColor`, `margin`.
- `onChange(name, checked)` — callback fired when the user toggles the checkbox.

---

## Testing note

The demo contains a basic Jest test. The checkbox implementation dynamically requires FontAwesome and falls back to a Unicode checkmark when the icon package is missing or unavailable during tests; this avoids `import` parsing errors under Jest.

---

## Portfolio / README tips

- Add a screenshot or small GIF in this README to showcase the animation and layout. Place it near the top (under the Highlights section) and reference it in your main GitHub repository README.
- Short copy for recruiters: "Interactive React Native demo: animated accessible checkbox, uses vector icons with test-safe fallback — see /CheckBoxExample for source and a running demo."

---

## Possible improvements

- Add haptic feedback on toggle (iOS/Android haptics).
- Add an indeterminate/tri-state mode for partial selections.
- Bundle a small SVG for the check glyph to remove the runtime dependency on vector icons while retaining visuals.

---

## License

MIT — feel free to reuse and adapt for your portfolio.

If you'd like, I can also:
- add a ready-to-use screenshot and badge for the README
- create a short GIF for the demo
- produce a concise blurb for your top-level repo README that links to this example

Tell me which of those you'd like next and I'll add it.
