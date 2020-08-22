const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

const itStudents = [
  { id: 29, name: "Supachai IT" },
  { id: 19, name: "Nuthawat IT" },
];

const ceStudents = [
  { id: 39, name: "Guide CE" },
  { id: 49, name: "Oak CE" },
];

const allMajor = {
  'it': itStudents,
  'ce': ceStudents,
};

app.get(
  "/api/:major",
  (req, res, next) => {
    const major = req.params.major.toLowerCase();
    if (major == "it") {
      const jsonString = JSON.stringify(itStudents);
      req.myObj = jsonString;
      next();
    } else if (major == "ce") {
      const jsonString = JSON.stringify(ceStudents);
      req.myObj = jsonString;
      next();
    } else {
      res.send("major not found");
    }
  },
  (req, res) => {
    req.myObj += "End of Data";
    res.send(req.myObj);
  }
);

app.listen(port, "127.0.0.1", () => {
  console.log("Listening to port " + port);
});

app.get("/api/:id/:major", (req, res) => {
  const id = req.params.id;
  const major = req.params.major.toLowerCase();

  if (allMajor[major]) {
    if (major == "it") {
      let stuData = itStudents.find(obj => obj.id === parseInt(id));

      if (typeof stuData === "undefined") {
        res.send("This student is no in major IT");
      } else {
        res.send(stuData);
      }
    } else {
      let stuData = ceStudents.find(obj => obj.id === parseInt(id));

      if (typeof stuData === "undefined") {
        res.send("This student is no in major CE");
      } else {
        res.send(stuData);
      }
    }
  } else {
    res.send("Major not found!!!");
  }
});
