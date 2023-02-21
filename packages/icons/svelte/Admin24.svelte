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
    <path fill-rule="evenodd" d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm.906 3.577a1 1 0 0 0-1.812 0L9.558 8.87l-3.254.65a1 1 0 0 0-.437 1.755l2.296 1.879-.648 3.673a1 1 0 0 0 1.566.988L12 15.729l2.919 2.085a1 1 0 0 0 1.566-.988l-.649-3.673 2.297-1.879a1 1 0 0 0-.437-1.755l-3.254-.65-1.536-3.292Zm-1.75 4.596L12 8.365l.844 1.808.214.458.496.1 1.675.335-1.112.91-.454.371.102.577.325 1.84-1.509-1.078-.581-.415-.581.415-1.509 1.078.325-1.84.101-.577-.453-.371-1.112-.91 1.675-.335.496-.1.214-.458Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="24" height="24" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
