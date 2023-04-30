/*
Create an animal object.

The animal should have a minimum of a name, age, species, whether or not it's lazy,
and a collection of traits (e.g. Orange, small, clingy, etc.).

Need an object with properties.
~ Property key   -> type
----------------------------
- name           -> string
- age            -> number
- species        -> string
- is it lazy     -> boolean
- traits         -> array


Once you have created and initialized your animal object, 
log a brief description of the animal to your console.

`An example of the output might be:
"${name} is a ${age} year old ${species}. It is ${lazy or not} that 
${name} is also known for being ${traits} etc.`

Emphasis added to where your object properties should go in the string. 
Make sure not to type the entire string out. 
It should only be filled out based on what the object contains.
*/

/* My animal Object 

- bobTheClownfish
- .25
- oscellarisClownfish
- voraciousEater
- highlyAggressive*/

let name = "bobTheClownfish";
let age = .25;
let species = "oscellarisClownfish";
let diet = "brineShrimp";
let highlyAggressive = true;
let traits = ["orange", "white", "unfunny", "mean"];
let doIMissHim = false;

let myPetFish = {
    name: "Bob the Clownfish",
    age: .25,
    species: "Oscellaris Clownfish",
    diet: "Brine Shrimp",
    isHighlyAggressive: true,
    traits: ["orange", "white", "unfunny", "and mean"],
    notMissed: true,
}

let output = `${myPetFish.name} was a ${myPetFish.age} year old ${myPetFish.species}. It was ${myPetFish.isHighlyAggressive}
that ${myPetFish.name} was highly aggressive and it is ${myPetFish.notMissed} that I do not miss him.
${myPetFish.name} ate ${myPetFish.diet} and was also known for being ${myPetFish.traits.join(", ")}.`;

// console.log(output);

// if (myPetFish.isHighlyAggresssive) {
//     console.log(`${myPetFish.name} is very aggressive!`);
// } else {
//      console.log(`${myPetFish.name} is very docile!`);
// }

// if (myPetFish.isHighlyAggressive === false) { !myPetFish.isHighlyAggressive
//  console.log(`${animal.name} is very active!`);
// }
