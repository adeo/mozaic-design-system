# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0-beta.21](https://github.com/adeo/mozaic-design-system/compare/v2.0.0-beta.20...v2.0.0-beta.21) (2023-06-21)

**Note:** Version bump only for package @mozaic-ds/styles

# [2.0.0-beta.20](https://github.com/adeo/mozaic-design-system/compare/v1.62.0...v2.0.0-beta.20) (2023-06-21)

### Bug Fixes

- **component/flag:** set font-size with magic-unit ([9fde124](https://github.com/adeo/mozaic-design-system/commit/9fde124b0c57297820baaa22e77ee0a7aab6627d))
- **component/text-input:** correct the display of the background in the valid state ([547c9a2](https://github.com/adeo/mozaic-design-system/commit/547c9a2c8ab078535e13c4e7f8fe3980531a907c))
- **component/toggle:** correctly implement background-position ([#1323](https://github.com/adeo/mozaic-design-system/issues/1323)) ([9976d33](https://github.com/adeo/mozaic-design-system/commit/9976d33843e0fca14da262f913f0d4dd31d1bf48))
- **stepper:** upgrade scss ([#1324](https://github.com/adeo/mozaic-design-system/issues/1324)) ([9b03484](https://github.com/adeo/mozaic-design-system/commit/9b03484a72fd10717c9f4a99bf190fc843627f68))
- **styles/select:** change the select height from 56px to 44px ([80b4499](https://github.com/adeo/mozaic-design-system/commit/80b4499076e7029e9c3ed35cbc91dec7419cb3c5))
- **styles/text-input:** change the field height from 56px to 44px ([cb6170c](https://github.com/adeo/mozaic-design-system/commit/cb6170cda70b21d522e3a1f991b2d6b216668e59))
- **styles/textarea:** remove border-radius when it's preset zodio ([1b7317a](https://github.com/adeo/mozaic-design-system/commit/1b7317af37791ee6bd8b22225f36a1a5790ef745))

### Features

- **component/breadcrumb:** remove padding-left & dark background-color ([#1098](https://github.com/adeo/mozaic-design-system/issues/1098)) ([6a5e859](https://github.com/adeo/mozaic-design-system/commit/6a5e859ee0e9a1f38366278611ccde72c42e7fd2))
- **component/checkbox:** zodio - adapt background-position ([ab690da](https://github.com/adeo/mozaic-design-system/commit/ab690da5f0acf06178a866db6d0924bd289c7a23))
- **component/flag:** add CSS variables to change the colours of the component ([12364e0](https://github.com/adeo/mozaic-design-system/commit/12364e06c31ce3bbfbbf296e123e889d2a464deb))
- **component/flag:** zodio - set tokens for component Flag ([01ffd22](https://github.com/adeo/mozaic-design-system/commit/01ffd22c3962072f3d7f909c2e93456cd187f4b5))
- **component/overlay:** delete the .mc-layer-overlay & .mc-modal-overlay classes in favor of .mc-overlay ([#1188](https://github.com/adeo/mozaic-design-system/issues/1188)) ([dbc28e0](https://github.com/adeo/mozaic-design-system/commit/dbc28e05ea6181cb0517949d78ef7316c90e1f51)), closes [#1059](https://github.com/adeo/mozaic-design-system/issues/1059)
- **component/pswdinput:** zodio - adapt styles for component PasswordInput ([dfc57f0](https://github.com/adeo/mozaic-design-system/commit/dfc57f0333769bb9773843f796e19d9b50002d0d))
- **component/stars-input:** zodio - adapt styles for component StarsInput ([ca16e81](https://github.com/adeo/mozaic-design-system/commit/ca16e81033a5e4a190ade81d1ff0f87e902f6cbf))
- **component/stars-result:** zodio - adapt styles for component StarsResult ([ca03756](https://github.com/adeo/mozaic-design-system/commit/ca03756bad58a9029cf792f5bfae6bc06920bc0e))
- **foundations/colours:** zodio - set tokens for checkbox component ([49b99e4](https://github.com/adeo/mozaic-design-system/commit/49b99e45b79fbcb6b84586e7cf6f3ed2ff2cec12))
- **foundations/colours:** zodio - set tokens for component Accordion ([28376c5](https://github.com/adeo/mozaic-design-system/commit/28376c5928faa581161a49fd5808a186677bbbf2))
- **foundations/colours:** zodio - set tokens for component Button ([0233345](https://github.com/adeo/mozaic-design-system/commit/02333454dc3538120f5efd0f8077b0fe28b2bc36))
- **foundations/colours:** zodio - set tokens for component Button ([3259bf4](https://github.com/adeo/mozaic-design-system/commit/3259bf48d2c88beec25cf06b1d503ad02628c7b9))
- **foundations/colours:** zodio - set tokens for component Layer ([cd9b1fc](https://github.com/adeo/mozaic-design-system/commit/cd9b1fc33d897dbb28c7ea0eec17c47514724365))
- **foundations/colours:** zodio - set tokens for component Select ([755f6db](https://github.com/adeo/mozaic-design-system/commit/755f6db4e00ba9666ef02d7d57f1b5e1ff84e3ec))
- **foundations/colours:** zodio - set tokens for component Text Input ([2529204](https://github.com/adeo/mozaic-design-system/commit/25292041938dcb346ea7f525f2d5ebb5cb4a5152))
- **foundations/colours:** zodio - set tokens for focus pattern ([a4c0602](https://github.com/adeo/mozaic-design-system/commit/a4c0602fee2dceb94dcd031462b3bfc161939a39))
- **foundations/colours:** zodio - set tokens for notifications component ([dfbc339](https://github.com/adeo/mozaic-design-system/commit/dfbc33922b24721fb22ea635b18d2caf35d76332))
- **foundations/colours:** zodio - set tokens for radio component ([f3f2311](https://github.com/adeo/mozaic-design-system/commit/f3f2311f4442b748ff0ea173651f5507917854a0))
- **foundations/colours:** zodio - set tokens for select component ([4be9c91](https://github.com/adeo/mozaic-design-system/commit/4be9c91cd9e2d481323b8c94395905cfe305436d))
- **layer/zodio:** adapt size ([#1426](https://github.com/adeo/mozaic-design-system/issues/1426)) ([8b9c3e8](https://github.com/adeo/mozaic-design-system/commit/8b9c3e898876b2c1dcb3ff036f4c25eaed4585d8))
- **styles/settings:** delete the import of the tokens file inside the all-settings ([#1322](https://github.com/adeo/mozaic-design-system/issues/1322)) ([68494e4](https://github.com/adeo/mozaic-design-system/commit/68494e4348ef64b6433ded6347d0ec02883f7e53))
- **styles/settings:** make the font-size definition relative to the magic-unit ([#1365](https://github.com/adeo/mozaic-design-system/issues/1365)) ([f45bc88](https://github.com/adeo/mozaic-design-system/commit/f45bc88b857c36f8ddc62708309f0d9699b8c803))
- **styles:** add new index file to export all components files ([80f0027](https://github.com/adeo/mozaic-design-system/commit/80f00277dd49ec65ee9e39a4fb40614d06773030))
- **styles:** add new index file to export all utilities files ([acecb85](https://github.com/adeo/mozaic-design-system/commit/acecb855321d12d3d7b81713840928f4a7ce6235))
- **styles:** adjust styles ([1140e5f](https://github.com/adeo/mozaic-design-system/commit/1140e5fd57e3b94b4b7527a9cf94eee713d74cb4))
- **styles:** improve styles ([a43376c](https://github.com/adeo/mozaic-design-system/commit/a43376cfeb59bc42824f598d90cb972bf0fc128b))
- **styles:** improve styles to conform to stylelint rules ([#1187](https://github.com/adeo/mozaic-design-system/issues/1187)) ([c5a01a9](https://github.com/adeo/mozaic-design-system/commit/c5a01a9171b050ac400eeef693afb36484fd5e59)), closes [#1062](https://github.com/adeo/mozaic-design-system/issues/1062)
- **styles:** improve styles to conform to stylelint rules ([#1187](https://github.com/adeo/mozaic-design-system/issues/1187)) ([5be9a29](https://github.com/adeo/mozaic-design-system/commit/5be9a29b695e8f5dedf10db684e1ea58e0d432fe)), closes [#1062](https://github.com/adeo/mozaic-design-system/issues/1062)
- **styles:** improve styles to conform to stylelint rules ([#1187](https://github.com/adeo/mozaic-design-system/issues/1187)) ([f11cf42](https://github.com/adeo/mozaic-design-system/commit/f11cf428fb4275e924bc4430dca1c793346f5baf)), closes [#1062](https://github.com/adeo/mozaic-design-system/issues/1062)
- **styles:** improve the style of the paswdinput button ([d8388c6](https://github.com/adeo/mozaic-design-system/commit/d8388c6e7ce9e7203fbd03fe414bb0c5165c6392))
- **styles:** improving the style of the Fields label ([40dd718](https://github.com/adeo/mozaic-design-system/commit/40dd718593a82955408a196c0db7b9670d449dca))
- **tools/css-dev-tools:** remove postcss-base64 & base64 transformation ([#1258](https://github.com/adeo/mozaic-design-system/issues/1258)) ([e7157ca](https://github.com/adeo/mozaic-design-system/commit/e7157caeea6b967c3382ace02f0c30ef2ca18bcb))
- **tools/css-dev-tools:** remove postcss-base64 & base64 transformation ([#1258](https://github.com/adeo/mozaic-design-system/issues/1258)) ([002f112](https://github.com/adeo/mozaic-design-system/commit/002f1122ba1bb2e30dc374ef975ffab922dfe466))
- **tools/tokens:** add tokens for datatable component ([#1337](https://github.com/adeo/mozaic-design-system/issues/1337)) ([80c83ad](https://github.com/adeo/mozaic-design-system/commit/80c83adde50d126724baf3c65a09046089022267))
- **tools/tokens:** add tokens for font-family & font-weight ([#1339](https://github.com/adeo/mozaic-design-system/issues/1339)) ([981e1cd](https://github.com/adeo/mozaic-design-system/commit/981e1cd6f41d70d5b2c96b1ebe6724cdfd3b5581)), closes [#1221](https://github.com/adeo/mozaic-design-system/issues/1221)
- **tools/tokens:** enable tokens export based on parameters ([#1189](https://github.com/adeo/mozaic-design-system/issues/1189)) ([9ff00d5](https://github.com/adeo/mozaic-design-system/commit/9ff00d56edc315ba957e9735b757081cfe75e712)), closes [#996](https://github.com/adeo/mozaic-design-system/issues/996)

### Reverts

- Revert "feat(foundations/colours): zodio - set tokens for select component" ([8a2b15a](https://github.com/adeo/mozaic-design-system/commit/8a2b15afbb96376f61ea249dc4aa8d594bdfe13e))
- Revert "docs(components): remove unnecessary previews (#1427)" ([6fa72c4](https://github.com/adeo/mozaic-design-system/commit/6fa72c48c5fc6e4149181a6442053ec9790968b6)), closes [#1427](https://github.com/adeo/mozaic-design-system/issues/1427)

# [2.0.0-beta.19](https://github.com/adeo/mozaic-design-system/compare/v1.59.0...v2.0.0-beta.19) (2023-05-04)

### Features

- **layer/zodio:** adapt size ([#1426](https://github.com/adeo/mozaic-design-system/issues/1426)) ([5a26bef](https://github.com/adeo/mozaic-design-system/commit/5a26befc4f67966fc7e6c2002f51d33169202c6c))

# [2.0.0-beta.18](https://github.com/adeo/mozaic-design-system/compare/v2.0.0-beta.17...v2.0.0-beta.18) (2023-04-03)

### Features

- **styles:** adjust styles ([0882d82](https://github.com/adeo/mozaic-design-system/commit/0882d8235de03adb6411b740bc4bc38110733461))

# [2.0.0-beta.17](https://github.com/adeo/mozaic-design-system/compare/v1.57.0...v2.0.0-beta.17) (2023-03-29)

### Bug Fixes

- **component/flag:** set font-size with magic-unit ([b584c11](https://github.com/adeo/mozaic-design-system/commit/b584c112c58752d9cc254efc99983c56f72a68b6))
- **styles/qtyselector:** implement -border-radius for the buttons of the qtyselector ([311e2df](https://github.com/adeo/mozaic-design-system/commit/311e2df29738856ed491d73c14e5d1275e34ccc2))
- **styles/select:** change the select height from 56px to 44px ([4a801c7](https://github.com/adeo/mozaic-design-system/commit/4a801c735a85baf58d1867dac9af951ef56dd099))
- **styles/text-input:** change the field height from 56px to 44px ([864a266](https://github.com/adeo/mozaic-design-system/commit/864a2669bfbcae8adf7a916d42def9ef552293ac))
- **styles/textarea:** remove border-radius when it's preset zodio ([b3009c9](https://github.com/adeo/mozaic-design-system/commit/b3009c9a26397ead0b1b9dfda1015a5561d514ee))

### Features

- **component/flag:** add CSS variables to change the colours of the component ([c1754f8](https://github.com/adeo/mozaic-design-system/commit/c1754f8523a8801250033e61a3ae6478e438b104))
- **component/flag:** zodio - set tokens for component Flag ([0ce8be4](https://github.com/adeo/mozaic-design-system/commit/0ce8be4a59a44f00bd7d4742a4f40cf2c4b6ac13))
- **styles:** add new index file to export all components files ([d23626c](https://github.com/adeo/mozaic-design-system/commit/d23626ce96c3ae784bf589b345aaed94863ce7b1))
- **styles:** add new index file to export all utilities files ([4b9bf25](https://github.com/adeo/mozaic-design-system/commit/4b9bf25340082495dba2f79b61f4e9b5e1d7f9f9))
- **styles:** improve the style of the paswdinput button ([1d28731](https://github.com/adeo/mozaic-design-system/commit/1d28731077edbeca6a494fa5ce45ccce351bd2d1))
- **styles:** improving the style of the Fields label ([af289e8](https://github.com/adeo/mozaic-design-system/commit/af289e8fbe27bb6796cf7db5d4e5998594bfe470))

# [2.0.0-beta.16](https://github.com/adeo/mozaic-design-system/compare/v1.56.0...v2.0.0-beta.16) (2023-03-26)

### Bug Fixes

- **component/text-input:** correct the display of the background in the valid state ([6381e27](https://github.com/adeo/mozaic-design-system/commit/6381e278945293369761a6c198bc2a66fe6f6ad6))
- **component/toggle:** correctly implement background-position ([#1323](https://github.com/adeo/mozaic-design-system/issues/1323)) ([2e3a879](https://github.com/adeo/mozaic-design-system/commit/2e3a879cd96042ec7ace379b1500e39e02ac016d))
- **stepper:** upgrade scss ([#1324](https://github.com/adeo/mozaic-design-system/issues/1324)) ([47f276c](https://github.com/adeo/mozaic-design-system/commit/47f276cfbb5445512904b85eae03b83a458e1b44))
- **styles:** improve styles to conform to stylelint rules ([fb78a19](https://github.com/adeo/mozaic-design-system/commit/fb78a1930a9cd172f3a380d7bb1326dc0192ccca))

### Features

- **component/breadcrumb:** remove padding-left & dark background-color ([#1098](https://github.com/adeo/mozaic-design-system/issues/1098)) ([c70abe2](https://github.com/adeo/mozaic-design-system/commit/c70abe2ce926dde9fd7616bfcc88a79d7f67e383))
- **component/checkbox:** zodio - adapt background-position ([ad8d5ee](https://github.com/adeo/mozaic-design-system/commit/ad8d5ee7477a9baa6f91ad03c9516b52a8c77c67))
- **component/overlay:** delete the .mc-layer-overlay & .mc-modal-overlay classes in favor of .mc-overlay ([#1188](https://github.com/adeo/mozaic-design-system/issues/1188)) ([7a0e53e](https://github.com/adeo/mozaic-design-system/commit/7a0e53e5e205aba9e6f5cab3844fcc77f714737c)), closes [#1059](https://github.com/adeo/mozaic-design-system/issues/1059)
- **component/pswdinput:** zodio - adapt styles for component PasswordInput ([6d0ec2b](https://github.com/adeo/mozaic-design-system/commit/6d0ec2bfb859a9a4b2f0e5d9b76d7493f8892bfe))
- **component/stars-input:** zodio - adapt styles for component StarsInput ([46354f4](https://github.com/adeo/mozaic-design-system/commit/46354f48b91d9190805ea774527f99ef57fb9580))
- **component/stars-result:** zodio - adapt styles for component StarsResult ([07ac485](https://github.com/adeo/mozaic-design-system/commit/07ac485b782d2d73fe8de815a074e9aabbd164ec))
- **foundations/colours:** zodio - set tokens for checkbox component ([4a284b5](https://github.com/adeo/mozaic-design-system/commit/4a284b55cf5e4d40d5010bdac74739ede3fa9525))
- **foundations/colours:** zodio - set tokens for component Accordion ([6f90766](https://github.com/adeo/mozaic-design-system/commit/6f90766f24fc7e21c4d1be105f9f93292d4746fc))
- **foundations/colours:** zodio - set tokens for component Button ([b0f389d](https://github.com/adeo/mozaic-design-system/commit/b0f389d442e2372e6bf6907ac3dc2be735c92be6))
- **foundations/colours:** zodio - set tokens for component Button ([91d1efd](https://github.com/adeo/mozaic-design-system/commit/91d1efd0d7cd566b071ee62675e3fd6281ab3abc))
- **foundations/colours:** zodio - set tokens for component Layer ([e6898c9](https://github.com/adeo/mozaic-design-system/commit/e6898c9be162d23d0c136bba7c0c283c6f2f5991))
- **foundations/colours:** zodio - set tokens for component Select ([69bd666](https://github.com/adeo/mozaic-design-system/commit/69bd6668c9bfbfec3f10ea9362d321aa32166386))
- **foundations/colours:** zodio - set tokens for component Text Input ([5129ed9](https://github.com/adeo/mozaic-design-system/commit/5129ed9ff119ca11b9792eebdec8e32457a64d94))
- **foundations/colours:** zodio - set tokens for focus pattern ([9b52b4b](https://github.com/adeo/mozaic-design-system/commit/9b52b4b424b22b175e1b1e599e74b542e8a8ac02))
- **foundations/colours:** zodio - set tokens for notifications component ([502e417](https://github.com/adeo/mozaic-design-system/commit/502e417d7161ff7829f76f0d9d64fc2c3f184056))
- **foundations/colours:** zodio - set tokens for radio component ([761165d](https://github.com/adeo/mozaic-design-system/commit/761165db3b8aaa0167e475c122ecf44577b4e2b0))
- **foundations/colours:** zodio - set tokens for select component ([cd2d610](https://github.com/adeo/mozaic-design-system/commit/cd2d61066b37995f8dfebf4999b3f66b5d400ebc))
- **styles/settings:** delete the import of the tokens file inside the all-settings ([#1322](https://github.com/adeo/mozaic-design-system/issues/1322)) ([339efb4](https://github.com/adeo/mozaic-design-system/commit/339efb4a9788ea0f1aa3c02fde04e1d97a704ed9))
- **styles/settings:** make the font-size definition relative to the magic-unit ([#1365](https://github.com/adeo/mozaic-design-system/issues/1365)) ([07f3fe8](https://github.com/adeo/mozaic-design-system/commit/07f3fe882a0959cd20ed68afc25a2ebcea99c0c3))
- **styles:** improve styles ([6d44a93](https://github.com/adeo/mozaic-design-system/commit/6d44a93d73f7ca95b0f7969d609dcad1782f4f75))
- **styles:** improve styles to conform to stylelint rules ([#1187](https://github.com/adeo/mozaic-design-system/issues/1187)) ([bdf3c53](https://github.com/adeo/mozaic-design-system/commit/bdf3c531edc725957d33fa87345aeb3a2104d1a1)), closes [#1062](https://github.com/adeo/mozaic-design-system/issues/1062)
- **styles:** improve styles to conform to stylelint rules ([#1187](https://github.com/adeo/mozaic-design-system/issues/1187)) ([3e01047](https://github.com/adeo/mozaic-design-system/commit/3e01047761d26266c4c1007623411100af84c456)), closes [#1062](https://github.com/adeo/mozaic-design-system/issues/1062)
- **tools/css-dev-tools:** remove postcss-base64 & base64 transformation ([#1258](https://github.com/adeo/mozaic-design-system/issues/1258)) ([4f2231d](https://github.com/adeo/mozaic-design-system/commit/4f2231d43a776e7858839ca5e6f4d306b6ff934b))
- **tools/tokens:** add tokens for datatable component ([#1337](https://github.com/adeo/mozaic-design-system/issues/1337)) ([448d26b](https://github.com/adeo/mozaic-design-system/commit/448d26b96a96061ceb9adaae9ec2b66351b66bf9))
- **tools/tokens:** add tokens for font-family & font-weight ([#1339](https://github.com/adeo/mozaic-design-system/issues/1339)) ([60b970b](https://github.com/adeo/mozaic-design-system/commit/60b970b90ada1cfd753de90d1d73ad7d3bbd962f)), closes [#1221](https://github.com/adeo/mozaic-design-system/issues/1221)
- **tools/tokens:** enable tokens export based on parameters ([#1189](https://github.com/adeo/mozaic-design-system/issues/1189)) ([da96afd](https://github.com/adeo/mozaic-design-system/commit/da96afdf1a979df028d7e4e4f770062cc00b3d95)), closes [#996](https://github.com/adeo/mozaic-design-system/issues/996)

### Reverts

- Revert "feat(foundations/colours): zodio - set tokens for select component" ([d445712](https://github.com/adeo/mozaic-design-system/commit/d445712fde43634f5b5615333298113d86769306))

# [2.0.0-beta.15](https://github.com/adeo/mozaic-design-system/compare/v1.54.0...v2.0.0-beta.15) (2023-03-02)

### Features

- **foundations/colours:** zodio - set tokens for checkbox component ([99aa697](https://github.com/adeo/mozaic-design-system/commit/99aa69750f284e7c1fab1c7e76280e79d2552185))
- **foundations/colours:** zodio - set tokens for component Accordion ([fc51181](https://github.com/adeo/mozaic-design-system/commit/fc51181828dfe539be66a527247cfdd7209d41f6))
- **foundations/colours:** zodio - set tokens for component Button ([ed8dd68](https://github.com/adeo/mozaic-design-system/commit/ed8dd685f92f71963fb68dadd0979d03e3ec1b82))
- **foundations/colours:** zodio - set tokens for component Button ([d3c90fd](https://github.com/adeo/mozaic-design-system/commit/d3c90fd6e5b08e5548e347724d40f97d2a4480ea))
- **foundations/colours:** zodio - set tokens for component Layer ([75d98f5](https://github.com/adeo/mozaic-design-system/commit/75d98f58c9edf962af330faacc4e8ae84a186387))
- **foundations/colours:** zodio - set tokens for component Select ([973913b](https://github.com/adeo/mozaic-design-system/commit/973913bcb2c8ff54467b57705e0c8b71707b6730))
- **foundations/colours:** zodio - set tokens for component Text Input ([8d07d6d](https://github.com/adeo/mozaic-design-system/commit/8d07d6dca2bcb8fcc41f34fc1f8248d5da3396b4))
- **foundations/colours:** zodio - set tokens for focus pattern ([9197bfb](https://github.com/adeo/mozaic-design-system/commit/9197bfb6de6822838100d0358f92564b6ae13926))
- **foundations/colours:** zodio - set tokens for notifications component ([7a627ae](https://github.com/adeo/mozaic-design-system/commit/7a627ae0d8a9d5f675a8d1659b170670ff477b4d))
- **foundations/colours:** zodio - set tokens for radio component ([14c53e2](https://github.com/adeo/mozaic-design-system/commit/14c53e2b12b290b0ae2a8e72a2bca4ff4cde153d))

# [2.0.0-rc.15](https://github.com/adeo/mozaic-design-system/compare/v2.0.0-rc.14...v2.0.0-rc.15) (2023-02-23)

### Features

- **styles/settings:** make the font-size definition relative to the magic-unit ([#1365](https://github.com/adeo/mozaic-design-system/issues/1365)) ([f99c4df](https://github.com/adeo/mozaic-design-system/commit/f99c4dfed4228e33dadb80ffd74278b83e6cca8a))

# [2.0.0-rc.14](https://github.com/adeo/mozaic-design-system/compare/v1.53.0...v2.0.0-rc.14) (2023-02-03)

### Bug Fixes

- **component/toggle:** correctly implement background-position ([#1323](https://github.com/adeo/mozaic-design-system/issues/1323)) ([b1fc39a](https://github.com/adeo/mozaic-design-system/commit/b1fc39aeedff82b0e7aaac290c7b9ed6643154fe))
- **stepper:** upgrade scss ([#1324](https://github.com/adeo/mozaic-design-system/issues/1324)) ([9fe549e](https://github.com/adeo/mozaic-design-system/commit/9fe549e8e89ec1a6b8c2c49359930172989a3017))
- **styles:** improve styles to conform to stylelint rules ([bad2a03](https://github.com/adeo/mozaic-design-system/commit/bad2a037c81842d18f7747a565e1626cd3d2a842))

### Features

- **component/breadcrumb:** remove padding-left & dark background-color ([#1098](https://github.com/adeo/mozaic-design-system/issues/1098)) ([9aea319](https://github.com/adeo/mozaic-design-system/commit/9aea319c66d6f82e08abdafc5cbba8f4849073a1))
- **component/overlay:** delete the .mc-layer-overlay & .mc-modal-overlay classes in favor of .mc-overlay ([#1188](https://github.com/adeo/mozaic-design-system/issues/1188)) ([c6c236f](https://github.com/adeo/mozaic-design-system/commit/c6c236f9760e2e1bde054e50d25145d83c019378)), closes [#1059](https://github.com/adeo/mozaic-design-system/issues/1059)
- **styles/settings:** delete the import of the tokens file inside the all-settings ([#1322](https://github.com/adeo/mozaic-design-system/issues/1322)) ([c574e7f](https://github.com/adeo/mozaic-design-system/commit/c574e7f32645cd31d2f0d1a3f1ea47ffdeb6ee7c))
- **styles:** improve styles to conform to stylelint rules ([#1187](https://github.com/adeo/mozaic-design-system/issues/1187)) ([1033b16](https://github.com/adeo/mozaic-design-system/commit/1033b16760271f72a23a69919e30bd0f2cf17e79)), closes [#1062](https://github.com/adeo/mozaic-design-system/issues/1062)
- **tools/css-dev-tools:** remove postcss-base64 & base64 transformation ([#1258](https://github.com/adeo/mozaic-design-system/issues/1258)) ([cff2041](https://github.com/adeo/mozaic-design-system/commit/cff2041c83def6826a60597083d4501d28fb4031))
- **tools/tokens:** add tokens for datatable component ([#1337](https://github.com/adeo/mozaic-design-system/issues/1337)) ([d2c5d54](https://github.com/adeo/mozaic-design-system/commit/d2c5d54130f7e6a7e4457621deb0044a00ca0324))
- **tools/tokens:** add tokens for font-family & font-weight ([#1339](https://github.com/adeo/mozaic-design-system/issues/1339)) ([cf10733](https://github.com/adeo/mozaic-design-system/commit/cf10733ee5bca73e23f88bcf1223c133c46d95f4)), closes [#1221](https://github.com/adeo/mozaic-design-system/issues/1221)
- **tools/tokens:** enable tokens export based on parameters ([#1189](https://github.com/adeo/mozaic-design-system/issues/1189)) ([174bac8](https://github.com/adeo/mozaic-design-system/commit/174bac8322244a8960fbfba2e8bf1d2536465f97)), closes [#996](https://github.com/adeo/mozaic-design-system/issues/996)

# [2.0.0-beta.19](https://github.com/adeo/mozaic-design-system/compare/v2.0.0-beta.18...v2.0.0-beta.19) (2023-05-04)

### Features

- **layer/zodio:** adapt size ([#1426](https://github.com/adeo/mozaic-design-system/issues/1426)) ([5a26bef](https://github.com/adeo/mozaic-design-system/commit/5a26befc4f67966fc7e6c2002f51d33169202c6c))

# [2.0.0-beta.18](https://github.com/adeo/mozaic-design-system/compare/v2.0.0-beta.17...v2.0.0-beta.18) (2023-04-03)

### Features

- **styles:** adjust styles ([0882d82](https://github.com/adeo/mozaic-design-system/commit/0882d8235de03adb6411b740bc4bc38110733461))

# [2.0.0-beta.17](https://github.com/adeo/mozaic-design-system/compare/v2.0.0-beta.16...v2.0.0-beta.17) (2023-03-29)

### Bug Fixes

- **component/flag:** set font-size with magic-unit ([b584c11](https://github.com/adeo/mozaic-design-system/commit/b584c112c58752d9cc254efc99983c56f72a68b6))
- **styles/qtyselector:** implement -border-radius for the buttons of the qtyselector ([311e2df](https://github.com/adeo/mozaic-design-system/commit/311e2df29738856ed491d73c14e5d1275e34ccc2))
- **styles/select:** change the select height from 56px to 44px ([4a801c7](https://github.com/adeo/mozaic-design-system/commit/4a801c735a85baf58d1867dac9af951ef56dd099))
- **styles/text-input:** change the field height from 56px to 44px ([864a266](https://github.com/adeo/mozaic-design-system/commit/864a2669bfbcae8adf7a916d42def9ef552293ac))
- **styles/textarea:** remove border-radius when it's preset zodio ([b3009c9](https://github.com/adeo/mozaic-design-system/commit/b3009c9a26397ead0b1b9dfda1015a5561d514ee))

### Features

- **component/flag:** add CSS variables to change the colours of the component ([c1754f8](https://github.com/adeo/mozaic-design-system/commit/c1754f8523a8801250033e61a3ae6478e438b104))
- **component/flag:** zodio - set tokens for component Flag ([0ce8be4](https://github.com/adeo/mozaic-design-system/commit/0ce8be4a59a44f00bd7d4742a4f40cf2c4b6ac13))
- **styles:** add new index file to export all components files ([d23626c](https://github.com/adeo/mozaic-design-system/commit/d23626ce96c3ae784bf589b345aaed94863ce7b1))
- **styles:** add new index file to export all utilities files ([4b9bf25](https://github.com/adeo/mozaic-design-system/commit/4b9bf25340082495dba2f79b61f4e9b5e1d7f9f9))
- **styles:** improve the style of the paswdinput button ([1d28731](https://github.com/adeo/mozaic-design-system/commit/1d28731077edbeca6a494fa5ce45ccce351bd2d1))
- **styles:** improving the style of the Fields label ([af289e8](https://github.com/adeo/mozaic-design-system/commit/af289e8fbe27bb6796cf7db5d4e5998594bfe470))

# [2.0.0-beta.16](https://github.com/adeo/mozaic-design-system/compare/v1.56.0...v2.0.0-beta.16) (2023-03-26)

### Bug Fixes

- **component/text-input:** correct the display of the background in the valid state ([6381e27](https://github.com/adeo/mozaic-design-system/commit/6381e278945293369761a6c198bc2a66fe6f6ad6))
- **component/toggle:** correctly implement background-position ([#1323](https://github.com/adeo/mozaic-design-system/issues/1323)) ([2e3a879](https://github.com/adeo/mozaic-design-system/commit/2e3a879cd96042ec7ace379b1500e39e02ac016d))
- **stepper:** upgrade scss ([#1324](https://github.com/adeo/mozaic-design-system/issues/1324)) ([47f276c](https://github.com/adeo/mozaic-design-system/commit/47f276cfbb5445512904b85eae03b83a458e1b44))
- **styles:** improve styles to conform to stylelint rules ([fb78a19](https://github.com/adeo/mozaic-design-system/commit/fb78a1930a9cd172f3a380d7bb1326dc0192ccca))

### Features

- **component/breadcrumb:** remove padding-left & dark background-color ([#1098](https://github.com/adeo/mozaic-design-system/issues/1098)) ([c70abe2](https://github.com/adeo/mozaic-design-system/commit/c70abe2ce926dde9fd7616bfcc88a79d7f67e383))
- **component/checkbox:** zodio - adapt background-position ([ad8d5ee](https://github.com/adeo/mozaic-design-system/commit/ad8d5ee7477a9baa6f91ad03c9516b52a8c77c67))
- **component/overlay:** delete the .mc-layer-overlay & .mc-modal-overlay classes in favor of .mc-overlay ([#1188](https://github.com/adeo/mozaic-design-system/issues/1188)) ([7a0e53e](https://github.com/adeo/mozaic-design-system/commit/7a0e53e5e205aba9e6f5cab3844fcc77f714737c)), closes [#1059](https://github.com/adeo/mozaic-design-system/issues/1059)
- **component/pswdinput:** zodio - adapt styles for component PasswordInput ([6d0ec2b](https://github.com/adeo/mozaic-design-system/commit/6d0ec2bfb859a9a4b2f0e5d9b76d7493f8892bfe))
- **component/stars-input:** zodio - adapt styles for component StarsInput ([46354f4](https://github.com/adeo/mozaic-design-system/commit/46354f48b91d9190805ea774527f99ef57fb9580))
- **component/stars-result:** zodio - adapt styles for component StarsResult ([07ac485](https://github.com/adeo/mozaic-design-system/commit/07ac485b782d2d73fe8de815a074e9aabbd164ec))
- **foundations/colours:** zodio - set tokens for checkbox component ([4a284b5](https://github.com/adeo/mozaic-design-system/commit/4a284b55cf5e4d40d5010bdac74739ede3fa9525))
- **foundations/colours:** zodio - set tokens for component Accordion ([6f90766](https://github.com/adeo/mozaic-design-system/commit/6f90766f24fc7e21c4d1be105f9f93292d4746fc))
- **foundations/colours:** zodio - set tokens for component Button ([b0f389d](https://github.com/adeo/mozaic-design-system/commit/b0f389d442e2372e6bf6907ac3dc2be735c92be6))
- **foundations/colours:** zodio - set tokens for component Button ([91d1efd](https://github.com/adeo/mozaic-design-system/commit/91d1efd0d7cd566b071ee62675e3fd6281ab3abc))
- **foundations/colours:** zodio - set tokens for component Layer ([e6898c9](https://github.com/adeo/mozaic-design-system/commit/e6898c9be162d23d0c136bba7c0c283c6f2f5991))
- **foundations/colours:** zodio - set tokens for component Select ([69bd666](https://github.com/adeo/mozaic-design-system/commit/69bd6668c9bfbfec3f10ea9362d321aa32166386))
- **foundations/colours:** zodio - set tokens for component Text Input ([5129ed9](https://github.com/adeo/mozaic-design-system/commit/5129ed9ff119ca11b9792eebdec8e32457a64d94))
- **foundations/colours:** zodio - set tokens for focus pattern ([9b52b4b](https://github.com/adeo/mozaic-design-system/commit/9b52b4b424b22b175e1b1e599e74b542e8a8ac02))
- **foundations/colours:** zodio - set tokens for notifications component ([502e417](https://github.com/adeo/mozaic-design-system/commit/502e417d7161ff7829f76f0d9d64fc2c3f184056))
- **foundations/colours:** zodio - set tokens for radio component ([761165d](https://github.com/adeo/mozaic-design-system/commit/761165db3b8aaa0167e475c122ecf44577b4e2b0))
- **foundations/colours:** zodio - set tokens for select component ([cd2d610](https://github.com/adeo/mozaic-design-system/commit/cd2d61066b37995f8dfebf4999b3f66b5d400ebc))
- **styles/settings:** delete the import of the tokens file inside the all-settings ([#1322](https://github.com/adeo/mozaic-design-system/issues/1322)) ([339efb4](https://github.com/adeo/mozaic-design-system/commit/339efb4a9788ea0f1aa3c02fde04e1d97a704ed9))
- **styles/settings:** make the font-size definition relative to the magic-unit ([#1365](https://github.com/adeo/mozaic-design-system/issues/1365)) ([07f3fe8](https://github.com/adeo/mozaic-design-system/commit/07f3fe882a0959cd20ed68afc25a2ebcea99c0c3))
- **styles:** improve styles ([6d44a93](https://github.com/adeo/mozaic-design-system/commit/6d44a93d73f7ca95b0f7969d609dcad1782f4f75))
- **styles:** improve styles to conform to stylelint rules ([#1187](https://github.com/adeo/mozaic-design-system/issues/1187)) ([bdf3c53](https://github.com/adeo/mozaic-design-system/commit/bdf3c531edc725957d33fa87345aeb3a2104d1a1)), closes [#1062](https://github.com/adeo/mozaic-design-system/issues/1062)
- **styles:** improve styles to conform to stylelint rules ([#1187](https://github.com/adeo/mozaic-design-system/issues/1187)) ([3e01047](https://github.com/adeo/mozaic-design-system/commit/3e01047761d26266c4c1007623411100af84c456)), closes [#1062](https://github.com/adeo/mozaic-design-system/issues/1062)
- **tools/css-dev-tools:** remove postcss-base64 & base64 transformation ([#1258](https://github.com/adeo/mozaic-design-system/issues/1258)) ([4f2231d](https://github.com/adeo/mozaic-design-system/commit/4f2231d43a776e7858839ca5e6f4d306b6ff934b))
- **tools/tokens:** add tokens for datatable component ([#1337](https://github.com/adeo/mozaic-design-system/issues/1337)) ([448d26b](https://github.com/adeo/mozaic-design-system/commit/448d26b96a96061ceb9adaae9ec2b66351b66bf9))
- **tools/tokens:** add tokens for font-family & font-weight ([#1339](https://github.com/adeo/mozaic-design-system/issues/1339)) ([60b970b](https://github.com/adeo/mozaic-design-system/commit/60b970b90ada1cfd753de90d1d73ad7d3bbd962f)), closes [#1221](https://github.com/adeo/mozaic-design-system/issues/1221)
- **tools/tokens:** enable tokens export based on parameters ([#1189](https://github.com/adeo/mozaic-design-system/issues/1189)) ([da96afd](https://github.com/adeo/mozaic-design-system/commit/da96afdf1a979df028d7e4e4f770062cc00b3d95)), closes [#996](https://github.com/adeo/mozaic-design-system/issues/996)

### Reverts

- Revert "feat(foundations/colours): zodio - set tokens for select component" ([d445712](https://github.com/adeo/mozaic-design-system/commit/d445712fde43634f5b5615333298113d86769306))

# [2.0.0-beta.15](https://github.com/adeo/mozaic-design-system/compare/v1.54.0...v2.0.0-beta.15) (2023-03-02)

### Features

- **foundations/colours:** zodio - set tokens for checkbox component ([99aa697](https://github.com/adeo/mozaic-design-system/commit/99aa69750f284e7c1fab1c7e76280e79d2552185))
- **foundations/colours:** zodio - set tokens for component Accordion ([fc51181](https://github.com/adeo/mozaic-design-system/commit/fc51181828dfe539be66a527247cfdd7209d41f6))
- **foundations/colours:** zodio - set tokens for component Button ([ed8dd68](https://github.com/adeo/mozaic-design-system/commit/ed8dd685f92f71963fb68dadd0979d03e3ec1b82))
- **foundations/colours:** zodio - set tokens for component Button ([d3c90fd](https://github.com/adeo/mozaic-design-system/commit/d3c90fd6e5b08e5548e347724d40f97d2a4480ea))
- **foundations/colours:** zodio - set tokens for component Layer ([75d98f5](https://github.com/adeo/mozaic-design-system/commit/75d98f58c9edf962af330faacc4e8ae84a186387))
- **foundations/colours:** zodio - set tokens for component Select ([973913b](https://github.com/adeo/mozaic-design-system/commit/973913bcb2c8ff54467b57705e0c8b71707b6730))
- **foundations/colours:** zodio - set tokens for component Text Input ([8d07d6d](https://github.com/adeo/mozaic-design-system/commit/8d07d6dca2bcb8fcc41f34fc1f8248d5da3396b4))
- **foundations/colours:** zodio - set tokens for focus pattern ([9197bfb](https://github.com/adeo/mozaic-design-system/commit/9197bfb6de6822838100d0358f92564b6ae13926))
- **foundations/colours:** zodio - set tokens for notifications component ([7a627ae](https://github.com/adeo/mozaic-design-system/commit/7a627ae0d8a9d5f675a8d1659b170670ff477b4d))
- **foundations/colours:** zodio - set tokens for radio component ([14c53e2](https://github.com/adeo/mozaic-design-system/commit/14c53e2b12b290b0ae2a8e72a2bca4ff4cde153d))

# [2.0.0-rc.15](https://github.com/adeo/mozaic-design-system/compare/v2.0.0-rc.14...v2.0.0-rc.15) (2023-02-23)

### Features

- **styles/settings:** make the font-size definition relative to the magic-unit ([#1365](https://github.com/adeo/mozaic-design-system/issues/1365)) ([f99c4df](https://github.com/adeo/mozaic-design-system/commit/f99c4dfed4228e33dadb80ffd74278b83e6cca8a))

# [2.0.0-rc.14](https://github.com/adeo/mozaic-design-system/compare/v1.53.0...v2.0.0-rc.14) (2023-02-03)

### Bug Fixes

- **component/toggle:** correctly implement background-position ([#1323](https://github.com/adeo/mozaic-design-system/issues/1323)) ([b1fc39a](https://github.com/adeo/mozaic-design-system/commit/b1fc39aeedff82b0e7aaac290c7b9ed6643154fe))
- **stepper:** upgrade scss ([#1324](https://github.com/adeo/mozaic-design-system/issues/1324)) ([9fe549e](https://github.com/adeo/mozaic-design-system/commit/9fe549e8e89ec1a6b8c2c49359930172989a3017))
- **styles:** improve styles to conform to stylelint rules ([bad2a03](https://github.com/adeo/mozaic-design-system/commit/bad2a037c81842d18f7747a565e1626cd3d2a842))

### Features

- **component/breadcrumb:** remove padding-left & dark background-color ([#1098](https://github.com/adeo/mozaic-design-system/issues/1098)) ([9aea319](https://github.com/adeo/mozaic-design-system/commit/9aea319c66d6f82e08abdafc5cbba8f4849073a1))
- **component/overlay:** delete the .mc-layer-overlay & .mc-modal-overlay classes in favor of .mc-overlay ([#1188](https://github.com/adeo/mozaic-design-system/issues/1188)) ([c6c236f](https://github.com/adeo/mozaic-design-system/commit/c6c236f9760e2e1bde054e50d25145d83c019378)), closes [#1059](https://github.com/adeo/mozaic-design-system/issues/1059)
- **styles/settings:** delete the import of the tokens file inside the all-settings ([#1322](https://github.com/adeo/mozaic-design-system/issues/1322)) ([c574e7f](https://github.com/adeo/mozaic-design-system/commit/c574e7f32645cd31d2f0d1a3f1ea47ffdeb6ee7c))
- **styles:** improve styles to conform to stylelint rules ([#1187](https://github.com/adeo/mozaic-design-system/issues/1187)) ([1033b16](https://github.com/adeo/mozaic-design-system/commit/1033b16760271f72a23a69919e30bd0f2cf17e79)), closes [#1062](https://github.com/adeo/mozaic-design-system/issues/1062)
- **tools/css-dev-tools:** remove postcss-base64 & base64 transformation ([#1258](https://github.com/adeo/mozaic-design-system/issues/1258)) ([cff2041](https://github.com/adeo/mozaic-design-system/commit/cff2041c83def6826a60597083d4501d28fb4031))
- **tools/tokens:** add tokens for datatable component ([#1337](https://github.com/adeo/mozaic-design-system/issues/1337)) ([d2c5d54](https://github.com/adeo/mozaic-design-system/commit/d2c5d54130f7e6a7e4457621deb0044a00ca0324))
- **tools/tokens:** add tokens for font-family & font-weight ([#1339](https://github.com/adeo/mozaic-design-system/issues/1339)) ([cf10733](https://github.com/adeo/mozaic-design-system/commit/cf10733ee5bca73e23f88bcf1223c133c46d95f4)), closes [#1221](https://github.com/adeo/mozaic-design-system/issues/1221)
- **tools/tokens:** enable tokens export based on parameters ([#1189](https://github.com/adeo/mozaic-design-system/issues/1189)) ([174bac8](https://github.com/adeo/mozaic-design-system/commit/174bac8322244a8960fbfba2e8bf1d2536465f97)), closes [#996](https://github.com/adeo/mozaic-design-system/issues/996)

# [2.0.0-rc.13](https://github.com/adeo/mozaic-design-system/compare/v2.0.0-rc.12...v2.0.0-rc.13) (2023-01-06)

### Bug Fixes

- **component/toggle:** correctly implement background-position ([#1323](https://github.com/adeo/mozaic-design-system/issues/1323)) ([fd274ae](https://github.com/adeo/mozaic-design-system/commit/fd274aef2ce687a06dbb8bb700d88b12c426ebab))

### Features

- **styles/settings:** delete the import of the tokens file inside the all-settings ([#1322](https://github.com/adeo/mozaic-design-system/issues/1322)) ([b839af4](https://github.com/adeo/mozaic-design-system/commit/b839af4e8b04cfcaac515f0352adefcf709d5eba))

# [2.0.0-rc.12](https://github.com/adeo/mozaic-design-system/compare/v2.0.0-rc.11...v2.0.0-rc.12) (2022-12-29)

**Note:** Version bump only for package @mozaic-ds/styles

# [2.0.0-rc.11](https://github.com/adeo/mozaic-design-system/compare/v2.0.0-rc.10...v2.0.0-rc.11) (2022-12-29)

**Note:** Version bump only for package @mozaic-ds/styles

# [2.0.0-rc.10](https://github.com/adeo/mozaic-design-system/compare/v2.0.0-rc.9...v2.0.0-rc.10) (2022-12-26)

### Bug Fixes

- **styles:** improve styles to conform to stylelint rules ([1983596](https://github.com/adeo/mozaic-design-system/commit/19835963b7c8bfb749f3df871c203d658ce5ea33))

### Features

- **tools/css-dev-tools:** remove postcss-base64 & base64 transformation ([#1258](https://github.com/adeo/mozaic-design-system/issues/1258)) ([0b3d47b](https://github.com/adeo/mozaic-design-system/commit/0b3d47b96c5d898b65e99940268eb861f171758a))

# [2.0.0-rc.9](https://github.com/adeo/mozaic-design-system/compare/v1.50.1...v2.0.0-rc.9) (2022-12-19)

### Features

- **component/breadcrumb:** remove padding-left & dark background-color ([#1098](https://github.com/adeo/mozaic-design-system/issues/1098)) ([03ad98b](https://github.com/adeo/mozaic-design-system/commit/03ad98b579647e350644232e0916ffabc2c8d7dd))
- **component/overlay:** delete the .mc-layer-overlay & .mc-modal-overlay classes in favor of .mc-overlay ([#1188](https://github.com/adeo/mozaic-design-system/issues/1188)) ([7a50177](https://github.com/adeo/mozaic-design-system/commit/7a50177bd5f16d811b8e6cead6e441c59e5eef17)), closes [#1059](https://github.com/adeo/mozaic-design-system/issues/1059)
- **styles:** improve styles to conform to stylelint rules ([#1187](https://github.com/adeo/mozaic-design-system/issues/1187)) ([7006d18](https://github.com/adeo/mozaic-design-system/commit/7006d18c2e493a9b874f2dee1ba72f997b3589f4)), closes [#1062](https://github.com/adeo/mozaic-design-system/issues/1062)
- **tools/tokens:** enable tokens export based on parameters ([#1189](https://github.com/adeo/mozaic-design-system/issues/1189)) ([614c486](https://github.com/adeo/mozaic-design-system/commit/614c486a138790d4c6cee5a323f672841463422e)), closes [#996](https://github.com/adeo/mozaic-design-system/issues/996)

# [2.0.0-rc.4](https://github.com/adeo/mozaic-design-system/compare/v1.31.0...v2.0.0-rc.4) (2022-05-04)

**Note:** Version bump only for package @mozaic-ds/styles

# [2.0.0-rc.3](https://github.com/adeo/mozaic-design-system/compare/v2.0.0-rc.2...v2.0.0-rc.3) (2022-04-05)

**Note:** Version bump only for package @mozaic-ds/styles

# [2.0.0-rc.2](https://github.com/adeo/mozaic-design-system/compare/v1.29.1...v2.0.0-rc.2) (2022-04-05)

### Features

- **component/flag:** improve long text flag behaviour ([#995](https://github.com/adeo/mozaic-design-system/issues/995)) ([73d9aaa](https://github.com/adeo/mozaic-design-system/commit/73d9aaa7acd242d656797af50f64bdead22b0a1d))
- **pattern/colors:** add new LM colours ([#999](https://github.com/adeo/mozaic-design-system/issues/999)) ([8392150](https://github.com/adeo/mozaic-design-system/commit/839215063a46de6c80fe1f31216dae1f379fdc74))

# [2.0.0-rc.1](https://github.com/adeo/mozaic-design-system/compare/v1.29.0...v2.0.0-rc.1) (2022-03-31)

### Features

- **component/flag:** improve long text flag behaviour ([#995](https://github.com/adeo/mozaic-design-system/issues/995)) ([590f3af](https://github.com/adeo/mozaic-design-system/commit/590f3af0506ad8c009725043225abda5b87a6e6f))
- **pattern/colors:** add new LM colours ([#999](https://github.com/adeo/mozaic-design-system/issues/999)) ([4691c6a](https://github.com/adeo/mozaic-design-system/commit/4691c6a9fcf3d74366ba075d5f7724fa7198bdc2))

# [1.62.0](https://github.com/adeo/mozaic-design-system/compare/v1.61.0...v1.62.0) (2023-06-09)

### Bug Fixes

- **component/modal:** manage long content by default ([#1436](https://github.com/adeo/mozaic-design-system/issues/1436)) ([4253001](https://github.com/adeo/mozaic-design-system/commit/42530012bb53dd81f69225407b93f8ef02a5fd7c))
- label prevents clicking on the accordion ([#1448](https://github.com/adeo/mozaic-design-system/issues/1448)) ([ffd367f](https://github.com/adeo/mozaic-design-system/commit/ffd367f0e00d4699420efa85cfd9249a78eb6d0b))

### Features

- **component/progressbar:** implement the 'branded' variation as the default version ([#1437](https://github.com/adeo/mozaic-design-system/issues/1437)) ([8eabca7](https://github.com/adeo/mozaic-design-system/commit/8eabca7e225cb0c65e9763f3dd99b57452fe6c93))

# [1.61.0](https://github.com/adeo/mozaic-design-system/compare/v1.60.0...v1.61.0) (2023-05-25)

**Note:** Version bump only for package @mozaic-ds/styles

# [1.60.0](https://github.com/adeo/mozaic-design-system/compare/v1.59.0...v1.60.0) (2023-05-16)

### Bug Fixes

- **component/qtyselector:** adjust the focus behaviour ([#1431](https://github.com/adeo/mozaic-design-system/issues/1431)) ([2139437](https://github.com/adeo/mozaic-design-system/commit/2139437e0d2b568ebeeb12ce7285403810a3cf9a))
- **component/stars-input:** stringify "background-image" parameter to avoid ";" expectation SASS error ([#1419](https://github.com/adeo/mozaic-design-system/issues/1419)) ([a94b08c](https://github.com/adeo/mozaic-design-system/commit/a94b08cd936835779814a9e8c53b236d3d24f5c5))

# [1.59.0](https://github.com/adeo/mozaic-design-system/compare/v1.58.1...v1.59.0) (2023-04-27)

### Features

- **component/autocomplete-dropdown:** improve the display of the loader & the clear button ([#1421](https://github.com/adeo/mozaic-design-system/issues/1421)) ([68d9954](https://github.com/adeo/mozaic-design-system/commit/68d99540afb401d9c83e4a770847ac3f9bd7e790))

## [1.58.1](https://github.com/adeo/mozaic-design-system/compare/v1.58.0...v1.58.1) (2023-04-20)

**Note:** Version bump only for package @mozaic-ds/styles

# [1.58.0](https://github.com/adeo/mozaic-design-system/compare/v1.58.0-beta.0...v1.58.0) (2023-04-14)

**Note:** Version bump only for package @mozaic-ds/styles

# [1.58.0-beta.0](https://github.com/adeo/mozaic-design-system/compare/v1.57.0...v1.58.0-beta.0) (2023-04-14)

### Bug Fixes

- **component/tag:** update of the value of the paddings ([#1415](https://github.com/adeo/mozaic-design-system/issues/1415)) ([e9d2891](https://github.com/adeo/mozaic-design-system/commit/e9d2891f9328dcfa0143297277e2ee139ade7378)), closes [#1412](https://github.com/adeo/mozaic-design-system/issues/1412)

### Features

- **component/datatable:** add the 'Empty DataTable' variation ([#1416](https://github.com/adeo/mozaic-design-system/issues/1416)) ([b5f7ffe](https://github.com/adeo/mozaic-design-system/commit/b5f7ffeb906907a1c9998c07f1ef29df9270f973)), closes [#1373](https://github.com/adeo/mozaic-design-system/issues/1373)

# [1.56.0](https://github.com/adeo/mozaic-design-system/compare/v1.55.0...v1.56.0) (2023-03-22)

### Bug Fixes

- **button:** remove pointer-event from disable button ([#1406](https://github.com/adeo/mozaic-design-system/issues/1406)) ([0f4a39b](https://github.com/adeo/mozaic-design-system/commit/0f4a39bbc1006868845025587269c363b27efe28))
- **component/tabs:** improve 'full tabs' behaviour ([#1403](https://github.com/adeo/mozaic-design-system/issues/1403)) ([5a37720](https://github.com/adeo/mozaic-design-system/commit/5a37720a8657369add607b27df6d28c4c03f6904)), closes [#1402](https://github.com/adeo/mozaic-design-system/issues/1402)

### Features

- **component/toggle:** improve toggle component for scoped modules ([#1404](https://github.com/adeo/mozaic-design-system/issues/1404)) ([c6d2958](https://github.com/adeo/mozaic-design-system/commit/c6d29587dcdbd6eda9f19a9375e810c4408de29a)), closes [#1401](https://github.com/adeo/mozaic-design-system/issues/1401)

# [1.55.0](https://github.com/adeo/mozaic-design-system/compare/v1.54.0...v1.55.0) (2023-03-15)

### Bug Fixes

- **component/stepper:** remove default background of indicator element ([#1396](https://github.com/adeo/mozaic-design-system/issues/1396)) ([c7d0eab](https://github.com/adeo/mozaic-design-system/commit/c7d0eab226e9626ddd01203415b47087d3f6aeff))
- **styles:** add background-size to ensure the display of icons ([#1394](https://github.com/adeo/mozaic-design-system/issues/1394)) ([746006d](https://github.com/adeo/mozaic-design-system/commit/746006da4b9da498a9b39d52aca32b7edcf53435))

### Features

- **component/autocomplete:** add styles for the error message ([#1397](https://github.com/adeo/mozaic-design-system/issues/1397)) ([03ce2cc](https://github.com/adeo/mozaic-design-system/commit/03ce2ccf1c46913c720aa540b4d517866bbba7ca))
- **component/fileuploader:** report fix styles coming from Mozaic-Vue ([#1398](https://github.com/adeo/mozaic-design-system/issues/1398)) ([9b4f080](https://github.com/adeo/mozaic-design-system/commit/9b4f080fdbfaecbabbe855d65ce43a513c9d1fd4))
- **tools/tokens:** add tokens for datatable component ([#1392](https://github.com/adeo/mozaic-design-system/issues/1392)) ([d8ce3d2](https://github.com/adeo/mozaic-design-system/commit/d8ce3d27c132ff5d43aaffc2a0d31e07caab1152))

# [1.54.0](https://github.com/adeo/mozaic-design-system/compare/v1.53.0...v1.54.0) (2023-03-02)

### Bug Fixes

- **component/field-group:** make legend optional ([#1375](https://github.com/adeo/mozaic-design-system/issues/1375)) ([3a0198a](https://github.com/adeo/mozaic-design-system/commit/3a0198ac1ec8580df5d92a90136d0089e0045a9d))
- **label:** use dark color for checkbox and radio ([#1354](https://github.com/adeo/mozaic-design-system/issues/1354)) ([c3aa4ee](https://github.com/adeo/mozaic-design-system/commit/c3aa4ee4c51533206ef8c6f98612cd1c6ae7d40c))

# [1.53.0](https://github.com/adeo/mozaic-design-system/compare/v1.52.0...v1.53.0) (2023-02-02)

### Bug Fixes

- **component/field:** Update the MField component spacings ([#1349](https://github.com/adeo/mozaic-design-system/issues/1349)) ([985885c](https://github.com/adeo/mozaic-design-system/commit/985885c3304ba41fc9b3e4f4edff976d1ccfe160))
- **component/tabs:** centered element for all sizes ([#1334](https://github.com/adeo/mozaic-design-system/issues/1334)) ([805d2f3](https://github.com/adeo/mozaic-design-system/commit/805d2f3679a7674e934a8dcecc852201b77a8ab2))

### Features

- **component/badge:** ensure the correct display of text in accordance with the design rules ([#1345](https://github.com/adeo/mozaic-design-system/issues/1345)) ([979e975](https://github.com/adeo/mozaic-design-system/commit/979e97588f50a7adb6ecfa234fda72c775498510))
- **component/button:** apply a pointer-events:none in the case of a disabled button ([#1347](https://github.com/adeo/mozaic-design-system/issues/1347)) ([2954c6d](https://github.com/adeo/mozaic-design-system/commit/2954c6d1ad4357f791b4b831552945b29b72a445))

# [1.52.0](https://github.com/adeo/mozaic-design-system/compare/v1.51.0...v1.52.0) (2023-01-10)

### Bug Fixes

- **component/option-card:** update the z-index values of the component elements ([#1319](https://github.com/adeo/mozaic-design-system/issues/1319)) ([23a8d01](https://github.com/adeo/mozaic-design-system/commit/23a8d01e4786db7658df33f763b544490160363f))
- **component/radio:** correct the display of the disabled status ([#1325](https://github.com/adeo/mozaic-design-system/issues/1325)) ([3e9d902](https://github.com/adeo/mozaic-design-system/commit/3e9d902cbb31db7747f36e410ebc65a3778a32db))

# [1.51.0](https://github.com/adeo/mozaic-design-system/compare/v1.50.1...v1.51.0) (2022-12-28)

### Bug Fixes

- **component/datatable:** improve the overflow behaviour of the datatable ([#1306](https://github.com/adeo/mozaic-design-system/issues/1306)) ([4d8b9e4](https://github.com/adeo/mozaic-design-system/commit/4d8b9e4e35a09905c085765a986c2c73ea8bd8d4))

### Features

- **component/autocomplete-dropdown:** add the clearable modifier to manage the display of the clear button ([#1300](https://github.com/adeo/mozaic-design-system/issues/1300)) ([d7a336d](https://github.com/adeo/mozaic-design-system/commit/d7a336d7aaa5d86c099699768da1101653013a4f))
- **component/autocomplete-dropdown:** update the position of the loader ([#1312](https://github.com/adeo/mozaic-design-system/issues/1312)) ([4489c37](https://github.com/adeo/mozaic-design-system/commit/4489c375c9dda5243cc384f562c6c4481faee556))

## [1.50.1](https://github.com/adeo/mozaic-design-system/compare/v1.50.0...v1.50.1) (2022-12-16)

### Bug Fixes

- **component/option-card:** make the content element suitable to the parent ([#1294](https://github.com/adeo/mozaic-design-system/issues/1294)) ([75c2b76](https://github.com/adeo/mozaic-design-system/commit/75c2b76eb2adb7f5f4535c1264a72eac7b5ab986))
- **component/starsinput:** fix the display of stars in s, l & xl variations ([#1291](https://github.com/adeo/mozaic-design-system/issues/1291)) ([1bc5d9c](https://github.com/adeo/mozaic-design-system/commit/1bc5d9c91f1c46d5190e1c255eca0df5dfeb0157))
- **components/autocomplete-dropdown:** adjust the padding-right value according to the clear button ([#1293](https://github.com/adeo/mozaic-design-system/issues/1293)) ([d19c435](https://github.com/adeo/mozaic-design-system/commit/d19c435c423b268bf3c691e2f7df50bedb5c3727))

# [1.50.0](https://github.com/adeo/mozaic-design-system/compare/v1.49.1...v1.50.0) (2022-12-08)

### Features

- **component/autocomplete-dropdown:** add clear button ([#1287](https://github.com/adeo/mozaic-design-system/issues/1287)) ([ec99fd7](https://github.com/adeo/mozaic-design-system/commit/ec99fd7bf5f6d195b5f7031fdc07744bca3e70dc))
- **component/dropdown:** improve component styles & documentation ([#1277](https://github.com/adeo/mozaic-design-system/issues/1277)) ([97616ac](https://github.com/adeo/mozaic-design-system/commit/97616ac34879913cb8e53c514d7fef9a62600cf7))
- **component/option-card:** add variation with `disabled` state ([#1284](https://github.com/adeo/mozaic-design-system/issues/1284)) ([4b4ce50](https://github.com/adeo/mozaic-design-system/commit/4b4ce502edb907086ae5d39d1422cf25444cf1af)), closes [#1278](https://github.com/adeo/mozaic-design-system/issues/1278)
- **components/form:** update icons for valid & invalid states on form elements ([#1286](https://github.com/adeo/mozaic-design-system/issues/1286)) ([737709f](https://github.com/adeo/mozaic-design-system/commit/737709fbcb509d29981e5ebe2f4ba22bc13b8e38))
- **pagination:** use button rather than specific classes ([#1285](https://github.com/adeo/mozaic-design-system/issues/1285)) ([d2af879](https://github.com/adeo/mozaic-design-system/commit/d2af87935df707dc872c88eb7dd781606fa56439))

## [1.49.1](https://github.com/adeo/mozaic-design-system/compare/v1.49.0...v1.49.1) (2022-11-29)

### Bug Fixes

- **component/overlay:** remove cursor:pointer on overlay ([#1273](https://github.com/adeo/mozaic-design-system/issues/1273)) ([5ebb29b](https://github.com/adeo/mozaic-design-system/commit/5ebb29b724e8ff722dde65a5282a94dc6a047f1e))
- **components/tabs:** add no-padding modifier ([#1274](https://github.com/adeo/mozaic-design-system/issues/1274)) ([1d4ff14](https://github.com/adeo/mozaic-design-system/commit/1d4ff14ce7257a50d5252f1c875bfafa4f51c2ff))

# [1.49.0](https://github.com/adeo/mozaic-design-system/compare/v1.48.2...v1.49.0) (2022-11-23)

### Features

- **component/modal:** add icon in modal header ([#1267](https://github.com/adeo/mozaic-design-system/issues/1267)) ([a2206b1](https://github.com/adeo/mozaic-design-system/commit/a2206b1be009635bf0fe693e2410fdda73739a2a))

## [1.48.2](https://github.com/adeo/mozaic-design-system/compare/v1.48.1...v1.48.2) (2022-11-22)

### Bug Fixes

- **component/accordion:** improve trigger button for scoped modules ([#1265](https://github.com/adeo/mozaic-design-system/issues/1265)) ([100686a](https://github.com/adeo/mozaic-design-system/commit/100686a7a9a850ba71d3b75b7f5d5015142865ab))

# [1.47.0](https://github.com/adeo/mozaic-design-system/compare/v1.46.0...v1.47.0) (2022-11-09)

### Features

- **components/button:** improve colour a11y ([#1245](https://github.com/adeo/mozaic-design-system/issues/1245)) ([4b3ab67](https://github.com/adeo/mozaic-design-system/commit/4b3ab67fce1816219333e9db7420c1d0de909a59))
- **foundations/spacing:** add utility classes for vertical and horizontal spaces ([#1248](https://github.com/adeo/mozaic-design-system/issues/1248)) ([b55508e](https://github.com/adeo/mozaic-design-system/commit/b55508e516d8fa718c5b1d7117ab1d08c3b5db15))

# [1.46.0](https://github.com/adeo/mozaic-design-system/compare/v1.45.1...v1.46.0) (2022-11-02)

### Bug Fixes

- **components/modal/layer:** improve overlay for scoped modules ([#1242](https://github.com/adeo/mozaic-design-system/issues/1242)) ([4a9729d](https://github.com/adeo/mozaic-design-system/commit/4a9729d4d59ec78b2c020ce3e89dbc474f2f46a3))

## [1.45.1](https://github.com/adeo/mozaic-design-system/compare/v1.45.0...v1.45.1) (2022-10-27)

### Bug Fixes

- **component/tabs:** add pointer-events: none; on mc-tabs\_\_text element ([#1241](https://github.com/adeo/mozaic-design-system/issues/1241)) ([212fbe4](https://github.com/adeo/mozaic-design-system/commit/212fbe46e680b4b9e3eca0029ed087fe2f93a628))

# [1.45.0](https://github.com/adeo/mozaic-design-system/compare/v1.44.0...v1.45.0) (2022-10-26)

### Bug Fixes

- **component/phninput:** remove z-index on mc-phone-number\_\_dropdown element ([#1238](https://github.com/adeo/mozaic-design-system/issues/1238)) ([75c56bd](https://github.com/adeo/mozaic-design-system/commit/75c56bd0eef3918b130c96e500a33c96cbdb9108))

### Features

- **component/autocomplete:** improve component styles & documentation ([#1218](https://github.com/adeo/mozaic-design-system/issues/1218)) ([68fa315](https://github.com/adeo/mozaic-design-system/commit/68fa315d4ad8df87a43ebaf086c2d358d1e735c1))

# [1.44.0](https://github.com/adeo/mozaic-design-system/compare/v1.43.1...v1.44.0) (2022-10-12)

### Bug Fixes

- **component/field:** update the unicode character for no-break space ([#1214](https://github.com/adeo/mozaic-design-system/issues/1214)) ([4655ac2](https://github.com/adeo/mozaic-design-system/commit/4655ac20cb0e3b5aeb500416c00c4893e66394a5)), closes [#1207](https://github.com/adeo/mozaic-design-system/issues/1207)
- **component/phninput:** increase the z-index value ([#1236](https://github.com/adeo/mozaic-design-system/issues/1236)) ([0587901](https://github.com/adeo/mozaic-design-system/commit/05879013471e394cda9c1a656c14aacc9f29fe6d))

### Features

- **component/m-link:** remove modifiers mc-link**icon--left & mc-link**icon--right ([#1220](https://github.com/adeo/mozaic-design-system/issues/1220)) ([982b693](https://github.com/adeo/mozaic-design-system/commit/982b693d096580dcd903f3177330e7866b6ba0ab))
- **component/tabs:** implementation of the new design of the Tabs component ([#1227](https://github.com/adeo/mozaic-design-system/issues/1227)) ([13836ac](https://github.com/adeo/mozaic-design-system/commit/13836acaab44cc01c567811de95676abd67d0ecb))
- **component/tooltip:** use help cursor ([#1230](https://github.com/adeo/mozaic-design-system/issues/1230)) ([424911b](https://github.com/adeo/mozaic-design-system/commit/424911bd7e770e5a13ae575f31442ead1b4d04e3))

### Performance Improvements

- **component/layer:** improve the performance of the layer transition using translate3d ([#1206](https://github.com/adeo/mozaic-design-system/issues/1206)) ([ec827b9](https://github.com/adeo/mozaic-design-system/commit/ec827b9cd8b8c45d1976ef0d0bf4f9401e3c4e70))

## [1.43.1](https://github.com/adeo/mozaic-design-system/compare/v1.43.0...v1.43.1) (2022-09-28)

### Bug Fixes

- **component/layer:** improve the scoping of the is-open state class ([#1213](https://github.com/adeo/mozaic-design-system/issues/1213)) ([d3962df](https://github.com/adeo/mozaic-design-system/commit/d3962df84971027e7afc59c36a14feb88155ad97))

# [1.43.0](https://github.com/adeo/mozaic-design-system/compare/v1.42.1...v1.43.0) (2022-09-28)

### Features

- **component/flag:** improve long text flag behaviour ([#1212](https://github.com/adeo/mozaic-design-system/issues/1212)) ([e923ba9](https://github.com/adeo/mozaic-design-system/commit/e923ba9ec57ffa64f7efbdf4a7716da731f875fd))
- **pattern/colors:** add new LM colours ([#1210](https://github.com/adeo/mozaic-design-system/issues/1210)) ([07e3688](https://github.com/adeo/mozaic-design-system/commit/07e36880b0439c188aad10f0636f12ee1204c06c))

## [1.42.1](https://github.com/adeo/mozaic-design-system/compare/v1.42.0...v1.42.1) (2022-09-27)

### Bug Fixes

- **layouts/grid:** improvee .ml-flexy\_\_col selector scopable behaviour ([#1209](https://github.com/adeo/mozaic-design-system/issues/1209)) ([493a90b](https://github.com/adeo/mozaic-design-system/commit/493a90bb03c772a60edfb34a6608b8dda4170042))

# [1.42.0](https://github.com/adeo/mozaic-design-system/compare/v1.41.0...v1.42.0) (2022-09-14)

### Bug Fixes

- **component/datatable:** improve datatable-actions position ([#1198](https://github.com/adeo/mozaic-design-system/issues/1198)) ([614be6f](https://github.com/adeo/mozaic-design-system/commit/614be6fdb1f3f7c5e8d75e2ba237724320c06fac))
- **component/modal:** styles - replace fill-available to stretch ([#1194](https://github.com/adeo/mozaic-design-system/issues/1194)) ([4889066](https://github.com/adeo/mozaic-design-system/commit/488906650dec3b8c7ea29269a8ae8f23052a2c54))
- **component/option-card:** manage the use of the [@at-root](https://github.com/at-root) selector differently ([#1192](https://github.com/adeo/mozaic-design-system/issues/1192)) ([fffecca](https://github.com/adeo/mozaic-design-system/commit/fffecca4c51babfa2239de179c1d82c672c5e5f7))
- **generic/reset:** remove the input tag from the scope of the appearance:none rule ([#1199](https://github.com/adeo/mozaic-design-system/issues/1199)) ([41cf438](https://github.com/adeo/mozaic-design-system/commit/41cf438bc84e728cfb59d8cf38fea95392017b87)), closes [#1197](https://github.com/adeo/mozaic-design-system/issues/1197)
- **layouts/grid:** make the .ml-flexy\_\_col selector scopable ([#1195](https://github.com/adeo/mozaic-design-system/issues/1195)) ([9035c64](https://github.com/adeo/mozaic-design-system/commit/9035c64371c4d83782cba852aec14b692bde95de)), closes [#1178](https://github.com/adeo/mozaic-design-system/issues/1178)

### Features

- **component/listbox:** improve the styles and documentation of the component ([#1193](https://github.com/adeo/mozaic-design-system/issues/1193)) ([6a15da9](https://github.com/adeo/mozaic-design-system/commit/6a15da919d7d07016b93a40125c6cd5a2a0c52f5))

# [1.41.0](https://github.com/adeo/mozaic-design-system/compare/v1.40.0...v1.41.0) (2022-08-23)

### Features

- **components/tokens:** add tokens to components that had none ([a942a63](https://github.com/adeo/mozaic-design-system/commit/a942a633d2682f007cf4c6fee7096f802f85e621))

## [1.39.1](https://github.com/adeo/mozaic-design-system/compare/v1.39.0...v1.39.1) (2022-07-21)

### Bug Fixes

- **component/accordion:** improve styles to handle nested accordions ([#1174](https://github.com/adeo/mozaic-design-system/issues/1174)) ([9a7007a](https://github.com/adeo/mozaic-design-system/commit/9a7007abf5274fc5f55277bfb75d21ea4861b611))

# [1.39.0](https://github.com/adeo/mozaic-design-system/compare/v1.38.0...v1.39.0) (2022-07-20)

### Features

- **rating:** use new icons ([#1092](https://github.com/adeo/mozaic-design-system/issues/1092)) ([4d440c1](https://github.com/adeo/mozaic-design-system/commit/4d440c192fd436005405edee5efeaa289dbf3d1f))

# [1.38.0](https://github.com/adeo/mozaic-design-system/compare/v1.37.0...v1.38.0) (2022-07-06)

### Features

- **foundations/font:** use weight 700 for adeo ([#1166](https://github.com/adeo/mozaic-design-system/issues/1166)) ([980cf89](https://github.com/adeo/mozaic-design-system/commit/980cf897997190f7e2f6c96d1390aaf386a3520d))

## [1.36.3](https://github.com/adeo/mozaic-design-system/compare/v1.36.2...v1.36.3) (2022-06-23)

### Bug Fixes

- **component/grid:** enhance loop to remove stylelint issue ([#1160](https://github.com/adeo/mozaic-design-system/issues/1160)) ([eceb4a4](https://github.com/adeo/mozaic-design-system/commit/eceb4a4a387f2035c6a86f892a0ba0cc53e7beb7))

## [1.36.2](https://github.com/adeo/mozaic-design-system/compare/v1.36.1...v1.36.2) (2022-06-22)

### Bug Fixes

- **component/modal:** use fill-available ([#1158](https://github.com/adeo/mozaic-design-system/issues/1158)) ([4c9f332](https://github.com/adeo/mozaic-design-system/commit/4c9f332508743e177dbb688283204cce61829e55))

# [1.35.0](https://github.com/adeo/mozaic-design-system/compare/v1.34.0...v1.35.0) (2022-06-08)

### Bug Fixes

- **grid:** add max-width for full modifier ([#1142](https://github.com/adeo/mozaic-design-system/issues/1142)) ([c482f79](https://github.com/adeo/mozaic-design-system/commit/c482f7922707cd87ab451bc51b4f95bee80c827a))

### Features

- **grid:** add all col for base 12 ([#1143](https://github.com/adeo/mozaic-design-system/issues/1143)) ([f8e06d5](https://github.com/adeo/mozaic-design-system/commit/f8e06d56d70693a4fd5905ec454888c7cab92d2f))
- **grid:** add reset on pushed col ([#1144](https://github.com/adeo/mozaic-design-system/issues/1144)) ([6c37464](https://github.com/adeo/mozaic-design-system/commit/6c3746420b03868a362bbcd38f5f6bce9f62b77c))

# [1.33.0](https://github.com/adeo/mozaic-design-system/compare/v1.32.0...v1.33.0) (2022-05-11)

### Features

- **phonenumber:** use emoji flags ([#1125](https://github.com/adeo/mozaic-design-system/issues/1125)) ([1e7bf52](https://github.com/adeo/mozaic-design-system/commit/1e7bf527c7938aaddd8da6a409f433f269ac6728))
- **tooltip:** add no pointer variation ([#1126](https://github.com/adeo/mozaic-design-system/issues/1126)) ([8c5eb76](https://github.com/adeo/mozaic-design-system/commit/8c5eb764d44a95744c1708ba6210baff01d70b37))

# [1.31.0](https://github.com/adeo/mozaic-design-system/compare/v1.30.0...v1.31.0) (2022-04-27)

### Bug Fixes

- **component/dropdown:** add arrow up when dropdown is open ([#1111](https://github.com/adeo/mozaic-design-system/issues/1111)) ([6d1ca77](https://github.com/adeo/mozaic-design-system/commit/6d1ca7742c8a2967a4e2a3b27db4b9ef3c893285))

### Features

- **component/divider:** add new sizes ([#1110](https://github.com/adeo/mozaic-design-system/issues/1110)) ([2461679](https://github.com/adeo/mozaic-design-system/commit/2461679359f8abcaf389d73128aea701f14d51c0))
- **component/layer:** allow the layer to open from the left to the right ([#1115](https://github.com/adeo/mozaic-design-system/issues/1115)) ([15c1857](https://github.com/adeo/mozaic-design-system/commit/15c18574789878f7cd6d40461c31ecdb5b8a9ca8))
- **component/listbox:** add flags preview ([#1114](https://github.com/adeo/mozaic-design-system/issues/1114)) ([9af868f](https://github.com/adeo/mozaic-design-system/commit/9af868f7112a2c9f9fe3006c46588210e2aeebaf))
- **component/loader:** add divider under the header ([#1112](https://github.com/adeo/mozaic-design-system/issues/1112)) ([84c843b](https://github.com/adeo/mozaic-design-system/commit/84c843bbac71190c270ea8607b3ee0bb1936c09f))
- **component/optioncard:** add label tag to focusable elements list ([1680672](https://github.com/adeo/mozaic-design-system/commit/1680672cac90050146c3e37c89951fcaaccee07c))
- **component/tag:** update tags colors ([#1116](https://github.com/adeo/mozaic-design-system/issues/1116)) ([dd5df6d](https://github.com/adeo/mozaic-design-system/commit/dd5df6da04509355b004d8f5538da0c18c681982))

# [1.30.0](https://github.com/adeo/mozaic-design-system/compare/v1.29.1...v1.30.0) (2022-04-13)

### Bug Fixes

- **component/overlay-loader:** update overlay bgcolor for ADEO Preset ([#1093](https://github.com/adeo/mozaic-design-system/issues/1093)) ([01d1be8](https://github.com/adeo/mozaic-design-system/commit/01d1be8a8bc3e3ef397346d43ae8319f01a67b2e))

### Features

- **component/accordion:** change background image inside accordion button ([#1096](https://github.com/adeo/mozaic-design-system/issues/1096)) ([73b2001](https://github.com/adeo/mozaic-design-system/commit/73b200102b62d65c23e6e1506f1890c46598c6b8)), closes [#1037](https://github.com/adeo/mozaic-design-system/issues/1037)
- **component/modal:** improve the display of forms within a modal ([#1089](https://github.com/adeo/mozaic-design-system/issues/1089)) ([8b6a19f](https://github.com/adeo/mozaic-design-system/commit/8b6a19fee74204da1995169e146dff76915b80d2))

## [1.29.1](https://github.com/adeo/mozaic-design-system/compare/v1.29.0...v1.29.1) (2022-04-04)

### Bug Fixes

- **component/listbox:** enhance left opening ([#1088](https://github.com/adeo/mozaic-design-system/issues/1088)) ([adf239e](https://github.com/adeo/mozaic-design-system/commit/adf239e5f48c0e5dbec57ea85afd6eb91ef3f612))
- **component/toggle:** maintain the input position within the component ([#1087](https://github.com/adeo/mozaic-design-system/issues/1087)) ([c2771f0](https://github.com/adeo/mozaic-design-system/commit/c2771f04c53cf633d4fc6fe87c1cdd376c0d04b4))

# [1.29.0](https://github.com/adeo/mozaic-design-system/compare/v1.28.0...v1.29.0) (2022-03-30)

### Features

- **autocomplete:** add autocomplete component ([#1080](https://github.com/adeo/mozaic-design-system/issues/1080)) ([4e99f1a](https://github.com/adeo/mozaic-design-system/commit/4e99f1a227e39077cee7b133eafaafc2a7340100))
- **dropdown:** add dropdown ([#1078](https://github.com/adeo/mozaic-design-system/issues/1078)) ([d900e69](https://github.com/adeo/mozaic-design-system/commit/d900e69a837713bea20edd3572c8867d33d07c8a))
- **foundations/icons:** update icon set ([#1069](https://github.com/adeo/mozaic-design-system/issues/1069)) ([95065d8](https://github.com/adeo/mozaic-design-system/commit/95065d81a333cea0be60d16c1c74c041bb03b24c))
- **generic/cssreset:** add hidden attr & .visually-hidden helpers ([#1081](https://github.com/adeo/mozaic-design-system/issues/1081)) ([af0e3a0](https://github.com/adeo/mozaic-design-system/commit/af0e3a051ae7ffebdff6e79b3ee6610802220612))
- **listbox:** add listbox component ([#1061](https://github.com/adeo/mozaic-design-system/issues/1061)) ([9eb36df](https://github.com/adeo/mozaic-design-system/commit/9eb36dfde80469d05513783b05bfe12cda44cd1c))

# [1.28.0](https://github.com/adeo/mozaic-design-system/compare/v1.27.1...v1.28.0) (2022-03-23)

### Bug Fixes

- **component/loader:** unify the loader text colour & the spinner colour ([#1068](https://github.com/adeo/mozaic-design-system/issues/1068)) ([10c1ccb](https://github.com/adeo/mozaic-design-system/commit/10c1ccbfda81cd77c5d213a7361f459226d83733))

# [1.27.0](https://github.com/adeo/mozaic-design-system/compare/v1.26.1...v1.27.0) (2022-03-16)

### Features

- **component/loader:** add the new Loader component ([#1060](https://github.com/adeo/mozaic-design-system/issues/1060)) ([bb0a3d2](https://github.com/adeo/mozaic-design-system/commit/bb0a3d2ad694b24ec70f2cd1688b936f2854885e))
- **components/layer:** update content paddings values ([#1063](https://github.com/adeo/mozaic-design-system/issues/1063)) ([84084d7](https://github.com/adeo/mozaic-design-system/commit/84084d70602484275892606c052540303ebc4c1b)), closes [#978](https://github.com/adeo/mozaic-design-system/issues/978)
- **components/modal:** update paddings values + add a divider on the header ([#921](https://github.com/adeo/mozaic-design-system/issues/921)) ([109afa4](https://github.com/adeo/mozaic-design-system/commit/109afa4aa5a4bee12daa5a29647b7e86bf208c6d))

## [1.26.1](https://github.com/adeo/mozaic-design-system/compare/v1.26.0...v1.26.1) (2022-03-02)

### Bug Fixes

- **opt-card:** enable having button or link clickable ([#1046](https://github.com/adeo/mozaic-design-system/issues/1046)) ([b85a310](https://github.com/adeo/mozaic-design-system/commit/b85a3107e38584348aa05762651024110a7e5b01))

# [1.26.0](https://github.com/adeo/mozaic-design-system/compare/v1.25.0...v1.26.0) (2022-03-02)

**Note:** Version bump only for package @mozaic-ds/styles

# [1.25.0](https://github.com/adeo/mozaic-design-system/compare/v1.24.1...v1.25.0) (2022-02-16)

### Features

- **component/option-card:** increase CSS specificity on the input element ([#1033](https://github.com/adeo/mozaic-design-system/issues/1033)) ([37f1704](https://github.com/adeo/mozaic-design-system/commit/37f170417b0df864638cc3dc35c52f050c8147f0))
- **component/pswdinput:** increase CSS specificity on the input[type=password"] element ([#1032](https://github.com/adeo/mozaic-design-system/issues/1032)) ([9cbed7c](https://github.com/adeo/mozaic-design-system/commit/9cbed7c34a3d37be0bc15c08acfa3b59c6684e06))

# [2.0.0-rc.0](https://github.com/adeo/mozaic-design-system/compare/v1.24.2...v2.0.0-rc.0) (2022-02-08)

### Bug Fixes

- **comment:** add comment in option card ([459fb53](https://github.com/adeo/mozaic-design-system/commit/459fb53c8c783abc9a4a57890fa89e20318b43a2))

### Features

- **pattern/colors:** add new LM colours ([#999](https://github.com/adeo/mozaic-design-system/issues/999)) ([8854fb8](https://github.com/adeo/mozaic-design-system/commit/8854fb89fda1ecd3d9be10b9fcc7aa102fdc7102))

## [1.24.1](https://github.com/adeo/mozaic-design-system/compare/v1.24.0...v1.24.1) (2022-02-02)

### Bug Fixes

- **comment:** add comment in option card ([459fb53](https://github.com/adeo/mozaic-design-system/commit/459fb53c8c783abc9a4a57890fa89e20318b43a2))

# [1.24.0](https://github.com/adeo/mozaic-design-system/compare/v1.23.1...v1.24.0) (2022-02-02)

### Bug Fixes

- **component/breadcrumb:** correct the size of the breadcrumb links ([#1006](https://github.com/adeo/mozaic-design-system/issues/1006)) ([9a46c60](https://github.com/adeo/mozaic-design-system/commit/9a46c60c03b5c32390482383c384eae2bc8553d5))

### Features

- **pattern/font:** set Roboto font-family when using the Adeo preset ([#1018](https://github.com/adeo/mozaic-design-system/issues/1018)) ([6612e13](https://github.com/adeo/mozaic-design-system/commit/6612e131131b088f9017ffc5620ca4f4903ed924))
- **pattern/optiongroup:** add component ([#992](https://github.com/adeo/mozaic-design-system/issues/992)) ([1acae2c](https://github.com/adeo/mozaic-design-system/commit/1acae2c25beda79c20d00821277d1eca0be69300))

## [1.23.1](https://github.com/adeo/mozaic-design-system/compare/v1.23.0...v1.23.1) (2022-01-10)

### Bug Fixes

- **component/accordion:** allow title to go to line on small screens ([#994](https://github.com/adeo/mozaic-design-system/issues/994)) ([0d3e02c](https://github.com/adeo/mozaic-design-system/commit/0d3e02c79d857cd95df7d452adbc6cc96dc30bef))

# [1.23.0](https://github.com/adeo/mozaic-design-system/compare/v1.22.1...v1.23.0) (2022-01-05)

### Bug Fixes

- **component/pagination:** change margin to 16px ([#990](https://github.com/adeo/mozaic-design-system/issues/990)) ([2a24750](https://github.com/adeo/mozaic-design-system/commit/2a247508ba9373ac1b34075671d5ee131315e8b8))

### Features

- **component/pagination:** add the new 'compact' variation ([#993](https://github.com/adeo/mozaic-design-system/issues/993)) ([856986b](https://github.com/adeo/mozaic-design-system/commit/856986bece431d467b28be0e15840a8ab5773420))

## [1.22.1](https://github.com/adeo/mozaic-design-system/compare/v1.22.0...v1.22.1) (2021-12-22)

### Bug Fixes

- **component/button:** ensure that the buttons with icons keep the right height ([#986](https://github.com/adeo/mozaic-design-system/issues/986)) ([16a613b](https://github.com/adeo/mozaic-design-system/commit/16a613bd2f9e767704161ca449afc2d9b17b1974))

# [1.22.0](https://github.com/adeo/mozaic-design-system/compare/v1.21.0...v1.22.0) (2021-12-22)

### Bug Fixes

- **tools/tokens:** implement a custom SASS function to manage rgba colors ([#979](https://github.com/adeo/mozaic-design-system/issues/979)) ([0178567](https://github.com/adeo/mozaic-design-system/commit/01785675b9d85b6e30b3de9c523190336ed768bb)), closes [#937](https://github.com/adeo/mozaic-design-system/issues/937)

### Features

- **component/badge:** ensure that badges are always on one line ([#984](https://github.com/adeo/mozaic-design-system/issues/984)) ([6e17e2a](https://github.com/adeo/mozaic-design-system/commit/6e17e2a28db00ced857898573c991de5b06b88ee))
- **component/button:** improve the button behaviour with long label ([#982](https://github.com/adeo/mozaic-design-system/issues/982)) ([e957ae4](https://github.com/adeo/mozaic-design-system/commit/e957ae40eef263f517777bbbc8e1e7be564ce9c5)), closes [#954](https://github.com/adeo/mozaic-design-system/issues/954)
- **component/datatable:** add the new DataTable component ([#953](https://github.com/adeo/mozaic-design-system/issues/953)) ([0970590](https://github.com/adeo/mozaic-design-system/commit/097059005f31a68942672b55391f1bc07e1ccc17))
- **component/pagination:** change the breakpoint of the size behaviour - XL to L ([#983](https://github.com/adeo/mozaic-design-system/issues/983)) ([dfab6fb](https://github.com/adeo/mozaic-design-system/commit/dfab6fb488d8bf9382dbdefd33e3eb1ea8e74019))

# [1.21.0](https://github.com/adeo/mozaic-design-system/compare/v1.20.1...v1.21.0) (2021-12-08)

### Bug Fixes

- **component/checkbox:** adjust the visual rendering of the checked & disabled status ([#975](https://github.com/adeo/mozaic-design-system/issues/975)) ([4208b97](https://github.com/adeo/mozaic-design-system/commit/4208b9747fc8a8e71c47e7703af14422493b33e8)), closes [#962](https://github.com/adeo/mozaic-design-system/issues/962)
- **component/modal:** adjust the margin-right behavior of the footer button ([#967](https://github.com/adeo/mozaic-design-system/issues/967)) ([581bf7c](https://github.com/adeo/mozaic-design-system/commit/581bf7c23f7fde91abe96c3d22b35a52e2808a11))
- **tokens:** update of the token value of some components ([#974](https://github.com/adeo/mozaic-design-system/issues/974)) ([e48317d](https://github.com/adeo/mozaic-design-system/commit/e48317d5d806e1c554d08cd471344807edcb3e75))

### Reverts

- Revert "chore(release): publish" ([2042380](https://github.com/adeo/mozaic-design-system/commit/204238091c6d99ded469f97e2a04a9ba4c3b92bc))

## [1.20.1](https://github.com/adeo/mozaic-design-system/compare/v1.20.0...v1.20.1) (2021-11-15)

### Bug Fixes

- **component/accordion:** correct the display of the opening icon ([#959](https://github.com/adeo/mozaic-design-system/issues/959)) ([57ce21f](https://github.com/adeo/mozaic-design-system/commit/57ce21f84b8f599ea9956547356604e18533fa72))
- **tooltip:** clean arrow base ([#958](https://github.com/adeo/mozaic-design-system/issues/958)) ([0901965](https://github.com/adeo/mozaic-design-system/commit/0901965821e4ac5aeed2a5f27ed6c2eed35544e1))

# [1.20.0](https://github.com/adeo/mozaic-design-system/compare/v1.19.0...v1.20.0) (2021-11-12)

### Features

- **component/accordion:** update the HTML structure of the component & add variation with checkbox and toggle ([#912](https://github.com/adeo/mozaic-design-system/issues/912)) ([0912aeb](https://github.com/adeo/mozaic-design-system/commit/0912aeba800268bb0991081f101ee99a680738ee))
- **tooltip:** add border for a11y ([#955](https://github.com/adeo/mozaic-design-system/issues/955)) ([5a24f49](https://github.com/adeo/mozaic-design-system/commit/5a24f49f3d55ccc0d8fbe3d6952814a8bd776454))

# [1.19.0](https://github.com/adeo/mozaic-design-system/compare/v1.18.0...v1.19.0) (2021-10-27)

### Bug Fixes

- **component/layer:** always position the footer above the content ([#947](https://github.com/adeo/mozaic-design-system/issues/947)) ([e8bf399](https://github.com/adeo/mozaic-design-system/commit/e8bf3991e6a5de9b97a24c60eabf145e26d7d8eb))

### Features

- **component/toggle:** improve toggle's a11y ([#941](https://github.com/adeo/mozaic-design-system/issues/941)) ([4853931](https://github.com/adeo/mozaic-design-system/commit/48539317221399b6c5d883d447a7b72653fceeb2)), closes [#710](https://github.com/adeo/mozaic-design-system/issues/710)
- **layouts/container:** improve ml-container size behaviour ([#946](https://github.com/adeo/mozaic-design-system/issues/946)) ([b05ce52](https://github.com/adeo/mozaic-design-system/commit/b05ce527821b131a9d8eeb52034e4f56846a8905))

# [1.18.0](https://github.com/adeo/mozaic-design-system/compare/v1.17.1...v1.18.0) (2021-09-29)

**Note:** Version bump only for package @mozaic-ds/styles

## [1.17.1](https://github.com/adeo/mozaic-design-system/compare/v1.17.0...v1.17.1) (2021-09-15)

### Bug Fixes

- **toggle:** add missing classes ([#925](https://github.com/adeo/mozaic-design-system/issues/925)) ([4a12c53](https://github.com/adeo/mozaic-design-system/commit/4a12c53d8d502ae85eab2959d03c59d71e162575))

# [1.17.0](https://github.com/adeo/mozaic-design-system/compare/v1.16.0...v1.17.0) (2021-09-15)

### Bug Fixes

- **patterns/dialogs:** prevent dialog elements to be focusable on modal & layer ([#895](https://github.com/adeo/mozaic-design-system/issues/895)) ([18241c3](https://github.com/adeo/mozaic-design-system/commit/18241c36907f3f38644d6345bc55d4c533992ddc)), closes [#887](https://github.com/adeo/mozaic-design-system/issues/887) [#888](https://github.com/adeo/mozaic-design-system/issues/888)
- **patterns/layer:** make the layer's shadow unclickable ([#911](https://github.com/adeo/mozaic-design-system/issues/911)) ([8afb9a9](https://github.com/adeo/mozaic-design-system/commit/8afb9a9b1214257180b454c0a2bd2cf5b951f01a))
- **patterns/layer:** update paddings values ([#916](https://github.com/adeo/mozaic-design-system/issues/916)) ([ee02154](https://github.com/adeo/mozaic-design-system/commit/ee021542712e5fa47feef0f45dc7fe7163481ed0))
- **patterns/toggle:** update the label padding value from mixin ([#913](https://github.com/adeo/mozaic-design-system/issues/913)) ([9f3e4bd](https://github.com/adeo/mozaic-design-system/commit/9f3e4bda591216934ade53a980d84d03f30aaf26))

### Features

- **badge:** add badge component code ([#919](https://github.com/adeo/mozaic-design-system/issues/919)) ([eea3b65](https://github.com/adeo/mozaic-design-system/commit/eea3b65cb0966f3fad99739cf6024bdb5c3e969b))
- **flex:** add missing justify modifier ([#910](https://github.com/adeo/mozaic-design-system/issues/910)) ([fe905df](https://github.com/adeo/mozaic-design-system/commit/fe905df95708c0b64f33ce6c0d385cd1cf665931))
- **patterns/rating-stars:** add new variations with label, link & overall score ([#920](https://github.com/adeo/mozaic-design-system/issues/920)) ([e6acb92](https://github.com/adeo/mozaic-design-system/commit/e6acb9220da330c38ee447211f37bf3a097ac85e))

# [1.16.0](https://github.com/adeo/mozaic-design-system/compare/v1.15.0...v1.16.0) (2021-09-01)

### Bug Fixes

- **patterns/tabs:** set font-weight to semi-bold for the active tab ([#893](https://github.com/adeo/mozaic-design-system/issues/893)) ([7ee35ba](https://github.com/adeo/mozaic-design-system/commit/7ee35ba344a3788ab2f7c870c8979472f7b2db71))
- **patterns/text-input:** update the line-height & paddings of the component ([#894](https://github.com/adeo/mozaic-design-system/issues/894)) ([d309cfd](https://github.com/adeo/mozaic-design-system/commit/d309cfdefd4b9305676de84dcf11d9878616a61d)), closes [#892](https://github.com/adeo/mozaic-design-system/issues/892)

### Features

- **a11y:** add a mixin allowing to hide content visually ([#905](https://github.com/adeo/mozaic-design-system/issues/905)) ([d4ea4e6](https://github.com/adeo/mozaic-design-system/commit/d4ea4e6a5f57117f2dad6082f05d12ac8862a263))
- **patterns/notification:** add new variation w/ buttons ([#897](https://github.com/adeo/mozaic-design-system/issues/897)) ([204b6ab](https://github.com/adeo/mozaic-design-system/commit/204b6ab82be8917bd083d35b48d8ff569a7d30cd))
- **patterns/passwordinput:** add new Password Input component ([#896](https://github.com/adeo/mozaic-design-system/issues/896)) ([af4546a](https://github.com/adeo/mozaic-design-system/commit/af4546a1a5018e530b60f7090b24cb133882a72c))
- **patterns/stepper:** add new 'compact' variation ([#900](https://github.com/adeo/mozaic-design-system/issues/900)) ([cfc8a04](https://github.com/adeo/mozaic-design-system/commit/cfc8a04015ba9861e3ae0622bfe6824f74ca74d9))

# [1.15.0](https://github.com/adeo/mozaic-design-system/compare/v1.14.0...v1.15.0) (2021-08-18)

### Features

- **layout/container:** add 'box-sizing: border-box' property to .ml-container ([#880](https://github.com/adeo/mozaic-design-system/issues/880)) ([38be44e](https://github.com/adeo/mozaic-design-system/commit/38be44ec150d502c3dbcb3f56e0b5da7f0cfed4f))

# [1.14.0](https://github.com/adeo/mozaic-design-system/compare/v1.13.1...v1.14.0) (2021-08-04)

### Bug Fixes

- **patterns:** increase css specificity in fields and breadcrumb ([#879](https://github.com/adeo/mozaic-design-system/issues/879)) ([3eacc0b](https://github.com/adeo/mozaic-design-system/commit/3eacc0bb53a8d1b290c4f72be48f3e7b4907fbe6))

### Features

- **patterns/textinput:** add 'cursor: pointer' property for input[type=search] ([#881](https://github.com/adeo/mozaic-design-system/issues/881)) ([90a871d](https://github.com/adeo/mozaic-design-system/commit/90a871db2ab62179d7f3fcfa6c45523a7aa2508e))

## [1.13.1](https://github.com/adeo/mozaic-design-system/compare/v1.13.0...v1.13.1) (2021-07-21)

**Note:** Version bump only for package @mozaic-ds/styles

# [1.13.0](https://github.com/adeo/mozaic-design-system/compare/v1.12.0...v1.13.0) (2021-07-07)

### Bug Fixes

- **patterns/accordion:** increase max-height to manage long contents ([#859](https://github.com/adeo/mozaic-design-system/issues/859)) ([07f34b2](https://github.com/adeo/mozaic-design-system/commit/07f34b28716740343a87a66d716df6251316a9fe))
- **patterns/tooltip:** prevent side-effects when using white-space on parent els ([#866](https://github.com/adeo/mozaic-design-system/issues/866)) ([92ca613](https://github.com/adeo/mozaic-design-system/commit/92ca613b7779f337e79fab78009cf689d0692376))

### Features

- **button:** only icon usage and accessibility tab ([#857](https://github.com/adeo/mozaic-design-system/issues/857)) ([1298052](https://github.com/adeo/mozaic-design-system/commit/12980523d228acb9ce9740192c8b0d909aa5d46c))
- **patterns/toggle:** add a variation for visually hide the toggle label ([#867](https://github.com/adeo/mozaic-design-system/issues/867)) ([f5bcf78](https://github.com/adeo/mozaic-design-system/commit/f5bcf7879cc66ced8b1ad52db9619a54e49c02b6)), closes [#860](https://github.com/adeo/mozaic-design-system/issues/860)
- **styles/utilities:** add a css utility class to prevent body from scrolling ([#861](https://github.com/adeo/mozaic-design-system/issues/861)) ([e9df695](https://github.com/adeo/mozaic-design-system/commit/e9df695cfaac098ae746d751ac7c69eae7f316f9))

# [1.12.0](https://github.com/adeo/mozaic-design-system/compare/v1.11.0...v1.12.0) (2021-06-23)

**Note:** Version bump only for package @mozaic-ds/styles

# [1.11.0](https://github.com/adeo/mozaic-design-system/compare/v1.10.0...v1.11.0) (2021-06-09)

### Features

- **patterns/modal:** add css class .is-open & .is-visible on opening ([#849](https://github.com/adeo/mozaic-design-system/issues/849)) ([d281863](https://github.com/adeo/mozaic-design-system/commit/d28186338176c3bfdfe1c0754cef8b8c4ecb3c6d))

# [1.10.0](https://github.com/adeo/mozaic-design-system/compare/v1.9.0...v1.10.0) (2021-05-26)

### Bug Fixes

- **tools/sass:** use the new math.div() function for divisions ([#834](https://github.com/adeo/mozaic-design-system/issues/834)) ([ee4eddb](https://github.com/adeo/mozaic-design-system/commit/ee4eddb9340c12a6ffd7ef151d4692e924304f95))

### Features

- **patterns/stepper:** add stepper component ([#799](https://github.com/adeo/mozaic-design-system/issues/799)) ([d8fccf3](https://github.com/adeo/mozaic-design-system/commit/d8fccf3f260427aa52f5d02c18fa82b004f4415b))

# [1.9.0](https://github.com/adeo/mozaic-design-system/compare/v1.8.0...v1.9.0) (2021-05-12)

### Bug Fixes

- **pattern/tabs:** add a pointer-events on tabs dropdown variation ([#820](https://github.com/adeo/mozaic-design-system/issues/820)) ([6a64c71](https://github.com/adeo/mozaic-design-system/commit/6a64c717c405a79311bccc25e6a5a4e37b7717dd))
- **phonenumber:** add white background for list ([#814](https://github.com/adeo/mozaic-design-system/issues/814)) ([2729df4](https://github.com/adeo/mozaic-design-system/commit/2729df466f7f7e762e6dee74fe26e985ed79066c))

### Features

- **pattern/progressbar:** add new size variation - xs variation ([#818](https://github.com/adeo/mozaic-design-system/issues/818)) ([cabf5f6](https://github.com/adeo/mozaic-design-system/commit/cabf5f6b2a82912b90b62d6b73bb1776a5d47e01))

# [1.8.0](https://github.com/adeo/mozaic-design-system/compare/v1.7.1...v1.8.0) (2021-04-28)

### Bug Fixes

- **patterns:** a11y - fix pseudo-element behaviour ([#806](https://github.com/adeo/mozaic-design-system/issues/806)) ([0b8fc1e](https://github.com/adeo/mozaic-design-system/commit/0b8fc1edbc3a193f020c79d06d246916506eb06b))
- **patterns/card:** unify unboxed & outlined cards width on breakpoint M ([#801](https://github.com/adeo/mozaic-design-system/issues/801)) ([20113ce](https://github.com/adeo/mozaic-design-system/commit/20113ced3c4f4f83a653ec8ae086840338b80561))
- **patterns/layer:** make the layer overlay clickable ([#803](https://github.com/adeo/mozaic-design-system/issues/803)) ([b2e4a46](https://github.com/adeo/mozaic-design-system/commit/b2e4a463cc1bc72633698ee56a55cb03f56776ec))

## [1.7.2](https://github.com/adeo/mozaic-design-system/compare/v1.7.1...v1.7.2) (2021-04-27)

### Bug Fixes

- **patterns:** a11y - fix pseudo-element behaviour ([c2e04d3](https://github.com/adeo/mozaic-design-system/commit/c2e04d38451b756a248a5c6c7c82f2ffb40d6969))

## [1.7.1](https://github.com/adeo/mozaic-design-system/compare/v1.7.0...v1.7.1) (2021-04-14)

### Bug Fixes

- **tools/tokens:** fix missing tokens ([#795](https://github.com/adeo/mozaic-design-system/issues/795)) ([3674ef8](https://github.com/adeo/mozaic-design-system/commit/3674ef83691c3cbba3e8e716c4b2fd2ee1d8e36b))

# [1.7.0](https://github.com/adeo/mozaic-design-system/compare/v1.6.2...v1.7.0) (2021-04-14)

### Bug Fixes

- **patterns/layers:** update layer widths ([#789](https://github.com/adeo/mozaic-design-system/issues/789)) ([dae9ef1](https://github.com/adeo/mozaic-design-system/commit/dae9ef170a28a8453f0be29cc7dceebed3765b81))

### Features

- **layout/grid:** add --justify-between and --grow modifiers ([#793](https://github.com/adeo/mozaic-design-system/issues/793)) ([6072947](https://github.com/adeo/mozaic-design-system/commit/6072947f06388a6a89cd9ff5566d32b115e49083))
- **patterns:** a11y - standardize focus states ([#788](https://github.com/adeo/mozaic-design-system/issues/788)) ([1e34b86](https://github.com/adeo/mozaic-design-system/commit/1e34b867fbe281b1a8a7804acac690e33718f0d3))
- **patterns/phonenumber:** add phone number input ([#780](https://github.com/adeo/mozaic-design-system/issues/780)) ([3d74fa9](https://github.com/adeo/mozaic-design-system/commit/3d74fa90d3c38a2d0f10c4a646bc1e080611088a))

## [1.6.2](https://github.com/adeo/mozaic-design-system/compare/v1.6.1...v1.6.2) (2021-04-01)

### Bug Fixes

- **layout/grid:** update ml-flexy\_\_col--initial behaviour ([#786](https://github.com/adeo/mozaic-design-system/issues/786)) ([c5e33e8](https://github.com/adeo/mozaic-design-system/commit/c5e33e84ac6af7f61eb27dddc4f582f6b6d51e08))

## [1.6.1](https://github.com/adeo/mozaic-design-system/compare/v1.6.0...v1.6.1) (2021-03-31)

### Bug Fixes

- **pattern/accordion:** add transition on content ([#770](https://github.com/adeo/mozaic-design-system/issues/770)) ([fe3a0c9](https://github.com/adeo/mozaic-design-system/commit/fe3a0c97b4b31b1ea23894af26201883a144c8b2))

# [1.6.0](https://github.com/adeo/mozaic-design-system/compare/v1.5.0...v1.6.0) (2021-03-17)

### Bug Fixes

- **patterns/accordion:** a11y - manage focusable elements when accordion is closed ([#767](https://github.com/adeo/mozaic-design-system/issues/767)) ([17c8ee1](https://github.com/adeo/mozaic-design-system/commit/17c8ee19740ff4f26c1e745ba4ef702a12229a82)), closes [#754](https://github.com/adeo/mozaic-design-system/issues/754)
- **patterns/modal:** update height and width values ([#766](https://github.com/adeo/mozaic-design-system/issues/766)) ([1f77100](https://github.com/adeo/mozaic-design-system/commit/1f77100caad6e0544da9c70133adef34f8f79ddc))

### Features

- **patterns/card:** add card pattern ([#724](https://github.com/adeo/mozaic-design-system/issues/724)) ([5291072](https://github.com/adeo/mozaic-design-system/commit/5291072e785bc7f8e0d439bba8cee68cd9f4dc0c)), closes [#526](https://github.com/adeo/mozaic-design-system/issues/526)
- **patterns/layer:** add a new variation for a scrollbar to the layer's edge ([#764](https://github.com/adeo/mozaic-design-system/issues/764)) ([1e5016e](https://github.com/adeo/mozaic-design-system/commit/1e5016e28863deda24e2c34e2d81d41dd7dba18f))
- **tools/sass:** add a sass function to get the parent selector ([#765](https://github.com/adeo/mozaic-design-system/issues/765)) ([5ad1d49](https://github.com/adeo/mozaic-design-system/commit/5ad1d4971e1109d82abe3d637717c8750072b807)), closes [#721](https://github.com/adeo/mozaic-design-system/issues/721)

# [1.5.0](https://github.com/adeo/mozaic-design-system/compare/v1.4.0...v1.5.0) (2021-03-03)

### Bug Fixes

- **pattern/qtyselector:** remove spin button in mozilla ([#743](https://github.com/adeo/mozaic-design-system/issues/743)) ([2985fc5](https://github.com/adeo/mozaic-design-system/commit/2985fc5c060d0080c7957ee6d8b46e000b958120))
- **patterns/notification:** correct the closing icon position ([#747](https://github.com/adeo/mozaic-design-system/issues/747)) ([51230d3](https://github.com/adeo/mozaic-design-system/commit/51230d3788e08911f7f7259d7d857ffe2aa3ce96))

### Features

- **foundations/fonts:** add font-display:swap on [@font-face](https://github.com/font-face) declarations ([#745](https://github.com/adeo/mozaic-design-system/issues/745)) ([ca30329](https://github.com/adeo/mozaic-design-system/commit/ca30329e515a1f7e0d7488443a65525f2deea6b8)), closes [#736](https://github.com/adeo/mozaic-design-system/issues/736)
- **patterns/button:** improve button focus for accessibility ([#746](https://github.com/adeo/mozaic-design-system/issues/746)) ([aa5e98c](https://github.com/adeo/mozaic-design-system/commit/aa5e98c51f0d1d3efb4b471a900e9f4c78af199f))
- **patterns/icons:** add arrow-top-16 in sass inline-icons function ([#750](https://github.com/adeo/mozaic-design-system/issues/750)) ([cc163c2](https://github.com/adeo/mozaic-design-system/commit/cc163c26fba40cf5a1250ccb9851b50808e60d4f))

# [1.4.0](https://github.com/adeo/mozaic-design-system/compare/v1.3.0...v1.4.0) (2021-02-17)

### Bug Fixes

- **patterns/accordion:** improve accordions accessibility ([#730](https://github.com/adeo/mozaic-design-system/issues/730)) ([6b9eba7](https://github.com/adeo/mozaic-design-system/commit/6b9eba77f7f46416060b2b32d3d0a3b2f5a9041b)), closes [#729](https://github.com/adeo/mozaic-design-system/issues/729)

### Features

- **patterns/checkbox:** add indeterminate case ([#728](https://github.com/adeo/mozaic-design-system/issues/728)) ([3fd0b84](https://github.com/adeo/mozaic-design-system/commit/3fd0b843e9f250219c529ebff16a0b47b56ffef4))
- **patterns/notification:** add small notification variation ([#738](https://github.com/adeo/mozaic-design-system/issues/738)) ([237e846](https://github.com/adeo/mozaic-design-system/commit/237e846514d36a59f20ffd90258f1dc0728d5a25))

# [1.3.0](https://github.com/adeo/mozaic-design-system/compare/v1.2.0...v1.3.0) (2021-02-03)

### Features

- **patterns/accordions:** add small accordions variation ([#726](https://github.com/adeo/mozaic-design-system/issues/726)) ([0ce15a3](https://github.com/adeo/mozaic-design-system/commit/0ce15a3b0856823860d6bda1427f6259cb0c1fdf))

# [1.2.0](https://github.com/adeo/mozaic-design-system/compare/v1.1.0...v1.2.0) (2021-01-20)

### Bug Fixes

- **patterns/hero:** remove unnecessary z-index ([#716](https://github.com/adeo/mozaic-design-system/issues/716)) ([e596db1](https://github.com/adeo/mozaic-design-system/commit/e596db1160f4ba110c9aa7071d16f038ce774bef))

### Features

- **foundations/font:** add a parameter to the import-font-families() mixin ([#723](https://github.com/adeo/mozaic-design-system/issues/723)) ([5eca9d1](https://github.com/adeo/mozaic-design-system/commit/5eca9d106ec71e7808e5861bf4f8441326d56e4e)), closes [#695](https://github.com/adeo/mozaic-design-system/issues/695)
- **foundations/ratio:** add utility and helper for ratios ([#722](https://github.com/adeo/mozaic-design-system/issues/722)) ([9a0896c](https://github.com/adeo/mozaic-design-system/commit/9a0896c9fc8bc1a4cdf163982ee9632973d26ceb)), closes [#664](https://github.com/adeo/mozaic-design-system/issues/664)
- **pattern/hero:** remove --boxed-bottom modifier ([#720](https://github.com/adeo/mozaic-design-system/issues/720)) ([52ab18c](https://github.com/adeo/mozaic-design-system/commit/52ab18ceb2ca7b3ee1056fafb204731ab8a5ed64))
- **pattern/tabs:** add no-shadow variation ([#719](https://github.com/adeo/mozaic-design-system/issues/719)) ([fab3de1](https://github.com/adeo/mozaic-design-system/commit/fab3de1f9718310d26a0c9fb3f01a9dd808e9521))

# [1.1.0](https://github.com/adeo/mozaic-design-system/compare/v1.0.2...v1.1.0) (2021-01-07)

### Features

- **pattern/tags:** removable tag - add text to the remove button ([#713](https://github.com/adeo/mozaic-design-system/issues/713)) ([552aeab](https://github.com/adeo/mozaic-design-system/commit/552aeabb4d100e4ab6ecd034f628157ba8146fcd))
- **patterns/hero:** add the mc-hero--boxed-l modifier ([#706](https://github.com/adeo/mozaic-design-system/issues/706)) ([0637329](https://github.com/adeo/mozaic-design-system/commit/0637329fc48297d12098feb8f734e7742278e204))

## [1.0.2](https://github.com/adeo/mozaic-design-system/compare/v1.0.1...v1.0.2) (2020-12-23)

### Bug Fixes

- **patterns/breadcrumb:** adjust breadcrumb behavior on smaller breakpoints ([#701](https://github.com/adeo/mozaic-design-system/issues/701)) ([b2fa9c8](https://github.com/adeo/mozaic-design-system/commit/b2fa9c8f9ef2732d8358ce9cd3e86b1741f4903e))

### Features

- **pattern/modal:** add overflow modifier ([#700](https://github.com/adeo/mozaic-design-system/issues/700)) ([5b2cbf0](https://github.com/adeo/mozaic-design-system/commit/5b2cbf0a5703f873a1a40fea8aadda1315f4c4d2))
- **patterns/hero:** allow the use of a fixed or fluid Hero ([#699](https://github.com/adeo/mozaic-design-system/issues/699)) ([3cff3ec](https://github.com/adeo/mozaic-design-system/commit/3cff3ecd6493dd796c00e84b8ef76ea790662fb0))

## [1.0.1](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-beta.22...v1.0.1) (2020-12-09)

### Bug Fixes

- **patterns/breadcrumb:** improve breadcrumb behavior on mobile resolutions ([#693](https://github.com/adeo/mozaic-design-system/issues/693)) ([26a33b3](https://github.com/adeo/mozaic-design-system/commit/26a33b31290aa1b5032fad8ac6a53b5515d51fa7)), closes [#689](https://github.com/adeo/mozaic-design-system/issues/689)

### Features

- **pattern/quantityselector:** add quantity selector ([#678](https://github.com/adeo/mozaic-design-system/issues/678)) ([e5727f7](https://github.com/adeo/mozaic-design-system/commit/e5727f7b3987b3cf208c3a9492ee13cd8db9ba02))
- **patterns/input:** add height property to input field ([#692](https://github.com/adeo/mozaic-design-system/issues/692)) ([e0f77aa](https://github.com/adeo/mozaic-design-system/commit/e0f77aadcb99e624cf54a178c894ab7bd9348353))
- **progressbar:** add progress bar design ([#679](https://github.com/adeo/mozaic-design-system/issues/679)) ([ff4f8e5](https://github.com/adeo/mozaic-design-system/commit/ff4f8e5998f61ad47a6283e711efb49384df33f4))

## [1.0.1-beta.22](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-beta.21...v1.0.1-beta.22) (2020-11-25)

### Bug Fixes

- **patterns/hero:** code refactoring - update of the HTML structure ([#680](https://github.com/adeo/mozaic-design-system/issues/680)) ([c3743ce](https://github.com/adeo/mozaic-design-system/commit/c3743ce242b640de175dfce3a0370101d402441d))
- **patterns/link:** avoid the link icon from shrinking ([#685](https://github.com/adeo/mozaic-design-system/issues/685)) ([2163cd4](https://github.com/adeo/mozaic-design-system/commit/2163cd4530e286705f0c901a0bb3fede81b5ee76)), closes [#684](https://github.com/adeo/mozaic-design-system/issues/684)

### Features

- **patterns/text-input:** reset default appearance of input[type="number"] items ([#683](https://github.com/adeo/mozaic-design-system/issues/683)) ([10627d7](https://github.com/adeo/mozaic-design-system/commit/10627d783d54bc4b1fa81cdb549abf08f9095503))

## [1.0.1-beta.21](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-beta.20...v1.0.1-beta.21) (2020-11-12)

### Bug Fixes

- **patterns/file-uploader:** improve truncation on the loaded file name ([#671](https://github.com/adeo/mozaic-design-system/issues/671)) ([166d52b](https://github.com/adeo/mozaic-design-system/commit/166d52bd5c44ae4a9cebef72641392e67083f7d5)), closes [#670](https://github.com/adeo/mozaic-design-system/issues/670)
- **patterns/flag:** add a modifier for multi-line flag ([#674](https://github.com/adeo/mozaic-design-system/issues/674)) ([0b69087](https://github.com/adeo/mozaic-design-system/commit/0b69087ebed8a70ce4a5609dd327d588d8c2c84e))

## [1.0.1-beta.20](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-beta.19...v1.0.1-beta.20) (2020-10-28)

### Features

- **pattern/tags:** update tags size (m) ([#656](https://github.com/adeo/mozaic-design-system/issues/656)) ([6cd140b](https://github.com/adeo/mozaic-design-system/commit/6cd140b4f912893c48e4944c6b5fbedf3e0cd6a7))
- **patterns/fonts:** implementing the new LM webfont ([#616](https://github.com/adeo/mozaic-design-system/issues/616)) ([4cfcf03](https://github.com/adeo/mozaic-design-system/commit/4cfcf03778bcfee90ac553c10a6dfe6f8fb3b7de))
- **patterns/layer:** add layer pattern ([#617](https://github.com/adeo/mozaic-design-system/issues/617)) ([b441fe1](https://github.com/adeo/mozaic-design-system/commit/b441fe1e77ec18d12a8b61d6ef3b1b90be4d79c3))

## [1.0.1-beta.19](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-beta.18...v1.0.1-beta.19) (2020-10-14)

### Bug Fixes

- **patterns/notification:** remove margin-top on notification message if no title ([#654](https://github.com/adeo/mozaic-design-system/issues/654)) ([049e590](https://github.com/adeo/mozaic-design-system/commit/049e590919ec596bc452323c41d76521955464f6))

## [1.0.1-beta.18](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-beta.17...v1.0.1-beta.18) (2020-09-29)

### Bug Fixes

- **patterns/toggle:** increase line-height ([#648](https://github.com/adeo/mozaic-design-system/issues/648)) ([6667601](https://github.com/adeo/mozaic-design-system/commit/66676017b01674f38cd4ff471525a1674a9a40b7))

### Features

- **pattern/hero:** add hero design ([#627](https://github.com/adeo/mozaic-design-system/issues/627)) ([672b461](https://github.com/adeo/mozaic-design-system/commit/672b461f2c7afe39246f7e73dda1e9ea294ed054))

## [1.0.1-beta.17](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-beta.16...v1.0.1-beta.17) (2020-09-15)

### Bug Fixes

- **patterns/accordions:** set display:flex only if label has an icon ([#644](https://github.com/adeo/mozaic-design-system/issues/644)) ([bc28d8f](https://github.com/adeo/mozaic-design-system/commit/bc28d8f338bd9d0700052a10e8524c89b52e41d2))
- **patterns/accordions:** update max-height value when accordion is open ([#645](https://github.com/adeo/mozaic-design-system/issues/645)) ([0117c87](https://github.com/adeo/mozaic-design-system/commit/0117c87fee0d30270a9aff9be7b9313a804f78e4))
- **patterns/toggle:** remove white-space property on .mc-toggle\_\_label ([#640](https://github.com/adeo/mozaic-design-system/issues/640)) ([7550d00](https://github.com/adeo/mozaic-design-system/commit/7550d00ea95a8b2f541550cf79fe6129eb1fe09a))

### Features

- **patterns/headings:** add a default margin bottom on headings ([#630](https://github.com/adeo/mozaic-design-system/issues/630)) ([64f7971](https://github.com/adeo/mozaic-design-system/commit/64f7971b97807c75db038f8e022b53c95675f9c6))

## [1.0.1-beta.16](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-beta.15...v1.0.1-beta.16) (2020-09-01)

### Bug Fixes

- **patterns/headings:** fix responsive modifiers for alignment ([#628](https://github.com/adeo/mozaic-design-system/issues/628)) ([cf0b2d4](https://github.com/adeo/mozaic-design-system/commit/cf0b2d4563292342c8530683558eb22856794ab8)), closes [#623](https://github.com/adeo/mozaic-design-system/issues/623)

### Features

- **pattern/tabs:** improve tabs accessibility and documentation ([#621](https://github.com/adeo/mozaic-design-system/issues/621)) ([7c79027](https://github.com/adeo/mozaic-design-system/commit/7c79027c4893790731263692234e129278a68549))

## [1.0.1-beta.15](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-beta.14...v1.0.1-beta.15) (2020-08-04)

### Bug Fixes

- **patterns/fileuploader:** update documentation and add error cases ([#614](https://github.com/adeo/mozaic-design-system/issues/614)) ([595ae07](https://github.com/adeo/mozaic-design-system/commit/595ae07186a70d73359b77ae47d4df142f03d2c3))

## [1.0.1-beta.14](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-beta.13...v1.0.1-beta.14) (2020-07-23)

### Bug Fixes

- **patterns/form:** fix inline form behaviour on mobile ([#611](https://github.com/adeo/mozaic-design-system/issues/611)) ([f696bbf](https://github.com/adeo/mozaic-design-system/commit/f696bbf38086e25af60c852981322059219fab26)), closes [#609](https://github.com/adeo/mozaic-design-system/issues/609)

### Features

- **patterns/breadcrumb:** add breadcrumb pattern ([#608](https://github.com/adeo/mozaic-design-system/issues/608)) ([4035763](https://github.com/adeo/mozaic-design-system/commit/4035763018dcdbc45b90128165c770d0a819b6a8))
- **patterns/tooltip:** add tooltip pattern ([#594](https://github.com/adeo/mozaic-design-system/issues/594)) ([#607](https://github.com/adeo/mozaic-design-system/issues/607)) ([5d1dca5](https://github.com/adeo/mozaic-design-system/commit/5d1dca5cf9e81bdc2754305e45fc53419730b48f))

## [1.0.1-beta.13](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-beta.12...v1.0.1-beta.13) (2020-07-09)

### Features

- **patterns/modals:** add modals pattern ([#596](https://github.com/adeo/mozaic-design-system/issues/596)) ([3b7ab13](https://github.com/adeo/mozaic-design-system/commit/3b7ab132137160fa9a94d4086ded27a38809ca23))

## [1.0.1-beta.12](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-beta.11...v1.0.1-beta.12) (2020-06-24)

### Bug Fixes

- **patterns/container:** make mc-container fluid with .ml-container--fluid modifier ([#590](https://github.com/adeo/mozaic-design-system/issues/590)) ([7235018](https://github.com/adeo/mozaic-design-system/commit/7235018a968a8c26b766ebce418b72006100abe5))
- **patterns/pagination:** fix button icon for IE and center pagination by default ([#584](https://github.com/adeo/mozaic-design-system/issues/584)) ([f01de9b](https://github.com/adeo/mozaic-design-system/commit/f01de9b6c71ff9824b4f05c831fdae1d6ef8ba49))
- **patterns/reset-css:** remove rules for img tag in order to avoid side effects on lmfr site ([#575](https://github.com/adeo/mozaic-design-system/issues/575)) ([e93bab4](https://github.com/adeo/mozaic-design-system/commit/e93bab445cc987c83af168ab5afd739a6f29071c))

### Features

- **pattern/tabs:** Add pattern tabs ([#574](https://github.com/adeo/mozaic-design-system/issues/574)) ([46a8541](https://github.com/adeo/mozaic-design-system/commit/46a8541691bf37b90fbff316da0e16381e62afdc))

## [1.0.1-beta.11](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-beta.10...v1.0.1-beta.11) (2020-06-10)

### Features

- **patterns/form:** add a common structure for all form elements ([#552](https://github.com/adeo/mozaic-design-system/issues/552)) ([0e1eb10](https://github.com/adeo/mozaic-design-system/commit/0e1eb109b7f6f793d576939f3c2acf891e1b6b8b))

## [1.0.1-beta.10](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-beta.9...v1.0.1-beta.10) (2020-05-20)

### Bug Fixes

- **patterns/buttons:** fix regression on the color of icons ([#546](https://github.com/adeo/mozaic-design-system/issues/546)) ([ec00ac5](https://github.com/adeo/mozaic-design-system/commit/ec00ac515cb437f62ee25b33ce549ecda6d9a5a9))
- **patterns/rating-stars:** add background-size on rating stars input ([#539](https://github.com/adeo/mozaic-design-system/issues/539)) ([9ec2625](https://github.com/adeo/mozaic-design-system/commit/9ec262549094925155f2b582f6f494e4bc8f9866))

### Features

- **patterns:** add not-allowed cursor on disabled elements ([#550](https://github.com/adeo/mozaic-design-system/issues/550)) ([e67ebaf](https://github.com/adeo/mozaic-design-system/commit/e67ebaf694bcc479bfd57b085e50ce030bcdcd09))
- **patterns/cssreset:** add a css reset ([#541](https://github.com/adeo/mozaic-design-system/issues/541)) ([b1b8db5](https://github.com/adeo/mozaic-design-system/commit/b1b8db545db66f2020c8fc600ee0b6d4b75d0eed))
- **patterns/dividers:** add dividers ([#542](https://github.com/adeo/mozaic-design-system/issues/542)) ([e1d3ab7](https://github.com/adeo/mozaic-design-system/commit/e1d3ab7ddc891f173aba55fae7cde5fc9b0657b9))
- **patterns/pagination:** add pagination pattern ([#540](https://github.com/adeo/mozaic-design-system/issues/540)) ([#544](https://github.com/adeo/mozaic-design-system/issues/544)) ([6425bd7](https://github.com/adeo/mozaic-design-system/commit/6425bd766ada58c4280c4933ffda2ff49ca26488))

## [1.0.1-beta.8](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-beta.7...v1.0.1-beta.8) (2020-05-06)

### Bug Fixes

- **icons/inline:** add width and height for inline svg (IE11 fix) ([#534](https://github.com/adeo/mozaic-design-system/issues/534)) ([b2d4ceb](https://github.com/adeo/mozaic-design-system/commit/b2d4ceb021fe0df58b55dac784ea3d2f30128ee9))
- **patterns/buttons:** remove some duplicate css rules ([#535](https://github.com/adeo/mozaic-design-system/issues/535)) ([8d5e1bd](https://github.com/adeo/mozaic-design-system/commit/8d5e1bd4508ca6f35a7720d24d19c7a84aa4fa73)), closes [#503](https://github.com/adeo/mozaic-design-system/issues/503)
- **patterns/headings:** correct some duplicate css rules ([#514](https://github.com/adeo/mozaic-design-system/issues/514)) ([89e24dd](https://github.com/adeo/mozaic-design-system/commit/89e24dd7589e9f2d7e89bd21d68fbed093eb426b)), closes [#502](https://github.com/adeo/mozaic-design-system/issues/502)
- **patterns/notification:** remove unnecessary css rules ([#517](https://github.com/adeo/mozaic-design-system/issues/517)) ([022e2ff](https://github.com/adeo/mozaic-design-system/commit/022e2ff590b524ce2f8609813bf98a56240b4b64)), closes [#512](https://github.com/adeo/mozaic-design-system/issues/512)

## [1.0.1-beta.5](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-beta.4...v1.0.1-beta.5) (2020-03-11)

### Bug Fixes

- **pattern/magic-unit:** add $mu175 variable and spell-check ([#496](https://github.com/adeo/mozaic-design-system/issues/496)) ([308187b](https://github.com/adeo/mozaic-design-system/commit/308187b2ddb9562945a43b24ec2bc291e6049208))
- **patterns/buttons:** add pointer-events property on button label ([#498](https://github.com/adeo/mozaic-design-system/issues/498)) ([4faddef](https://github.com/adeo/mozaic-design-system/commit/4faddef5f54329ceeeb3298a4dd68758282f8ee4))

### Features

- **pattern/checkbox:** add label to checkbox ([#491](https://github.com/adeo/mozaic-design-system/issues/491)) ([3b08763](https://github.com/adeo/mozaic-design-system/commit/3b087637d5e5a1968e2ced8fd621834ffd17682f))

## [1.0.1-beta.4](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-beta.3...v1.0.1-beta.4) (2020-02-17)

### Features

- **pattern/fields:** create fields component ([#483](https://github.com/adeo/mozaic-design-system/issues/483)) ([892a155](https://github.com/adeo/mozaic-design-system/commit/892a155758dd3b1707eab6bc4bde432cc2be9b99))

## [1.0.1-beta.3](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-beta.2...v1.0.1-beta.3) (2020-02-06)

### Bug Fixes

- **pattern/buttons:** fix bug width and neutral color variations ([eb74640](https://github.com/adeo/mozaic-design-system/commit/eb7464090dc95a7aed6b9b471414fa556fa00d82))

## [1.0.1-beta.2](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-beta.1...v1.0.1-beta.2) (2020-01-23)

**Note:** Version bump only for package @mozaic-ds/styles

## [1.0.1-beta.1](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-beta.0...v1.0.1-beta.1) (2020-01-23)

### Features

- **patterns/container:** use LMFR‘s container as the default one ([#464](https://github.com/adeo/mozaic-design-system/issues/464)) ([a104936](https://github.com/adeo/mozaic-design-system/commit/a1049368a985ae3c221da3bcb842bf062484ddf3))

## [1.0.1-beta.0](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-alpha.32...v1.0.1-beta.0) (2019-12-18)

### Bug Fixes

- **patterns/toggle:** fix :disabled:checked state ([#455](https://github.com/adeo/mozaic-design-system/issues/455)) ([018e0d7](https://github.com/adeo/mozaic-design-system/commit/018e0d7d4b0264493a11fe9b9a7ab596a39bd3eb))

### Features

- **pattern/input text:** add a small variation to text-inputs components ([#450](https://github.com/adeo/mozaic-design-system/issues/450)) ([eee75d4](https://github.com/adeo/mozaic-design-system/commit/eee75d4237d74e1e2eb04a2448982e4b30585796))

## [1.0.1-alpha.31](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-alpha.30...v1.0.1-alpha.31) (2019-12-03)

### Features

- **tools/devmode:** provide a sass var to manage dev and production mode in styles outputs and add magic unit grid dev util ([#427](https://github.com/adeo/mozaic-design-system/issues/427)) ([bc22205](https://github.com/adeo/mozaic-design-system/commit/bc2220561cd4d2e45c3ae8154dd92ab358051c43))

## [1.0.1-alpha.30](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-alpha.29...v1.0.1-alpha.30) (2019-11-27)

### Bug Fixes

- **patterns/margins and paddings:** fix bug where units where rendered as numbers in classes names resulting in truncated leading 0 ([#443](https://github.com/adeo/mozaic-design-system/issues/443)) ([ef178b7](https://github.com/adeo/mozaic-design-system/commit/ef178b75a669b2b7d6e52e4e8bb2c48ac689d789))

## [1.0.1-alpha.28](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-alpha.27...v1.0.1-alpha.28) (2019-11-21)

### Bug Fixes

- **pattern/various:** fix ie11 bugs for input, checkbox, radio and stars ([#435](https://github.com/adeo/mozaic-design-system/issues/435)) ([03da938](https://github.com/adeo/mozaic-design-system/commit/03da9381bdef25babad8ffba7e656389a1242eec))

## [1.0.1-alpha.27](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-alpha.26...v1.0.1-alpha.27) (2019-11-20)

### Bug Fixes

- **pattern/various:** fixe ie11 bugs for buttons, notifs, file-uploader and flexy patterns ([#430](https://github.com/adeo/mozaic-design-system/issues/430)) ([361848d](https://github.com/adeo/mozaic-design-system/commit/361848d8eceee94df2ddf6c59cbcadebecea54d7))

## [1.0.1-alpha.26](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-alpha.25...v1.0.1-alpha.26) (2019-11-14)

### Bug Fixes

- **patterns/media queries:** fix a bug linked to media queries declaration order by activating mqpacker ([43a9438](https://github.com/adeo/mozaic-design-system/commit/43a943871c962584149b60bc73b511092c284099))

### Features

- **patterns/spaces:** add an utility to manage all sides using a unique css classe ([#415](https://github.com/adeo/mozaic-design-system/issues/415)) ([f5fb22f](https://github.com/adeo/mozaic-design-system/commit/f5fb22fb3d1aaf46cdb936754334777ab534fb2b))

## [1.0.1-alpha.25](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-alpha.24...v1.0.1-alpha.25) (2019-11-07)

### Bug Fixes

- **patterns/docs:** fix list of documentation typos or inacurate values ([#409](https://github.com/adeo/mozaic-design-system/issues/409)) ([84a6c68](https://github.com/adeo/mozaic-design-system/commit/84a6c68116fa666e9925156c2cc2d2e7fa595fa4))

## [1.0.1-alpha.24](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-alpha.23...v1.0.1-alpha.24) (2019-10-24)

### Features

- **tools/tokens:** allow tokens customization ([#400](https://github.com/adeo/mozaic-design-system/issues/400)) ([a3f471a](https://github.com/adeo/mozaic-design-system/commit/a3f471a6fdba40b936dfa29041580f3b4c2687ef))

## [1.0.1-alpha.22](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-alpha.21...v1.0.1-alpha.22) (2019-10-14)

### Features

- **patterns/rating stars:** create rating stars component ([#369](https://github.com/adeo/mozaic-design-system/issues/369)) ([81a9393](https://github.com/adeo/mozaic-design-system/commit/81a9393))
- **patterns/settings:** create hidden input, focus styles + button and list unstyle mixins ([55dc267](https://github.com/adeo/mozaic-design-system/commit/55dc267))
- **patterns/tag:** create tag component ([3753fa9](https://github.com/adeo/mozaic-design-system/commit/3753fa9))

## [1.0.1-alpha.21](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-alpha.20...v1.0.1-alpha.21) (2019-10-02)

### Bug Fixes

- **pattern/flexy grid:** fix typo in flexy space-around modifier class name ([#359](https://github.com/adeo/mozaic-design-system/issues/359)) ([0ec7ab0](https://github.com/adeo/mozaic-design-system/commit/0ec7ab0))

### Features

- **pattern/notificaion:** add notification pattern ([#343](https://github.com/adeo/mozaic-design-system/issues/343)) ([053a8a7](https://github.com/adeo/mozaic-design-system/commit/053a8a7))
- **patterns/flags:** create flag component ([#348](https://github.com/adeo/mozaic-design-system/issues/348)) ([7c78093](https://github.com/adeo/mozaic-design-system/commit/7c78093))

## [1.0.1-alpha.20](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-alpha.19...v1.0.1-alpha.20) (2019-09-19)

### Bug Fixes

- **pattern/fonts:** extract font face import into a mixin ([#353](https://github.com/adeo/mozaic-design-system/issues/353)) ([83edac7](https://github.com/adeo/mozaic-design-system/commit/83edac7))

### Features

- **pattern/fileuploader:** add usage, code, specs, and design doc ([#342](https://github.com/adeo/mozaic-design-system/issues/342)) ([227d524](https://github.com/adeo/mozaic-design-system/commit/227d524)), closes [#323](https://github.com/adeo/mozaic-design-system/issues/323) [#337](https://github.com/adeo/mozaic-design-system/issues/337) [#341](https://github.com/adeo/mozaic-design-system/issues/341)

## [1.0.1-alpha.19](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-alpha.18...v1.0.1-alpha.19) (2019-08-22)

### Bug Fixes

- **pattern/button:** false change to trigger deploy ([1ed5ff0](https://github.com/adeo/mozaic-design-system/commit/1ed5ff0))

## [1.0.1-alpha.18](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-alpha.17...v1.0.1-alpha.18) (2019-08-22)

### Features

- **pattern/toggle:** create toggle form element ([#317](https://github.com/adeo/mozaic-design-system/issues/317)) ([d22f86c](https://github.com/adeo/mozaic-design-system/commit/d22f86c))

## [1.0.1-alpha.17](https://github.com/adeo/mozaic-design-system/compare/v1.0.1-alpha.16...v1.0.1-alpha.17) (2019-08-12)

### Features

- **pattern/select:** create select form item ([#306](https://github.com/adeo/mozaic-design-system/issues/306)) ([1134351](https://github.com/adeo/mozaic-design-system/commit/1134351))
- **pattern/textarea:** create textarea pattern ([#309](https://github.com/adeo/mozaic-design-system/issues/309)) ([4ef5cb3](https://github.com/adeo/mozaic-design-system/commit/4ef5cb3))
- **patterns/inputs:** simplify docs and previews ([#308](https://github.com/adeo/mozaic-design-system/issues/308)) ([c8185ef](https://github.com/adeo/mozaic-design-system/commit/c8185ef))

## [1.0.1-alpha.16](https://github.com/adeo/design-system--styleguide/compare/v1.0.1-alpha.15...v1.0.1-alpha.16) (2019-07-29)

### Bug Fixes

- **pattern/inputs:** fix inputs size and alignment ([#300](https://github.com/adeo/design-system--styleguide/issues/300)) ([20fa277](https://github.com/adeo/design-system--styleguide/commit/20fa277))

### Features

- **buttons/icons:** add button style with icons ([#279](https://github.com/adeo/design-system--styleguide/issues/279)) ([2fc349a](https://github.com/adeo/design-system--styleguide/commit/2fc349a))
- **component/links:** create and add links components ([#305](https://github.com/adeo/design-system--styleguide/issues/305)) ([cf1950c](https://github.com/adeo/design-system--styleguide/commit/cf1950c))
- **pattern/checkbox:** add checkbox input component and documentation ([#290](https://github.com/adeo/design-system--styleguide/issues/290)) ([21dab01](https://github.com/adeo/design-system--styleguide/commit/21dab01))
- **pattern/inputs:** add left icon support ([#294](https://github.com/adeo/design-system--styleguide/issues/294)) ([2750e6f](https://github.com/adeo/design-system--styleguide/commit/2750e6f))
- **pattern/radio:** add input radio pattern ([#299](https://github.com/adeo/design-system--styleguide/issues/299)) ([b2c7cf2](https://github.com/adeo/design-system--styleguide/commit/b2c7cf2))
- **patterns/inputs:** add base64 postcss + state icon inputs ([#292](https://github.com/adeo/design-system--styleguide/issues/292)) ([cb5f30f](https://github.com/adeo/design-system--styleguide/commit/cb5f30f))

## [1.0.1-alpha.16](https://github.com/adeo/design-system--styleguide/compare/v1.0.1-alpha.15...v1.0.1-alpha.16) (2019-07-25)

### Bug Fixes

- **pattern/inputs:** fix inputs size and alignment ([#300](https://github.com/adeo/design-system--styleguide/issues/300)) ([20fa277](https://github.com/adeo/design-system--styleguide/commit/20fa277))

### Features

- **buttons/icons:** add button style with icons ([#279](https://github.com/adeo/design-system--styleguide/issues/279)) ([2fc349a](https://github.com/adeo/design-system--styleguide/commit/2fc349a))
- **component/links:** create and add links components ([#305](https://github.com/adeo/design-system--styleguide/issues/305)) ([cf1950c](https://github.com/adeo/design-system--styleguide/commit/cf1950c))
- **pattern/checkbox:** add checkbox input component and documentation ([#290](https://github.com/adeo/design-system--styleguide/issues/290)) ([21dab01](https://github.com/adeo/design-system--styleguide/commit/21dab01))
- **pattern/inputs:** add left icon support ([#294](https://github.com/adeo/design-system--styleguide/issues/294)) ([2750e6f](https://github.com/adeo/design-system--styleguide/commit/2750e6f))
- **pattern/radio:** add input radio pattern ([#299](https://github.com/adeo/design-system--styleguide/issues/299)) ([b2c7cf2](https://github.com/adeo/design-system--styleguide/commit/b2c7cf2))
- **patterns/inputs:** add base64 postcss + state icon inputs ([#292](https://github.com/adeo/design-system--styleguide/issues/292)) ([cb5f30f](https://github.com/adeo/design-system--styleguide/commit/cb5f30f))

## [1.0.1-alpha.12](https://github.com/adeo/design-system--styleguide/compare/v1.0.1-alpha.11...v1.0.1-alpha.12) (2019-06-25)

### Bug Fixes

- **doc/style:** fix inconsistencies in naming conventions ahead of Adeo dev summit ([9973457](https://github.com/adeo/design-system--styleguide/commit/9973457))

## [1.0.1-alpha.10](https://github.com/adeo/design-system--styleguide/compare/v1.0.1-alpha.9...v1.0.1-alpha.10) (2019-06-20)

### Features

- **styles/mixins:** add a border radius mixin and fix SCSS syntaxes issues ([fc7d71c](https://github.com/adeo/design-system--styleguide/commit/fc7d71c))

## [1.0.1-alpha.9](https://github.com/adeo/design-system--styleguide/compare/v1.0.1-alpha.7...v1.0.1-alpha.9) (2019-06-18)

### Bug Fixes

- **lerna:** add tokens as a depndency of styles ([#267](https://github.com/adeo/design-system--styleguide/issues/267)) ([0fe3ec3](https://github.com/adeo/design-system--styleguide/commit/0fe3ec3))

## [1.0.1-alpha.8](https://github.com/adeo/design-system--styleguide/compare/v1.0.1-alpha.7...v1.0.1-alpha.8) (2019-06-17)

**Note:** Version bump only for package @mozaic-ds/styles

## [1.0.1-alpha.7](https://github.com/adeo/design-system--styleguide/compare/v1.0.1-alpha.6...v1.0.1-alpha.7) (2019-06-11)

### Features

- **pattern/grids:** add push, change mixins, update documentation ([#260](https://github.com/adeo/design-system--styleguide/issues/260)) ([3738a76](https://github.com/adeo/design-system--styleguide/commit/3738a76))

## [1.0.1-alpha.6](https://github.com/adeo/design-system--styleguide/compare/v1.0.1-alpha.5...v1.0.1-alpha.6) (2019-05-27)

### Bug Fixes

- **build:** fix the token clean, css:fix and css:lint commands ([#252](https://github.com/adeo/design-system--styleguide/issues/252)) ([1b1252a](https://github.com/adeo/design-system--styleguide/commit/1b1252a))

### Features

- **pattern/shadow:** add shadow system ([#253](https://github.com/adeo/design-system--styleguide/issues/253)) ([655097d](https://github.com/adeo/design-system--styleguide/commit/655097d))
- **patterns/inputs:** update docs and design files ([#251](https://github.com/adeo/design-system--styleguide/issues/251)) ([d869c8e](https://github.com/adeo/design-system--styleguide/commit/d869c8e))

## [1.0.1-alpha.4](https://github.com/adeo/design-system--front-end/compare/v0.0.12...v1.0.1-alpha.4) (2019-05-20)

**Note:** Version bump only for package @gardencss/styles

## [1.0.1-alpha.3](https://github.com/adeo/design-system--front-end/compare/v0.0.12...v1.0.1-alpha.3) (2019-05-20)

**Note:** Version bump only for package @gardencss/styles

## [1.0.1-alpha.2](https://github.com/adeo/design-system--front-end/compare/v0.0.12...v1.0.1-alpha.2) (2019-05-20)

**Note:** Version bump only for package @gardencss/styles

## [1.0.1-alpha.0](https://github.com/adeo/design-system--styleguide/compare/v0.0.11...v1.0.1-alpha.0) (2019-04-25)

### Features

- **lerna:** prepare lerna package ([40dcc1f](https://github.com/adeo/design-system--styleguide/commit/40dcc1f))
