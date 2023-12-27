<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M12.614 1.553a.75.75 0 0 0-1.061 1.06l.803.804h-8.19a.75.75 0 0 0-.75.75v8.189l-.802-.803a.75.75 0 1 0-1.061 1.06l2.083 2.084a.75.75 0 0 0 1.06 0l2.084-2.083a.75.75 0 0 0-1.06-1.061l-.803.803v-7.44h7.439l-.803.804a.75.75 0 1 0 1.06 1.06l2.084-2.083a.75.75 0 0 0 0-1.06l-2.083-2.084Zm3.97 5.947a.75.75 0 0 0-1.5 0v.833a.75.75 0 1 0 1.5 0V7.5Zm0 3.333a.75.75 0 1 0-1.5 0v.834a.75.75 0 1 0 1.5 0v-.834Zm0 3.334a.75.75 0 0 0-1.5 0v.916h-.917a.75.75 0 1 0 0 1.5h1.666a.75.75 0 0 0 .75-.75v-1.666Zm-9.084.916a.75.75 0 1 0 0 1.5h.833a.75.75 0 0 0 0-1.5H7.5Zm3.333 0a.75.75 0 1 0 0 1.5h.834a.75.75 0 0 0 0-1.5h-.834Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="20" height="20" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
