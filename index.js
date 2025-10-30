import { degit } from 'deg-it';
import prompts from 'prompts';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const { projectName } = await prompts({
  type: 'text',
  name: 'projectName',
  message: 'Project name:',
  initial: 'my-app'
});

const targetDir = path.join(process.cwd(), projectName);

console.log(`\n📦 Creating project in ${targetDir}...\n`);

await degit('yourname/create-myrepo/templates/default', {
  mode: 'tar'
}).clone(targetDir);

console.log('✅ Template cloned. Installing dependencies...');

execSync('pnpm install', { stdio: 'inherit', cwd: targetDir });

console.log('\n🚀 All done!');
console.log(`\n👉 cd ${projectName}\n👉 pnpm dev`);
