import { createRouter, createWebHistory } from 'vue-router';
import Main from './components/WrapComp.vue';
import Login from './components/LoginComp.vue';

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
        meta: {
            title: 'Kihwan Portfolio',
            metaTags: [
                {
                    name: '게임덱스 웹서비스팀 개발파트 진기환',
                    content: 'The home page of our example app.',
                },
                {
                    property: 'og:description',
                    content: 'The home page of our example app.',
                },
            ],
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: 'Kihwan Portfolio',
            metaTags: [
                {
                    name: '게임덱스 웹서비스팀 개발파트 진기환',
                    content: 'The home page of our example app.',
                },
                {
                    property: 'og:description',
                    content: 'The home page of our example app.',
                },
            ],
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    const nearestWithTitle = to.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.title);

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.metaTags);

    // If a route with a title was found, set the document (page) title to that value.
    if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map((el) => el.parentNode.removeChild(el));

    // Skip rendering meta tags if there are none.
    if (!nearestWithMeta) return next();

    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags
        .map((tagDef) => {
            const tag = document.createElement('meta');

            Object.keys(tagDef).forEach((key) => {
                tag.setAttribute(key, tagDef[key]);
            });

            // We use this to track which meta tags we create so we don't interfere with other ones.
            tag.setAttribute('data-vue-router-controlled', '');

            return tag;
        })
        // Add the meta tags to the document head.
        .forEach((tag) => document.head.appendChild(tag));

    next();
});

export default router;
