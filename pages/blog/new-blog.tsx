import { MainLayout } from '../../components/layout';
import * as React from 'react';
import dynamic from 'next/dynamic';

let CustomEditor: any;
if (typeof window !== "undefined") {
  CustomEditor = dynamic(() => import('../../components/editor/CustomEditor'));
}


export interface IWriteProps {
}

export default function NewBlog (props: IWriteProps) {
  
  return (
    <>
      {/* {CustomEditor && <CustomEditor />} */}
    </>
  );
}

NewBlog.Layout = MainLayout;