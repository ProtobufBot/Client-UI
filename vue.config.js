module.exports = {
  devServer: {
    port: 9001,
    proxy: 'http://localhost:9000/'
  },
  "transpileDependencies": [
    "vuetify"
  ]
}
