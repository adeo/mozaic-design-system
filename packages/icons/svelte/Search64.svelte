<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill-rule="evenodd" d="M20.167 29.334c0-8.009 6.491-14.5 14.5-14.5 8.008 0 14.5 6.491 14.5 14.5 0 8.008-6.492 14.5-14.5 14.5-8.009 0-14.5-6.492-14.5-14.5Zm14.5-17.5c-9.665 0-17.5 7.835-17.5 17.5a17.43 17.43 0 0 0 4.11 11.268l-9.004 9.004a1.5 1.5 0 1 0 2.121 2.121l9.004-9.004a17.43 17.43 0 0 0 11.269 4.11c9.665 0 17.5-7.834 17.5-17.5 0-9.664-7.835-17.5-17.5-17.5Z"/>
</svg>
