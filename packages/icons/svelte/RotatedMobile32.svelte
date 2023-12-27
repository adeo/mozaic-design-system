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
    <path fill-rule="evenodd" d="M18.667 5.5a.5.5 0 1 0 0 1c1.579 0 2.73.393 3.576.958.85.566 1.423 1.325 1.81 2.099a7.692 7.692 0 0 1 .7 2.26l-1.863-.93a.5.5 0 1 0-.447.893l2.667 1.334a.5.5 0 0 0 .577-.094l2-2a.5.5 0 0 0-.707-.707l-1.254 1.254-.004-.024a8.693 8.693 0 0 0-.775-2.433c-.446-.893-1.123-1.8-2.149-2.484C21.77 5.94 20.421 5.5 18.667 5.5ZM4 5.667a1 1 0 0 0-1 1V28a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V17.333a1 1 0 0 0-1-1H15.667V6.667a1 1 0 0 0-1-1H4Zm11.667 12.666V27H27v-8.667H15.667ZM5 27v-3.833h8.667V27H5Zm0-4.833v-14.5h8.667v14.5H5Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
