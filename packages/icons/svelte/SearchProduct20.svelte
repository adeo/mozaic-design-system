<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M12.5 1.75a.75.75 0 0 0-.53.22l-10 10a.75.75 0 0 0 0 1.06l5 5a.75.75 0 0 0 1.06 0l1.564-1.564a4.89 4.89 0 0 0 2.906.95 4.894 4.894 0 0 0 2.906-.95l1.564 1.564a.75.75 0 1 0 1.06-1.06l-1.564-1.564a4.89 4.89 0 0 0 .95-2.906 4.894 4.894 0 0 0-.95-2.906L18.03 8.03a.75.75 0 0 0 .22-.53v-5a.75.75 0 0 0-.75-.75h-5Zm2.906 6.784 1.344-1.345V3.25h-3.94L3.56 12.5l3.94 3.94 1.034-1.034a4.917 4.917 0 0 1 6.872-6.872ZM9.083 12.5a3.417 3.417 0 1 1 6.834 0 3.417 3.417 0 0 1-6.834 0Zm5.5-6.25a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667Z"/>
</svg>
