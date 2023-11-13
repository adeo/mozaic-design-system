<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "2rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path fill-rule="evenodd" d="M9.824 4.123a1 1 0 0 0-.811 1.159l.695 3.94a1 1 0 0 0 1.158.81l.329-.058 2.604 14.773a5 5 0 0 0 9.848-1.737L21.043 8.238l.328-.058a1 1 0 0 0 .81-1.158l-.694-3.94a1 1 0 0 0-1.158-.81L9.824 4.122Zm1.68 3.766-.348-1.97 8.535-1.505.348 1.97-8.535 1.505Zm1.66 1.738L14.2 15.5h4.025a.499.499 0 0 1 .335-.224l1.642-.29-.29-1.641-1.642.29a.5.5 0 0 1-.173-.985l1.641-.29-.665-3.775-5.909 1.042ZM15.77 24.4l-1.394-7.9h6.093l.196 1.113-1.642.29a.5.5 0 1 0 .174.984l1.641-.29.29 1.642-1.642.29a.5.5 0 1 0 .174.984l1.642-.29.376 2.134a3 3 0 1 1-5.91 1.042Z"/>
</svg>
