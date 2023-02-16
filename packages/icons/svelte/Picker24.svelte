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
    <path fill-rule="evenodd" d="M21.207 2.793a3.121 3.121 0 0 0-4.414 0L10.5 9.086l-.793-.794a1 1 0 1 0-1.414 1.415l.793.793-5.793 5.793L4 17l-.707-.707a3.12 3.12 0 0 0-.75 3.209l-.466 1.112a1 1 0 0 0 1.31 1.308l1.11-.465a3.12 3.12 0 0 0 3.21-.75l5.793-5.793.793.793a1 1 0 0 0 1.414-1.415l-.793-.792 6.293-6.293a3.121 3.121 0 0 0 0-4.414ZM10.5 11.914l-5.793 5.793a1.122 1.122 0 0 0-.197 1.321 1 1 0 0 1 .11.35c.122.016.241.053.351.112.425.227.965.16 1.322-.197l.696.696-.696-.696.646-.646-.543-.543a.5.5 0 1 1 .707-.707l.543.543.793-.793-.543-.543a.5.5 0 1 1 .707-.707l.543.542.793-.792-.543-.543a.5.5 0 1 1 .707-.707l.543.543 1.44-1.44-.793-.793-.793-.793Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="24" height="24" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
