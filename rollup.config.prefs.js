import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import * as path from 'path';
import copy from 'rollup-plugin-copy';

const projectRootDir = path.resolve(__dirname) + '/build';
console.log(projectRootDir);
const customResolver = resolve({
    extensions: ['.mjs', '.js', '.jsx', '.json', '.sass', '.scss'],
});

export default {
    input: 'build/prefs/prefs.js',
    output: {
        file: 'dist/prefs.js',
        format: 'es',
    },
    treeshake: false,
    plugins: [
        alias({
            entries: [
                {
                    find: 'src',
                    replacement: path.resolve(projectRootDir),
                    // OR place `customResolver` here. See explanation below.
                },
            ],
            customResolver,
        }),
        copy({
            targets: [{ src: 'src/prefs/ui/*', dest: 'dist/' }],
        }),
        resolve(),
    ],
};
