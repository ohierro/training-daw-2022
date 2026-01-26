import UserEditPage from '@/pages/admin/UserEditPage.vue'
import AdminPage from '../pages/AdminPage.vue'
import HomePage from '../pages/HomePage.vue'
import UsersPage from '../pages/UsersPage.vue'

export const routes = [
    { path: '/', component: HomePage },
    { path: '/admin', component: AdminPage },
    { path: '/admin/users', component: UsersPage },
    { path: '/admin/users/:id', component: UserEditPage }
]