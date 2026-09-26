<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import { useThemeStore } from "./stores/themeStore";

const themeStore = useThemeStore();
</script>

<template>
    <div class="app-layout" :class="themeStore.currentThemeClass">
        <AppHeader />
        <main>
            <RouterView v-slot="{ Component }">
                <KeepAlive><component :is="Component" /></KeepAlive>
            </RouterView>
        </main>
        <AppFooter />
    </div>
</template>
