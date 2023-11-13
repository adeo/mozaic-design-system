<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M10.667 4.333a1 1 0 0 0-1 1v4.334H8a5 5 0 0 0-5 5v12a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-12a5 5 0 0 0-5-5h-1.667V5.333a1 1 0 0 0-1-1H10.667ZM5 14.667a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3V17.5h-5.167V16a.5.5 0 1 0-1 0v1.5h-9.666V16a.5.5 0 0 0-1 0v1.5H5v-2.833ZM5 18.5v7.167h22V18.5h-5.167V20a.5.5 0 1 1-1 0v-1.5h-9.666V20a.5.5 0 1 1-1 0v-1.5H5Zm15.333-8.833h-8.666V6.333h8.666v3.334Z"/>
</svg>
