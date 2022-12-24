<script>
  import Header from '$lib/components/Header.svelte'
</script>

<Header/>

<style>
  :global(:root) {
    --primary-color: #ffae42;
    --secondary-color: #7e7b86;
  }
  :global(body) {
    font-family: Inter, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>

<slot></slot>
