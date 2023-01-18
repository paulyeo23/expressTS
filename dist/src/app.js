"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes/routes");
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./models/index"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";
// Initialise Express instance
const app = (0, express_1.default)();
console.log("config:", index_1.default);
// Set CORS headers
// app.use(
//   cors({
//     credentials: true,
//     origin: FRONTEND_URL,
//   })
// );
// Set the Express view engine to expect EJS templates
// Bind cookie parser middleware to parse cookies in requests
// app.use(cookieParser());
// Bind Express middleware to parse request bodies for POST requests
app.use(express_1.default.urlencoded({ extended: false }));
// Bind Express middleware to parse JSON request bodies
app.use(express_1.default.json());
// Bind method override middleware to parse PUT and DELETE requests sent as POST requests
// app.use(methodOverride("_method"));
// Expose the files stored in the public folder
app.use(express_1.default.static("public"));
// Bind route definitions to the Express application
(0, routes_1.routes)(app);
// Set Express to listen on the given port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.info(`Server running on port: ${PORT}`));
