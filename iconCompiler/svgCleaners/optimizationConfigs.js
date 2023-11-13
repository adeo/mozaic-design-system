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
            .replace(/<defs>(.*)<\/defs>/g, '')
            .replace(/<title>(.*)<\/title>/g, '')
            .replace(/class="[a-zA-Z0-9:;\.\s\(\)\-\,]*"/gi, '')
            .replace(/data-name="[a-zA-Z0-9:;\.\s\(\)\-\,\/]*"/gi, '')
      },
    },
  ],
}

