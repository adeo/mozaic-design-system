<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M1.8 9.833a1 1 0 0 1 .367-1.366l9.237-5.333a1 1 0 0 1 1.366.366l1.251 2.167h7.312a1 1 0 0 1 1 1v.7l6.071 3.505a1 1 0 0 1 .366 1.366l-5.477 9.488.144.25a1 1 0 0 1-.366 1.365l-9.238 5.334a1 1 0 0 1-1.366-.366L1.801 9.833ZM20.334 16.6l-5.157-8.933h5.157V16.6Zm-16.3-6.9L13.7 26.443l7.506-4.334-9.667-16.743L4.033 9.7Zm18.3-.023v9.71l4.205-7.283-4.205-2.427ZM14.5 20a.833.833 0 1 1 1.667 0 .833.833 0 0 1-1.667 0Zm.833-1.833a1.833 1.833 0 1 0 0 3.666 1.833 1.833 0 0 0 0-3.666Z"/>
</svg>
