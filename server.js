const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.CHATGPT_API_KEY
});

const openai = new OpenAIApi(configuration);

// Set up the server
const app = express();
app.use(bodyParser.json());
app.use(cors())

// Set up the ChatGPT text endpoint
app.post("/text", async (req, res) => {
  // Get the prompt from the request
  const { prompt } = req.body;

  // Generate a completion with ChatGPT
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: prompt,
  });
  res.send(completion.data.choices[0].text);
});

// Set up the ChatGPT image endpoint
app.post("/image", async (req, res) => {
  // Get the prompt from the request
  const { prompt } = req.body;

  // Generate an image with ChatGPT
  const image = await openai.createImage({
    n: 1,
    size: "256x256",
    prompt: prompt,
  });
  res.send(image.data.data[0].url);
});

// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});