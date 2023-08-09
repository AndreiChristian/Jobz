<script lang="ts">
  import type { JobApplication } from "@prisma/client";
  import { writable } from "svelte/store";

  const jobApplication = writable({
    position: "",
    company: "",
    modality: "",
    message: "",
    coverLetter: "",
    status: "",
  });

  let errors: any = {};

  function validateForm() {
    errors = {}; // Resetting errors

    // Sample validation
    if (!$jobApplication.position) errors.position = "Position is required";
    if (!$jobApplication.company) errors.company = "Company is required";
    if (!$jobApplication.modality) errors.modality = "Modality is required";
    // ... Add more validation logic as needed
  }

  function handleSubmit() {
    validateForm();

    if (Object.keys(errors).length === 0) {
      console.log($jobApplication);
    }
  }
</script>

<div class="p-6 bg-base-200 shadow-md rounded">
  <form class="space-y-4" on:submit|preventDefault={handleSubmit}>
    <div>
      <label for="position" class="block text-sm font-medium">Position</label>
      <input
        type="text"
        bind:value={$jobApplication.position}
        id="position"
        class="input input-bordered w-full"
      />
      {#if errors.position}<p class="text-red-500 text-xs">
          {errors.position}
        </p>{/if}
    </div>

    <div>
      <label for="company" class="block text-sm font-medium">Company</label>
      <input
        type="text"
        bind:value={$jobApplication.company}
        id="company"
        class="input input-bordered w-full"
      />
      {#if errors.company}<p class="text-red-500 text-xs">
          {errors.company}
        </p>{/if}
    </div>

    <div>
      <label for="modality" class="block text-sm font-medium">Modality</label>
      <input
        type="text"
        bind:value={$jobApplication.modality}
        id="modality"
        class="input input-bordered w-full"
      />
      {#if errors.modality}<p class="text-red-500 text-xs">
          {errors.modality}
        </p>{/if}
    </div>

    <div>
      <label for="message" class="block text-sm font-medium">Message</label>
      <textarea
        bind:value={$jobApplication.message}
        id="message"
        class="textarea textarea-bordered w-full"
      />
    </div>

    <div>
      <label for="coverLetter" class="block text-sm font-medium"
        >Cover Letter</label
      >
      <textarea
        bind:value={$jobApplication.coverLetter}
        id="coverLetter"
        class="textarea textarea-bordered w-full"
      />
    </div>

    <div>
      <label for="status" class="block text-sm font-medium">Status</label>
      <input
        type="text"
        bind:value={$jobApplication.status}
        id="status"
        class="input input-bordered w-full"
      />
      {#if errors.status}<p class="text-red-500 text-xs">
          {errors.status}
        </p>{/if}
    </div>

    <button type="submit" class="btn btn-primary mt-4">Add application</button>
  </form>
</div>
