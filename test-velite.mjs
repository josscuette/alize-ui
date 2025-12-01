import { glob } from 'glob';
const files = await glob('content/components/**/*.md');
console.log('Found files:', files);
