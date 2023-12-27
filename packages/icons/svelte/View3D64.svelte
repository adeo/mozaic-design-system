<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill-rule="evenodd" d="M32.735 6.693a1.5 1.5 0 0 0-1.47 0l-21.334 12A1.5 1.5 0 0 0 9.167 20v24a1.5 1.5 0 0 0 .764 1.307l21.334 12a1.5 1.5 0 0 0 1.47 0l21.334-12A1.5 1.5 0 0 0 54.833 44V20a1.5 1.5 0 0 0-.764-1.307l-21.334-12ZM12.167 21.99v21.132L31 53.717V32.585L12.167 21.99ZM33 53.717l18.833-10.594V21.99L33 32.585v21.132Zm17.784-33.43L32 9.72 13.216 20.287 32 30.853l18.784-10.566Z"/>
</svg>
