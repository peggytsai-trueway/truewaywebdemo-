const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
      enableInSFC: false
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/truewaywebdemo-/'
  : '/'
})
