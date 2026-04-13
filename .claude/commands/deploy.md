# Deploy Command

Build, push, and verify deployment to GitHub Pages.

## Instructions

### Step 1: Pre-flight checks

Check for uncommitted changes:

```bash
git status
```

If there are uncommitted changes, warn the user and stop. Do not proceed with deploy if the working tree is dirty.

### Step 2: Check for unpushed commits

```bash
git log origin/main..HEAD --oneline
```

If there are no commits ahead of origin, inform the user there is nothing to deploy and stop.

### Step 3: Build verification

```bash
pnpm build
```

If the build fails, stop and fix errors before deploying. Do not push broken code.

### Step 4: Push to remote

```bash
git push origin main
```

### Step 5: Monitor deployment

Wait for the GitHub Actions workflow to start, then watch it:

```bash
gh run list --limit 1 --json databaseId,status,conclusion,workflowName --jq '.[0]'
```

Then watch the run until it completes:

```bash
gh run watch --exit-status
```

### Step 6: Report result

If the workflow succeeded, report success with the deployment URL (https://softgridsensing.com).

If the workflow failed, show the failed step logs:

```bash
gh run view --log-failed
```

## Important

- Never force push
- Never deploy with uncommitted changes
- Never deploy if build fails
- Always wait for and report the deployment status
