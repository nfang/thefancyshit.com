({
  name        : "main",
  out         : "../public/scripts/build/main.js",
  baseUrl     : "../public/scripts",
  include     : [ "requireLib" ],
  paths       : {
    "jquery" : "//code.jquery.com/jquery-1.10.2.min",
    "requireLib" : "vendor/require"
  }
})