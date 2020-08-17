const mix = require("laravel-mix");
mix
  .js("assets/javascript/main.js", "./")
  .sass("assets/sass/style.scss", "./")
  .options({
    processCssUrls: false,
  });
