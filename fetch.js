 //1- fetch the data
 fetch("https://openapi.programming-hero.com/api/phero-tube/categories") // URL dite hobe api ar 
 //2- convert promise to json
 .then((res) => res.json())
 //3- send data to display
 .then((data) => console.log(data));

 