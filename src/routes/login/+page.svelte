<script>
  async function login() {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response);
  }
</script>

<button on:click={login}>Login</button>
