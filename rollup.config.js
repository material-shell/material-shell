import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import * as path from 'path';

const projectRootDir = path.resolve(__dirname) + '/build';
const customResolver = resolve({
    extensions: ['.mjs', '.js', '.jsx', '.json', '.sass', '.scss'],
});

export default {
    output: {
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
        resolve(),
    ],
};
