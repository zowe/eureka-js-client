module.exports = {
    branches: [
        {
            name: "master",
            level: "minor"
        }
    ],
    plugins: [
        "@octorelease/changelog",
        ["@octorelease/npm", {
            smokeTest: true
        }],
        ["@octorelease/github", {
            checkPrLabels: true
        }],
        "@octorelease/git"
    ]
};
