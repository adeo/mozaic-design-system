"use strict"
const CM = require("@mozaic-ds/configuration-manager")

const configDefault = {
  caseStyle: "kebab-case",
  bemEntitiesDelimiters: {
    modifier: "--",
    element: "__",
    media: "@",
  },
  prefixes: ["mc-", "ml-", "mu-", "mt-", "mdu-"],
}

const pickConfig = () => {
  const configUser = CM.getKey("stylelint")
  if (configUser) {
    configUser.caseStyle =
      configUser.caseStyle !== undefined
        ? configUser.caseStyle
        : configDefault.caseStyle
    configUser.bemEntitiesDelimiters =
      configUser.bemEntitiesDelimiters !== undefined
        ? configUser.bemEntitiesDelimiters
        : configDefault.bemEntitiesDelimiters
    configUser.prefixes =
      configUser.prefixes !== undefined
        ? configUser.prefixes.concat(configDefault.prefixes)
        : configDefault.prefixes
    return configUser
  }
  return configDefault
}

module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: ["@mozaic-ds/stylelint-plugin-mozaic", "stylelint-scss"],
  rules: {
    "at-rule-no-unknown": null,
    "max-empty-lines": null,
    "plugin/mozaic-bem-pattern": [pickConfig()],
    "no-invalid-position-at-import-rule": null,
  },
}
