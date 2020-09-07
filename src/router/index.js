import Vue from 'vue'
import VueRouter from 'vue-router'
import People from '../views/people/People.vue'
import Index from '../views/people/Index.vue'
import Person from '../views/people/Person.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'People',
    component: People,
    children: [
        {
          path: '',
          name: 'people.index',
          component: Index,
        },
        {
          path: 'new',
          name: 'pople.new',
          component: Person,
        },
        {
          path: 'update/:id',
          name: 'people.update',
          component: Person,
        }
      ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
