//................. ...Zadanie1...//
function adder(a, b) {
	if (typeof a === "number" && typeof b === "number") return a + b;
}
// console.log(adder(1,2))
//.................. ...Zadanie2...//

let mikolajFrugo = {
	name: "Mikołaj",
	lastName: "Frugo",
	hobbies: ["sport", "walks", "video games"],
};

let jadwigaKawka = {
	name: "Jadwiga",
	lastName: "Kawka",
	hobbies: ["sport", "walks", "dance"],
};

let personsArr = [];
personsArr.push(mikolajFrugo);
personsArr.push(jadwigaKawka);

console.table(personsArr)

function displayPersonInterpolation(person) {
	console.log(person)
	console.log(
		`Mam na imię ${person.name} moje hobby to ${person.hobbies.join(", ")}.`
	);
}

function displayPersonConcatenation(person) {
	console.log(person)
	console.log(
		"Mam na imię " + person.name + " moje hobby to " + person.hobbies.join(", ") + "."
	);
}


personsArr.forEach((person) => {
	displayPersonInterpolation(person)
    displayPersonConcatenation(person)
})

// .................zadanie3..................

let maciekWaszczyk = {
	numerId: 2506121993,
	age: 29,
	address: {
		street: "Błotna",
		city: "Zielone Wzgórze",
		postCode: "74-254",
	},
};
let monikaObledna = {
	numerId: 2801071990,
	age: 32,
	address: {
		street: "Słoneczna",
		city: "Zielone Wzgórze",
		postCode: "74-254",
	},
};
let elzbietaPoczciwa = {
	numerId: 2502541980,
	age: 42,
	address: {
		street: "Tęczowa",
		city: "Zielone Wzgórze",
		postCode: "74-254",
	},
};

function ageGreaterThan30(person) {
	if (person.age > 30) {
		return true;
	}
	return false;
}

let peopleArr = [maciekWaszczyk, monikaObledna, elzbietaPoczciwa];


let peopleOver30 = peopleArr.filter(ageGreaterThan30);

console.table(peopleOver30)

//....................zadanie4....................

let newPersonArr = [];

newPersonArr[0] = maciekWaszczyk;
newPersonArr[1] = monikaObledna;
newPersonArr[2] = elzbietaPoczciwa;

function sumAge(newPersonArr) {
	return newPersonArr.reduce((age, person) => {
		return age + person.age;
	}, 0);
}

//.................zadanie5...................

function adder(x) {
	return function variableTwo(y) {
        return x + y;
        
	};
}

const addTwo = adder(2);
const result = addTwo(7)


console.log(result);
