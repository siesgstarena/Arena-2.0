module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "plugins": [
      "react"
    ],
    "rules": {
      "react/prop-types": [2],
      "react/forbid-prop-types": [2, {"forbid" : []}],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/no-did-update-set-state": "off",
      "react/require-default-props": [0, { forbidDefaultForRequired: false }],
    },
    "env": {
      "browser": true,
      "node": true,
    },
    "globals": {
      "document": false,
    },
};
