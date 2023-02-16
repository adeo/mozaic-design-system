<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill-rule="evenodd" d="M6.5 8A1.5 1.5 0 0 1 8 6.5h48A1.5 1.5 0 0 1 57.5 8v48a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 56V8Zm3 1.5v10.333h45V9.5h-45Zm0 45V22.833h45V54.5h-45Zm6.833-21.167a1 1 0 0 1 1-1h29.334a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H17.333a1 1 0 0 1-1-1v-16Zm2 1v14h27.334v-14H18.333ZM28 13.667a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8ZM17.333 27a1 1 0 1 0 0 2h29.334a1 1 0 1 0 0-2H17.333ZM48 14.667a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0ZM41.333 16a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM24 14.667a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0ZM17.333 16a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667Z"/>
</svg>
