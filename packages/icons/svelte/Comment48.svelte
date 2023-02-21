<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path fill-rule="evenodd" d="M4.5 6A1.5 1.5 0 0 1 6 4.5h36A1.5 1.5 0 0 1 43.5 6v30a1.5 1.5 0 0 1-1.5 1.5H26.5l-7.6 5.7a1.5 1.5 0 0 1-2.4-1.2v-4.5H6A1.5 1.5 0 0 1 4.5 36V6Zm3 1.5v27h12V39l5.6-4.2.4-.3h15v-27h-33Z"/>
</svg>
