import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy';

export default {
    input: pkg.source,
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'esm', sourcemap: true },
    ],
    plugins: [
        external(),
        babel({
            exclude: 'node_modules/**',
        }),
        copy({
            targets: [{ src: './node_modules/glyph-components/dist/assets', dest: 'dist' }],
            verbose: true,
        }),
        typescript({ tsconfig: './tsconfig.json' }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};
