const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
const cleanedText = sentence.replace(/[^\w\s]/g, '')
const words = cleanedText.split(' ');
const wordFrequency = {};
words.forEach(word => {
  wordFrequency[word] = (wordFrequency[word] || 0) + 1;
});


let mostFrequentWord = '';
let maxFrequency = 0;

for (const word in wordFrequency) {
  if (wordFrequency[word] > maxFrequency) {
    mostFrequentWord = word;
    maxFrequency = wordFrequency[word];
  }
}
console.log('Cleaned Text:', cleanedText);
console.log('Most Frequent Word:', mostFrequentWord)
console.log('with frequency:', maxFrequency);




