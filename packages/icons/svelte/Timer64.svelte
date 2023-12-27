<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill-rule="evenodd" d="M12.707 5.96a1 1 0 0 1 0 1.414l-1.96 1.96 3.943 3.941A25.41 25.41 0 0 1 32 6.5a25.41 25.41 0 0 1 17.31 6.775l2.61-2.608-.627-.627a1 1 0 1 1 1.414-1.414L54.04 9.96l1.334 1.333a1 1 0 1 1-1.415 1.414l-.626-.626-2.608 2.609A25.409 25.409 0 0 1 57.5 32c0 14.083-11.417 25.5-25.5 25.5S6.5 46.083 6.5 32a25.41 25.41 0 0 1 6.775-17.31l-3.942-3.942-1.96 1.96a1 1 0 0 1-1.413-1.415l2.666-2.666v-.001l2.667-2.666a1 1 0 0 1 1.414 0ZM32 9.5C19.574 9.5 9.5 19.574 9.5 32S19.574 54.5 32 54.5 54.5 44.426 54.5 32 44.426 9.5 32 9.5Zm4 21.167a4 4 0 1 1-1.968-3.446l6.594-6.595a1 1 0 0 1 1.414 1.415l-6.594 6.594c.352.595.554 1.29.554 2.032Z"/>
</svg>
