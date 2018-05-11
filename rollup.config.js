import babel from 'rollup-plugin-babel';

export default {
    input: 'src/components/main.jsx',
    output: {
        indent: '\t',
        format: 'umd',
        name: 'MF',
        file: 'dist/MaterialFramework.js'
    },
    external: [],
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
};
