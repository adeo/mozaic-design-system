<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.5rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" d="M9.014 2.836A1 1 0 0 1 10 2h4a1 1 0 0 1 .986.836L15.347 5H19a1 1 0 1 1 0 2h-.064l-.938 14.067A1 1 0 0 1 17 22H7a1 1 0 0 1-.998-.933L5.064 7H5a1 1 0 0 1 0-2h3.653l.36-2.164ZM14.516 7H7.07l.1 1.5h9.662l.1-1.5h-2.415Zm-1.363-3 .166 1H10.68l.167-1h2.306ZM7.236 9.5l.7 10.5h8.128l.7-10.5H7.236ZM12.5 11a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm-3.536-.499a.5.5 0 0 1 .535.463l.5 7a.5.5 0 1 1-.998.072l-.5-7a.5.5 0 0 1 .463-.535Zm6.535.535a.5.5 0 1 0-.998-.072l-.5 7a.5.5 0 1 0 .998.072l.5-7Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <rect width="24" height="24" fill="#fff"/>
    </clipPath>
  </defs>
</svg>
