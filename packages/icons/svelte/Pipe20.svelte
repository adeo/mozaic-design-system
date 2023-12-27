<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M5.833 1.75a.75.75 0 0 1 .75.75v.083h4.667a3.667 3.667 0 0 1 3.667 3.667v7.167H15a.75.75 0 0 1 0 1.5h-.083V17.5a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75v-2.583h-.083a.75.75 0 0 1 0-1.5h.083V8.25H6.583v.083a.75.75 0 1 1-1.5 0V8.25H2.5a.75.75 0 0 1-.75-.75V3.333a.75.75 0 0 1 .75-.75h2.583V2.5a.75.75 0 0 1 .75-.75Zm4.917 13.167v1.833h2.667v-1.833H10.75Zm2.667-1.5H10.75V7.5a.75.75 0 0 0-.75-.75H6.583V4.083h4.667c1.197 0 2.167.97 2.167 2.167v7.167ZM3.25 4.083h1.833V6.75H3.25V4.083Z"/>
</svg>
