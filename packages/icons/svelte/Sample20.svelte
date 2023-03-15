<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M6.118 2.454a.75.75 0 0 0-.608.869l.434 2.462a.75.75 0 0 0 .869.608l.082-.014 1.606 9.11a3.25 3.25 0 1 0 6.402-1.13L13.296 5.25l.082-.014a.75.75 0 0 0 .609-.87l-.434-2.461a.75.75 0 0 0-.87-.609L6.119 2.454Zm1.173 2.332L7.117 3.8l5.089-.897.173.985-5.088.897Zm1.081 1.332L8.97 9.5h2.333a.498.498 0 0 1 .266-.137l.902-.16-.116-.656-.902.16a.5.5 0 0 1-.174-.986l.903-.159-.362-2.051-3.447.607Zm1.606 9.11L9.145 10.5h3.554l.06.345-.902.16a.5.5 0 0 0 .173.984l.903-.16.116.657-.903.16a.5.5 0 1 0 .174.984l.903-.159.202 1.149a1.75 1.75 0 0 1-3.447.608Z"/>
</svg>
