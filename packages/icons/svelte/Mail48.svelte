<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "3rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <path fill-rule="evenodd" d="M10.5 10A1.5 1.5 0 0 1 12 8.5h24a1.5 1.5 0 0 1 1.5 1.5v4.5H42a1.5 1.5 0 0 1 1.5 1.5v22a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 38V16A1.5 1.5 0 0 1 6 14.5h4.5V10Zm-3 8.675V36.5h29.169l-13.451-8.22-12-7.333L7.5 18.675Zm33 16.65L26.877 27l9.905-6.053 3.718-2.272v16.65Zm-6-16.5V11.5h-21v7.325l3.5 2.14A1 1 0 0 1 18 20h12a1 1 0 0 1 1 .965l3.5-2.14ZM29.305 22h-10.61L24 25.242 29.305 22ZM17 16a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H18a1 1 0 0 1-1-1Z"/>
</svg>
