<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M9.47 5.303a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1-.53 1.28h-15a.75.75 0 0 1-.53-1.28l7.5-7.5Zm-5.16 7.28h11.38L10 6.895l-5.69 5.69Z"/>
</svg>
