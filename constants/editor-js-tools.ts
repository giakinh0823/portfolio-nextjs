import AttachesTool from "@editorjs/attaches";
import CheckList from "@editorjs/checklist";
import Code from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
import Header from "@editorjs/header";
import Image from "@editorjs/image";
import InlineCode from "@editorjs/inline-code";
import LinkTool from "@editorjs/link";
import LinkAutocomplete from '@editorjs/link-autocomplete';
import List from "@editorjs/list";
import Marker from "@editorjs/marker";
import NestedList from "@editorjs/nested-list";
import Personality from "@editorjs/personality";
import Quote from "@editorjs/quote";
import Raw from "@editorjs/raw";
import SimpleImage from "@editorjs/simple-image";
import Table from "@editorjs/table";
import TextVariantTune from '@editorjs/text-variant-tune';
import Underline from "@editorjs/underline";
import Warning from "@editorjs/warning";


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