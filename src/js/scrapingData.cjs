const cheerio = require("cheerio");
const fs = require("fs");
const axios = require("axios");
const { json } = require("express");

async function performScraping() {
  try {
    const axiosResponse = await axios.get(
      "https://encuadrado.com/p/vianny-macero",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
        },
      }
    );

    const content = axiosResponse.data;

    // Encontrar el índice de inicio del array 'review'
    const startIndex = content.indexOf('"review":[');
    if (startIndex === -1) {
      console.error("No se encontró el array de reviews en la respuesta.");
      return;
    }

    // Obtener la subcadena que contiene el array 'review' y su cierre
    const substring = content.substring(startIndex);
    const endIndex = substring.indexOf("]");
    if (endIndex === -1) {
      console.error(
        "No se encontró el cierre del array de reviews en la respuesta."
      );
      return;
    }

    // Extraer el array 'review'
    const reviewsJSON = substring.substring(0, endIndex + 1);

    fs.writeFileSync("./src/assets/jsons/reviews.json", reviewsJSON);

    console.log('JSON guardado en "reviews.json"');

    // const htmlContent = axiosResponse.data;

    // fs.writeFileSync("pagina.html", htmlContent);

    // const value = cheerio.load(htmlContent);

    // const reviewNames = [];

    // const reviewName = value("span.enc-text.fw-600.mb-2");

    // reviewName.each((index, element) => {
    //   const name = value(element).text().trim();
    //   reviewNames.push(name);
    // });

    // console.log(reviewNames);
  } catch (error) {
    console.error(error);
  }
}

performScraping();
