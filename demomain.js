var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game'), Main = function () {};

Main.prototype = {

  preload: function () {
    game.load.image('stars',    'assets/images/stars.jpg');
    game.load.image('loading',  'assets/images/loading.png');
    game.load.image('brand',    'assets/images/logo.png');
    game.load.script('splash',  'states/Splash.js');
  },

  create: function () {
    game.state.add('Splash', Splash);
    game.state.start('Splash');
  }

};

game.state.add('Main', Main);
game.state.start('Main');

splash.prototype = {

  loadScripts: function () {
  },

  loadBgm: function () {
  },

  loadImages: function () {
  },

  loadFonts: function () {
  },

  // The preload function then will call all of the previously defined functions:
  preload: function () {
    this.loadScripts();
    this.loadImages();
    this.loadFonts();
    this.loadBgm();
  },
  
   // Add the loadingbar to the scene:
    var loadingBar = game.add.sprite(game.world.centerX, 400, "loading");
    // Tell phaser to use laodingBar as our preload progess bar
    this.load.setPreloadSprite(loadingBar);
    
    preload: function () {
    var myLogo, loadingBar, status;
    game.add.sprite(0, 0, 'stars');

    myLogo = game.add.sprite(game.world.centerX, 100, 'brand');
    myLogo.anchor.setTo(0.5);
    myLogo.scale.setTo(0.5);

    status = game.add.text(game.world.centerX, 380, 'Loading...', {fill: 'white'});
    status.anchor.setTo(0.5);

    loadingBar = game.add.sprite(game.world.centerX, 400, "loading");
    loadingBar.anchor.setTo(0.5);
    this.load.setPreloadSprite(loadingBar);
