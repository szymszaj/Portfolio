class Person {
  constructor(firstName, lastName, age, country = "Poland", hobbies = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.hobbies = hobbies;
  }

  describe() {
    console.log(
      `Hi, my name is ${this.firstName} ${this.lastName}. I am ${this.age} years old and I live in ${this.country}.`
    );
    if (this.hobbies.length) {
      console.log("My hobbies include:");
      this.hobbies.forEach((hobby) => console.log(`- ${hobby}`));
    } else {
      console.log("I currently have no hobbies.");
    }
  }

  addHobby(newHobby) {
    if (!this.hobbies.includes(newHobby)) {
      this.hobbies.push(newHobby);
      console.log(`Added new hobby: ${newHobby}`);
    } else {
      console.log(`Hobby "${newHobby}" already exists!`);
    }
  }
}

const person = new Person("Szymon", "Zych", 23, "Poland", [
  "Traveling",
  "Sports",
  "Technology",
  "Computer games",
]);

person.describe();
person.addHobby("hiking");
person.describe();
