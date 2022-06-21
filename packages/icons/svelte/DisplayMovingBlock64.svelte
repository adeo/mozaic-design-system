<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="10" cy="10" r="5"/><circle cx="32" cy="10" r="5"/><circle cx="54" cy="10" r="5"/><circle cx="10" cy="32" r="5"/><circle cx="32" cy="32" r="5"/><circle cx="54" cy="32" r="5"/><circle cx="10" cy="54" r="5"/><circle cx="32" cy="54" r="5"/><circle cx="54" cy="54" r="5"/></svg>