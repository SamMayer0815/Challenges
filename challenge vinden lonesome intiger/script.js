// array met positieve en negatieve getallen. alleen getal terug krijgen dat positief of negatief is maar niet allebij

const array = []
const arrayCheck = []
const arrayAnswer = []
var j = 0;
var r = 0;
var currentNumber = 0;

onload = function problemFixer2000() {
  randomArray2000()

  for(let i = 0;i <= array.length;i++){
    for(let j = 0;j <= array.length;j++){
      if("" + array[i] == "-" + array[j] || "-" + array[i] == "" + array[j]){
      arrayCheck.push(array[i])
      }
    }}

    array.sort()
    arrayCheck.sort()

  for(let i = 0;i <= array.length;i++){
      if(array[i] != arrayCheck[j]){
        arrayAnswer.push(array[i])
    }else{j++
    }} 
    console.log("De goede getallen zijn " + arrayAnswer)
    console.log(array)
}

function randomArray2000(){
  
  while(array.length < 10){
    r = Math.floor(Math.random() * 10) + 1;
    if(array.indexOf(r) === -1){ array.push(r)
    if(Math.floor(Math.random() * 10) + 1 >= 5){
    array.push(r - (r + r))
}}}

}
