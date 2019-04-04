# file-文件

文件系统，整合拍摄、相册、文件、视频

---

## 使用指南

在page.json中引入组件

```json
{
    "usingComponents": {
      "el-file": "component/_file/file"
    }
}
```

### 属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| file | Object | {} | file配置 | 0.0.3 |
| album | Boolean | false | 是否显示拍摄 | 0.0.3 |
| camera | Boolean | false | 是否显示相册 | 0.0.3 |
| files | Boolean | false | 是否显示文件 | 0.0.3 |
| video | Boolean | false | 是否显示视频 | 0.0.3 |

* 当album、camera、files、video都为false时，不被触发显示选择框

file:

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| count | Number | 1 | 文件数量 | 0.0.3 |
| video.maxDuration | Number | 60 | 视频长度 | 0.0.3 |
| video.compressed | Boolean | false | 压缩 | 0.0.3 |
| video.camera | Boolean | 'front' | 前/后摄像头 | 0.0.3 |
| files.type | String | 'all' | 限制文件类型 | 0.0.3 |
| files.extension | Array | null | 限制后缀类型 | 0.0.3 |

### 事件

`succeed`: function \(e\) {}

| 名称 | 说明 | 版本 |
| :--- | :--- | :--- |
|  |  |  |
|  |  |  |

### 使用

```HTML
<el-file>
    <el-button>选择</el-button>
</el-file>
```

### 依赖

| 插件名称 |
| :--- |
| popup |



