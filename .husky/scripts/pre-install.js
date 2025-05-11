const process = await import ('node:process')

const printError = (message) => {
  console.error('❌', message)
  console.error('')
  process.exit(1)
}

if (!process.env.npm_execpath || !/yarn\.js$/.test(process.env.npm_execpath)) {
  printError('You must use Yarn to install dependencies.')
}

if (process.env.npm_lifecycle_event !== 'install' && process.env.npm_command !== 'install') {
  process.exit(0)
}

if (process.env.npm_config_argv) {
  try {
    const npmArguments = JSON.parse(process.env.npm_config_argv)
    if (!npmArguments.original.includes('--frozen-lockfile')) {
      printError('You must use "yarn install --frozen-lockfile".')
    }
  }
  catch {
    printError('❌ Cannot parse npm args. You must use "yarn install --frozen-lockfile".')
  }
}
else {
  if (!process.env.YARN_FROZEN_LOCKFILE && !process.env.npm_config_frozen_lockfile) {
    printError('❌ You must use "yarn install --frozen-lockfile".')
  }
}
