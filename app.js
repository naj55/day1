//step 1
const express = require("express");
//step 2
const app = express();
let studentGrade = 96;

app.get("/studentGrade", (req, res) => {
  res.render("studentGrade.ejs", { studentGrade: studentGrade });
});
//step 4
app.get("/Name", (req, res) => {
  res.send(`welcom to Najla`);
});

//step 3
app.listen(3300, () => {
  console.log("listing");
});
