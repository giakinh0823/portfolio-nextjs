import AttachesTool from "@editorjs/attaches";
import CheckList from "@editorjs/checklist";
import Code from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
import Header from "@editorjs/header";
import Image from "@editorjs/image";
import InlineCode from "@editorjs/inline-code";
import LinkTool from "@editorjs/link";
import LinkAutocomplete from "@editorjs/link-autocomplete";
import List from "@editorjs/list";
import Marker from "@editorjs/marker";
import NestedList from "@editorjs/nested-list";
import Personality from "@editorjs/personality";
import Quote from "@editorjs/quote";
import Raw from "@editorjs/raw";
import SimpleImage from "@editorjs/simple-image";
import Table from "@editorjs/table";
import TextVariantTune from "@editorjs/text-variant-tune";
import Underline from "@editorjs/underline";
import Warning from "@editorjs/warning";
import ColorPlugin from "editorjs-text-color-plugin";

export const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table,
  marker: Marker,
  list: List,
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  image: Image,
  raw: Raw,
  header: Header,
  quote: Quote,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
  underline: Underline,
  personality: Personality,
  attachesTool: AttachesTool,
  nestedList: NestedList,
  linkAutocomplete: LinkAutocomplete,
  textVariantTune: TextVariantTune,
};

export const tools_editor_js = {
  embed: {
    class: Embed,
    config: {},
  },
  table: {
    class: Table,
    config: {},
  },
  marker: {
    class: Marker,
    config: {},
  },
  list: {
    class: List,
    config: {},
  },
  warning: {
    class: Warning,
    config: {},
  },
  code: {
    class: Code,
    config: {
      inlineStyles: {
        background: "#f1f1f1",
        padding: "5px",
        borderRadius: "5px",
        fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        minHeight: "200px",
      },
    },
  },
  linkTool: {
    class: LinkTool,
    config: {},
  },
  image: {
    class: Image,
    config: {
    //   uploader: {
    //     uploadByFile(file: any) {
    //         // let formData = new FormData();
    //         // formData.append("images", file);
    //         // // send image to server
    //         // return API.imageUpload(formData).then((res) => {
    //         //     // get the uploaded image path, pushing image path to image array
    //         //     imageArray.push(res.data.data)
    //         //     return {
    //         //         success: 1,
    //         //         file: {
    //         //             url: res.data.data
    //         //         }
    //         //     }
    //         // })
    //         console.log("upload image")
    //     }
    // }
    },
  },
  raw: {
    class: Raw,
    config: {},
  },
  header: {
    class: Header,
    config: {},
  },
  quote: {
    class: Quote,
    config: {},
  },
  checklist: {
    class: CheckList,
    config: {},
  },
  delimiter: {
    class: Delimiter,
    config: {},
  },
  inlineCode: {
    class: InlineCode,
    config: {},
  },
  simpleImage: {
    class: SimpleImage,
    config: {},
  },
  underline: {
    class: Underline,
    config: {},
  },
  personality: {
    class: Personality,
    config: {},
  },
  attachesTool: {
    class: AttachesTool,
    config: {},
  },
  nestedList: {
    class: NestedList,
    config: {},
  },
  linkAutocomplete: {
    class: LinkAutocomplete,
    config: {},
  },
  textVariantTune: {
    class: TextVariantTune,
    config: {},
  },
  Color: {
    class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
    config: {
      colorCollections: [
        "#FF1300",
        "#EC7878",
        "#9C27B0",
        "#673AB7",
        "#3F51B5",
        "#0070FF",
        "#03A9F4",
        "#00BCD4",
        "#4CAF50",
        "#8BC34A",
        "#CDDC39",
        "#FFF",
      ],
      defaultColor: "#FF1300",
      type: "text",
    },
  },
  Marker: {
    class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
    config: {
      defaultColor: "#FFBF00",
      type: "marker",
    },
  },

};
