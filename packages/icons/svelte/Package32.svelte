<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M15.51 3.128a1 1 0 0 1 .98 0l10.667 6a1 1 0 0 1 .51.872v12a1 1 0 0 1-.51.872l-10.667 6a1 1 0 0 1-.98 0l-10.667-6a1 1 0 0 1-.51-.872V10a1 1 0 0 1 .51-.872l10.667-6ZM6.333 21.415V11.136l9.167 5.156v10.28l-9.167-5.157Zm19.334 0L16.5 26.571V16.292l3.427-1.928v2.97a1 1 0 1 0 2 0v-4.095l3.74-2.103v10.28Zm-4.13-9.103 3.6-2.025L16 5.147l-3.59 2.02 9.008 5.066a1 1 0 0 1 .119.079ZM10.37 8.314l-3.507 1.973L16 15.427l3.507-1.973-9.137-5.14Z"/>
</svg>
