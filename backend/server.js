import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { executeCode } from "./piston_api.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', async(req, res) => {
  console.log(req.body); // will now log { language, value }
  const result = await executeCode(req.body.language, req.body.value);
  // console.log(result)
  res.send(result.run.output);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
  