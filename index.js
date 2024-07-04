#!/usr/bin/env node

const KeyframeStats = require('./keyframe-stats'); // Assuming your main class is in a separate file

function printHelp() {
  console.log(`
Usage: keyframe-stats <input_path>

Generate keyframe statistics for video files.

Arguments:
  input_path    Path to a video file or a directory containing video files

Options:
  --help        Show this help message
  `);
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes('--help')) {
    printHelp();
    process.exit(0);
  }

  const inputPath = args[0];

  try {
    const stats = new KeyframeStats(inputPath);
    await stats.processPath();
    console.log('Processing complete');
  } catch (error) {
    console.error('Error processing videos:', error.message);
    process.exit(1);
  }
}

main();