const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const { API_KEY_GEMINI } = require('./config')


const genAI = new GoogleGenerativeAI(API_KEY_GEMINI);

function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType
    },
  };
}

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
  objeto = "Coche"
  prompt = `Responde con Sí o con No en caso de que se encuentre o no se encuentre el objeto por el que te preguntan. ¿ En la imagen hay un ${objeto} ?`

  const imageParts = [
    fileToGenerativePart("./imagenes/carro.jpg", "image/jpeg")
  ];

  const result = await model.generateContent([prompt, ...imageParts]);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();