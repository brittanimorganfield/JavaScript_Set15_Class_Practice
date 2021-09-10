class Dinner {
    constructor(chainname) {
      this.location = chainname;
      this.meal = [];
 };
 displayMeal(mealpick) 
 {
      this.meal.push(mealpick);
  }
 }
 
 class Meals {
     constructor(meal)
   {
          this.foodChain = meal;
   
   console.log(`Here's our menu:
   ${this.foodChain}
   `);
   }
 }
 
 let mealpick = Meals ("");
 let fivesStars = Meals ("Ruth's Chris Steakhouse");
 let threeStars = Meals ("Chick-Fil-A");
 
 mealpick.displayMeal(fivesStars);
 mealpick.displayMeal(threeStars);