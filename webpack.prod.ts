import { merge } from "webpack-merge";
import common from "./webpack.common";

const config = merge(common, {
    devtool: "source-map",
    mode: "production"
});

export default config;
