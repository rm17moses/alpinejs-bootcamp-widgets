function greet(name, language) {
  // Define an object with greetings for each language
  let greetings = {
    Afrikaans: "Hallo",
    English: "Hello",
    IsiNdebele: "Lotjhani",
    IsiXhosa: "Molo",
    IsiZulu: "Sawubona",
    Sepedi: "Thobela",
    Sesotho: "Dumela",
    Setswana: "Dumela",
    Siswati: "Sawubona",
    Tshivenda: "Aa",
    Xitsonga: "Avuxeni",
    Spanish: "Hola",
    French: "Bonjour"
  };

  // Get the greeting for the selected language
let greeting = greetings[language]; //sets the greeting variable to the value of the language property in the greetings object
if (!greeting) { //if statement to check if the greeting variable is falsy (i.e., if it is undefined, null, false, 0, NaN, or an empty string)...
  greeting = "Hello";//...If it is, the function sets the greeting variable to a default value of “Hello”.
}

// Return the greeting and user's name
return greeting + ", " + name + "!";

}

// Define the greetingComponent function
function greets() {
  return {
    // Define the component data
    name: "",
    language: "English",
    greeting: "",
    title: "Welcome to Moses' AlpineJS Wigets for Bootcamp Functions Exercise",
    showTitle: false,
    showVerified: false,

    // Define the displayGreeting method
    displayGreeting() {
      // Call the greet function with the user's name and selected language
      this.greeting = greet(this.name, this.language);
    }
  };
}
