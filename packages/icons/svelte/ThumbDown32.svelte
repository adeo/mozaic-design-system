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
    <path fill-rule="evenodd" d="M13.094 26.589a1.578 1.578 0 0 1-2.572-1.8l2.377-4.28a1 1 0 0 0-.863-1.506H5.844a1 1 0 0 1-.978-1.21l1.478-6.897.121-.487v-.003c.11-.44.196-.789.289-1.096.123-.406.23-.641.347-.804.19-.266.526-.526 1.727-.836h7.713l3.162 1.054v10.24l-6.609 7.625Zm7.493-5.593-5.981 6.902a3.579 3.579 0 0 1-5.833-4.08l1.564-2.815H5.844a3 3 0 0 1-2.934-3.629l1.482-6.914a.94.94 0 0 1 .008-.035l.113-.454c.113-.458.217-.88.327-1.24.147-.488.331-.963.632-1.385C6.11 6.449 7.09 6.042 8.46 5.7a1 1 0 0 1 .242-.03h8a1 1 0 0 1 .316.051l2.685.895a1 1 0 0 1 .999-.946h4.667a1 1 0 0 1 .989.851l2 13.334a1 1 0 0 1-.99 1.148h-6.666a.882.882 0 0 1-.116-.007Zm1.116-1.993V7.669h2.805l1.7 11.334h-4.505Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
