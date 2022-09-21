const webDesigner = {
    name: "YOUR NAME",
    yearsAlive: [1996, 2022],
    imgSrc: "user.jpg",
    skills: ["Photoshop", "HTML", "CSS", "JS"],
    diet: {
      food: "Indomi",
      drinks: ["Coffee", "Nescafe", "tea", "water"],
    },
  };
  
  //write your name instead of the YOUR NAME placeholder
  webDesigner.name = "Mohamed Gamal";
  
  /*write a getAge function that takes the years alive array and returns your age,
   save the value you return in a const of name age*/
  let getAge = ([birth, year]) => {
    return year - birth;
  };
  
  const age = getAge(webDesigner.yearsAlive);
  console.log(age);
  
  /*Divide the Webdesign skills into designSkills and developmentskills using ES6*/
  
  let [designSkills, ...developmentskills] = webDesigner.skills;
  
  
  /*add Those extra skills to the developmentskills array ['ES6', 'ES2015'] and add all of them into a new updatedDevSkills const*/
  const updatedDevSkills = [...developmentskills, ...["ES6", "ES2015"]];
  console.log(updatedDevSkills);
  
  /*destructure the diet object and using new ES6 write a function that returns drinks that contain the letter t*/
  let { food, drinks } = webDesigner.diet;
  let findingT = (drinks) => {
    return drinks.filter((drink) => drink.includes("t"));
  };
  let drinkT = findingT(drinks);
  console.log(drinkT);
  
  ///////////////////////////////////////////
  let card = document.querySelector(".card")
  
  function buildID() {
    const userID = `
    <div class="inner-container">
      <img src= ${webDesigner.imgSrc}  >
      <div class="info">
        <h1>${webDesigner.name}</h1>
        <p><span class="text-grey">Age:</span>${age}</p>
        <p><span class="text-grey">Design Skills:</span>${designSkills}</p>
        <p><span class="text-grey">Dev Skills:</span>${updatedDevSkills}</p>
        <p><span class="text-grey">Food:</span>${food}</p>
        <p><span class="text-grey">Drinks:</span>${drinks}</p>
      </div>
    </div>
    `;
    return userID;
  }
  
  card.innerHTML = buildID();