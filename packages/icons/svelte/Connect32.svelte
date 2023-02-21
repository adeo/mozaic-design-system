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
    <path fill-rule="evenodd" d="M16 3a1 1 0 0 1 1 1v10.667a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Zm-4.501 4.445a1 1 0 0 1-.278 1.387c-1.89 1.26-4.888 3.998-4.888 8.501C6.333 21.885 9.984 27 16 27s9.667-5.115 9.667-9.667c0-4.503-2.997-7.24-4.888-8.5a1 1 0 1 1 1.109-1.665c2.109 1.406 5.779 4.669 5.779 10.165C27.667 22.782 23.317 29 16 29 8.682 29 4.333 22.782 4.333 17.333c0-5.496 3.67-8.76 5.779-10.165a1 1 0 0 1 1.387.277Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="32" height="32" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
