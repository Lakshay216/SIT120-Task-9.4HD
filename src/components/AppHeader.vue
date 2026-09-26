<script setup>
import { useThemeStore } from "../stores/themeStore";
import { useSavedResourcesStore } from "../stores/savedResourcesStore";

const themeStore = useThemeStore();
const savedResources = useSavedResourcesStore();

const links = [
    { label: "Home", path: "/" },
    { label: "Resources", path: "/resources" },
    { label: "Community", path: "/community" },
    { label: "Contribute", path: "/contribute" }
];
</script>

<template>
    <header class="site-header">
        <div class="container header-content">
            <h1 class="logo">DevHub</h1>

            <nav aria-label="Main navigation">
                <ul>
                    <li v-for="link in links" :key="link.path">
                        <RouterLink :to="link.path" active-class="active">
                            {{ link.label }}
                        </RouterLink>
                    </li>
                </ul>
            </nav>

            <div class="header-actions">
                <RouterLink class="saved-badge" to="/resources#saved-resources">
                    Saved <span>{{ savedResources.totalCount }}</span>
                </RouterLink>
                <button type="button" class="theme-button" @click="themeStore.toggleDarkMode">
                    {{ themeStore.isDarkMode ? "Light mode" : "Dark mode" }}
                </button>
            </div>
        </div>
    </header>
</template>
