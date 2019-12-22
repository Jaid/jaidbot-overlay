import webpack from "webpack"
import configure from "webpack-config-jaid"

export default configure({
  extra: {
    plugins: [new webpack.EnvironmentPlugin("backendHost")],
  },
  extraDevelopment: {
    plugins: [new webpack.HotModuleReplacementPlugin],
  },
  offline: false,
  pwa: false,
  configOutput: true,
  createCssFile: true,
})