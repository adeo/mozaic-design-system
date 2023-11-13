<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M10.083 2.5c0 .414.336.75.75.75h4.856l-8.72 8.72a.75.75 0 1 0 1.061 1.06l8.72-8.72v4.857a.75.75 0 0 0 1.5 0V2.5a.75.75 0 0 0-.75-.75h-6.667a.75.75 0 0 0-.75.75ZM2.5 5.083a.75.75 0 0 0-.75.75V17.5c0 .414.336.75.75.75h11.667a.75.75 0 0 0 .75-.75v-3.333a.75.75 0 0 0-1.5 0v2.583H3.25V6.583h2.583a.75.75 0 1 0 0-1.5H2.5Z"/>
</svg>
