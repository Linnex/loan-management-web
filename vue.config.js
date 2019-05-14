module.exports = {
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/loan-management-web/'
    : '/'
}
