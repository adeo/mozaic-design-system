<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M11.517 3.466a.861.861 0 0 1 1.404.982l-1.485 2.673a.75.75 0 0 0 .647 1.129h2.943a1.25 1.25 0 0 1 1.222 1.512l-.729 3.401-.076.308c-.068.273-.12.487-.178.676-.075.249-.138.38-.199.466-.09.128-.262.28-.994.47H9.288l-1.871-.623V8.195l4.1-4.73ZM6.685 6.75l3.698-4.267a2.361 2.361 0 0 1 3.849 2.694l-.874 1.573h1.668a2.75 2.75 0 0 1 2.689 3.326l-.732 3.415-.003.015-.003.01-.07.281c-.07.287-.137.555-.206.784-.094.31-.213.622-.413.902-.427.6-1.079.863-1.94 1.078a.748.748 0 0 1-.181.022h-5a.75.75 0 0 1-.237-.038l-1.54-.513a.75.75 0 0 1-.723.551H3.75a.75.75 0 0 1-.742-.638L1.758 7.61a.75.75 0 0 1 .742-.86h4.185Zm-.768 1.5v6.833H4.396L3.37 8.25h2.546Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="20" height="20" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
