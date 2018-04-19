// Complete the method/function so that it converts dash/underscore delimited
//words into camel casing. The first word within the output should be
//capitalized only if the original word was capitalized.

//Examples:
//toCamelCase("the-stealth-warrior")
// returns "theStealthWarrior"

//toCamelCase("The_Stealth_Warrior")
// returns "TheStealthWarrior"

function toCamelCase(str) {
  str = str.replace(/[\W_]+/g,"-");
  let arr = str.split('-' );
  console.log(arr);
  return 42;
}
console.log(toCamelCase('the-_stealth warrior'));
