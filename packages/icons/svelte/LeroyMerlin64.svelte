<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill-rule="evenodd" d="M32 17.166a1.5 1.5 0 0 1 1.06.44l24 24a1.5 1.5 0 0 1-1.06 2.56H8a1.5 1.5 0 0 1-1.06-2.56l24-24a1.5 1.5 0 0 1 1.06-.44Zm-20.379 24H52.38L32 20.788 11.621 41.166Z"/>
</svg>
