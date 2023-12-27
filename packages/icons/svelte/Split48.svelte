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
    <path fill-rule="evenodd" d="M10 8.5A1.5 1.5 0 0 0 8.5 10v8a1.5 1.5 0 0 0 3 0v-4.379l11 11V38a1.5 1.5 0 0 0 3 0V24a1.5 1.5 0 0 0-.44-1.06L13.622 11.5H18a1.5 1.5 0 0 0 0-3h-8Zm26.5 5.121V18a1.5 1.5 0 0 0 3 0v-8A1.5 1.5 0 0 0 38 8.5h-8a1.5 1.5 0 0 0 0 3h4.379l-6.44 6.44a1.5 1.5 0 0 0 2.122 2.12l6.439-6.439Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="48" height="48" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
