<svelte:options tag="universe-paint-32px" />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M25 6V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2V8h2v4.56a1 1 0 01-.68.95l-9.27 3.09A3 3 0 0015 19.44V21a2 2 0 00-2 2v4a2 2 0 002 2h2a2 2 0 002-2v-4a2 2 0 00-2-2v-1.56a1 1 0 01.68-1L27 15.4a3 3 0 002-2.84V8a2 2 0 00-2-2zm-2 3H9V5h14zm-6 18h-2v-4h2z"/></svg>