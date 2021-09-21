module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript', ['@babel/preset-react', {
      /*
      Essa configuração vai fazer com que você não precise mais
      import em todos os arquivos JSX o React
      */
      runtime: 'automatic'
    }]
  ]
}