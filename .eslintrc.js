module.exports = {
  "env": {
    "browser": true,
    "node": true
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
