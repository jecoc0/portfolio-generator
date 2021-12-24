const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs)

const animalArray = ['dog', 'cat', 'pig'];

animalArray.push('cow');

const personObj = {
  name: 'Jessica',
  age: 30
};

personObj.age = 31;
personObj.occupation = 'Developer';

const printProfileData = profileDataArr => {
  profileDataArr.forEach((profileItem) => {
  console.log(profileItem);
  });
};

printProfileData(profileDataArgs);

//Using function expression syntax
const addNums = (numOne, numTwo) => numOne + numTwo;



