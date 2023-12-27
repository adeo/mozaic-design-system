<svelte:options tag={null} />
  <script>
  export let id = undefined;
  export let style = undefined;
  export let className = undefined;
  export let fill = undefined;
  export let size = "1.25rem";
</script>

<svg aria-hidden="true" width={size} height={size} id={id}  style={style} class={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M3.25 10a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0ZM10 1.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5Zm-3.065 9.333a.5.5 0 0 0-.943.334 4.252 4.252 0 0 0 8.016 0 .5.5 0 0 0-.943-.334 3.252 3.252 0 0 1-6.13 0Zm-.86-2.281a.5.5 0 0 0 .643-.293C6.824 8.226 7.123 8 7.5 8s.676.226.782.509a.5.5 0 1 0 .936-.351C8.96 7.47 8.278 7 7.5 7c-.777 0-1.46.47-1.718 1.158a.5.5 0 0 0 .293.644Zm5.643-.293a.5.5 0 0 1-.936-.351C11.04 7.47 11.722 7 12.5 7c.777 0 1.46.47 1.718 1.158a.5.5 0 0 1-.936.35C13.176 8.227 12.877 8 12.5 8s-.676.226-.782.509Z"/>
</svg>
