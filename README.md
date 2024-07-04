# Keyframe Stats

Keyframe Stats is a Node.js tool for generating keyframe statistics from video files. It can process individual video files or entire directories, generating a stats file for each video.

## Features

- Generate keyframe stats for individual video files
- Process all video files in a directory
- Handle filenames with spaces
- Output stats files named after the original video file

## Installation

You can install Keyframe Stats globally using npm:

```bash
npm install -g keyframe-stats
```

Or as a dependency in your project:

```bash
npm install keyframe-stats
```

## Usage

### Command Line Interface

Process a single video file:

```bash
keyframe-stats /path/to/your/video.mp4
```

Process all video files in a directory:

```bash
keyframe-stats /path/to/your/video/folder
```

### As a Module

```javascript
const KeyframeStats = require('keyframe-stats');

async function processVideos() {
  const stats = new KeyframeStats('/path/to/your/video/or/folder');
  try {
    await stats.processPath();
    console.log('Processing complete');
  } catch (error) {
    console.error('Error processing videos:', error);
  }
}

processVideos();
```

## Output

For each processed video, a stats file is generated with the naming convention `videoname_keyframes.txt` in the same directory as the input video.

## Dependencies

This tool relies on FFmpeg and FFprobe. The necessary binaries are included via the `ffmpeg-static` and `ffprobe-static` npm packages.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.