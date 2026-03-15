async function main() {
  const chunks = [];
  for await (const chunk of process.stdin) {
    chunks.push(chunk);
  }

  const toolArgs = JSON.parse(Buffer.concat(chunks).toString());
  const readPath = toolArgs.tool_input?.file_path || toolArgs.tool_input?.path || "";

  if (readPath.includes('.env')) {
    console.error("Access to .env file is blocked by hook.");
    process.exit(2);
  }
}

main();