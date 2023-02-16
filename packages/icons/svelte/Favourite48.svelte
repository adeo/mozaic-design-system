<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path fill-rule="evenodd" d="M8.682 11.196c3.987-3.987 10.532-3.707 14.164.606l1.153 1.37 1.153-1.37c3.632-4.313 10.177-4.593 14.164-.606a9.622 9.622 0 0 1 0 13.608L25.06 39.061a1.5 1.5 0 0 1-2.122 0L8.682 24.804a9.622 9.622 0 0 1 0-13.608Zm11.869 2.539a6.622 6.622 0 1 0-9.748 8.948l13.196 13.196 13.196-13.196a6.622 6.622 0 1 0-9.748-8.948l-2.3 2.732-1.148 1.362-1.147-1.363-2.301-2.731Z"/>
</svg>
