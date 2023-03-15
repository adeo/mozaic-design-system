<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M12.197 1.97a.75.75 0 1 0-1.06 1.06l.302.303-4.25 4.25H5a.75.75 0 0 0-.53.22l-.833.833a.75.75 0 0 0 0 1.061L6.44 12.5l-2.803 2.803a.75.75 0 0 0 1.06 1.06L7.5 13.562l2.803 2.803a.75.75 0 0 0 1.06 0l.834-.834a.75.75 0 0 0 .22-.53v-2.19l4.25-4.25.302.304a.75.75 0 0 0 1.061-1.061l-.833-.833-4.167-4.167-.833-.833Zm-4.167 10 2.803 2.803.083-.084V12.5a.75.75 0 0 1 .22-.53l4.47-4.47L12.5 4.394l-4.47 4.47a.75.75 0 0 1-.53.22H5.31l-.083.083L8.03 11.97Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="20" height="20" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
