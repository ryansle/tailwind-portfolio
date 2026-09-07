import { spawnSync } from 'node:child_process';

// Set the flag before Next loads .env.local, including its existing live values.
const [command, ...args] = process.argv.slice(2);
if (!['dev', 'build', 'start'].includes(command)) throw new Error('Expected dev, build, or start.');
const result = spawnSync(process.execPath, ['node_modules/next/dist/bin/next', command, ...args], {
  stdio: 'inherit',
  env: { ...process.env, NEXT_PUBLIC_FIXTURE_MODE: 'true' },
});
if (result.error) throw result.error;
process.exit(result.status ?? 1);
