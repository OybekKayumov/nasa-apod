

// api
count = 10;
const apiKey = 'DEMO_KEY';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArr = [];

// get 10 images
async function getNasaPictures() {
  try {
    const response = await fetch(apiUrl);
    resultsArr = await response.json();
    console.log('resultsArr: ', resultsArr);
  } catch (error) {
    console.log('error: ', error);
  }
}

// on load
getNasaPictures();