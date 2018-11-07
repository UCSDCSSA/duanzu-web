module.exports = {
  "env": {
    "browser": true
  },
  "extends": [
    "airbnb",
    "plugin:flowtype/recommended"
  ],
  "parser": "babel-eslint",
  "settings": {
    "import/resolver": {
      "babel-module": {}
    }
  },
  "plugins": [
    "flowtype"
  ]
};
