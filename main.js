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
   console.log(myfavoriteFood)
   return updateFavoriteFood (myfavoriteFood)
   
  
  };
  


  //Q3
  const createCounter = function () {
  let counter = 0;


  return function () {
    return ++counter;
  };
};







