<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M15.293 3.293a1 1 0 0 1 1.414 0L24.414 11H28a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1h3.586l7.707-7.707ZM16 5.414l-7.293 7.293A1 1 0 0 1 8 13H5v14h5.833v-6.333a.5.5 0 0 1 .5-.5h9.334a.5.5 0 0 1 .5.5V27H27V13h-3a1 1 0 0 1-.707-.293L16 5.414Zm-.5 15.753h-3.667V27H15.5v-5.833Zm1 5.833v-5.833h3.667V27H16.5Zm-.146-16.687a.5.5 0 0 0-.708 0l-5.333 5.333a.5.5 0 0 0 .354.854h10.666a.5.5 0 0 0 .354-.854l-5.333-5.333Z"/>
</svg>
