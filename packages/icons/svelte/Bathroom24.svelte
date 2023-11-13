<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V13h1a1 1 0 0 1 1 1v2.5a3.5 3.5 0 0 1-3.299 3.494l1.153 1.152a.5.5 0 0 1-.708.708L17.293 20H6.707l-1.853 1.854a.5.5 0 0 1-.708-.708L5.3 19.994A3.5 3.5 0 0 1 2 16.5V14a1 1 0 0 1 1-1h16V3h-4v2.5c0 .017 0 .033-.002.05A2.5 2.5 0 0 1 17 8a.5.5 0 0 1-.5.5h-4A.5.5 0 0 1 12 8a2.5 2.5 0 0 1 2.002-2.45A.507.507 0 0 1 14 5.5v-3Zm-10 14A1.5 1.5 0 0 0 5.5 18h13a1.5 1.5 0 0 0 1.5-1.5V15H4v1.5Zm10.5-10a1.5 1.5 0 0 1 1.415 1h-2.83a1.5 1.5 0 0 1 1.415-1Z"/>
</svg>
