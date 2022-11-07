# Impress Library

## _Common Impress component belongs here_

[![N|Solid](https://static.impress.ai/ymmb/img/transparent_landscape_logo.png)](http://impress.ai/)

- Common-setting.css

  > Add this CSS file to the entry points of each project.

  > Standard CSS for the product (Impress) lying under this CSS file (font family)

  > Avoid duplicate imports

  > `import "../ImpressLibrary/common-setting.css"`

- Common Components
  > `import ImComponents from "../../ImpressLibrary/components/index"` > `theme.css` for defining colors
  > `animations.css` for defining animations
- helper functions
  > in Progress
- Icons
- Charts

## Components

| Name  | File path                                            | Props:type                                                                                                                                                            | Drive link |
| ----- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Modal | `<ImComponents componentName="ImModal" {...props}> ` | props = { className : `string`, title : `string`, visible: `boolean`, component : `Node`, footer : `Node`, title : `Node`, onOk : `function` , onCancel : `function`} | url        |
| Search bar | `<ImComponents componentName="ImSearchBar" {...props} />` | props = { placeholder : `string` (default:"Search") ,handleSearch: `function`, handleInputChange: `function`, className: `string`, style: `object`,size: `small` OR `middle` OR `large`(default)} | url |
| Input | `<ImComponents componentName="ImInput" {...props} />` | props = {  placeholder:`string`(default:"placeholder"),onChange(event): `function`} | url |
| Text area | `<ImComponents componentName="ImTextArea" {...props} />` | props = { rows: `string`(default:"5"), onChange(event): `function`,value: `string`} | url |
| Button | `<ImComponents componentName="ImButton" {...props} />` | props = { children: `Node`,type: `string`(default:"primary"),onClick: `function`}, any other prop will also be passed down | url |
| Spinner | `<ImComponents componentName="ImSpinner" {...props} />` | props = { size: `string`(default: "34px")} | url |
| Step component(horizontal) | `<ImComponents componentName="ImStep" {...props} />` | props = {current: `Number`(default: 1) , steps:`array`(shape:[{title: "Step 1", subTitle:"Upload file"}]}) | url |
| File Uploader | `<ImComponents componentName="ImUploader" {...props} />` | props = {  children: `Node`(required),
  onChange: `function`(required),postUrl: `string`(required),acceptType: `string`,} | url |
## Helpers

| Name     | File path            | Purpose                                         | params                                                                                                                                   |
| -------- | -------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Call api | helpers/ImCallapi.js | this is a function which help you to call api's | type, url, data,contentType: `application/x-www-form-urlencoded` or `multipart/form-data` or `text/plain` or `application/json`(default) |

## Icons

| Name         | File path                        | Drive link |
| ------------ | -------------------------------- | ---------- |
| close icon   | `<ImIcons name="closeIcon" />`   | url        |
| search icon  | `<ImIcons name="searchIcon" />`  | url        |
| refresh icon | `<ImIcons name="refreshIcon" />` | url        |
| info icon    | `<ImIcons name="infoIcon" />`    | url        |
| expand icon  | `<ImIcons name="ExpandIcon" />`  | url        |
| edit icon    | `<ImIcons name="editIcon" />`    | url        |
| delete icon  | `<ImIcons name="deleteIcon" />`  | url        |
| settingsIcon | `<ImIcons name="settingsIcon" />`| url        |
| tick icon    | `<ImIcons name="tickIcon" />`    | url        |
| upload icon  | `<ImIcons name="uploadIcon" />`  | url        |
| test answer icon(manage juno)  | `<ImIcons name="testAnswerIcon" />`  | url        |
| bulk download icon(manage juno)  | `<ImIcons name="bulkDownloadIcon" />`  | url        |

## Charts

| Name        | File path                                                                                                     | Drive link |
| ----------- | ------------------------------------------------------------------------------------------------------------- | ---------- |
| donut chart | `<ImCharts componentName="ImDonut" data={data} />`                                                            | url        |
| bar chart   | ` <ImCharts componentName="ImBar" data={data2} legend={true} pattern={["#00CE71", "#FFB800"]} axis={axis3}/>` | url        |
| word cloud  | ` <ImCharts componentName="ImWord" words={words} />`                                                          | url        |

## Common names explanation

```sh
Method : "POST" | "GET" | "PUT" | " PATCH"
Node: <Jsx/> | null
```

## Note

1. Even though `less-loader` latest version was `8.1.1`, we are using `7.3.0` because we are using `webpack 4x` and from V8 `less-loader` requires `webpack v5`.
