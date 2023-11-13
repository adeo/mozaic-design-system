<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M16.364 4.697a.75.75 0 0 0-1.061-1.06L10 8.938 4.697 3.636a.75.75 0 1 0-1.06 1.061L8.938 10l-5.303 5.303a.75.75 0 1 0 1.061 1.06L10 11.062l5.303 5.303a.75.75 0 1 0 1.06-1.06L11.062 10l5.303-5.303Z"/>
</svg>
