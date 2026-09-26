import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
    state: () => ({ isDarkMode: false }),
    getters: {
        currentThemeClass: (state) => state.isDarkMode ? "dark-mode" : "light-mode"
    },
    actions: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
        }
    }
});
