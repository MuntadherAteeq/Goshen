import * as rspack from "@rspack/core";
import * as path from "path";

new rspack.EnvironmentPlugin({
  NODE_ENV: "development",
});

const src = path.join(__dirname, "src");
export default (env: any, argv: any) => {
  const isProduction = argv.mode === "production";

  return {
    entry: {
      popup: path.join(src, "popup.tsx"),
      options: path.join(src, "options.tsx"),
      background: path.join(src, "background.ts"),
      content_script: path.join(src, "content_script.tsx"),
      newtab: path.join(src, "newtab.tsx"),
    },
    output: {
      path: path.join(__dirname, "./dist/js"),
      filename: "[name].js",
    },
    optimization: {
      splitChunks: {
        name: "vendor",
        chunks(chunk: any) {
          return chunk.name !== "background";
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
        {
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  ident: "postcss",
                  plugins: ["tailwindcss", "autoprefixer"],
                },
              },
            },
          ],
          test: /\.css$/i,
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(sass|scss)$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  ident: "postcss",
                  plugins: ["tailwindcss", "autoprefixer"],
                },
              },
            },
            {
              loader: "sass-loader",
              options: {
                // using `modern-compiler` and `sass-embedded` together significantly improve build performance,
                // requires `sass-loader >= 14.2.1`
                api: "modern-compiler",
                implementation: require.resolve("sass-embedded"),
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    plugins: [
      new rspack.CopyRspackPlugin({
        patterns: [{ from: ".", to: "../", context: "public" }],
      }),
    ].filter(Boolean),
    devServer: {
      hot: true,
      watchFiles: ["src/**/*"],
    },
    devtool: isProduction ? "source-map" : "inline-source-map",
    mode: isProduction ? "production" : "development",
    watch: !isProduction,
  };
};
