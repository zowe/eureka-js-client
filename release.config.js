module.exports = {
    branches: [
        {
            name: "master",
            level: "minor"
        }
        // {
        //     name: "zowe-v?-lts",
        //     level: "patch"
        // }
        // {
        //     name: "next",
        //     prerelease: true
        // }
    ],
    plugins: [
        "@octorelease/changelog",
        ["@octorelease/npm", {
            aliasTags: {
                "latest": ["next"]
            },
            smokeTest: true
        }],
        ["@octorelease/github", {
            checkPrLabels: true
        }],
        "@octorelease/git"
    ]
};