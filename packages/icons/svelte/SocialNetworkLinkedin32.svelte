<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g clip-path="url(#a)"><path d="M27.333 2.667H4.666a2 2 0 00-2 2v22.666a2 2 0 002 2h22.667a2 2 0 002-2V4.667a2 2 0 00-2-2zM10.666 25.332h-4V12.667h4v12.666zM8.666 11a2.333 2.333 0 112.4-2.334A2.373 2.373 0 018.666 11zm16.667 14.333h-4v-6.986c0-1.894-.8-2.574-1.84-2.574a2.32 2.32 0 00-2.16 2.48 18.39 18.39 0 000 .854v6.226h-4V12.667h3.866V14.4a4.148 4.148 0 013.6-1.867c2.067 0 4.48 1.147 4.48 4.88l.054 7.92z"/></g><defs><clipPath id="a"><path d="M0 0h32v32H0z"/></clipPath></defs></svg>