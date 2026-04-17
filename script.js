let button = document.querySelector("#breakfast-button");
let button2 = document.querySelector("#lunch-button");
let button3 = document.querySelector("#dinner-button");

const apiKey = "267a0cac406b4cdb988994184d7b98bf";

document.getElementById("breakfast-button").addEventListener("click", () => {
  getMeal("breakfast");
});

document.getElementById("lunch-button").addEventListener("click", () => {
  getMeal("lunch");
});

document.getElementById("dinner-button").addEventListener("click", () => {
  getMeal("dinner");
});

async function getMeal(type) {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&tags=${type}`
    );

    const data = await response.json();
    console.log(data);

    if (data.recipes && data.recipes.length > 0) {
      showPopup(`${type.toUpperCase()}: ${data.recipes[0].title}`);
    } else {
      showPopup("No recipe found for this meal type");
    }

  } catch (error) {
    console.error(error);
    showPopup("Error loading recipe");
  }
}

function showPopup(text) {
  const popup = document.getElementById("popup");
  popup.innerText = text;
  popup.classList.add("show");

  
  setTimeout(() => {
    popup.classList.remove("show");
  }, 3000);
}