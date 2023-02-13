import Vue from 'vue'
import Router from 'vue-router'

// views
import Home_view from '@/views/Home_view'
import Kanban_view from '@/views/kanban/Kanban_view'




Vue.use(Router)


const routes = [
    {
        name: 'home',
        path: '/',
        component: Home_view,
    },
    
    {
        name: 'kanban',
        path: '/kanban',
        component: Kanban_view,
    }
]

const router = new Router({ routes })

export default router
