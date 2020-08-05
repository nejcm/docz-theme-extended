// gatsby-node.js
exports.onCreateWebpackConfig = (args) => {
  args.actions.setWebpackConfig({
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
  });
};
