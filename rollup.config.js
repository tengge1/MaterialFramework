import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import commonjs from 'rollup-plugin-commonjs';

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
        postcss({
            extensions: ['.css'],
            inject: false,
            extract: true,
            plugins: []
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        resolve({
            // use "module" field for ES6 module if possible
            // module: true, // Default: true

            // use "jsnext:main" if possible
            // – see https://github.com/rollup/rollup/wiki/jsnext:main
            jsnext: true,  // Default: false

            // use "main" field or index.js, even if it's not an ES6 module
            // (needs to be converted from CommonJS to ES6
            // – see https://github.com/rollup/rollup-plugin-commonjs
            main: true,  // Default: true

            // some package.json files have a `browser` field which
            // specifies alternative files to load for people bundling
            // for the browser. If that's you, use this option, otherwise
            // pkg.browser will be ignored
            // browser: true,  // Default: false

            // not all files you want to resolve are .js files
            extensions: ['.js', '.json'],  // Default: ['.js']

            // whether to prefer built-in modules (e.g. `fs`, `path`) or
            // local ones with the same names
            preferBuiltins: false,  // Default: true

            // Lock the module search in this path (like a chroot). Module defined
            // outside this path will be marked as external
            // jail: '/my/jail/path', // Default: '/'

            // Set to an array of strings and/or regexps to lock the module search
            // to modules that match at least one entry. Modules not matching any
            // entry will be marked as external
            // only: ['some_module', /^@some_scope\/.*$/], // Default: null

            // If true, inspect resolved files to check that they are
            // ES2015 modules
            // modulesOnly: true, // Default: false

            // Any additional options that should be passed through
            // to node-resolve
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        }),
        commonjs({
            // non-CommonJS modules will be ignored, but you can also
            // specifically include/exclude files
            include: 'node_modules/**',  // Default: undefined
            exclude: ['node_modules/foo/**'],  // Default: undefined
            // these values can also be regular expressions
            // include: /node_modules/

            // search for files other than .js files (must already
            // be transpiled by a previous plugin!)
            extensions: ['.js', '.coffee'],  // Default: [ '.js' ]

            // if true then uses of `global` won't be dealt with by this plugin
            ignoreGlobal: false,  // Default: false

            // if false then skip sourceMap generation for CommonJS modules
            sourceMap: false,  // Default: true

            // explicitly specify unresolvable named exports
            // (see below for more details)
            namedExports: {
                'node_modules\\material-ui\\styles\\index.js': [
                    'createGenerateClassName',
                    'createMuiTheme',
                    'jssPreset',
                    'MuiThemeProvider',
                    'withStyles',
                    'withTheme'
                ],
                'node_modules\\material-ui\\BottomNavigation\\index.js': [
                    'BottomNavigationAction'
                ],
                'node_modules\\material-ui\\GridList\\index.js': [
                    'GridListTile',
                    'GridListTileBar'
                ],
                'node_modules\\material-ui\\Snackbar\\index.js': [
                    'SnackbarContent'
                ],
                'node_modules\\material-ui\\Card\\index.js': [
                    'CardContent',
                    'CardActions',
                    'CardMedia',
                    'CardHeader'
                ],
                'node_modules\\material-ui\\ExpansionPanel\\index.js': [
                    'ExpansionPanelActions',
                    'ExpansionPanelDetails',
                    'ExpansionPanelSummary'
                ],
                'node_modules\\material-ui\\Dialog\\index.js': [
                    'DialogActions',
                    'DialogTitle',
                    'DialogContent',
                    'DialogContentText',
                    'withMobileDialog'
                ],
                'node_modules\\material-ui\\Form\\index.js': [
                    'FormGroup',
                    'FormLabel',
                    'FormControl',
                    'FormHelperText',
                    'FormControlLabel'
                ],
                'node_modules\\material-ui\\Input\\index.js': [
                    'InputAdornment',
                    'InputLabel'
                ],
                'node_modules\\material-ui\\Radio\\index.js': [
                    'RadioGroup'
                ],
                'node_modules\\material-ui\\List\\index.js': [
                    'ListItem',
                    'ListItemAvatar',
                    'ListItemText',
                    'ListItemIcon',
                    'ListItemSecondaryAction',
                    'ListSubheader'
                ],
                'node_modules\\material-ui\\Tabs\\index.js': [
                    'Tab'
                ],
                'node_modules\\material-ui\\Menu\\index.js': [
                    'MenuList',
                    'MenuItem'
                ],
                'node_modules\\material-ui\\Table\\index.js': [
                    'TableBody',
                    'TableCell',
                    'TableFooter',
                    'TableHead',
                    'TablePagination',
                    'TableRow',
                    'TableSortLabel'
                ],
                'node_modules\\material-ui\\Progress\\index.js': [
                    'CircularProgress',
                    'LinearProgress'
                ],
                'node_modules\\material-ui\\Stepper\\index.js': [
                    'Step',
                    'StepButton',
                    'StepContent',
                    'StepIcon',
                    'StepLabel'
                ],
                'node_modules\\material-ui\\transitions\\index.js': [
                    'Slide',
                    'Grow',
                    'Fade',
                    'Collapse',
                    'Zoom'
                ],
                'node_modules\\react\\index.js': [
                    'createElement',
                    'Component'
                ],
                'node_modules\\material-ui\\Modal\\index.js': [
                    'Backdrop',
                    'ModalManager'
                ]
            },  // Default: undefined

            // sometimes you have to leave require statements
            // unconverted. Pass an array containing the IDs
            // or a `id => boolean` function. Only use this
            // option if you know what you're doing!
            // ignore: ['conditional-runtime-dependency']
        })
    ]
};
