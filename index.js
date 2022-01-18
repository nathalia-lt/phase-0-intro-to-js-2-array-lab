// Write your solution here!


const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(catName){
    cats.push(catName)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}
 function  destructivelyRemoveLastCat(){
     cats.pop()
 }
 function destructivelyRemoveFirstCat(){
     cats.shift()
 }

 function appendCat(name){
     const newCats = [...cats, name]
     return newCats
 }

   function prependCat(name){
       const newCats =[name, ...cats]
       return newCats
   }

   function removeLastCat(){
       return cats.slice(0,-1)
   }

   function removeFirstCat(){
       return cats.slice(1)
   }