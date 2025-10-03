const petsDB = {
	dogs: { name: "Dogs", voice: "Woof!", avatar: "🐶" },
	cats: { name: "Cats", voice: "Miauuu", avatar: "🐱" }
};

export function getPet(type) {
	// simulate a (shorter) network fetch for dev — was 10000ms
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(petsDB[type]);
		}, 300); // reduced to 300ms so selection displays quickly
	});
}
