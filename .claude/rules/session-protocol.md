## Session Protocol

### Starting a Session

1. Read `PROGRESS.md` for current status
2. Confirm current phase and task with user
3. Create a plan before executing

### During a Session

- Focus on one task at a time
- **Run verification after each code change**
- Fix all errors before moving forward

### Ending a Session

When user says "session end" or "update progress":

Update `PROGRESS.md` with:

- What was completed (move to completed section)
- What's in progress
- Any blockers or technical notes
- Next steps for next session

---

## Code Verification Rules

**CRITICAL: After EVERY code change, run /verify command to perform verification before proceeding.**

### Rules

1. **Never proceed to the next task if any verification step fails**
2. **Fix errors immediately** before writing more code
3. **If runtime errors are detected**, read the error output and fix the root cause
4. **After fixing**, re-run all verification steps

### Verification Triggers

Run verification after:

- Modifying existing code
- Adding/changing imports
- Updating dependencies
- Any change that could affect runtime behavior
