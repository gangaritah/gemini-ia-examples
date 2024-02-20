# Ejemplos de integración con Gemini IA y Nodejs

## Requerimientos

-Nodejs v16 o superior
-Una clave de API de Gemini, la cual puedes conseguir en el siguiente enlace teniendo una sesión iniciad con una cuenta de Google: https://aistudio.google.com/app/apikey
-Una vez tenga su api key de Gemini, cree en cada proyecto un archivo de entorno llamado .env en el cual debe crear la siguiente variable de entorno KEY_GEMINI = MY_API_KEY debe reemplazar MY_API_KEY por su clave de Gemini, siempre como una cadena.

Para ejecutar cada proyecto siga las siguientes instrucciones:

-Cada carpeta es un proyecto diferente
-En cada proyecto(dentro de cada carpeta) ejecute el comando npm install para instalar dependencias
-Para ejecutar un proyecto en particular, muévase a la carpeta del proyecto y ejecute el comando node app

## Aplicación de chat

Para esta aplicación, su consumo debe ocurrir de la siguiente manera:
-Cambie el historial de chat en el archivo config.js en la constante START_CHAT según su necesidad de empresa.
-Envíe como primera interacción un objeto JSON por método POST con la siguiente estructura, enviando en la propiedad question la primera pregunta del usuario, por ejemplo:
    - {
	"history": [],
	"question": "Hola, necesito ayuda"
    }
-Una vez se tenga de vuelta la respuesta de la IA, por ejemplo:
{
	"history": [
		{
			"role": "user",
			"parts": "Hola, necesito ayuda"
		},
		{
			"role": "model",
			"parts": "Claro, ¿cómo puedo ayudarte hoy?"
		}
	]
}

se debe reenviar todo el historial de nuevo junto con la siguiente pregunta del usuario, por ejemplo:

{
	"history": [
		{
			"role": "user",
			"parts": "Hola, necesito ayuda"
		},
		{
			"role": "model",
			"parts": "Claro, ¿cómo puedo ayudarte hoy?"
		}
	],
	"question": "Necesito saber cuándo fue fundada Café VIP"
}