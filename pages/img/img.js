Page({
  data: {
    head: {
      title: 'Img',
      back: true
    },
    array: [{
      mode: 'scaleToFill',
      text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    }, {
      mode: 'aspectFit',
      text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
    }, {
      mode: 'aspectFill',
      text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
    }, {
      mode: 'top',
      text: 'top：不缩放图片，只显示图片的顶部区域'
    }, {
      mode: 'bottom',
      text: 'bottom：不缩放图片，只显示图片的底部区域'
    }, {
      mode: 'center',
      text: 'center：不缩放图片，只显示图片的中间区域'
    }, {
      mode: 'left',
      text: 'left：不缩放图片，只显示图片的左边区域'
    }, {
      mode: 'right',
      text: 'right：不缩放图片，只显示图片的右边边区域'
    }, {
      mode: 'top left',
      text: 'top left：不缩放图片，只显示图片的左上边区域'
    }, {
      mode: 'top right',
      text: 'top right：不缩放图片，只显示图片的右上边区域'
    }, {
      mode: 'bottom left',
      text: 'bottom left：不缩放图片，只显示图片的左下边区域'
    }, {
      mode: 'bottom right',
      text: 'bottom right：不缩放图片，只显示图片的右下边区域'
    }],
    imgBase64: 'data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wgARCABSAFUDAREAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAAAAECBQYHBAMI/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAA+kTJzzPQB4wcQhtB0lQM/NvAAAQqJRDZDLzzNaAAACEMpLceRGGtgAABElLHARZrgAAARBTBRSNNaAAACGKcPGnEasAAAEOU4UQ4zVQAAAiCmDhpXCRGgPGinOWg5zjOA0UBQADwKCXosZghRBgAAohuhox//8QAORAAAAQEAgYIBAUFAAAAAAAAAQIDBAAFBgcRNhJBVnSUshAWIFFzs8LSF3Wk0RMUISIyFTE1QpL/2gAIAQEAAT8Ai5ldO036Ehp9yqDrTwVOh/fHUQIQt7XSzYiilYuUVDBiYgulv2wlbmuMT/jVsuTu0HSxoG3Nc7ar8UtAW3rbQzw6094Vj4c1ztqvxS0BbquNtV+KWhOoqjt3WANZ7MV5m1UAMdNY5ymIOsmlrDXDB83mbFJ40VKqgsUDEOGsOisK+ldMYs1FTmfKpGFMiZcdAdQnizciLNZ27njw4qnaG/ZjrUNjiboDs3HkLKc0m8WcpYrMkjLJH1lwi1ldsJPKlZdNXYIEKfFKEHSLhAiyKhVEzhiUxRxAQikaclE/q2rFZmzB2s1mRwT0zm1nPFiP8dN/GJ26xyXOtzV5Bi2tvpRVFOOXz8VwWI5MgX8I+oCF98WeVUWodT/cE3ZyB/ySLZZzrr5h61YsQfFnOSdypO3U5QPSk1L3tVOUYsbkp7v5/LJFlslu9/PyJxbLOddfMfWtFiv4TzxCert1QYS0nNjBqaK8gxY3JT3fz+WSLLZMeb+fkTi2Wcq6+Y+tWLGfwnnik9Xbq02FHzg3czV5BixuSnu/n8skWUya834/lki2ec663/1rRZI2JJ7vBe3VZQNSE33RXkGLG5Keb+fyyRZXJjzfz8hItlnSu9/9a0WUJmHxyF5u3VKYq0lNyd7NXkGLG5Ke7+fyyRZnElFOd+PyEi2mcq83/wBa0SnrtRT1+jLqdByDxUVMRSMcBwxwwEpgga/uLsh9Et7o+Idw9j/oF/dHxDuHsh9Av7oLX9w9kPo1vdAXDuFsf9Et7oG4df7Gn4JaHlaXCfMXDVSldAi6ZkzGBkrrDARARNFo5O7k1GqJPkDIKruTrAQ/dgUvpizBMKMdb8flJE9tzOSTp8/p6eLsPz6orLEKqcmJhEdZYoC4a7OZKyGpnX6lOYCulz4AQS6jmNhHW+nNoJXxaf3jrfTm0Er4tP7x1up3aCV8Wn9463U5tDKuLT90dbqc2hlXFp+6Ot1ObQyri0/dDmtKcQaLLf12WnFMgmwI5IYxsAx/QAHERiWT2rK4mT5WUviMZamcCFE5A+wiIxRtNqU3IRZLLgqodYyxjFLrNGqLooJBWLnBImJtHGFgAFTYdAwPRqCNQxZbJpvGP0f/xAAUEQEAAAAAAAAAAAAAAAAAAABg/9oACAECAQE/AHP/xAAUEQEAAAAAAAAAAAAAAAAAAABg/9oACAEDAQE/AHP/2Q=='
  },

  onImgerror (e) {
    console.log(e)
  },

  onImgload (e) {
    console.log(e)
  }
})  