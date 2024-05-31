import React from "react";
import { useState } from "react";

import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import "./App.less";

function App() {
  const { Dragger } = Upload;

  const props = {
    name: "file",

    multiple: false,

    action: "/api/upload",

    onChange(info) {
      const { status } = info.file;

      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },

    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },

    onPreview(file) {
      // console.log(file.response.data.fileUrl);
      window.open(file.response.data.fileUrl);
    },
  };

  return (
    <div className="upload-box">
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">点击或拖拽文件到此处上传</p>
        <p className="ant-upload-hint">支持单个文件</p>
      </Dragger>
    </div>
  );
}

export default App;
