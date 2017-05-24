import { FuseBox, EnvPlugin, UglifyJSPlugin } from 'fuse-box'

const production = process.env.NODE_ENV === 'production'

const plugins = [ EnvPlugin({ NODE_ENV: process.env.NODE_ENV }) ]
const productionPlugins = [ ...plugins, UglifyJSPlugin() ]

const fuse = new FuseBox({
  homeDir: 'src',
  output: 'www/$name.js',
  plugins: production ? productionPlugins : plugins,
  autoImport: {
    React: 'react'
  }
})

const bundle = fuse.bundle('bundle')
                   .instructions('>index.tsx')

if (!production) {
  bundle.watch()
        .hmr()

  fuse.dev({ root: 'www' })
}

fuse.run()
