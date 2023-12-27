<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M11.333 3a1 1 0 0 0-1 1v8.333H6.667a1 1 0 0 0-1 1v8.334H4a1 1 0 0 0-1 1V28a1 1 0 0 0 1 1h2.667a1 1 0 0 0 1-1v-.333h6V28a1 1 0 0 0 1 1h2.666a1 1 0 0 0 1-1v-.333h6V28a1 1 0 0 0 1 1H28a1 1 0 0 0 1-1v-5.333a1 1 0 0 0-1-1h-1.667v-8.334a1 1 0 0 0-1-1h-3.666V4a1 1 0 0 0-1-1h-9.334Zm13 18.667H17v-7.334h1.833v2.834H22.5v-2.834h1.833v7.334ZM21.5 14.333v1.834h-1.667v-1.834H21.5Zm-6.5 0v7.334H7.667v-7.334H9.5v2.834h3.667v-2.834H15Zm-4.5 1.834v-1.834h1.667v1.834H10.5Zm9.167-3.834V5h-1.834v2.833h-3.666V5h-1.834v7.333h7.334ZM15.167 5h1.666v1.833h-1.666V5ZM5 23.667v2h22v-2H5Z"/>
</svg>
