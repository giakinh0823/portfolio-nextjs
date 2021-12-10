import * as React from "react";

export interface IBlogContentProps {
  blog: any;
}

export default function BlogContent({ blog }: IBlogContentProps) {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: blog?.blog?.data?.content }} />
    </>
  );
}
