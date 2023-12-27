<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path fill-rule="evenodd" d="M24 6.5a1.5 1.5 0 0 1 1.305.76l17 30A1.5 1.5 0 0 1 41 39.5H7a1.5 1.5 0 0 1-1.305-2.24l17-30A1.5 1.5 0 0 1 24 6.5Zm14.426 30L24 11.043 9.574 36.5h28.852ZM24 18.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-3 0v-6a1.5 1.5 0 0 1 1.5-1.5ZM24 34a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
</svg>
