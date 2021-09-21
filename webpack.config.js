const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production', // Qual modo ele deve executar produção (production) ou desenvolvimento (development)
  devtool: isDevelopment ? 'eval-source-map' : 'source-map', // Melhorar na visualização de erros ao debugar, existe outras alternativas também
  entry: path.resolve(__dirname, 'src', 'index.tsx'), // Qual o arquivo principal da aplicação
  output: {
    // Qual o arquivo de saida, no caso o dist/bundle.js
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'] // Quais os arquivos ele pode ler
  },
  devServer: {
    // informar onde está o conteúdo estático da aplicação
    static: path.resolve(__dirname, 'public'),
    hot: true
  },
  plugins: [
    // array de plugin's
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      // onde irá importar o bundler
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ].filter(Boolean),
  /*Remove os valores boleanos, assim n dando erros e permitindo 
  usar condicionais nos plugin*/
  module: {
    // Configuração para como cada tipo de importação de arquivos se comportar
    rules: [
      // Array de regras
      {
        // Objeto para cada tipo de arquivo
        test: /\.(j|t)sx$/, // Verifica se é jsx ou não
        exclude: /node_modules/, // Não verifica os arquivos de dentro do diretório node_modules
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        }
      },
      {
        test: /\.scss$/, // Verifica se é scss ou não
        exclude: /node_modules/, // Não verifica os arquivos de dentro do diretório node_modules
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};