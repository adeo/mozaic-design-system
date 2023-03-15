<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M9.5 4a1.5 1.5 0 1 0 0 3H11V5.5A1.5 1.5 0 0 0 9.5 4Zm2.5-.95A3.5 3.5 0 0 0 6.337 7H4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-2.337A3.5 3.5 0 0 0 12 3.05ZM14.5 7A1.5 1.5 0 1 0 13 5.5V7h1.5ZM5 15.5V20h6v-4.5H5ZM5 9v4.5h6V9H5Zm8 6.5V20h6v-4.5h-6Zm6-2h-6V9h6v4.5Z"/>
</svg>
