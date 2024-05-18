const express = require("express");
const ejs = require("ejs");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

const users = [
  {
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
    isPremium: false,
  },
  {
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
    isPremium: true,
  },
  {
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
    isPremium: false,
  },
  {
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
    isPremium: false,
  },
  {
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
    isPremium: true,
  },
  {
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
    isPremium: false,
  },
];

app.get("/", (req, res) => {
  res.send("hi there");
});

app.get("/user1", (req, res) => {
  res.render("user", {
    email: "michael.lawson@reqres.in",
    first_name: "Michael", // one way of using template engine
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  });
});

app.get("/users/:username", (req, res) => {
  const userName = req.params.username;
  const user = users.find((naam) => {
    return naam.first_name === userName; // instead of creating multiple routes we can use params and access required value
  });
  if (user) {
    res.render("user", user);
  } else {
    res.redirect("/page-not-found");
  }
});

app.get("/page-not-found", (req, res) => {
  res.sendFile(__dirname + "/html/not-found-page.html");
});

app.listen(port, (err) => {
  if (err) {
    console.log.error;
  } else {
    console.log(`App is up and running in the port ${port}`);
  }
});

// app.get("/user3", (req, res) => {
//     res.render("user", {
//       email: "tobias.funke@reqres.in",
//       first_name: "Tobias",
//       last_name: "Funke",
//       avatar: "https://reqres.in/img/faces/9-image.jpg", // multiple routes for one template
//     });
//   });

//   app.get("/user2", (req, res) => {
//     res.render("user", {
//       email: "lindsay.ferguson@reqres.in",
//       first_name: "Lindsay",
//       last_name: "Ferguson",
//       avatar: "https://reqres.in/img/faces/8-image.jpg",
//     });
//   });
