<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M10 8.5a1.5 1.5 0 0 1 1.5 1.5v2.707a5.502 5.502 0 0 1 0 10.586V38a1.5 1.5 0 0 1-3 0V23.293a5.502 5.502 0 0 1 0-10.586V10A1.5 1.5 0 0 1 10 8.5Zm0 7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm28-7a1.5 1.5 0 0 1 1.5 1.5v2.707a5.502 5.502 0 0 1 0 10.586V38a1.5 1.5 0 0 1-3 0V23.293a5.502 5.502 0 0 1 0-10.586V10A1.5 1.5 0 0 1 38 8.5Zm0 7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM25.5 10a1.5 1.5 0 0 0-3 0v14.707a5.502 5.502 0 0 0 0 10.586V38a1.5 1.5 0 0 0 3 0v-2.707a5.502 5.502 0 0 0 0-10.586V10Zm-4 20a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="48" height="48" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
