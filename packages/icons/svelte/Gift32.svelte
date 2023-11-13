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
    <path fill-rule="evenodd" d="M12.667 5a2.333 2.333 0 1 0 0 4.667H15V7.333A2.333 2.333 0 0 0 12.667 5ZM16 4.564a4.333 4.333 0 0 0-6.985 5.102H5.332a1 1 0 0 0-1 1V28a1 1 0 0 0 1 1h21.334a1 1 0 0 0 1-1V10.667a1 1 0 0 0-1-1h-3.682A4.333 4.333 0 0 0 16 4.565Zm3.333 5.103A2.333 2.333 0 1 0 17 7.333v2.334h2.333Zm-13 10.666V27H15v-6.667H6.333Zm0-2H15v-6.666H6.333v6.666Zm10.667 2V27h8.667v-6.667H17Zm8.667-2H17v-6.666h8.667v6.666Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
