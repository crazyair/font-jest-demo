// tslint:disable
module.exports = {
  parser: "babel-eslint",
  extends: ["eslint-config-airbnb", "eslint-config-prettier"].map(p =>
    require.resolve(p)
  ),
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true
  },
  rules: {
    // https://eslint.org/docs/rules/linebreak-style
    "linebreak-style": [0],
    // https://eslint.org/docs/rules/generator-star-spacing
    "generator-star-spacing": [0],
    // 函数必须要有明确的返回值
    // https://eslint.org/docs/rules/consistent-return
    "consistent-return": [0],
    // React propTypes 的类型不允许出现 any, array, object
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    "react/forbid-prop-types": [0],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    // https://eslint.org/docs/rules/global-require
    "global-require": [1],
    // 是否要求使用 === !==，因为项目原因暂时改为警告
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: [1],
    // When there is only a single export from a module, prefer using default export over named export.
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/prefer-default-export.md
    "import/prefer-default-export": [0],
    // 组件中必须使用结构，暂时改为警告
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    "react/destructuring-assignment": [1],
    // No .bind() or Arrow Functions in JSX Props
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    "react/jsx-no-bind": [0],
    // TODO 强制要求配置 propTypes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    "react/prop-types": [0],
    // Stateless functional components are simpler than class based components and will benefit from future React
    // performance optimizations specific to these components.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    "react/prefer-stateless-function": [0],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "ignore"
      }
    ],
    // This option limits every line in JSX to one expression each.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
    "react/jsx-one-expression-per-line": [0, { allow: "single-child" }],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
    "react/no-multi-comp": [0],
    // jsx 缩进规则，启用并且设置缩进为4个空格
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    "react/jsx-indent": [2, 4],
    // jsx props 缩进规则，启用并且设置缩进为4个空格
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    "react/jsx-indent-props": [2, 4],
    // 存在 return 则不需要 esle
    // https://eslint.org/docs/rules/no-else-return
    "no-else-return": [0],
    // https://eslint.org/docs/rules/no-restricted-syntax
    "no-restricted-syntax": [0],
    // https://github.com/benmosher/eslint-plugin-import/blob/f7bd328f7b86c9f6d95c58c261b0b513df14bbd5/docs/rules/no-extraneous-dependencies.md
    "import/no-extraneous-dependencies": [0],
    // https://eslint.org/docs/rules/no-use-before-define
    "no-use-before-define": [0],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
    "jsx-a11y/no-static-element-interactions": [0],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md
    "jsx-a11y/no-noninteractive-element-interactions": [0],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
    "jsx-a11y/click-events-have-key-events": [0],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
    "jsx-a11y/anchor-is-valid": [0],
    // https://eslint.org/docs/rules/no-nested-ternary
    "no-nested-ternary": [0],
    // https://eslint.org/docs/rules/arrow-body-style
    "arrow-body-style": [0],
    // https://github.com/benmosher/eslint-plugin-import/blob/f7bd328f7b86c9f6d95c58c261b0b513df14bbd5/docs/rules/extensions.md
    "import/extensions": [0],
    // https://eslint.org/docs/rules/no-bitwise
    "no-bitwise": [0],
    // https://eslint.org/docs/rules/no-cond-assign
    "no-cond-assign": [0],
    // https://github.com/benmosher/eslint-plugin-import/blob/f7bd328f7b86c9f6d95c58c261b0b513df14bbd5/docs/rules/no-unresolved.md
    "import/no-unresolved": [0],
    // https://eslint.org/docs/rules/camelcase
    camelcase: [0],
    // https://eslint.org/docs/rules/comma-dangle
    // https://prettier.io/docs/en/options.html#trailing-commas
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "ignore"
      }
    ],
    // https://eslint.org/docs/rules/object-curly-newline
    "object-curly-newline": [0],
    // https://eslint.org/docs/rules/function-paren-newline
    "function-paren-newline": [0],
    // https://eslint.org/docs/rules/require-yield
    "require-yield": [1],
    // https://eslint.org/docs/rules/no-underscore-dangle
    "no-underscore-dangle": [0],
    // 20180829 更新规则 start
    // 禁止变量声明覆盖外层作用域的变量，考虑到 actions 在 connect 之后内部外 import 同名的习惯关闭该规则
    // http://eslint.cn/docs/rules/no-shadow
    "no-shadow": [0],
    // http://eslint.cn/docs/rules/no-plusplus
    "no-plusplus": [0],
    // 禁止未使用过的表达式
    // http://eslint.cn/docs/rules/no-unused-expressions
    "no-unused-expressions": [0],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/455
    "jsx-a11y/label-has-for": [0],
    "class-methods-use-this": [0],
    // https://eslint.org/docs/rules/no-restricted-globals
    "no-restricted-globals": [
      2,
      {
        name: "event",
        message: "Use local parameter instead."
      },
      {
        name: "find",
        message:
          "禁止使用 `window.find`。确认使用的函数是否是 `lodash.find`，忘记引用 lodash 会导致程序崩溃！详情查看：https://yunwiki.yunzhanghu.net/pages/viewpage.action?pageId=14091412"
      }
    ],
    "no-param-reassign": [1],
    "import/no-cycle": [0],
    "react-hooks/rules-of-hooks": [2]
  },
  plugins: ["eslint-plugin-jsx-a11y", "react-hooks"],
  // https://eslint.org/docs/user-guide/configuring#specifying-parser-options
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  settings: {
    polyfills: ["fetch", "promises"]
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXMtZGVwcmVjYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGliL2VzLWRlcHJlY2F0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FBRWpCLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDZixNQUFNLEVBQUUsY0FBYztJQUN0QixPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEYsR0FBRyxFQUFFO1FBQ0gsT0FBTyxFQUFFLElBQUk7UUFDYixJQUFJLEVBQUUsSUFBSTtRQUNWLEdBQUcsRUFBRSxJQUFJO1FBQ1QsS0FBSyxFQUFFLElBQUk7UUFDWCxJQUFJLEVBQUUsSUFBSTtRQUNWLE9BQU8sRUFBRSxJQUFJO0tBQ2Q7SUFDRCxLQUFLLEVBQUU7UUFDTCxnREFBZ0Q7UUFDaEQsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEIsdURBQXVEO1FBQ3ZELHdCQUF3QixFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdCLGVBQWU7UUFDZixrREFBa0Q7UUFDbEQsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsOENBQThDO1FBQzlDLCtGQUErRjtRQUMvRix5QkFBeUIsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QixvR0FBb0c7UUFDcEcsOEJBQThCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNwRSwrQ0FBK0M7UUFDL0MsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckIsOEJBQThCO1FBQzlCLHVDQUF1QztRQUN2QyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDWCxtR0FBbUc7UUFDbkcsa0dBQWtHO1FBQ2xHLDhCQUE4QixFQUFFLENBQUMsQ0FB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QUFDLENBQUMsQ0FBQztRQUMzQixzQkFBc0I7UUFDdEIsaUVBQWlFO1FBQ2pFLHdDQUF3QztRQUN4QyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEIsMENBQTBDO1FBQzFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQixhQUFhO1FBQ2Isb0RBQW9EO1FBQ3BELHVCQUF1QixFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVCLDRGQUE0RjtRQUM1RiwrREFBK0Q7UUFDL0Qsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0Isd0JBQXdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0Isc0RBQXNEO1FBQ3RELHVCQUF1QixFQUFFO1lBQ3ZCLENBQUM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixPQUFPLEVBQUUsOEJBQThCO2FBQ3hDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osT0FBTyxFQUNMLDJJQUEySTthQUM5STtTQUNGO1FBQ0QsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEIsNEJBQTRCLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDbEM7SUFDRCxPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxhQUFhLENBQUM7SUFDbEQsMkVBQTJFO0lBQzNFLGFBQWEsRUFBRTtRQUNiLFlBQVksRUFBRTtZQUNaLDRCQUE0QixFQUFFLElBQUk7U0FDbkM7S0FDRjtJQUNELFFBQVEsRUFBRTtRQUNSLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7S0FDakM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGVcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhcnNlcjogJ2JhYmVsLWVzbGludCcsXG4gIGV4dGVuZHM6IFsnZXNsaW50LWNvbmZpZy1haXJibmInLCAnZXNsaW50LWNvbmZpZy1wcmV0dGllciddLm1hcChwID0+IHJlcXVpcmUucmVzb2x2ZShwKSksXG4gIGVudjoge1xuICAgIGJyb3dzZXI6IHRydWUsXG4gICAgbm9kZTogdHJ1ZSxcbiAgICBlczY6IHRydWUsXG4gICAgbW9jaGE6IHRydWUsXG4gICAgamVzdDogdHJ1ZSxcbiAgICBqYXNtaW5lOiB0cnVlXG4gIH0sXG4gIHJ1bGVzOiB7XG4gICAgLy8gaHR0cHM6Ly9lc2xpbnQub3JnL2RvY3MvcnVsZXMvbGluZWJyZWFrLXN0eWxlXG4gICAgJ2xpbmVicmVhay1zdHlsZSc6IFswXSxcbiAgICAvLyBodHRwczovL2VzbGludC5vcmcvZG9jcy9ydWxlcy9nZW5lcmF0b3Itc3Rhci1zcGFjaW5nXG4gICAgJ2dlbmVyYXRvci1zdGFyLXNwYWNpbmcnOiBbMF0sXG4gICAgLy8g5Ye95pWw5b+F6aG76KaB5pyJ5piO56Gu55qE6L+U5Zue5YC8XG4gICAgLy8gaHR0cHM6Ly9lc2xpbnQub3JnL2RvY3MvcnVsZXMvY29uc2lzdGVudC1yZXR1cm5cbiAgICAnY29uc2lzdGVudC1yZXR1cm4nOiBbMF0sXG4gICAgLy8gUmVhY3QgcHJvcFR5cGVzIOeahOexu+Wei+S4jeWFgeiuuOWHuueOsCBhbnksIGFycmF5LCBvYmplY3RcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20veWFubmlja2NyL2VzbGludC1wbHVnaW4tcmVhY3QvYmxvYi9tYXN0ZXIvZG9jcy9ydWxlcy9mb3JiaWQtcHJvcC10eXBlcy5tZFxuICAgICdyZWFjdC9mb3JiaWQtcHJvcC10eXBlcyc6IFswXSxcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20veWFubmlja2NyL2VzbGludC1wbHVnaW4tcmVhY3QvYmxvYi9tYXN0ZXIvZG9jcy9ydWxlcy9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uLm1kXG4gICAgJ3JlYWN0L2pzeC1maWxlbmFtZS1leHRlbnNpb24nOiBbMSwgeyBleHRlbnNpb25zOiBbJy5qcycsICcuanN4J10gfV0sXG4gICAgLy8gaHR0cHM6Ly9lc2xpbnQub3JnL2RvY3MvcnVsZXMvZ2xvYmFsLXJlcXVpcmVcbiAgICAnZ2xvYmFsLXJlcXVpcmUnOiBbMV0sXG4gICAgLy8g5piv5ZCm6KaB5rGC5L2/55SoID09PSAhPT3vvIzlm6DkuLrpobnnm67ljp/lm6DmmoLml7bmlLnkuLrorablkYpcbiAgICAvLyBodHRwczovL2VzbGludC5vcmcvZG9jcy9ydWxlcy9lcWVxZXFcbiAgICBlcWVxZXE6IFsxXSxcbiAgICAvLyBXaGVuIHRoZXJlIGlzIG9ubHkgYSBzaW5nbGUgZXhwb3J0IGZyb20gYSBtb2R1bGUsIHByZWZlciB1c2luZyBkZWZhdWx0IGV4cG9ydCBvdmVyIG5hbWVkIGV4cG9ydC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYmVubW9zaGVyL2VzbGludC1wbHVnaW4taW1wb3J0L2Jsb2IvSEVBRC9kb2NzL3J1bGVzL3ByZWZlci1kZWZhdWx0LWV4cG9ydC5tZFxuICAgICdpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0JzogWzBdLFxuICAgIC8vIOe7hOS7tuS4reW/hemhu+S9v+eUqOe7k+aehO+8jOaaguaXtuaUueS4uuitpuWRilxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS95YW5uaWNrY3IvZXNsaW50LXBsdWdpbi1yZWFjdC9ibG9iL21hc3Rlci9kb2NzL3J1bGVzL2Rlc3RydWN0dXJpbmctYXNzaWdubWVudC5tZFxuICAgICdyZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnQnOiBbMV0sXG4gICAgLy8gTm8gLmJpbmQoKSBvciBBcnJvdyBGdW5jdGlvbnMgaW4gSlNYIFByb3BzXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3lhbm5pY2tjci9lc2xpbnQtcGx1Z2luLXJlYWN0L2Jsb2IvbWFzdGVyL2RvY3MvcnVsZXMvanN4LW5vLWJpbmQubWRcbiAgICAncmVhY3QvanN4LW5vLWJpbmQnOiBbMF0sXG4gICAgLy8gVE9ETyDlvLrliLbopoHmsYLphY3nva4gcHJvcFR5cGVzXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3lhbm5pY2tjci9lc2xpbnQtcGx1Z2luLXJlYWN0L2Jsb2IvbWFzdGVyL2RvY3MvcnVsZXMvcHJvcC10eXBlcy5tZFxuICAgICdyZWFjdC9wcm9wLXR5cGVzJzogWzBdLFxuICAgIC8vIFN0YXRlbGVzcyBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIHNpbXBsZXIgdGhhbiBjbGFzcyBiYXNlZCBjb21wb25lbnRzIGFuZCB3aWxsIGJlbmVmaXQgZnJvbSBmdXR1cmUgUmVhY3RcbiAgICAvLyBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb25zIHNwZWNpZmljIHRvIHRoZXNlIGNvbXBvbmVudHMuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3lhbm5pY2tjci9lc2xpbnQtcGx1Z2luLXJlYWN0L2Jsb2IvbWFzdGVyL2RvY3MvcnVsZXMvcHJlZmVyLXN0YXRlbGVzcy1mdW5jdGlvbi5tZFxuICAgICdyZWFjdC9wcmVmZXItc3RhdGVsZXNzLWZ1bmN0aW9uJzogWzBdLFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS95YW5uaWNrY3IvZXNsaW50LXBsdWdpbi1yZWFjdC9ibG9iL21hc3Rlci9kb2NzL3J1bGVzL2pzeC13cmFwLW11bHRpbGluZXMubWRcbiAgICAncmVhY3QvanN4LXdyYXAtbXVsdGlsaW5lcyc6IFtcbiAgICAgICdlcnJvcicsXG4gICAgICB7XG4gICAgICAgIGRlY2xhcmF0aW9uOiAncGFyZW5zLW5ldy1saW5lJyxcbiAgICAgICAgYXNzaWdubWVudDogJ3BhcmVucy1uZXctbGluZScsXG4gICAgICAgIHJldHVybjogJ3BhcmVucy1uZXctbGluZScsXG4gICAgICAgIGFycm93OiAncGFyZW5zLW5ldy1saW5lJyxcbiAgICAgICAgY29uZGl0aW9uOiAncGFyZW5zLW5ldy1saW5lJyxcbiAgICAgICAgbG9naWNhbDogJ3BhcmVucy1uZXctbGluZScsXG4gICAgICAgIHByb3A6ICdpZ25vcmUnXG4gICAgICB9XG4gICAgXSxcbiAgICAvLyBUaGlzIG9wdGlvbiBsaW1pdHMgZXZlcnkgbGluZSBpbiBKU1ggdG8gb25lIGV4cHJlc3Npb24gZWFjaC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20veWFubmlja2NyL2VzbGludC1wbHVnaW4tcmVhY3QvYmxvYi9tYXN0ZXIvZG9jcy9ydWxlcy9qc3gtb25lLWV4cHJlc3Npb24tcGVyLWxpbmUubWRcbiAgICAncmVhY3QvanN4LW9uZS1leHByZXNzaW9uLXBlci1saW5lJzogWzAsIHsgYWxsb3c6ICdzaW5nbGUtY2hpbGQnIH1dLFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS95YW5uaWNrY3IvZXNsaW50LXBsdWdpbi1yZWFjdC9ibG9iL21hc3Rlci9kb2NzL3J1bGVzL2pzeC13cmFwLW11bHRpbGluZXMubWRcbiAgICAncmVhY3Qvbm8tbXVsdGktY29tcCc6IFswXSxcbiAgICAvLyBqc3gg57yp6L+b6KeE5YiZ77yM5ZCv55So5bm25LiU6K6+572u57yp6L+b5Li6NOS4quepuuagvFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS95YW5uaWNrY3IvZXNsaW50LXBsdWdpbi1yZWFjdC9ibG9iL21hc3Rlci9kb2NzL3J1bGVzL2pzeC1pbmRlbnQubWRcbiAgICAncmVhY3QvanN4LWluZGVudCc6IFsyLCA0XSxcbiAgICAvLyBqc3ggcHJvcHMg57yp6L+b6KeE5YiZ77yM5ZCv55So5bm25LiU6K6+572u57yp6L+b5Li6NOS4quepuuagvFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS95YW5uaWNrY3IvZXNsaW50LXBsdWdpbi1yZWFjdC9ibG9iL21hc3Rlci9kb2NzL3J1bGVzL2pzeC1pbmRlbnQtcHJvcHMubWRcbiAgICAncmVhY3QvanN4LWluZGVudC1wcm9wcyc6IFsyLCA0XSxcbiAgICAvLyDlrZjlnKggcmV0dXJuIOWImeS4jemcgOimgSBlc2xlXG4gICAgLy8gaHR0cHM6Ly9lc2xpbnQub3JnL2RvY3MvcnVsZXMvbm8tZWxzZS1yZXR1cm5cbiAgICAnbm8tZWxzZS1yZXR1cm4nOiBbMF0sXG4gICAgLy8gaHR0cHM6Ly9lc2xpbnQub3JnL2RvY3MvcnVsZXMvbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAnbm8tcmVzdHJpY3RlZC1zeW50YXgnOiBbMF0sXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jlbm1vc2hlci9lc2xpbnQtcGx1Z2luLWltcG9ydC9ibG9iL2Y3YmQzMjhmN2I4NmM5ZjZkOTVjNThjMjYxYjBiNTEzZGYxNGJiZDUvZG9jcy9ydWxlcy9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llcy5tZFxuICAgICdpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMnOiBbMF0sXG4gICAgLy8gaHR0cHM6Ly9lc2xpbnQub3JnL2RvY3MvcnVsZXMvbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICAnbm8tdXNlLWJlZm9yZS1kZWZpbmUnOiBbMF0sXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2V2Y29oZW4vZXNsaW50LXBsdWdpbi1qc3gtYTExeS9ibG9iL21hc3Rlci9kb2NzL3J1bGVzL25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9ucy5tZFxuICAgICdqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMnOiBbMF0sXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2V2Y29oZW4vZXNsaW50LXBsdWdpbi1qc3gtYTExeS9ibG9iL21hc3Rlci9kb2NzL3J1bGVzL25vLW5vbmludGVyYWN0aXZlLWVsZW1lbnQtaW50ZXJhY3Rpb25zLm1kXG4gICAgJ2pzeC1hMTF5L25vLW5vbmludGVyYWN0aXZlLWVsZW1lbnQtaW50ZXJhY3Rpb25zJzogWzBdLFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ldmNvaGVuL2VzbGludC1wbHVnaW4tanN4LWExMXkvYmxvYi9tYXN0ZXIvZG9jcy9ydWxlcy9jbGljay1ldmVudHMtaGF2ZS1rZXktZXZlbnRzLm1kXG4gICAgJ2pzeC1hMTF5L2NsaWNrLWV2ZW50cy1oYXZlLWtleS1ldmVudHMnOiBbMF0sXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2V2Y29oZW4vZXNsaW50LXBsdWdpbi1qc3gtYTExeS9ibG9iL21hc3Rlci9kb2NzL3J1bGVzL2FuY2hvci1pcy12YWxpZC5tZFxuICAgICdqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQnOiBbMF0sXG4gICAgLy8gaHR0cHM6Ly9lc2xpbnQub3JnL2RvY3MvcnVsZXMvbm8tbmVzdGVkLXRlcm5hcnlcbiAgICAnbm8tbmVzdGVkLXRlcm5hcnknOiBbMF0sXG4gICAgLy8gaHR0cHM6Ly9lc2xpbnQub3JnL2RvY3MvcnVsZXMvYXJyb3ctYm9keS1zdHlsZVxuICAgICdhcnJvdy1ib2R5LXN0eWxlJzogWzBdLFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iZW5tb3NoZXIvZXNsaW50LXBsdWdpbi1pbXBvcnQvYmxvYi9mN2JkMzI4ZjdiODZjOWY2ZDk1YzU4YzI2MWIwYjUxM2RmMTRiYmQ1L2RvY3MvcnVsZXMvZXh0ZW5zaW9ucy5tZFxuICAgICdpbXBvcnQvZXh0ZW5zaW9ucyc6IFswXSxcbiAgICAvLyBodHRwczovL2VzbGludC5vcmcvZG9jcy9ydWxlcy9uby1iaXR3aXNlXG4gICAgJ25vLWJpdHdpc2UnOiBbMF0sXG4gICAgLy8gaHR0cHM6Ly9lc2xpbnQub3JnL2RvY3MvcnVsZXMvbm8tY29uZC1hc3NpZ25cbiAgICAnbm8tY29uZC1hc3NpZ24nOiBbMF0sXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jlbm1vc2hlci9lc2xpbnQtcGx1Z2luLWltcG9ydC9ibG9iL2Y3YmQzMjhmN2I4NmM5ZjZkOTVjNThjMjYxYjBiNTEzZGYxNGJiZDUvZG9jcy9ydWxlcy9uby11bnJlc29sdmVkLm1kXG4gICAgJ2ltcG9ydC9uby11bnJlc29sdmVkJzogWzBdLFxuICAgIC8vIGh0dHBzOi8vZXNsaW50Lm9yZy9kb2NzL3J1bGVzL2NhbWVsY2FzZVxuICAgIGNhbWVsY2FzZTogWzBdLFxuICAgIC8vIGh0dHBzOi8vZXNsaW50Lm9yZy9kb2NzL3J1bGVzL2NvbW1hLWRhbmdsZVxuICAgIC8vIGh0dHBzOi8vcHJldHRpZXIuaW8vZG9jcy9lbi9vcHRpb25zLmh0bWwjdHJhaWxpbmctY29tbWFzXG4gICAgJ2NvbW1hLWRhbmdsZSc6IFtcbiAgICAgICdlcnJvcicsXG4gICAgICB7XG4gICAgICAgIGFycmF5czogJ2Fsd2F5cy1tdWx0aWxpbmUnLFxuICAgICAgICBvYmplY3RzOiAnYWx3YXlzLW11bHRpbGluZScsXG4gICAgICAgIGltcG9ydHM6ICdhbHdheXMtbXVsdGlsaW5lJyxcbiAgICAgICAgZXhwb3J0czogJ2Fsd2F5cy1tdWx0aWxpbmUnLFxuICAgICAgICBmdW5jdGlvbnM6ICdpZ25vcmUnXG4gICAgICB9XG4gICAgXSxcbiAgICAvLyBodHRwczovL2VzbGludC5vcmcvZG9jcy9ydWxlcy9vYmplY3QtY3VybHktbmV3bGluZVxuICAgICdvYmplY3QtY3VybHktbmV3bGluZSc6IFswXSxcbiAgICAvLyBodHRwczovL2VzbGludC5vcmcvZG9jcy9ydWxlcy9mdW5jdGlvbi1wYXJlbi1uZXdsaW5lXG4gICAgJ2Z1bmN0aW9uLXBhcmVuLW5ld2xpbmUnOiBbMF0sXG4gICAgLy8gaHR0cHM6Ly9lc2xpbnQub3JnL2RvY3MvcnVsZXMvcmVxdWlyZS15aWVsZFxuICAgICdyZXF1aXJlLXlpZWxkJzogWzFdLFxuICAgIC8vIGh0dHBzOi8vZXNsaW50Lm9yZy9kb2NzL3J1bGVzL25vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gICAgJ25vLXVuZGVyc2NvcmUtZGFuZ2xlJzogWzBdLFxuICAgIC8vIDIwMTgwODI5IOabtOaWsOinhOWImSBzdGFydFxuICAgIC8vIOemgeatouWPmOmHj+WjsOaYjuimhuebluWkluWxguS9nOeUqOWfn+eahOWPmOmHj++8jOiAg+iZkeWIsCBhY3Rpb25zIOWcqCBjb25uZWN0IOS5i+WQjuWGhemDqOWkliBpbXBvcnQg5ZCM5ZCN55qE5Lmg5oOv5YWz6Zet6K+l6KeE5YiZXG4gICAgLy8gaHR0cDovL2VzbGludC5jbi9kb2NzL3J1bGVzL25vLXNoYWRvd1xuICAgICduby1zaGFkb3cnOiBbMF0sXG4gICAgLy8gaHR0cDovL2VzbGludC5jbi9kb2NzL3J1bGVzL25vLXBsdXNwbHVzXG4gICAgJ25vLXBsdXNwbHVzJzogWzBdLFxuICAgIC8vIOemgeatouacquS9v+eUqOi/h+eahOihqOi+vuW8j1xuICAgIC8vIGh0dHA6Ly9lc2xpbnQuY24vZG9jcy9ydWxlcy9uby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAnbm8tdW51c2VkLWV4cHJlc3Npb25zJzogWzBdLFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ldmNvaGVuL2VzbGludC1wbHVnaW4tanN4LWExMXkvYmxvYi9tYXN0ZXIvZG9jcy9ydWxlcy9sYWJlbC1oYXMtZm9yLm1kXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2V2Y29oZW4vZXNsaW50LXBsdWdpbi1qc3gtYTExeS9pc3N1ZXMvNDU1XG4gICAgJ2pzeC1hMTF5L2xhYmVsLWhhcy1mb3InOiBbMF0sXG4gICAgJ2NsYXNzLW1ldGhvZHMtdXNlLXRoaXMnOiBbMF0sXG4gICAgLy8gaHR0cHM6Ly9lc2xpbnQub3JnL2RvY3MvcnVsZXMvbm8tcmVzdHJpY3RlZC1nbG9iYWxzXG4gICAgJ25vLXJlc3RyaWN0ZWQtZ2xvYmFscyc6IFtcbiAgICAgIDIsXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdldmVudCcsXG4gICAgICAgIG1lc3NhZ2U6ICdVc2UgbG9jYWwgcGFyYW1ldGVyIGluc3RlYWQuJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2ZpbmQnLFxuICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICfnpoHmraLkvb/nlKggYHdpbmRvdy5maW5kYOOAguehruiupOS9v+eUqOeahOWHveaVsOaYr+WQpuaYryBgbG9kYXNoLmZpbmRg77yM5b+Y6K6w5byV55SoIGxvZGFzaCDkvJrlr7zoh7TnqIvluo/ltKnmuoPvvIHor6bmg4Xmn6XnnIvvvJpodHRwczovL3l1bndpa2kueXVuemhhbmdodS5uZXQvcGFnZXMvdmlld3BhZ2UuYWN0aW9uP3BhZ2VJZD0xNDA5MTQxMidcbiAgICAgIH1cbiAgICBdLFxuICAgICduby1wYXJhbS1yZWFzc2lnbic6IFsxXSxcbiAgICAnaW1wb3J0L25vLWN5Y2xlJzogWzBdLFxuICAgICdyZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rcyc6IFsyXVxuICB9LFxuICBwbHVnaW5zOiBbJ2VzbGludC1wbHVnaW4tanN4LWExMXknLCAncmVhY3QtaG9va3MnXSxcbiAgLy8gaHR0cHM6Ly9lc2xpbnQub3JnL2RvY3MvdXNlci1ndWlkZS9jb25maWd1cmluZyNzcGVjaWZ5aW5nLXBhcnNlci1vcHRpb25zXG4gIHBhcnNlck9wdGlvbnM6IHtcbiAgICBlY21hRmVhdHVyZXM6IHtcbiAgICAgIGV4cGVyaW1lbnRhbE9iamVjdFJlc3RTcHJlYWQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIHNldHRpbmdzOiB7XG4gICAgcG9seWZpbGxzOiBbJ2ZldGNoJywgJ3Byb21pc2VzJ11cbiAgfVxufTtcbiJdfQ==
