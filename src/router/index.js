import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../components/HomeView.vue";
import ResourcesView from "../components/ResourcesView.vue";
import CommunityView from "../components/CommunityView.vue";
import ContributeView from "../components/ContributeView.vue";

// Hash URLs keep page refreshes working on the static Deakin server.
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/", component: HomeView },
        { path: "/resources", component: ResourcesView },
        { path: "/community", component: CommunityView },
        { path: "/contribute", component: ContributeView }
    ],
    scrollBehavior(to) {
        if (to.hash) return { el: to.hash };
        return { top: 0 };
    }
});

export default router;
