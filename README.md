# FlexGrid

A Flexbox version of the awesome Bootstrap Grid System.

[demo](https://germanbisurgi.github.io/Flexgrid/)

## Responsive

```html
<div class="flex-row">
    <div class="flex-xs-12 flex-sm-3  flex-md-4 flex-lg-4"><div class="box"></div></div>
    <div class="flex-xs-6  flex-sm-6  flex-md-4 flex-lg-8"><div class="box"></div></div>
    <div class="flex-xs-6  flex-sm-3  flex-md-4 flex-lg-8"><div class="box"></div></div>
    <div class="flex-xs-4  flex-sm-6  flex-md-4 flex-lg-4"><div class="box"></div></div>
    <div class="flex-xs-4  flex-sm-6  flex-md-4 flex-lg-3"><div class="box"></div></div>
    <div class="flex-xs-4  flex-sm-12 flex-md-4 flex-lg-9"><div class="box"></div></div>
</div>
```

## Offsets

```html
<div class="flex-row">
    <div class="flex-xs-11 flex-xs-off-1">  <div class="box"></div></div>
    <div class="flex-xs-10 flex-xs-off-2">  <div class="box"></div></div>
    <div class="flex-xs-9  flex-xs-off-3">  <div class="box"></div></div>
    <div class="flex-xs-8  flex-xs-off-4">  <div class="box"></div></div>
    <div class="flex-xs-7  flex-xs-off-5">  <div class="box"></div></div>
    <div class="flex-xs-6  flex-xs-off-6">  <div class="box"></div></div>
    <div class="flex-xs-5  flex-xs-off-7">  <div class="box"></div></div>
    <div class="flex-xs-4  flex-xs-off-8">  <div class="box"></div></div>
    <div class="flex-xs-3  flex-xs-off-9">  <div class="box"></div></div>
    <div class="flex-xs-2  flex-xs-off-10"> <div class="box"></div></div>
    <div class="flex-xs-1  flex-xs-off-11"> <div class="box"></div></div>
</div>
```

## Nesting

```html
<div class="flex-xs-12 flex-md-8">
    <div class="box">
        <div class="flex-row">
            <div class="flex-xs-8">
                <div class="nested-box-1">
                    <div class="flex-row">
                        <div class="flex-xs-8">
                            <div class="nested-box-2"></div>
                        </div>
                        <div class="flex-xs-4">
                            <div class="nested-box-2"></div>
                        </div>
                    </div> 
                </div>
            </div>
            <div class="flex-xs-4">
                <div class="nested-box-1">
                    <div class="flex-row">
                        <div class="flex-xs-12">
                            <div class="nested-box-2"></div>
                        </div>
                    </div> 
                </div>
            </div>
        </div> 
    </div>
</div>
```
