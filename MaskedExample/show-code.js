const FILES = [
    "./__mocks__/react-native-masked-text.js",
    "./__tests__/App-test.js",
    "./__tests__/Intro-test.js",
    "./__tests__/__snapshots__/Intro-test.js.snap",
    "./__tests__/sum.test.js",
    "./index.js",
    "./App2.js",
    "./sum.js",
    "./Intro.js",
    "./App.js",
    "./constants/IntlBankInformation.js",
    "./components/ListItem.js",
    "./components/AccordionCollapse.js",
    "./components/AccordionList.js",
    "./components/AnimationExample.js",
    "./components/AccordionItem.js",
    "./components/HeightAnimation.js",
    "./components/ListItems.js",
    "./jest.config.js",
    "./package.json",
];

const fs = require("fs");
console.log("**********************************************************");
FILES.forEach(file => {
    console.log(file);
    console.log("**********************************************************");
    const contentx = fs.readFileSync(file, "utf-8");
    console.log(contentx);
    console.log("**********************************************************");
});
