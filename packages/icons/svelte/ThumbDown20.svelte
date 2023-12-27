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
    <path fill-rule="evenodd" d="M8.09 16.536a.862.862 0 0 1-1.405-.983L8.17 12.88a.75.75 0 0 0-.648-1.129H4.58a1.25 1.25 0 0 1-1.222-1.511l.729-3.402.076-.306v-.001c.068-.273.12-.487.178-.676.075-.249.138-.38.199-.467.09-.127.262-.279.993-.47h4.785l1.871.624v6.263l-4.1 4.731Zm4.83-3.285-3.697 4.267a2.362 2.362 0 0 1-3.849-2.693l.874-1.573H4.58a2.75 2.75 0 0 1-2.69-3.327l.732-3.414a.833.833 0 0 1 .006-.026l.07-.28c.07-.288.137-.556.206-.785.094-.31.214-.621.413-.901.426-.6 1.079-.863 1.94-1.078a.75.75 0 0 1 .181-.022h5c.08 0 .16.013.237.038l1.54.513a.75.75 0 0 1 .723-.552h2.917a.75.75 0 0 1 .742.64l1.25 8.332a.75.75 0 0 1-.742.862H12.92Zm.77-1.5V4.919h1.52l1.025 6.834H13.69Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="20" height="20" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
