# Commit Command

Auto-commit all staged and unstaged changes with a proper commit message following the project's git workflow rules.

## Instructions

Read the git workflow rules in `.claude/rules/git-workflow.md` for commit message format.

## Important

- If there are mixed unrelated changes, ask the user whether to:
  - Commit everything together with a general message
  - Split into multiple focused commits
- Always show `git status` before and `git log -1` after committing
