import Home from "./views/Home.vue";
import About from "./views/About.vue";
import NotFound from "./views/NotFound.vue";
import Mood from "./views/web3crypto/Mood.vue";
import Whitelist from "./views/web3crypto/Whitelist.vue";
import NftMint from "./views/web3crypto/NftMint.vue";
import Marketing from "./views/info/Marketing.vue";
import Nft from "./views/info/NFT.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: Marketing, meta: { title: "Home" } },
  { path: "/mood", component: Mood, meta: { title: "Mood" } },
  { path: "/whitelist", component: Whitelist, meta: { title: "Whitelist" } },
  { path: "/nftmint", component: NftMint, meta: { title: "NftMint" } },
  { path: "/marketing", component: Marketing, meta: { title: "Marketing" } },
  { path: "/nft", component: Nft, meta: { title: "NFT" } },
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
