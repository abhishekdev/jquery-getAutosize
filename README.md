# jQuery getAutosize Plugin

Returns the max dimensions of the DOM element if it were to auto size.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/abhishekdev/jquery-getAutosize/master/dist/jquery.ad-getautosize.min.js
[max]: https://raw.github.com/abhishekdev/jquery-getAutosize/master/dist/jquery.ad-getautosize.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.ad-getautosize.min.js"></script>
<script>
jQuery(function($) {
  var elementSize = $([selector]).getautosize(); // "{width:number,height:number}"
});
</script>
```