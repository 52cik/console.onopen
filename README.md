# console.onopen

> `cn`: 检测控制台是否被打开。 
> `en`: Detect if Console is open

`cn`: **仅 Chrome 可用。** 
`en`: **Works in Chrome and Chrome only.**

[live demo][live demo]



## 使用方法 (How to use it)

```js
console.onopen(function () {
  console.log('hello');
});
```

`cn`: 当打开控制台是会显示 'hello'。 
`en`: When the Console opens, it displays 'hello'.



## 实现原理 (How it works)

`cn`: 重写了正则表达式的 toString 方法，因为控制台显示正则时会调用它。 
`en`: The toString function of the regular expression is rewritten. Because the Console displays the regular call it.



## 注意事项 (Caveats)

`cn`: 当控制台被清空后则无法调用回调函数，包括快捷键 `Ctrl+k` 或 `⌘+k`，或者是 `console.clear()` 清屏。 
`en`: When the console is empty is unable to invoke the callback function, including the shortcut key `Ctrl+k` or `⌘+k` or `console.clear` (CLS).


[live demo]: https://52cik.github.io/console.onopen/
