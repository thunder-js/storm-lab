var path = require("path");
var config = {
    getProjectRoots() {
        return [
            // Keep your project directory.
            path.resolve(__dirname),
            // // Include your forked package as a new root.
            // path.resolve(__dirname, "../../storm-auth"),
            // path.resolve(__dirname, "../../storm-common"),
            // path.resolve(__dirname, "../../storm-foundation"),
            // path.resolve(__dirname, "../../storm-onboarding"),
            // path.resolve(__dirname, "../../storm-system-components")
        ];
    }
}
module.exports = config;
