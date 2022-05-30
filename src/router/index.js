import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListView from "../views/ListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/pokemons",
      name: "listView",
      component: ListView,
      children: [
        {
          path: "",
          redirect: { name: "allPokemons" },
        },
        {
          path: "all",
          name: "allPokemons",
          component: () => import("../views/lists/AllPokemons.vue"),
        },
        {
          path: "favorites",
          name: "favoritePokemons",
          component: () => import("../views/lists/FavoritePokemons.vue"),
        },
      ],
    },
  ],
});

export default router;
