<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M5.167 4.917a.25.25 0 0 0-.25.25v7h10.166v-7a.25.25 0 0 0-.25-.25H5.167Zm11.416 7.25v-7a1.75 1.75 0 0 0-1.75-1.75H5.167a1.75 1.75 0 0 0-1.75 1.75v7H2.5a.75.75 0 0 0-.75.75v.333A3.75 3.75 0 0 0 5.5 17h9a3.75 3.75 0 0 0 3.75-3.75v-.334a.75.75 0 0 0-.75-.75h-.917Zm.129 1.5H3.288A2.25 2.25 0 0 0 5.5 15.5h9c1.1 0 2.016-.79 2.212-1.834ZM8.75 5.75a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1h-2.5Z"/>
</svg>
