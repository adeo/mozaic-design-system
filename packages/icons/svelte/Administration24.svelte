<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11.335 2.253a1 1 0 0 1 1.33 0l9 8A1 1 0 0 1 21 12h-2v5h.5a1 1 0 0 1 1 1v2h.5a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h.5v-2a1 1 0 0 1 1-1H5v-5H3a1 1 0 0 1-.664-1.747l9-8ZM17 17v-5h-2v5h2Zm-4 0v-5h-2v5h2Zm-4 0v-5H7v5h2Zm9-7H5.63L12 4.338 18.37 10H18Zm0 9H5.5v1h13v-1H18ZM11.5 7.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM12 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"/>
</svg>
