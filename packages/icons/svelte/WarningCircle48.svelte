<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path fill-rule="evenodd" d="M24 7.5C14.887 7.5 7.5 14.887 7.5 24S14.887 40.5 24 40.5 40.5 33.113 40.5 24 33.113 7.5 24 7.5ZM4.5 24C4.5 13.23 13.23 4.5 24 4.5S43.5 13.23 43.5 24 34.77 43.5 24 43.5 4.5 34.77 4.5 24ZM24 14.5a1.5 1.5 0 0 1 1.5 1.5v10a1.5 1.5 0 0 1-3 0V16a1.5 1.5 0 0 1 1.5-1.5ZM24 34a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
</svg>
