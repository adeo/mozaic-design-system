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
    <path fill-rule="evenodd" d="M3 6.667a1 1 0 0 1 1-1h2.667a1 1 0 0 1 .961.725l.936 3.274h18.103a1 1 0 0 1 .928 1.372l-4 10a1 1 0 0 1-.928.628h-12a1 1 0 0 1-.962-.725l-2.857-10-.936-3.275H4a1 1 0 0 1-1-1Zm6.135 5 2.286 8H21.99l3.2-8H9.135Zm3.532 14a.667.667 0 1 0 0 1.333.667.667 0 0 0 0-1.334ZM10 26.332a2.667 2.667 0 1 1 5.333 0 2.667 2.667 0 0 1-5.333 0Zm10.333 0a.667.667 0 1 1 1.334 0 .667.667 0 0 1-1.334 0ZM21 23.667A2.667 2.667 0 1 0 21 29a2.667 2.667 0 0 0 0-5.334Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
