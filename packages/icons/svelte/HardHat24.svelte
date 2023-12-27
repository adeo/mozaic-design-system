<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M9 4a1 1 0 0 0-1 1v1.07A7.997 7.997 0 0 0 4 13v1.23a2.668 2.668 0 0 0-2 2.58c0 1.133.74 2.203 1.942 2.46 1.446.31 4.132.73 8.058.73s6.612-.42 8.058-.73C21.26 19.013 22 17.943 22 16.81a2.668 2.668 0 0 0-2-2.58V13a7.997 7.997 0 0 0-4-6.93V5a1 1 0 0 0-1-1H9Zm1 2.651V11a1 1 0 1 1-2 0V8.528A5.985 5.985 0 0 0 6 13v3.244l-1.076-.082-.198-.016A.672.672 0 0 0 4 16.81c0 .288.173.465.36.505 1.313.28 3.859.685 7.64.685 3.782 0 6.328-.405 7.64-.686.187-.04.36-.216.36-.505a.672.672 0 0 0-.726-.663l-.198.015-1.076.082V13a5.985 5.985 0 0 0-2-4.472V11a1 1 0 1 1-2 0V6h-4v.651Zm-1.958 8.81a.5.5 0 1 0-.084.996c1.153.098 2.5.163 4.042.163 1.542 0 2.89-.065 4.042-.163a.5.5 0 1 0-.084-.997c-1.125.096-2.444.16-3.958.16-1.514 0-2.833-.064-3.958-.16Z"/>
</svg>
