const jwt = require("jsonwebtoken");

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImRlcGFydG1lbnRJZCI6MSwiaWF0IjoxNjc2MDE1NzEzLCJleHAiOjE2NzYwMTkzMTN9.J0FkqpVL7m7_TGKLB2b-jTxOu9pAtYN9NYbr7N1Jbf8";

const secret =
  "fFV61G48Nwv2KaKn0wmE0aQNdurBt107o3nj7t9EFLoaK6NDHL1paHme8GuJfDhJIcib6OYBjwQl3i9fwdZsN5bSymhjGts7FBXI";

const decoded = jwt.verify(token, secret);
console.log(decoded);
