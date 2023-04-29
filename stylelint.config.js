module.exports = {
  rules: {
    "color-no-invalid-hex": true,
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    indentation: 4,
    "max-empty-lines": 2,
    "rule-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["after-comment"],
      },
    ],
    "selector-list-comma-newline-after": "always-multi-line",
    "selector-max-id": 4,
  },
};
