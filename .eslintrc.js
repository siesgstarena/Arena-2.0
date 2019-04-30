module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "plugins": [
      "react"
    ],
    "rules": {
      "react/prop-types": [2],
      "react/forbid-prop-types": [2, {"forbid" : []}],
    },
    "env": {
      "browser": true,
      "node": true,
    },
    "globals": {
      "document": false,
    },
};
