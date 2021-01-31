import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import * as path from 'path';

const projectRootDir = path.resolve(__dirname) + "/build";
console.log(projectRootDir);
const customResolver = resolve({
  extensions: ['.mjs', '.js', '.jsx', '.json', '.sass', '.scss']
});

export default {
  input: 'build/prefs.js',
  output: {
    file: 'target/prefs.js',
    format: 'es'
  },
  treeshake: false,
  plugins: [
    alias({
      entries: [
        {
          find: 'src',
          replacement: path.resolve(projectRootDir, 'src')
          // OR place `customResolver` here. See explanation below.
        }
      ],
      customResolver
    }),
    resolve()
  ]
};
