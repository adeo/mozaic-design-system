<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill-rule="evenodd" d="M21.5 20c0-5.799 4.701-10.5 10.5-10.5S42.5 14.201 42.5 20 37.799 30.5 32 30.5 21.5 25.799 21.5 20ZM32 6.5c-7.456 0-13.5 6.044-13.5 13.5S24.544 33.5 32 33.5 45.5 27.456 45.5 20 39.456 6.5 32 6.5Zm-9.916 32.014a1.5 1.5 0 0 0-1.255-.114l-8 2.854a1.5 1.5 0 0 0-.996 1.413V56a1.5 1.5 0 0 0 1.5 1.5h37.334a1.5 1.5 0 0 0 1.5-1.5V42.667a1.5 1.5 0 0 0-.996-1.413l-8-2.854a1.5 1.5 0 0 0-1.255.114A19.736 19.736 0 0 1 32 41.166c-3.615 0-7-.965-9.916-2.652ZM14.834 54.5V43.724l6.363-2.27A22.738 22.738 0 0 0 32 44.166c3.906 0 7.586-.981 10.803-2.712l6.364 2.27V54.5H14.833Z"/>
</svg>
