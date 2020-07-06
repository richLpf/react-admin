import React, { useState } from "react";
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
//import Table from 'braft-extensions/dist/table'
//import Markdown from 'braft-extensions/dist/markdown'
//import { htmlConvert } from '../../utils/common'

/*
* 富文本编辑器
* 官网https://www.yuque.com/braft-editor/be/gz44tn
* 插件https://github.com/margox/braft-extensions
*/

//表格插件
//BraftEditor.use(
    //Table({
        ////defaultColumns: 3,
        ////defaultRows: 3,
    //})
//);

//BraftEditor.use(Markdown())

function RichEditor(props) {

    const { value, setValue, controls, style }=props;
    
    //默认工具栏控件,可通过props.defControls修改
    const initControls = [
        'undo', 'redo', 'separator',
        'font-size', 'line-height', 'letter-spacing', 'separator',
        'text-color', 'bold', 'italic', 'underline', 'strike-through', 'separator',
        'superscript', 'subscript', 'remove-styles', 'emoji',  'separator', 'text-indent', 'text-align', 'separator',
        'headings', 'list-ul', 'list-ol', 'blockquote', 'code', 'separator',
        'link', 'separator', 'hr', 'table', 'separator',
        'media', 'separator',
        'clear'
    ];

    function onChange (value) {
        //let filterValue = htmlConvert(value.toHTML())
        console.log("value", value)
        setValue(value)
    }

    //媒体库
    /*function myUploadFn(value) {
        //上传服务端地址
        const serverURL = `${process.env.REACT_APP_TICKETMAN_UPLOAD}/ticket_service/file/upload`;
        const xhr = new XMLHttpRequest;
        const fd = new FormData();

        const successFn = (response) => {
            console.log(xhr.responseText);
            console.log("response", response.currentTarget.response)
            const res = xhr.responseText
            //上传后的文件地址
            const ufile_url=JSON.parse(res).urls[0];
            value.success({
                url: ufile_url,
                meta: {
                    id: ufile_url,
                    className:'editor-img',
                    loop: true, // 指定音视频是否循环播放
                    autoPlay: true, // 指定音视频是否自动播放
                    controls: true, // 指定音视频是否显示控制栏
                    //poster: 'http://xxx/xx.png', // 指定视频播放器的封面
                }
            })
        }
        const progressFn = (event) => {
            console.log("event", event)
            // 上传进度发生变化时调用param.progress
            value.progress(event.loaded / event.total * 100)
        };

        const errorFn = (response) => {
            // 上传发生错误时调用param.error
            value.error({
                msg: 'unable to upload.'
            })
        };

        xhr.upload.addEventListener("progress", progressFn, false);
        xhr.addEventListener("load", successFn, false);
        xhr.addEventListener("error", errorFn, false);
        xhr.addEventListener("abort", errorFn, false);

        fd.append('file', value.file);
        xhr.open('POST', serverURL, true);
        xhr.send(fd)
    }*/

    const editorProps = {
      controls: controls?controls:initControls,
      value,
      style,
      onChange,
      media: {
        //uploadFn: myUploadFn
      }
    }

    return <BraftEditor {...editorProps} />
}
export default RichEditor


