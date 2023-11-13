<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path fill-rule="evenodd" d="M7.5 24c0-9.113 7.387-16.5 16.5-16.5S40.5 14.887 40.5 24 33.113 40.5 24 40.5 7.5 33.113 7.5 24ZM24 4.5C13.23 4.5 4.5 13.23 4.5 24S13.23 43.5 24 43.5 43.5 34.77 43.5 24 34.77 4.5 24 4.5Zm-3.714 10.223A1.5 1.5 0 0 0 18 16v16a1.5 1.5 0 0 0 2.286 1.278l13-8a1.5 1.5 0 0 0 0-2.555l-13-8ZM29.638 24 21 29.316V18.684L29.638 24Z"/>
</svg>
