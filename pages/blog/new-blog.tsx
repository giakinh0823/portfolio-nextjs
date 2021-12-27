import dynamic from 'next/dynamic';
import * as React from 'react';
import { MainLayout } from '../../components/layout';

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