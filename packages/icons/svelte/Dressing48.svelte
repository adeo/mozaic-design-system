<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path fill-rule="evenodd" d="M6 4.5A1.5 1.5 0 0 0 4.5 6v36a1.5 1.5 0 0 0 3 0v-6H23v7a1 1 0 1 0 2 0V18h7v2.126c-1.725.444-3 2.01-3 3.874a1 1 0 1 0 2 0 2 2 0 1 1 4 0 1 1 0 1 0 2 0 4.002 4.002 0 0 0-3-3.874V18h6.5v24a1.5 1.5 0 0 0 3 0V6A1.5 1.5 0 0 0 42 4.5H6ZM40.5 16H25V7.5h15.5V16ZM23 34H7.5v-6H23v6Zm0-8v-8H7.5v8H23Zm0-10H7.5V7.5H23V16Zm-9 14a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Z"/>
</svg>
