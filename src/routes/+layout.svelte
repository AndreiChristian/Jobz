<script>
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import "../app.css";
</script>

<div class="flex flex-col min-h-screen">
  <Navbar />
  <main class="flex-1 p-4 bg-base-200">
    <slot />
  </main>
  <Footer />
</div>
