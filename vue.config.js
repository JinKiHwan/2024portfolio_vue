const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
    transpileDependencies: true,
    css: {
        loaderOptions: {
            scss: {
                additionalData: `
          @import "@/assets/scss/base/_index.scss";
          @import "@/assets/scss/helpers/_index.scss";
          @import "@/assets/scss/layout/_index.scss";
        `,
            },
        },
    },
    publicPath: process.env.BASE_URL,
    assetsDir: process.env.BASE_URL,
    devServer: {
        // contentBase를 사용하지 않고 static을 사용합니다.
        static: {
            directory: path.join(__dirname, ''), // 설정하면 url(/src/assets") 경로 사용 가능
        },
    },
    pwa: {
        iconPaths: {
            favicon32: 'src/assets/img/angel.png',
            favicon16: 'src/assets/img/devil.png',
            appleTouchIcon: 'src/assets/img/ghost.png',
            maskIcon: 'src/assets/img/goofy.png',
            msTileImage: 'src/assets/img/hot.png',
        },
        manifestOptions: {
            name: 'my Portfolio',
            short_name: 'my Portfolio',
            start_url: '/',
            description: '내 포트폴리오',
            display: 'fullscreen',
            theme_color: '#1c86c4',
            orientation: 'portrait',
            background_color: '#fff',
            icons: [
                {
                    src: 'src/assets/img/minji.png',
                    sizes: '192x192',
                    type: 'image/png',
                },
                {
                    src: 'src/assets/img/다니엘.png',
                    sizes: '512x512',
                    type: 'image/png',
                },
            ],
        },
    },
});
