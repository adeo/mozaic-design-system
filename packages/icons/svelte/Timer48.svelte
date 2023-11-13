<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path fill-rule="evenodd" d="M9.707 4.293a1 1 0 0 1 0 1.414L8.414 7l2.523 2.522A19.428 19.428 0 0 1 24 4.5c5.025 0 9.606 1.9 13.063 5.022L38.586 8l-.293-.293a1 1 0 0 1 1.414-1.414l1 1 1 1a1 1 0 0 1-1.414 1.414L40 9.414l-1.522 1.523A19.428 19.428 0 0 1 43.5 24c0 10.77-8.73 19.5-19.5 19.5S4.5 34.77 4.5 24c0-5.025 1.9-9.606 5.022-13.063L7 8.414 5.707 9.707a1 1 0 0 1-1.414-1.414l2-2 2-2a1 1 0 0 1 1.414 0ZM24 7.5C14.887 7.5 7.5 14.887 7.5 24S14.887 40.5 24 40.5 40.5 33.113 40.5 24 33.113 7.5 24 7.5ZM27 23a3 3 0 1 1-1.707-2.708l5-5a1 1 0 0 1 1.414 1.415l-5 5c.188.391.293.83.293 1.293Z"/>
</svg>
