# react-chatgpt-bff
This is the BFF for ChatGPT integration with ReactJS. 
This runs ExpressJS server and exposes `/chat` endpoint on Port 8080.
It accepts `prompt` in the body of the request and responds with the first choice of the completion data.

To run this backend server, you need to create `.env` file with *REACT_APP_CHATGPT_API_KEY* key and ChatGPT API key as value.
The ChatGPT API key can be created [here](https://platform.openai.com/)
