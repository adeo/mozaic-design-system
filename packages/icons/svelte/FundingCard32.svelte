<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M3 6.667a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v18.666a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6.667Zm2 1v16.666h22V7.667H5Zm4.6 7.5a3.508 3.508 0 0 0-.065 1.333h3.132a.5.5 0 0 1 0 1h-2.83a3.5 3.5 0 0 0 5.372 1.215.5.5 0 0 1 .632.775 4.502 4.502 0 0 1-7.085-1.99H8a.5.5 0 1 1 0-1h.527a4.55 4.55 0 0 1 .05-1.334H8a.5.5 0 0 1 0-1h.89a4.5 4.5 0 0 1 6.599-1.916.5.5 0 1 1-.554.833 3.498 3.498 0 0 0-4.917 1.084h2.649a.5.5 0 0 1 0 1H9.6Zm9.067-2.334a.5.5 0 0 0-.5.5v5.333a.5.5 0 0 0 .5.5H24a.5.5 0 0 0 .5-.5v-5.333a.5.5 0 0 0-.5-.5h-5.333Zm.5 5.333v-4.333h1.666v4.333h-1.666ZM23.5 15.5h-1.667v-1.667H23.5V15.5Zm-1.667 1H23.5v1.666h-1.667V16.5Z"/>
</svg>
