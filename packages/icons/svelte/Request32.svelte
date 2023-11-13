<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M11 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-3v2.038c6.712.51 12 6.119 12 12.962v3.333a1 1 0 0 1-1 1H17V27h11a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h11v-2.667H4a1 1 0 0 1-1-1V20C3 13.157 8.288 7.549 15 7.038V5h-3a1 1 0 0 1-1-1Zm16 18.333H5V21h22v1.333ZM5.045 19C5.55 13.393 10.262 9 16 9s10.45 4.393 10.955 10H5.045ZM16 11.5a8.5 8.5 0 0 0-6.877 3.504.5.5 0 1 0 .81.588A7.5 7.5 0 0 1 16 12.5a.5.5 0 0 0 0-1Z"/>
</svg>
