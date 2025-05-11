const { execSync } = await import ('node:child_process')

try {
  execSync('git diff-index --quiet HEAD --', { stdio: 'ignore' })
}
catch {
  console.error('You have uncommitted changes. Please commit or stash them before pushing.')
  throw new Error('Uncommitted changes detected')
}
