var express = require("express")
  , _ = require("underscore")
  , app = express()
  , db = require("./db.js")
  , rgCacheable = /\/scripts\/|\/stylesheets\/|\/images\/|\/humans\.txt/
  , port = process.env.PORT || 3000;

var getPageTitle = function (page) {
  if (!page || page.length === 0) return "Fancy Sh!t";

  return page + " - Fancy Sh!t";
}

app.engine(".html", require("hogan-express"));

app.set("views", __dirname + "/views");
app.set("view engine", "html");

app.set("layout", "layout");

app.use(express.compress());

app.use(function (req, res, next) {
  if (rgCacheable.test(req.url)) {
    res.setHeader("Cache-Control", "public, max-age=2592000"); // 1M
    res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString()); 
  }
  return next();
});

app.use(express.static(__dirname + "/public"));

app.use(app.router);

app.use(function (req, res, next) {
  res.status(404);
  res.render('404', { url : req.url, title : getPageTitle("Not found") });
  return;
});

app.get("/", function (req, res) {
  res.render("index", { title : getPageTitle() });
});

app.get("/about", function (req, res) {
  res.render("about", { title : getPageTitle("About Us") });
});

app.get("/press/:year/:month", function (req, res) {
  var year = req.params.year
    , month = req.params.month
    , posts = _.filter(db.posts, function (post) {
    return post.date.slice(0, 4) === year && post.date.slice(5, 7) === month; 
  });

  res.render("press", {
    posts : posts,
    title : getPageTitle("Press")
  });
});

app.get("/press/:type", function (req, res) {
  var type = req.params.type
    , posts = _.filter(db.posts, function (post) {
      return post.type === type.toUpperCase();
    });

  res.render("press", { 
    posts : posts,
    title : getPageTitle("Press")
  });
});

app.get("/press", function (req, res) {
  res.render("press", { 
    posts : db.posts, 
    title : getPageTitle("Press")
  });
});

app.get("/collection/:year/:season", function (req, res, next) {
  var year = req.params.year
    , season = req.params.season
    , looks = db.lookbook[year][season];

  if (looks && looks.length > 0) {
    res.render("collection", { 
      looks : looks, 
      title : getPageTitle("Collection")
    });
    return;
  }
  next();
});

app.listen(port);

console.log("Server listening on port " + port + " in " + process.env.NODE_ENV);