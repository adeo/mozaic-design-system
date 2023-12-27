<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M3 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Zm1 13.5V4h16v11.5h-2.691l-2.862-5.724a.5.5 0 0 0-.894 0L12.5 11.882l-2.053-4.106a.5.5 0 0 0-.894 0L5.69 15.5H4Zm13.01 1H4V20h16v-3.5h-2.99ZM14 11.118l2.191 4.382H6.809L10 9.118l2.053 4.106a.5.5 0 0 0 .894 0L14 11.118ZM14 6.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"/>
</svg>
