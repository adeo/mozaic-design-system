<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M9.333 3a1 1 0 0 1 1 1v.333H18A5.667 5.667 0 0 1 23.667 10v11.667H24a1 1 0 1 1 0 2h-.333V28a1 1 0 0 1-1 1H16a1 1 0 0 1-1-1v-4.333h-.333a1 1 0 1 1 0-2H15V13h-4.667v.333a1 1 0 1 1-2 0V13H4a1 1 0 0 1-1-1V5.333a1 1 0 0 1 1-1h4.333V4a1 1 0 0 1 1-1ZM17 23.667V27h4.667v-3.333H17Zm4.667-2H17V12a1 1 0 0 0-1-1h-5.667V6.333H18A3.667 3.667 0 0 1 21.667 10v11.667ZM5 6.333h3.333V11H5V6.333Z"/>
</svg>
