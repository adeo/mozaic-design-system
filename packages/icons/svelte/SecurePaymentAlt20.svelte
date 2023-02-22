<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M5.917 5.833a4.083 4.083 0 0 1 8.166 0v1.75h1.75a.75.75 0 0 1 .75.75V17.5a.75.75 0 0 1-.75.75H4.167a.75.75 0 0 1-.75-.75V8.333a.75.75 0 0 1 .75-.75h1.75v-1.75Zm6.666 0v1.75H7.417v-1.75a2.583 2.583 0 0 1 5.166 0Zm-7.666 3.25v7.667h10.166V9.083H4.917Zm7.905 2.906a.75.75 0 0 0-1.06-1.061l-2.421 2.42-1.139-.996a.75.75 0 0 0-.987 1.13l1.666 1.457a.75.75 0 0 0 1.024-.034l2.917-2.916Z"/>
</svg>
