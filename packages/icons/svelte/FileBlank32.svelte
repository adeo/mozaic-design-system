<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M6.667 3a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h18.666a1 1 0 0 0 1-1V10.667a1 1 0 0 0-.292-.707l-6.667-6.667A1 1 0 0 0 18.667 3h-12Zm1 24V5h10v5.667a1 1 0 0 0 1 1h5.666V27H7.667ZM22.919 9.667l-3.252-3.253v3.253h3.252Z"/>
</svg>
