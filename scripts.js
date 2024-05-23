// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//-----------------------------------------Exercises--------------------------------------------
//PART 1
// using forEach to log each name and each province to the console
console.log("-----PROVINCES-----");
provinces.forEach(province => console.log(province));
console.log("-------NAMES-------");
names.forEach(name => console.log(name));

// console log name along with matching province
///FOREACH() Performs the specified action for each element in an array.
console.log('---NAME (PROVINCE)---')
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

//PART 2
// using map to create a new array of province names in all uppercase
// console log new array
console.log("---UPPERCASE PROVINCES---");
const upperCaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(upperCaseProvinces);

// PART 3
// Creating a new array using map that contains the length of each name.
console.log("-----Lengths for each Name------")
const nameLengths = names.map(name => `${name} (${name.length})`);
console.log(nameLengths);

//PART 4 
//Sorting: Use sort to alphabetically sort the provinces.
//SORT() This method mutates the array and returns a reference to the same array
console.log("-----Provinces in alphabetical order-----")
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

// PART 5
// Filtering Cape: Use filter to remove provinces containing "Cape". Log the count of remaining provinces.
console.log("----Provinces without CAPE----")
const provincesWithoutCape = provinces.filter( province => !province.toLowerCase().includes("cape"));
console.log(`Remaining provinces: ${provincesWithoutCape.length}`);
console.log(provincesWithoutCape);

//PART 6
//Finding 'S': Create a boolean array using map and some to determine if a name contains the letter 'S'.
console.log("-----Boolean of whether or not name contains S-----");
//use map ()
const namesContainingLetterS = names.map(name => name.toLowerCase().includes("s"));
console.log(namesContainingLetterS);
//use some() 
console.log("Returns one boolean Value after using some() on the return")
const namesContainsLetterS = namesContainingLetterS.some(Boolean);
console.log(namesContainsLetterS);

//PART 7 
// Use reduce to transform the names array into an object mapping names to their respective provinces.
const nameAndProvinceObject = names.reduce((object,name,index) =>{
  object[name] = provinces[index];
  return object;
}, {});
console.log(nameAndProvinceObject);

//--------------------------------------------Advanced Exercises--------------------------------------------

//PART 1
// Iterate over the products array, logging each product name.

//PART 2
// Filter out products with names longer than 5 characters.
// FILTER() Returns the elements of an array that meet the condition specified in a callback function

//PART 3
// Filter out products without prices, convert string prices to numbers, and calculate the total price using reduce
// REDUCE() The return value of the callback function is the accumulated result,
// and is provided as an argument in the next call to the callback function.

// PART 4
// Use reduce to concatenate all product names into a single string.

//PART 5
// Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
// We filter out products with empty or invalid prices.
// We parse the valid prices as integers.
// We calculate the maximum and minimum prices.

//Part 6 
//  Using Object.entries and reduce, recreate the products object with keys 'name' and 'cost', maintaining their original values.
// We use reduce to iterate through each product in the products array.
// For each product, we extract the keys ('product' and 'price') and their corresponding values using Object.entries
// We map over the entries and rename the keys as needed (from 'product' to 'name' and from 'price' to 'cost').

// use one console log for all exercises
console.log(
  products.map((productName) => productName.product),            //part1
  
  products.filter((product) => product.product.length <= 5),     //part2
  
  products.filter((product) => !(product.price === '' || product.price === " "))
  .reduce((sum, product) => sum + parseInt(product.price), 0),                     //part 3
  
  products.reduce((concatNames, product) => concatNames + product.product, ''),    //part 4
 
  products
  .filter((product) => !(product.price === '' || product.price === ' '))
  .map((product) => parseInt(product.price))
  .reduce((result, price) => {
  result.Highest = Math.max(result.Highest || 0, price);
  result.Lowest = Math.min(result.Lowest || price, price);                       //part 5
  return result;
  }, { Highest: undefined, Lowest: undefined }),
  
  products.reduce((result, product) => {
    const updatedProduct = Object.fromEntries(
      Object.entries(product).map(([key, value]) => {
        if (key === 'product') return ['name', value];             //part 6 
        if (key === 'price') return ['cost', value];
        return [key, value];
      })
    );
    result.push(updatedProduct);
    return result;
  }, [])
  );






