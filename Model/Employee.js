const { Schema, model } = require("mongoose");
const EmpSchema = new Schema(
  {
    emp_name: {
      type: String,
      required: true,
    },
  },
  { timestamps }
);
