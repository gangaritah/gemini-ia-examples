const { GoogleGenerativeAI } = require("@google/generative-ai");
const { API_KEY_GEMINI } = require('./config')

const genAI = new GoogleGenerativeAI(API_KEY_GEMINI);


async function classify_text(msg) {  
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const result = await model.generateContent(msg);
    const response = await result.response;
    const text = response.text();
    if (text == "A favor"){
      console.log("El comentario es a favor"); }
      if (text == "En contra"){
        console.log("El comentario es en contra"); }
  }  


producto = "Gelatina"
prompt = `Clasifica el siguiente comentario como A favor o En contra del producto ${producto}:`
comentario = "Es una gelatina costosa y de mal sabor"
classify_text(`${prompt} ${comentario}`);
