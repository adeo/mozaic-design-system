<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M17 2c-2.282 0-3.798.869-4.735 1.884-.447.484-.75.989-.946 1.42A2.988 2.988 0 0 0 10 5H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h7a1 1 0 0 1 1 1 1 1 0 1 0 2 0 1 1 0 0 1 1-1h7a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-3V3a1 1 0 0 0-1-1Zm-1 4V4.08c-1.118.188-1.822.68-2.265 1.16a3.378 3.378 0 0 0-.602.908c-.085.19-.115.312-.127.356l-.005.02L13 6.506v8.849c.739-.605 1.722-1.112 3-1.289V6Zm2 1h2v10h-5.847c.609-.54 1.509-1 2.847-1a1 1 0 0 0 1-1V7Zm-7 10.17V8a1 1 0 0 0-1-1H4v10h6c.35 0 .687.06 1 .17ZM5.5 9.5A.5.5 0 0 1 6 9h3a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5Zm.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H6Zm-.5 3A.5.5 0 0 1 6 14h3a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="24" height="24" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
