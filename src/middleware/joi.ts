import Joi from "joi";

interface employeeDataStrucutre {
  newEmployee: Joi.ObjectSchema;
  employee: Joi.ObjectSchema;
}

const employeeDataStructures: employeeDataStrucutre = {
  newEmployee: Joi.object({
    name: Joi.string().required(),
    salary: Joi.number().required(),
    department: Joi.string().required(),
  }),
  employee: Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    salary: Joi.number().required(),
    department: Joi.string().required(),
  }),
};

console.log(Joi.attempt({}, employeeDataStructures.newEmployee));
