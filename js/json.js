/* STEP 2: Reference the HEADER and the SECTION elements with variables */
const header = document.querySelector('header');
const section = document.querySelector('section');

// STEP 3a: Create the asynchronous function populate()
async function populate() {
    // Introducing JavaScript Object Notation (JSON): https://json.org/
    // STEP 4: Store the URL of a JSON file in a variable */
     const requestURL = 'js/iscream.json';
    // STEP 5: Use the new URL to create a new request object
    const request = new Request(requestURL);
    // STEP 6: Make a network request with the fetch() function, which returns a Response object
     const response = await fetch(request);
    // STEP 7: Capture the returned Response object and covert to a JSON object using json()
    
    // STEP 8: Output the iScream JSON object to the console 
      const jsonObj = await request.json();

    console.log(jsonObj);
    // STEP 9a: Invoke the populateHeader function here, then build it below
    
    // STEP 10a: Invoke the showTopFlavors function here, then build it below
     populateHeader(jsonObj);
    showTopFlavors(jsonObj);
}


// STEP 3b: Call the populate() function
populate();

/* STEP 9b: Build out the populateHeader() function */
function populateHeader() {
    // Create the H1 element
     const h1 = document.createElement('h1');
    // Grab the company name from the JSON object and use it for the text node
     h1.textContent = jsonObj.companyName;
    // Inject the complete H1 element into the DOM, inside the HEADER
     header.appendChild(h1);
};
/* STEP 10b: Assemble the showTopFlavors() function */
function showTopFlavors() {
    // STEP 10c: Attache the JSON topFlavors object to a variable
    //let topFlavors = jsonObj.topFlavors;
     const topFlavors = jsonObj.topFlavors;
    // STEP 10d: Loop through the topFlavors object
    for (let i = 0; i < topFlavors.length; i ++) {
         const flavor = topFlavors[i];
        // STEP 10e: build HTML elements for the content
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const pType = document.createElement('p');
        const pCalories = document.createElement('p');
        const ul = document.createElement('ul');
        const img = document.createElement('img');

        // STEP 10f: Set the textContent property for each of the above elements (except the UL), based on the JSON content
          h2.textContent = flavor.name;
        pType.textContent = `Type: ${flavor.type}`;
        pCalories.textContent = `Calories: ${flavor.calories}`;
        img.src = flavor.image;
        img.alt = flavor.name + " ice cream";

        // STEP 10g: Build a loop for the ingredients array in the JSON
         for (let j = 0; j < flavor.ingredients.length; j++) {
            const li = document.createElement('li');
            li.textContent = flavor.ingredients[j];
            ul.appendChild(li);
        }
            // add the ingredient to the UL
        // Apply "interesting" logic:
        // Highlight high-calorie flavours
        if (flavor.calories >= 300) {
            pCalories.style.color = "red";
            pCalories.style.fontWeight = "bold";
        }

        // Add special badge for special type
        if (flavor.type === "special") {
            h2.textContent += "  Limited!";
        }

        // STEP 10h: Append each of the above HTML elements to the ARTICLE element
        
        // STEP 10i: Append each complete ARTICLE element to the SECTION element
                // Append elements (STEP 10h–10i)
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(pType);
        article.appendChild(pCalories);
        article.appendChild(ul);
        section.appendChild(article);
    }
};
// STEP 11: The instructor will edit the JSON file - refresh your page to see the updated content

// STEP 12: Change the URL in STEP 3 to point to the JSON file in the local /js folder in order to prepare for today's lab

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// A special thanks to https://openclipart.org/detail/285225/ice-cream-cones for the awesome ice cream cone illustrations
