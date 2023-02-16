<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill-rule="evenodd" d="M9 6.5A2.5 2.5 0 0 0 6.5 9v46A2.5 2.5 0 0 0 9 57.5h46a2.5 2.5 0 0 0 2.5-2.5V9A2.5 2.5 0 0 0 55 6.5H9Zm.5 48v-45h45v45h-45Zm11.207-39.126a1 1 0 0 0-1.414-1.414l-5.333 5.333a1 1 0 1 0 1.414 1.414l5.333-5.333Zm8 6.586a1 1 0 0 1 0 1.414l-5.333 5.333a1 1 0 0 1-1.414-1.414l5.333-5.333a1 1 0 0 1 1.414 0Zm0-6.586a1 1 0 0 0-1.414-1.414L13.96 27.293a1 1 0 1 0 1.414 1.414l13.333-13.333Z"/>
</svg>
