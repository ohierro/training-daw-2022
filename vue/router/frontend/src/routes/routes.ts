import UserEditPage from '@/pages/admin/UserEditPage.vue'
import AdminPage from '../pages/AdminPage.vue'
import HomePage from '../pages/HomePage.vue'
import UsersPage from '../pages/UsersPage.vue'
import PostsPage from '@/pages/posts/PostsPage.vue'
import NewPostPage from '@/pages/posts/NewPostPage.vue'
import PostDetailPage from '@/pages/posts/PostDetailPage.vue'

export const routes = [
    { path: '/', component: HomePage },
    { path: '/admin', component: AdminPage },
    { path: '/admin/users', component: UsersPage },
    { path: '/admin/users/:id', component: UserEditPage },
    { path: '/posts', component: PostsPage },    
    { path: '/posts/:id', component: PostDetailPage },
    { path: '/posts/new', component: NewPostPage },
]