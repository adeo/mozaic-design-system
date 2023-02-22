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
    <path fill-rule="evenodd" d="M13.333 5a3 3 0 0 0-3 3v8a.999.999 0 0 1-.422.816 5.667 5.667 0 1 0 6.844 0 .999.999 0 0 1-.422-.816V8a3 3 0 0 0-3-3ZM21 21.333a7.651 7.651 0 0 0-2.667-5.812V8a5 5 0 0 0-10 0v7.521A7.667 7.667 0 1 0 21 21.333ZM22 5.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 0-1h-4Zm-.5 5.167a.5.5 0 0 1 .5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 4.166a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1h-4Zm-8.667 9.834a3.333 3.333 0 0 0 1-6.514v-7.486h-2v7.486a3.335 3.335 0 0 0 1 6.514Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
