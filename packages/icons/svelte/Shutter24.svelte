<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1h-1V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.5H3a1 1 0 0 1-1-1V3Zm4 4.5h12V9H6V7.5ZM6 10v1.5h12V10H6Zm0 4v-1.5h12V14H6Zm0 1v1.5h12V15H6Zm5.5 2.5H6V20h5.5v-2.5Zm1 2.5v-2.5H18V20h-5.5ZM20 5.5H4V4h16v1.5Z"/>
</svg>
