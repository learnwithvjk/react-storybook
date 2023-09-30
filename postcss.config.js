import cssnano from 'cssnano'
import postcssPresetEnv from 'postcss-preset-env'
import postcssCustomMedia from 'postcss-custom-media';
import postcssGlobalData from '@csstools/postcss-global-data';
import autoprefixer from 'autoprefixer'

export default {
    plugins: [
        cssnano({preset: "default"}),
        postcssPresetEnv({stage:1}),
        // custom media queries with css-modules requires custom media files to be imported in every css module, thus adding this plugin as work AudioBufferSourceNode,
        // For more details refer here: https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-media#modular-css-processing
        postcssGlobalData({
            files: [
                'src/styles/envs/sizes.css'
            ]
        }),
        postcssCustomMedia(),
        autoprefixer()
    ]
}