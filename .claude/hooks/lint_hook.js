import { execSync } from 'child_process';

async function main() {
  const chunks = [];
  for await (const chunk of process.stdin) {
    chunks.push(chunk);
  }

  const toolArgs = JSON.parse(Buffer.concat(chunks).toString());
  const filePath = toolArgs.tool_input?.path || toolArgs.tool_input?.file_path || "";

  // Only run on JS/JSX files
  if (!filePath.match(/\.(js|jsx)$/)) {
    process.exit(0);
  }

  try {
    execSync(`npx eslint "${filePath}" --max-warnings=0`, { stdio: 'pipe' });
    process.exit(0);
  } catch (err) {
    console.error(`ESLint errors in ${filePath}:\n${err.stdout?.toString()}`);
    process.exit(2);
  }
}

main();