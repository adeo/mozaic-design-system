<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M2.5 1.75a.75.75 0 0 0-.75.75v15c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75v-15a.75.75 0 0 0-.75-.75h-15Zm.75 11.083V3.25h13.5v9.583h-2.274L12.114 8.11a.5.5 0 0 0-.895 0l-.802 1.605L8.78 6.443a.5.5 0 0 0-.895 0l-3.195 6.39H3.25Zm10.928 1H3.25v2.917h13.5v-2.917h-2.572Zm-2.511-4.382 1.69 3.382H5.81l2.524-5.048 1.636 3.272a.5.5 0 0 0 .895 0l.803-1.606Zm.083-4.034a.333.333 0 1 1 .667 0 .333.333 0 0 1-.667 0Zm.333-1.334a1.333 1.333 0 1 0 0 2.667 1.333 1.333 0 0 0 0-2.667Z"/>
</svg>
