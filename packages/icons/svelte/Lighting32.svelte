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
    <path fill-rule="evenodd" d="M12 3a1 1 0 0 0-.936.649l-4 10.666A1 1 0 0 0 8 15.668h7V27h-3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3V15.667h4.5v2.569a1.834 1.834 0 1 0 1 0v-2.57H24a1 1 0 0 0 .936-1.35l-4-10.667A1 1 0 0 0 20 3h-8Zm10 16.167a.833.833 0 1 0 0 1.666.833.833 0 0 0 0-1.666Zm.557-5.5H9.443L12.693 5h6.614l3.25 8.667Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
