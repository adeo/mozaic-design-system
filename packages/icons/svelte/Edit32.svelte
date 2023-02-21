<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M25.374 3.293a1 1 0 0 0-1.414 0L10.626 16.626a1 1 0 0 0-.229.356l-2 5.334a1 1 0 0 0 1.287 1.287l5.334-2a1 1 0 0 0 .356-.23L28.707 8.04a1 1 0 0 0 0-1.414l-3.333-3.333ZM11.917 18.624l-.875 2.334 2.334-.875-1.459-1.459Zm2.396.982L23.94 9.98l-1.92-1.92-9.626 9.627 1.92 1.919ZM24.646 9.273l-1.919-1.92 1.94-1.939 1.919 1.92-1.94 1.939ZM4 8.333a1 1 0 0 0-1 1V28a1 1 0 0 0 1 1h18.667a1 1 0 0 0 1-1v-5.333a1 1 0 1 0-2 0V27H5V10.333h4.333a1 1 0 1 0 0-2H4Z"/>
</svg>
