<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M6.082 5.856a1 1 0 0 1 .9-.138l5.7 1.9 6.364-1.91a1 1 0 0 1 .604.01l6 2a1 1 0 0 1 .683.949v16.666a1 1 0 0 1-1.316.95l-5.7-1.9-6.363 1.908a1 1 0 0 1-.604-.009l-6-2a1 1 0 0 1-.683-.949V6.667a1 1 0 0 1 .415-.811ZM18.833 7.86l-5.666 1.7v14.578l5.666-1.7V7.861Zm1 .027v14.558l4.5 1.5V9.388l-4.5-1.5Zm-12.166.166 4.5 1.5v14.559l-4.5-1.5V8.054Z"/>
</svg>
