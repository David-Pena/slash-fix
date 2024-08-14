import clipboardy from 'clipboardy';

export const analyze = async (dir: string) => {
  // Step 1: Replace backslashes with forward slashes
  const convertedDir = dir.replace(/\\/g, '/');

  // Step 2: Copy the converted path to the clipboard
  clipboardy.writeSync(convertedDir);

  // Step 3: Output the converted path to the console
  console.log(`Original Path: ${dir}`);
  console.log(`Converted Path: ${convertedDir}`);
  console.log('The converted path has been copied to your clipboard.');
};
