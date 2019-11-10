import path from "path"

import webpack from "webpack"
import configure from "webpack-config-jaid"

export default configure({
  publishimo: {fetchGithub: true},
  extra: {
    plugins: [new webpack.EnvironmentPlugin("backendHost")],
    resolve: {
      alias: {
        theme$: path.resolve(__dirname, "src", "theme.scss"),
      },
    },
  },
})