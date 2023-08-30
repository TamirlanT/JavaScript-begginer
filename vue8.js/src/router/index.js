import { createRouter, createWebHistory } from "vue-router";
import SwiperSeven from '@/pages/SwiperSeven.vue';
import ProjectSix from '@/pages/projectsix/ProjectSix.vue';
import Changer from '@/pages/changeFourProject/Changer.vue';
import NotFound from '@/pages/NotFound.vue';

const routes = [
    {
        path: '',
        component: SwiperSeven
    },
    {
        path: '/swiper',
        name: 'Swiper',
        component: SwiperSeven
    },
    {
        path: '/projects',
        name: 'Projects',
        component: ProjectSix
    },
    {
        path: '/change',
        name: 'Change',
        component: Changer
    },
    {
        path: '/:CatchAll(.*)',
        component: NotFound
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;