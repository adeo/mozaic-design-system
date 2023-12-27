<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11.293 2.293a1 1 0 0 1 1.414 0L18.414 8H21a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2.586l5.707-5.707ZM12 4.414 6.707 9.707A1 1 0 0 1 6 10H4v10h4v-4.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V20h4V10h-2a1 1 0 0 1-.707-.293L12 4.414ZM11.5 16H9v4h2.5v-4Zm1 4v-4H15v4h-2.5Zm-.146-12.354a.5.5 0 0 0-.708 0l-4 4A.5.5 0 0 0 8 12.5h8a.5.5 0 0 0 .354-.854l-4-4Z"/>
</svg>
