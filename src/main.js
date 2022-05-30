import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/index.css";

import NormalButton from "@/components/NormalButton.vue";
import FavoriteButton from "@/components/FavoriteButton.vue";
import ListItem from "@/components/ListItem.vue";
import SearchInput from "@/components/SearchInput.vue";
import InfoPokemon from "@/components/modals/InfoPokemon.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("NormalButton", NormalButton);
app.component("FavoriteButton", FavoriteButton);
app.component("ListItem", ListItem);
app.component("SearchInput", SearchInput);
app.component("InfoPokemon", InfoPokemon);

app.mount("#app");
