import Home from "./views/Home.vue";
import About from "./views/About.vue";
import NotFound from "./views/NotFound.vue";
import Mood from "./views/web3crypto/Mood.vue";
import Whitelist from "./views/web3crypto/Whitelist.vue";
import NftMint from "./views/web3crypto/NftMint.vue";
import Marketing from "./views/info/Marketing.vue";
import Object from "./views/info/Object.vue";
import FilterCat from "./views/info/FilterCat.vue";
import SubmitForm from "./views/info/SubmitForm.vue";

import Test from "./views/info/test.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: Test, meta: { title: "Home" } },
  { path: "/mood", component: Mood, meta: { title: "Mood" } },
  { path: "/whitelist", component: Whitelist, meta: { title: "Whitelist" } },
  { path: "/nftmint", component: NftMint, meta: { title: "NftMint" } },
  { path: "/marketing", component: Marketing, meta: { title: "Marketing" } },
  { path: "/object", component: Object, meta: { title: "Object" } },
  {
    path: "/filtercat",
    component: FilterCat,
    meta: { title: "FilterCategory" },
  },
  { path: "/submitform", component: SubmitForm, meta: { title: "SubmitForm" } },

  {
    path: "/about",
    meta: { title: "About" },
    component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  { path: "/:path(.*)", component: NotFound },
];
