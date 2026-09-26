import { defineStore } from "pinia";

export const useSavedResourcesStore = defineStore("savedResources", {
    state: () => ({ items: [] }),
    getters: {
        totalCount: (state) => state.items.length,
        formattedSummary: (state) => state.items.length
            ? state.items.map((item) => item.title).join(", ")
            : "No resources saved yet."
    },
    actions: {
        addItem(resource) {
            if (!this.items.some((item) => item.id === resource.id)) {
                this.items.push({ id: resource.id, title: resource.title });
            }
        },
        removeItem(id) {
            this.items = this.items.filter((item) => item.id !== id);
        },
        resetStore() {
            this.items = [];
        }
    }
});
