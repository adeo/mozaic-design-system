<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M8.333 4a1 1 0 0 1 1-1h13.334a1 1 0 0 1 1 1v3H28a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4.333v3a1 1 0 0 1-1 1H9.333a1 1 0 0 1-1-1v-3H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h4.333V4Zm13.334 1v2H10.333V5h11.334Zm1 4H5v14h3.333v-4.667H8a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2h-.333V23H27V9h-4.333ZM10.333 23.999V27h11.334v-8.667H10.333V24Zm11-12.499a.5.5 0 0 0 0 1H24a.5.5 0 0 0 0-1h-2.667Zm-8.5 9.833a.5.5 0 0 1 .5-.5h5.334a.5.5 0 0 1 0 1h-5.334a.5.5 0 0 1-.5-.5Zm.5 2.167a.5.5 0 0 0 0 1h5.334a.5.5 0 0 0 0-1h-5.334Z"/>
</svg>
