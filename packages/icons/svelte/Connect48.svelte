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
    <path fill-rule="evenodd" d="M24 4.5A1.5 1.5 0 0 1 25.5 6v16a1.5 1.5 0 0 1-3 0V6A1.5 1.5 0 0 1 24 4.5Zm-6.752 6.668a1.5 1.5 0 0 1-.416 2.08C13.995 15.14 9.5 19.245 9.5 26c0 6.828 5.476 14.5 14.5 14.5 9.024 0 14.5-7.672 14.5-14.5 0-6.755-4.495-10.86-7.332-12.752a1.5 1.5 0 0 1 1.664-2.496C35.995 12.86 41.5 17.755 41.5 26c0 8.172-6.524 17.5-17.5 17.5-10.976 0-17.5-9.328-17.5-17.5 0-8.245 5.505-13.14 8.668-15.248a1.5 1.5 0 0 1 2.08.416Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="48" height="48" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
