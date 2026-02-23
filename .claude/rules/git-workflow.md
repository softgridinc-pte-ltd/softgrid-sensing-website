# Git Workflow Rules

## Commit Message Format

Follow the **Conventional Commits** specification:

```
<type>: <description>

[optional body]
```

### Types

| Type       | Description                                      |
| ---------- | ------------------------------------------------ |
| `feat`     | New feature                                      |
| `fix`      | Bug fix                                          |
| `refactor` | Code refactoring (no feature change, no bug fix) |
| `style`    | Code style changes (formatting, whitespace)      |
| `docs`     | Documentation only                               |
| `test`     | Adding or updating tests                         |
| `chore`    | Build, config, dependencies, tooling             |
| `perf`     | Performance improvement                          |
| `cicd`     | CI/CD pipeline                                   |

### Subject Rules

- Use imperative mood: "add feature" not "added feature"
- No period at the end
- Max 50 characters
- Lowercase first letter

### Examples

```
feat: add BpmnCanvas component with basic rendering
fix: handle empty namespace in Flowable export
refactor: extract useElementProperties hook
chore: add bpmn-js TypeScript declarations
docs: update PROGRESS.md with Phase 1 completion
```

## Commit Granularity

- Prefer smaller, focused commits over large ones
- Each commit should leave the project in a working state

Note: Attribution disabled globally via ~/.claude/settings.json.
