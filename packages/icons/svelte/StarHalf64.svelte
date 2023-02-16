<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "4rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill-rule="evenodd" d="M33.362 6.038a1.5 1.5 0 0 0-2.724 0L22.98 22.63 5.121 25.182a1.5 1.5 0 0 0-.738 2.645l13.904 11.376-5.063 17.718a1.5 1.5 0 0 0 2.229 1.69L32 48.428 48.547 58.61a1.5 1.5 0 0 0 2.229-1.69l-5.063-17.718 13.904-11.376a1.5 1.5 0 0 0-.738-2.645L41.02 22.63 33.362 6.038ZM32 10.246v34.66l.786.483 14.044 8.642-4.272-14.952-.271-.949.763-.624 12.023-9.838-15.285-2.183-.808-.116-.342-.74L32 10.245Z"/>
</svg>
