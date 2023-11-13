<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill-rule="evenodd" d="M32 6.5A1.5 1.5 0 0 1 33.5 8v6.563c8.468.72 15.218 7.469 15.937 15.937H56a1.5 1.5 0 0 1 0 3h-6.563c-.72 8.468-7.469 15.218-15.937 15.937V56a1.5 1.5 0 0 1-3 0v-6.563c-8.468-.72-15.218-7.469-15.937-15.937H8a1.5 1.5 0 0 1 0-3h6.563c.72-8.468 7.469-15.218 15.937-15.937V8A1.5 1.5 0 0 1 32 6.5Zm0 11c-8.008 0-14.5 6.492-14.5 14.5S23.992 46.5 32 46.5 46.5 40.008 46.5 32 40.008 17.5 32 17.5Z"/>
</svg>
