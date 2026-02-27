module.exports = {
  branches: [
    { name: "master", level: "minor" }
    // Optional LTS branch:
    // { name: "zowe-v?-lts", level: "patch" }
  ],
  plugins: [
    ["@octorelease/commit-analyzer", { preset: "angular" }],
    ["@octorelease/release-notes-generator", { preset: "angular" }],
    "@octorelease/changelog",
    ["@octorelease/npm", {
      npmPublish: true,
      pkgRoot: ".",
      smokeTest: true
    }],
    ["@octorelease/git", {
      assets: ["package.json", "package-lock.json"],
      message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }],
    ["@octorelease/github", {
      checkPrLabels: true,
      publishRelease: true,
      successComment: false
    }]
  ]
};