//Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items
//This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fullStack = [ ['HTML', 'CSS', 'JS', 'React'], ['Node', 'Express', 'MongoDB']]

for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j]);
  }
}