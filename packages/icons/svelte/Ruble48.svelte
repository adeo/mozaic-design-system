<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path fill-rule="evenodd" d="M14 4.5A1.5 1.5 0 0 0 12.5 6v17.5H8a1.5 1.5 0 0 0 0 3h4.5v7H8a1.5 1.5 0 0 0 0 3h4.5V42a1.5 1.5 0 0 0 3 0v-5.5H24a1.5 1.5 0 0 0 0-3h-8.5v-7h13c6.075 0 11-4.925 11-11s-4.925-11-11-11H14Zm14.5 19h-13v-16h13a8 8 0 1 1 0 16Z"/>
</svg>
