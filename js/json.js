// STEP 2: Reference the HEADER and the SECTION elements with variables
const header = document.querySelector('header');
const section = document.querySelector('section');

// STEP 3a: Create the asynchronous function populate()
async function populate() {

    // STEP 4: Store the URL of a JSON file in a variable
    const requestURL = 'js/i-scream.json';

    // STEP 5: Create a new request object (fetch automatically does this)
    const request = await fetch(requestURL);

    // STEP 6 + 7: Get the Response object, convert to JSON
    const jsonObj = await request.json();

    // STEP 8: Output the JSON object to the console
    console.log(jsonObj);

    // STEP 9a and 10a
    populateHeader(jsonObj);
    showTopFlavors(jsonObj);
}

// STEP 3b: Call populate()
populate();

// STEP 9b: Build out the populateHeader() function
function populateHeader(jsonObj) {
    const h1 = document.createElement('h1');
    h1.textContent = jsonObj.companyName;

    const p = document.createElement('p');
    p.textContent = `Established: ${jsonObj.established}, Head Office: ${jsonObj.headOffice}`;

    header.appendChild(h1);
    header.appendChild(p);
}

// STEP 10b: Assemble the showTopFlavors() function
function showTopFlavors(jsonObj) {

    // STEP 10c: Attach the JSON topFlavors object to a variable
    const topFlavors = jsonObj.topFlavors;

    // STEP 10d: Loop through the topFlavors object
    for (let i = 0; i < topFlavors.length; i++) {

        // STEP 10e: build HTML elements for the content
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const pType = document.createElement('p');
        const pCalories = document.createElement('p');
        const ul = document.createElement('ul');
        const img = document.createElement('img');

        // STEP 10f: Set textContent (DO NOT ADD ANYTHING EXTRA)
        h2.textContent = topFlavors[i].name;
        pType.textContent = `Type: ${topFlavors[i].type}`;
        pCalories.textContent = `Calories: ${topFlavors[i].calories}`;
        img.src = `img/${topFlavors[i].image}`;
        img.alt = topFlavors[i].name;

        // STEP 10g: Loop through ingredients
        const ingredients = topFlavors[i].ingredients;
        for (let j = 0; j < ingredients.length; j++) {
            const li = document.createElement('li');
            li.textContent = ingredients[j];
            ul.appendChild(li);
        }

        // STEP 10h: Append elements to the ARTICLE
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(pType);
        article.appendChild(pCalories);
        article.appendChild(ul);

        // STEP 10i: Append ARTICLE to SECTION
        section.appendChild(article);
    }
}
