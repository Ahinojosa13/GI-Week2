//Given the information below for Tom and Jerry. 
//Tom - 	height:  9in   	mass: 8 g  ,     Jerry - 	height: 10in 	mass: 45 g      , Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
//Mass= Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI 
//than Jerry. Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

const person1 = {
    name : "Tom",
    mass : 8 ,
    height : 9 ,
  };
  const person2 = {
    name : "Jerry",
    mass : 45 ,
    height2 : 10 , 
  };
    
  //BMI Data Set 1
  let BMI1 = person1.mass/person1.height ** 2;
  let BMI2 = person2.mass/person2.height ** 2;
  
  // Higher BMI
  let markhigherBMI = BMI1 > BMI2;
  console.log("Is" + " "+ person1.name + "'s" + " " + "BMI higher than" + " " + person2.name + "'s?" + " " + markhigherBMI);



  