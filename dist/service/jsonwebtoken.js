"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcm5hbWUiOiIyIiwiaWF0IjoxNjc2MDA3NTc0LCJleHAiOjE2NzYwMTExNzR9.p1NNi7JK07aXFAculsV90nVILKnxekenw0CgYqN69pI";
const secret = "fFV61G48Nwv2KaKn0wmE0aQNdurBt107o3nj7t9EFLoaK6NDHL1paHme8GuJfDhJIcib6OYBjwQl3i9fwdZsN5bSymhjGts7FBXI";
const decoded = jwt.verify(token, secret);
console.log(decoded);
