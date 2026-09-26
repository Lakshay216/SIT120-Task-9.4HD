<script setup>
import { ref } from "vue";
import ContactForm from "./ContactForm.vue";

const submittedData = ref(null);
const roleOptions = [
    "School Student", "University Student", "Developer",
    "IT Professional", "Educator", "Other"
];

function handleSubmission(formData) {
    submittedData.value = formData;
}
</script>

<template>
    <div>
        <ContactForm
            form-title="Contribute to DevHub"
            initial-name=""
            :role-options="roleOptions"
            @submit-form="handleSubmission"
        />

        <section v-if="submittedData" class="container acknowledgement-card" aria-live="polite">
            <h3>Contribution Summary</h3>
            <p class="summary-message">Your contribution has passed validation.</p>
            <dl>
                <div class="summary-row"><dt>Name</dt><dd>{{ submittedData.name }}</dd></div>
                <div class="summary-row"><dt>Email</dt><dd>{{ submittedData.email }}</dd></div>
                <div class="summary-row"><dt>Role</dt><dd>{{ submittedData.role }}</dd></div>
                <div class="summary-row"><dt>Experience</dt><dd>{{ submittedData.experience }}</dd></div>
                <div class="summary-row"><dt>Years of experience</dt><dd>{{ submittedData.yearsExperience }}</dd></div>
                <div class="summary-row"><dt>Contribution type</dt><dd>{{ submittedData.contributionType }}</dd></div>
                <div class="summary-row"><dt>Topics</dt><dd>{{ submittedData.topics.join(", ") }}</dd></div>
                <div class="summary-row"><dt>Title</dt><dd>{{ submittedData.title }}</dd></div>
                <div class="summary-row"><dt>Description</dt><dd>{{ submittedData.description }}</dd></div>
                <div class="summary-row"><dt>Link</dt><dd>{{ submittedData.link || "No link provided" }}</dd></div>
            </dl>
        </section>
    </div>
</template>
