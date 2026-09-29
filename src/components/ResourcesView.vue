<script setup>
import webDevelopmentImage from "../assets/undraw_progressive-web-app_c4uq.svg";
import programmingImage from "../assets/undraw_code-sample_kpju.svg";
import cloudImage from "../assets/undraw_secure-server_lz9x.svg";
import { useSavedResourcesStore } from "../stores/savedResourcesStore";

const savedResources = useSavedResourcesStore();

const resources = [
    {
        id: "web-development",
        title: "Web Development",
        image: webDevelopmentImage,
        imageAlt: "Illustration of a progressive web application",
        description: "Start building websites by learning the core technologies used on the web.",
        tools: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: "programming",
        title: "Programming",
        image: programmingImage,
        imageAlt: "Illustration of a code sample on a screen",
        description: "Develop problem-solving skills and learn how to create programs using popular programming languages.",
        tools: ["Python", "C++", "JavaScript"]
    },
    {
        id: "cloud-devops",
        title: "Cloud & DevOps",
        image: cloudImage,
        imageAlt: "Illustration of a secure server",
        description: "Learn about tools used to manage, deploy and maintain modern software applications.",
        tools: ["Git", "Docker", "Kubernetes"]
    }
];
</script>

<template>
    <div>
        <section class="page-intro">
            <div class="container">
                <h2>Developer Resources</h2>
                <p>
                    Explore useful technologies and learning areas that can help
                    you build your development skills and start creating your
                    own projects.
                </p>
            </div>
        </section>

        <section class="resources-section">
            <div class="container resource-content">
                <div class="resource-grid">
                    <article v-for="resource in resources" :key="resource.id" class="resource-card">
                        <img class="resource-image" :src="resource.image" :alt="resource.imageAlt">
                        <h3>{{ resource.title }}</h3>
                        <p>{{ resource.description }}</p>
                        <ul>
                            <li v-for="tool in resource.tools" :key="tool">{{ tool }}</li>
                        </ul>
                        <button
                            type="button"
                            class="primary-button save-button"
                            :disabled="savedResources.items.some((item) => item.id === resource.id)"
                            @click="savedResources.addItem(resource)"
                        >
                            {{ savedResources.items.some((item) => item.id === resource.id) ? "Saved" : "Save resource" }}
                        </button>
                    </article>
                </div>

                <aside id="saved-resources" class="saved-panel" aria-live="polite">
                    <h3>Saved resources</h3>
                    <p class="saved-count">{{ savedResources.totalCount }} saved</p>
                    <p>{{ savedResources.formattedSummary }}</p>
                    <ul v-if="savedResources.totalCount">
                        <li v-for="item in savedResources.items" :key="item.id">
                            <span>{{ item.title }}</span>
                            <button type="button" class="remove-button" @click="savedResources.removeItem(item.id)">
                                Remove
                            </button>
                        </li>
                    </ul>
                    <button
                        v-if="savedResources.totalCount"
                        type="button"
                        class="reset-button"
                        @click="savedResources.resetStore()"
                    >Clear saved resources</button>
                </aside>
            </div>
        </section>
    </div>
</template>
