import React, { useState } from "react";
import styles from "./AddFood.module.css"; // Make sure the path to your CSS file is correct

export default function AddFood() {
  const [title, setTitle] = useState("");
  const [recipe, setRecipe] = useState("");
  const [output, setOutput] = useState(""); // State to display API response
  const appId = "d47d0f29"; // Replace with your appId
  const apiKey = "d47e33efbceff4e2ddfa1511891bcde9"; // Replace with your apiKey

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Title:", title);
    console.log("Recipe:", recipe);

    // Prepare ingredients as a list
    const ingredients = recipe
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item); // Remove empty lines

    if (!title || ingredients.length === 0) {
      alert("Please provide a title and at least one ingredient.");
      return;
    }

    try {
      const response = await fetch(
        `https://api.edamam.com/api/nutrition-details?app_id=${appId}&app_key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            ingr: ingredients,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data); // Log the response to the console

      if (data.totalDaily) {
        let resultHtml = `
          <h4>Nutrition Details</h4>
          <dl>
            <dt>Calories</dt>
            <dd>${data.calories || "Not available"}</dd>
            ${Object.keys(data.totalDaily)
              .map((key) => {
                const obj = data.totalDaily[key];
                return `<dt>${obj.label}</dt><dd>${obj.quantity.toFixed(2)} ${
                  obj.unit
                }</dd>`;
              })
              .join("")}
          </dl>
        `;
        setOutput(resultHtml);
      } else {
        setOutput("<p>No nutritional information available.</p>");
      }
    } catch (error) {
      console.error("Error fetching recipe details:", error);
      alert("Failed to fetch recipe details. Please try again later.");
    }
  };

  return (
    <div className={styles.addFoodContainer}>
      <h3 className={styles.heading}>Add Recipe</h3>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter recipe title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="recipe">Recipe</label>
          <textarea
            id="recipe"
            placeholder="Enter recipe details (one ingredient per line)"
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit Recipe
        </button>
      </form>

      <div
        className={styles.outputContainer}
        dangerouslySetInnerHTML={{ __html: output }}
      ></div>
    </div>
  );
}
