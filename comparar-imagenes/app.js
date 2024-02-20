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
  prompt = "Los objetos en las dos imagenes corresponden a carros?"
  const imageParts = [
    fileToGenerativePart("./imagenes/sandero1.jpg", "image/jpeg"),
    fileToGenerativePart("./imagenes/sandero2.jpg", "image/jpeg")
  ];

  const result = await model.generateContent([prompt, ...imageParts]);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();