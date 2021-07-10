console.log(arrowTitle)
/* START CODE UNDER THIS LINE */



// PLUSE CHECK 
//Q1

 let myfavoriteFood = "pizza"

const favoriteFood = function () {
    return(myfavoriteFood)
  };
 



  //Q2  

  const updateFavoriteFood = function (newValue) {
  myfavoriteFood = newValue
   return  myfavoriteFood
   
  
  };
  


  //Q3
 
 
  const createCounter = function () {
   let counter = 0;


  return function () {
   return ++counter;

  };
};
 const conter_1 = createCounter()
const conter_2 = createCounter()


//Q4 

//Modify createCounter to take a parameter that represents 
//the starting point for the counter

const createCounter_2 = function (start ) {
  let  counter = start 


 return function () {
 counter = counter+1 
  return counter;

 };
};
   

const count_3 = createCounter_2(5);
const count_4 = createCounter_2(10);



// practice //


//Q1 

let age = 25;
if (true) {
  age = 30;
}
// age = 30 


const myName = "John";
if (true) {
  const myName = "Jane";

}

//myName = "john " 
 


//Q2 

let number = 10;

const func1 = function () {
  let number = 15;

  if (true) {
    let number = 24;
  }

  return number;
};

console.log(func1())


const func2 = function (age) {
  age = 10;
  if (true) {
    let age = 24;
    age = 20;
  }

  return age;
};





//Q3 
/* returns a number representing a count down value.
 With each invocation the number should be lower by one  
at zero it will no longer decrement and instead it will return
 "count down is over". */

 var countvalue =6

const countDown = function ()  {
    if (countvalue > 0){ 
 return --countvalue
} else {
  return "count down is over"
}

};


//Q 4 
 
const countUp = function () {
  
  if (countvalue>0) {
    return ++countvalue
  } 
  
};



/*  Q5 

Write a function resetCount 
that accepts a number argument  start .... 
and updates the count variable to equal the
 starting value and return a string implying that*/

 const resetCount = function (start) {
     countvalue = start
  return 'the count has been reset';
 };



 //Q6 

 //and returns the current list as astring 
 //and returns the current list as a
 //return the old toDo item plus the new one.




 let toDo 
 let todo_2 
 

 const addToList = function (toDo) {
    
  if (toDo === toDo){
      return toDo 
    }else { 
    let todo_2 = toDo + todo_2
    return todo_2
  }
};



//Q7 







//q8 
 let maount 
 
const deposit = function (amount) {
  return amount 
};
