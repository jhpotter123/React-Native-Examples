# CountDownExample

A clean, professional React Native example demonstrating a countdown timer component with a progress indicator and simple controls (Start, Reset, Preset durations). This repo is intended as a small polished sample you can show recruiters or include in a portfolio.

## Why this project

This project highlights practical React Native skills that recruiters often look for:

- Hooks: `useState`, `useEffect`, `useRef`.
- Proper cleanup of side effects (intervals, animations).
- UI polish: styled card, progress bar, presets, responsive layout.
- Component design with props and callbacks.
- Simple, testable logic with clear separation between parent control and timer component.

## Tech stack

- React Native (JavaScript)
- Built-in Animated API for lightweight UI animation
- No external UI libraries so the component is easy to inspect and explain

## What to highlight to a recruiter

When showing this app in a portfolio or interview, mention:

- Why the `Countdown` uses a `ref` for the interval and `Animated.Value` for progress (to avoid stale closures and to separate UI animation from state updates).
- How the parent (`App.js`) controls lifecycle using `key` to force remount for deterministic resets.
- The accessibility and UX decisions: visible progress, large readable time, and easy presets.
- How you would extend it: pause/resume, multiple timers, persist state, or add tests.

## How to run

1. Install dependencies (from project root):

```bash
cd CountDownExample
npm install
# or
yarn install
```

2. Run on iOS simulator:

```bash
npx react-native run-ios
```

3. Run on Android emulator:

```bash
npx react-native run-android
```

## Files of interest

- `App.js` — parent view with presets, Start/Reset and polished layout.
- `components/Countdown.js` — the countdown timer; contains the logic for ticking, clearing intervals, formatting time, and showing progress.

## Next steps & improvements (talk track)

- Add pause/resume and lap features.
- Add unit tests using Jest and react-native-testing-library for timer behavior (use fake timers for predictable assertions).
- Extract styles into theme-aware modules and add dark mode support.
- Add TypeScript for stronger contracts and maintainability.

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
