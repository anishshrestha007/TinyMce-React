import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { apiKey } from "../../constants/tinyconsts";

class TextEditor extends React.Component {
  handleEditorChange = e => {
    console.log("Content was updated:", e.target.getContent());
  };
  render() {
    return (
      <Editor
        apiKey={apiKey}
        initialValue="<p>Initial content</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image",
            "charmap print preview anchor help",
            "searchreplace visualblocks code",
            "insertdatetime media table paste wordcount"
          ],
          external_plugins: {
            flags: "http://localhost:3000/assets/plugins/flags/plugin.min.js",
            helloworld: "http://localhost:3000/assets/plugins/helloworld/plugin.min.js",
            iframe: "http://localhost:3000/assets/plugins/iframe/plugin.min.js",
            "iframe-simple": "http://localhost:3000/assets/plugins/iframe-simple/plugin.min.js"
          },
          toolbar:
            "helloworld | iframe-simple | iframe | code | undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help"
        }}
        onChange={this.handleEditorChange}
      />
    );
  }
}

export default TextEditor;
