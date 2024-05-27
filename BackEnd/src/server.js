const express = require("express");
const routes = require("./routes");

const app = express();
app.use(express.json());

app.use(routes); // informa pra nossa aplicação que asrotas que vamos usar são as do arquivo index que fica dentro da pasta routes

const PORT = 1717;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
