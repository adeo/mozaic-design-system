<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M4 3a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Zm1 17.833V5h22v15.833h-4.024l-3.862-7.723a.5.5 0 0 0-.895 0l-1.552 3.105-2.887-5.772a.5.5 0 0 0-.894 0l-5.195 10.39H5Zm17.677 1H5V27h22v-5.167h-4.323Zm-4.01-7.382 3.19 6.382H8.81l4.524-9.048 2.886 5.772a.5.5 0 0 0 .895 0l1.553-3.106ZM18.5 8.667a.833.833 0 1 1 1.667 0 .833.833 0 0 1-1.667 0Zm.833-1.834a1.833 1.833 0 1 0 0 3.667 1.833 1.833 0 0 0 0-3.667Z"/>
</svg>
