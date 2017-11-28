exports.config = {
  files: {
    javascripts: {
      joinTo: 'js/main.js'
    },
    stylesheets: {
      joinTo: 'css/styles.css'
    },
  },
  paths: {
    watched: [
      "scss/theme",
      "js/bootstrap/"
    ],
    public: "/"
  },
  plugins: {
    babel: {
      ignore: [/^(bower_components)/],
      pattern: /\.(js|jsx)/
    },
  },
  modules: {
    nameCleaner: function (path) {
      return path.replace(/src\/js\//, '');
    }
  }
};
