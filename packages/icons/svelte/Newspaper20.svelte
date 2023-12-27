<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M5.5 2.5a.75.75 0 0 1 .75-.75H17.5a.75.75 0 0 1 .75.75v11a4.75 4.75 0 0 1-4.75 4.75H4.375a2.625 2.625 0 0 1-2.625-2.625v-5a.75.75 0 0 1 .75-.75h3V2.5ZM3.25 15.625a1.125 1.125 0 0 0 2.25 0v-4.25H3.25v4.25Zm3.75 0a2.6 2.6 0 0 1-.253 1.125H13.5a3.25 3.25 0 0 0 3.25-3.25V3.25H7v12.375Zm.938-10.938a.5.5 0 0 1 .5-.5h6.874a.5.5 0 0 1 .5.5v3.125a.5.5 0 0 1-.5.5H8.439a.5.5 0 0 1-.5-.5V4.688Zm1 .5v2.125h5.874V5.188H8.939Zm-1 5.125a.5.5 0 0 1 .5-.5H15a.5.5 0 0 1 0 1H8.437a.5.5 0 0 1-.5-.5Zm.5 1.688a.5.5 0 0 0 0 1H15a.5.5 0 0 0 0-1H8.437Zm3.437 3.188H8.437a.5.5 0 0 1 0-1h3.438a.5.5 0 0 1 0 1Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="20" height="20" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
