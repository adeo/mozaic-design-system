<svelte:options tag="navigation-display-movingblock-32px" />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="5.5" cy="5.5" r="2.5"/><circle cx="26.5" cy="5.5" r="2.5"/><path d="M16 3a2.5 2.5 0 102.5 2.5A2.5 2.5 0 0016 3z"/><circle cx="5.5" cy="26.5" r="2.5"/><circle cx="26.5" cy="26.5" r="2.5"/><path d="M16 24a2.5 2.5 0 102.5 2.5A2.5 2.5 0 0016 24z"/><circle cx="5.5" cy="16" r="2.5"/><circle cx="26.5" cy="16" r="2.5"/><path d="M16 13.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5z"/></svg>