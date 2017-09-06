# FlexGrid

A Flexbox version of the awesome Bootstrap Grid System.

[demo](https://germanbisurgi.github.io/Flexgrid/)

## Responsive

```html
<div class="row">
    <div class="xs-12 sm-3  md-4 lg-4"><div class="box"></div></div>
    <div class="xs-6  sm-6  md-4 lg-8"><div class="box"></div></div>
    <div class="xs-6  sm-3  md-4 lg-8"><div class="box"></div></div>
    <div class="xs-4  sm-6  md-4 lg-4"><div class="box"></div></div>
    <div class="xs-4  sm-6  md-4 lg-3"><div class="box"></div></div>
    <div class="xs-4  sm-12 md-4 lg-9"><div class="box"></div></div>
</div>
```

## Offsets

```html
<div class="row">
    <div class="xs-11 xs-off-1">  <div class="box"></div></div>
    <div class="xs-10 xs-off-2">  <div class="box"></div></div>
    <div class="xs-9  xs-off-3">  <div class="box"></div></div>
    <div class="xs-8  xs-off-4">  <div class="box"></div></div>
    <div class="xs-7  xs-off-5">  <div class="box"></div></div>
    <div class="xs-6  xs-off-6">  <div class="box"></div></div>
    <div class="xs-5  xs-off-7">  <div class="box"></div></div>
    <div class="xs-4  xs-off-8">  <div class="box"></div></div>
    <div class="xs-3  xs-off-9">  <div class="box"></div></div>
    <div class="xs-2  xs-off-10"> <div class="box"></div></div>
    <div class="xs-1  xs-off-11"> <div class="box"></div></div>
</div>
```

## Nesting

```html
<div class="xs-12 md-8">
    <div class="box">
        <div class="row">
            <div class="xs-8">
                <div class="nested-box-1">
                    <div class="row">
                        <div class="xs-8">
                            <div class="nested-box-2"></div>
                        </div>
                        <div class="xs-4">
                            <div class="nested-box-2"></div>
                        </div>
                    </div> 
                </div>
            </div>
            <div class="xs-4">
                <div class="nested-box-1">
                    <div class="row">
                        <div class="xs-12">
                            <div class="nested-box-2"></div>
                        </div>
                    </div> 
                </div>
            </div>
        </div> 
    </div>
</div>
```