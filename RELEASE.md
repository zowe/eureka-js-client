RELEASE and CI configuration
=============================

This repository uses `zowe-actions/octorelease` to automate releases. The CI workflow runs tests on a Node/OS matrix and performs releases from protected branches.

Required repository secrets (add in GitHub: Settings → Secrets → Actions):

- `ZOWE_ROBOT_USER` - git committer username used by the release bot (e.g. "zowe-robot").
- `ZOWE_ROBOT_EMAIL` - git committer email for commits/tags made by the release bot.
- `ZOWE_ROBOT_TOKEN` - a Personal Access Token (PAT) for a machine/service user with repo access (used for git push/tag operations). Example scopes: `repo` (or `public_repo` for public repos), `workflow` if needed.
- `ARTIFACTORY_USERNAME` - username for the npm registry (Artifactory) if you publish to an internal registry. If publishing to npmjs.org you can instead set `NPM_TOKEN`.
- `ARTIFACTORY_PASSWORD` - password or token for the npm registry above. This value is used as `NPM_PASSWORD` in the release job.

Notes and guidance
------------------
- The workflow expects a `package-lock.json` to be present so CI can use `npm ci`. To generate one locally run:

```powershell
npm i --package-lock-only
```

- For scoped public packages (like `@zowe/eureka-js-client`) ensure `package.json` contains:

```json
"publishConfig": { "access": "public" }
```

- If publishing to a private registry (Artifactory), configure `.npmrc` or set `NPM_REGISTRY` environment variables in the release job as required by your registry provider.

- If the release job needs to push commits/tags back to the repository, `ZOWE_ROBOT_TOKEN` should be a PAT with `repo` scope. Some orgs may allow using the built-in `GITHUB_TOKEN`; however, `GITHUB_TOKEN` has limitations (cannot trigger other workflows, limited permissions for cross-repo workflows), so a PAT is more flexible.

Testing release locally (dry-run ideas)
-------------------------------------
- You can run `npm pack` to exercise packaging locally without publishing.
- For dry-run of octorelease locally, consult the `octorelease` documentation — often a dry-run CLI option or a temporary branch can be used.
