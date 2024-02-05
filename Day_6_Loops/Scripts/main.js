//Find the country containing the hightest number of characters in the countries array
let countries =["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let newarray =countries[0]
for(let i=1; i<countries.length;i++){
  if(countries[i].length>newarray.length){
    newarray =countries[i]
  }

  }
console.log(newarray)  //ETHIOPIA
