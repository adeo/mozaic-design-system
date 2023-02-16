<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm2 3.5V13h12V8.5H6Zm0-1h12V6H6v1.5ZM7 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 7 10Zm4 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm2.937-.5a2 2 0 0 0-3.874 0H5.937a2 2 0 1 0 0 1h4.126a2 2 0 0 0 3.874 0h4.126a2 2 0 1 0 0-1h-4.126ZM19 20a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/>
</svg>
