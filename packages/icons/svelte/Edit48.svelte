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
    <path fill-rule="evenodd" d="M38.06 4.94a1.5 1.5 0 0 0-2.12 0l-20 20a1.5 1.5 0 0 0-.345.533l-3 8a1.5 1.5 0 0 0 1.932 1.931l8-3a1.5 1.5 0 0 0 .534-.343l20-20a1.5 1.5 0 0 0 0-2.122l-5-5ZM17.78 28.193l-1.217 3.243 3.243-1.216-2.027-2.027Zm3.866 1.038 14.086-14.086-2.878-2.878-14.086 14.086 2.878 2.878Zm15.5-15.5-2.878-2.878L37 8.12 39.879 11l-2.733 2.732ZM6 12.5A1.5 1.5 0 0 0 4.5 14v28A1.5 1.5 0 0 0 6 43.5h28a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-3 0v6.5h-25v-25H14a1.5 1.5 0 0 0 0-3H6Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="48" height="48" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
