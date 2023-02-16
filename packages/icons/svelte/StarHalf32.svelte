<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M16.908 2.914a1 1 0 0 0-1.816 0l-3.772 8.173-8.795 1.257a1 1 0 0 0-.492 1.764l6.825 5.583-2.486 8.701a1 1 0 0 0 1.485 1.127L16 24.508l8.143 5.01a1 1 0 0 0 1.485-1.126l-2.486-8.701 6.825-5.583a1 1 0 0 0-.492-1.764l-8.795-1.257-3.772-8.173ZM16 5.72v16.44l.524.322 6.474 3.984-1.96-6.858-.18-.632.509-.416 5.57-4.56-7.078-1.01-.539-.078-.228-.494L16 5.72Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
