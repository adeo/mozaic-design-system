<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M14 5a1 1 0 0 0-1.555-.832L6.697 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.697l5.748 3.832A1 1 0 0 0 14 19V5ZM8 9.535l4-2.666V17.13l-4-2.666v-4.93ZM6 10H4v4h2v-4Zm9.97-1.848a1 1 0 0 1 1.378.318c.706 1.13 1.09 2.311 1.09 3.53 0 1.219-.384 2.4-1.09 3.53a1 1 0 0 1-1.696-1.06c.544-.87.786-1.689.786-2.47 0-.781-.242-1.6-.786-2.47a1 1 0 0 1 .318-1.378Zm3.844-2.233a1 1 0 1 0-1.628 1.162c2.252 3.152 2.252 6.686 0 9.838a1 1 0 1 0 1.628 1.162c2.748-3.848 2.748-8.315 0-12.162Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="24" height="24" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
