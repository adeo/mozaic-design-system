<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill-rule="evenodd" d="M9.5 32C9.5 19.574 19.574 9.5 32 9.5S54.5 19.574 54.5 32 44.426 54.5 32 54.5 9.5 44.426 9.5 32ZM32 6.5C17.917 6.5 6.5 17.917 6.5 32S17.917 57.5 32 57.5 57.5 46.083 57.5 32 46.083 6.5 32 6.5ZM21.625 35.667a1 1 0 1 0-1.886.666C21.524 41.381 26.338 45 32 45c5.662 0 10.476-3.619 12.26-8.667a1 1 0 1 0-1.885-.666C40.864 39.94 36.787 43 31.999 43c-4.787 0-8.863-3.06-10.374-7.333Zm-1.976-8.064a1 1 0 0 0 1.287-.585C21.366 25.869 22.554 25 24 25s2.633.87 3.064 2.018a1 1 0 1 0 1.872-.702C28.202 24.356 26.247 23 24 23s-4.202 1.357-4.936 3.316a1 1 0 0 0 .585 1.287Zm17.287-.585a1 1 0 1 1-1.872-.702C35.798 24.356 37.753 23 40 23s4.202 1.357 4.936 3.316a1 1 0 0 1-1.872.702C42.634 25.869 41.446 25 40 25s-2.633.87-3.064 2.018Z"/>
</svg>
