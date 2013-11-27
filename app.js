var express = require("express")
  , _ = require("underscore")
  , app = express()
  , db = require("./db.js");

app.engine(".html", require("hogan-express"));

app.set("views", __dirname + "/views");
app.set("view engine", "html");

app.set("layout", "layout");

app.use(express.compress());
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.render("index", { title : "Fancy Sh!t" });
});

app.get("/about", function (req, res) {
  res.render("about", { title : "About Us - Fancy Sh!t" });
});

app.get("/press/:year/:month", function (req, res) {
  var year = req.params.year
    , month = req.params.month;

  res.render("press", {
    posts : _.filter(db.posts, function (post) {
      return post.date.slice(0, 4) === year && 
             post.date.slice(5, 7) === month;
    }),
    title : "Press - Fancy Sh!t"
  });
});

app.get("/press/:type", function (req, res) {
  var type = req.params.type;

  if (type.toLowerCase() === 'web') {
    res.render("press", { 
      posts : _.filter(db.posts, function (post) {
        return post.type === 'WEB';
      }),
      title : "Press - Fancy Sh!t"
    });
  }

  if (type.toLowerCase() === 'magazine') {
    res.render("press", { 
      posts : _.filter(db.posts, function (post) {
        return post.type === 'MAGAZINE';
      }),
      title : "Press - Fancy Sh!t"
    });
  }
});

app.get("/press", function (req, res) {
  res.render("press", { posts : db.posts, title : "Press - Fancy Sh!t" });
});

app.get("/collection/:year/:season", function (req, res) {
  var year = req.params.year
    , season = req.params.season;

  res.render("collection", { looks : db.lookbook[year][season], title : "Collection - Fancy Sh!t" });
})

app.listen(3000);
console.log("Listening on port 3000");