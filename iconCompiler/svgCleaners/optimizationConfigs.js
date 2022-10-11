module.exports['monochromOptim'] = {
  plugins: [
    {
      name: 'preset-default',
      custom: {
        type: 'full',
        descritpion: 'Clean svg',
        fn: (data) =>
          data
            .replace(/<style>(.*)<\/style>/g, '')
            // .replace(/<defs>(.*)<\/defs>/g, '')
            .replace(/<title>(.*)<\/title>/g, '')
            .replace(/class="[a-zA-Z0-9:;\.\s\(\)\-\,]*"/gi, '')
            .replace(/data-name="[a-zA-Z0-9:;\.\s\(\)\-\,\/]*"/gi, '')
            .replace(/fill="[a-zA-Z0 -9:;\.\s\(\)\-\,]*"/gi, '')
            .replace(/<g id="Square">.*?<\/g>/gi, '')
            // .replace(/<g id="Icon">.*?<\/g>/gi, '')
            // .replace(/<g id="Calque_5" >.*?<\/g>/gi, '')
            .replace(/<g id="Calque_1">.*?<\/g>/gi, ''),
      },
    },
  ],
}

module.exports['colorOptim'] = {
  plugins: [
    {
      custom: {
        type: 'full',
        descritpion: 'Clean svg',
        // params: data,
        fn: (data) =>
          data
            .replace(/<defs><\/defs>/g, '')
            .replace(/data-name="[a-zA-Z0-9:;\.\s\(\)\-\,\/]*"/gi, '')
            .replace(/<g id="Square">.*?<\/g>/gi, ''),
      },
    },
  ],
}
