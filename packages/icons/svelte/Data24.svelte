<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M16 3a1 1 0 0 0 1 1h1.586L12 10.586 8.707 7.293a1 1 0 0 0-1.414 0l-5 5a1 1 0 1 0 1.414 1.414L8 9.414l3.293 3.293a1 1 0 0 0 1.414 0L20 5.414V7a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1Zm6 8a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0V11Zm-5.5 11a1 1 0 0 0 1-1v-8a1 1 0 1 0-2 0v8a1 1 0 0 0 1 1Zm-8-8a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0v-7Zm4.5 2a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0v-5Zm-9 1a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Z"/>
</svg>
