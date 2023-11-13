<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill-rule="evenodd" d="M16.535 11.833a2.5 2.5 0 0 0-2.08 1.114L7.172 23.87c-.08.12-.15.247-.207.376a1.498 1.498 0 0 0 .138 2.289c.073.122.157.239.251.349l22.748 26.539a2.5 2.5 0 0 0 3.796 0l22.747-26.54c.095-.11.178-.226.25-.347a1.498 1.498 0 0 0 .138-2.29 2.503 2.503 0 0 0-.206-.376l-7.283-10.924a2.5 2.5 0 0 0-2.08-1.114H16.535Zm36.662 12-6-9h-6.77l4 9h8.77Zm-10.958 0H21.761l4-9h12.478l4 9Zm.03 3L32 50.795 21.73 26.833h20.54Zm-6.117 19.352 8.293-19.352h8.293L36.152 46.185Zm-16.58-22.352 4-9h-6.77l-6 9h8.77Zm-8.31 3h8.293l8.293 19.352-16.587-19.352Z"/>
</svg>
