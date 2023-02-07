import { routes } from "./routes/routes";
import express from "express";
import config from "./models/index";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const FRONTEND_URL = "http://localhost:3001";

// Initialise Express instance
const app = express();
console.log("config:", config);

// Set CORS headers
app.use(cors());

// Set the Express view engine to expect EJS templates
// Bind cookie parser middleware to parse cookies in requests
// app.use(cookieParser());
// Bind Express middleware to parse request bodies for POST requests
app.use(express.urlencoded({ extended: false }));
// Bind Express middleware to parse JSON request bodies
app.use(express.json());
// Bind method override middleware to parse PUT and DELETE requests sent as POST requests
// app.use(methodOverride("_method"));
// Expose the files stored in the public folder
app.use(express.static("public"));
// Bind route definitions to the Express application
routes(app);

// Set Express to listen on the given port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.info(`Server running on port: ${PORT}`));
