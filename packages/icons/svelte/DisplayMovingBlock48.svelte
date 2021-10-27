<svelte:options tag="navigation-display-movingblock-48px" />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true"><circle cx="8" cy="8" r="4"/><circle cx="24" cy="8" r="4"/><circle cx="40" cy="8" r="4"/><circle cx="8" cy="24" r="4"/><circle cx="24" cy="24" r="4"/><circle cx="40" cy="24" r="4"/><circle cx="8" cy="40" r="4"/><circle cx="24" cy="40" r="4"/><circle cx="40" cy="40" r="4"/></svg>