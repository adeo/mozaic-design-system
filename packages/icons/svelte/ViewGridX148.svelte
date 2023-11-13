<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path fill-rule="evenodd" d="M4.5 6A1.5 1.5 0 0 1 6 4.5h36A1.5 1.5 0 0 1 43.5 6v36a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 42V6Zm3 1.5v33h33v-33h-33Z"/>
</svg>
