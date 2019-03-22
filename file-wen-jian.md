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

属性

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| file | Object | {} | file配置 | 1.0.2 |
| album | Boolean | false | 是否显示拍摄 | 1.0.2 |
| camera | Boolean | false | 是否显示相册 | 1.0.2 |
| files | Boolean | false | 是否显示文件 | 1.0.2 |
| video | Boolean | false | 是否显示视频 | 1.0.2 |

file:

| 名称 | 类型 | 默认 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| count | Number | 1 | 文件数量 | 1.0.2 |
| video.maxDuration | Number | 60 | 视频长度 | 1.0.2 |
| video.compressed | Boolean | false | 压缩 | 1.0.2 |
| video.camera | Boolean | 'front' | 前/后摄像头 | 1.0.2 |
| files.type | String | 'all' | 限制文件类型 | 1.0.2 |
| files.extension | Array | null | 限制后缀类型 | 1.0.2 |

### 使用

```HTML
<el-file>
    <el-button>选择</el-button>
</el-file>
```



