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
    icon: {
        purpose: 'any',
        source: '/src/assets/img/minji.png',
    },
    manifest: {
        name: 'my Portfolio',
        short_name: 'my Portfolio',
        start_url: '/',
        description: '내 포트폴리오',
        // display: 'standalone',
        display: 'fullscreen',
        theme_color: '#1c86c4',
        orientation: 'portrait',
        background_color: '#fff',
    },
});
