<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M4 3a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Zm1 5.167V5h5.833v3.167H5Zm0 1V13.5h5.833V9.167H5ZM5 14.5v4.333h5.833V14.5H5Zm0 5.333V27h5.833v-7.167H5ZM11.833 27h8.334v-7.167h-8.334V27Zm9.334 0H27v-7.167h-5.833V27ZM27 18.833V14.5h-5.833v4.333H27Zm0-5.333V9.167h-5.833V13.5H27Zm0-5.333V5h-5.833v3.167H27ZM20.167 5h-8.334v13.833h8.334V5ZM13.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v5.333a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V10Zm1 .5v3h3v-3h-3Z"/>
</svg>
