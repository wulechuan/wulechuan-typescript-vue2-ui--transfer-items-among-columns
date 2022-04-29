#!/bin/sh

# -------------------------------------------------------
#           特定版本之【产品依赖包】
# -------------------------------------------------------

echo

echo  -e  "\e[0;31m===== npm i    \e[97;41m特定版本\e[0;31m之【产品依赖包】 ============================\e[0m"

echo

echo '暂无。'





# -------------------------------------------------------
#          最末版本之【产品依赖包】
# - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# 顺便提醒，虽然一般而言 latest 版本应恰为最高版本，但并不确保。
# -------------------------------------------------------

echo
echo
echo
echo
echo

echo  -e  "\e[0;31m===== npm i    最末版本之【产品依赖包】 ============================\e[0m"

echo

npm  i 'vue-property-decorator@latest'





# -------------------------------------------------------
#           特定版本之【研发依赖包】
# -------------------------------------------------------

echo
echo
echo
echo
echo

echo  -e  "\e[32m===== npm i    \e[90;102m特定版本\e[0;32m之【研发依赖包】 ============================\e[0m"

echo

echo '暂无。'





# -------------------------------------------------------
#          最末版本之【研发依赖包】
# - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# 顺便提醒，虽然一般而言 latest 版本应恰为最高版本，但并不确保。
# -------------------------------------------------------

echo
echo
echo
echo
echo

echo  -e  "\e[32m===== npm i    最末版本之【研发依赖包】 ============================\e[0m"

echo

npm  i  -D \
    "@typescript-eslint/eslint-plugin@latest" \
    "@typescript-eslint/parser@latest" \
    "@vue/eslint-config-typescript@latest" \
    "@wulechuan/cli-scripts--git-push@latest" \
    "@wulechuan/css-stylus-markdown-themes@latest" \
    "@wulechuan/gulp-classical-task-cycle@latest" \
    "@wulechuan/vue2-sfc-from-typescript-to-javascript@latest" \
    "cssnano@latest" \
    "eslint@latest" \
    "eslint-plugin-vue@latest" \
    "esm@latest" \
    "fs-extra@latest" \
    "gulp-postcss@latest" \
    "gulp-stylus@latest" \
    "gulp-terser@latest" \
    "indent.js@latest" \
    "plugin-error@latest" \
    "rimraf@latest" \
    "stylus@latest" \
    "through2@latest" \
    "typescript@latest"





# -------------------------------------------------------
#           结束
# -------------------------------------------------------

echo
echo
echo
echo
echo
