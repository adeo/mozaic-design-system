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
    <path fill-rule="evenodd" d="M18.275 5.414a1.578 1.578 0 0 1 2.573 1.8l-2.378 4.28A1 1 0 0 0 19.333 13h6.193a1 1 0 0 1 .978 1.21l-1.478 6.896-.12.485-.002.003v.002c-.109.44-.195.79-.288 1.096-.123.407-.231.642-.347.805-.19.266-.526.525-1.727.836h-7.713l-3.162-1.054V13.04l6.608-7.625Zm-7.493 5.592 5.982-6.902a3.578 3.578 0 0 1 5.832 4.082L21.033 11h4.493a3 3 0 0 1 2.933 3.629l-1.481 6.914-.003.014-.005.02c-.04.155-.077.307-.113.455-.113.457-.218.88-.327 1.24-.148.488-.332.963-.632 1.385-.638.896-1.62 1.304-2.989 1.646a1 1 0 0 1-.242.03h-8a.996.996 0 0 1-.316-.051l-2.686-.895a1 1 0 0 1-.998.946H6a1 1 0 0 1-.989-.851l-2-13.334A1 1 0 0 1 4 11h6.667c.039 0 .077.002.115.006ZM9.667 13v11.334H6.86L5.161 13h4.506Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
