import Head from "next/head";
import { FunctionComponent } from "react";

interface PropsSeo {
  title?: string;
  metaTitle?: string;
  metaDescription?: string;
  shareImage?: string;
  blog?: string;
}

const Seo: FunctionComponent<PropsSeo> = ({
  metaTitle,
  metaDescription,
  shareImage,
  blog,
  title,
}: any) => {
  return (
    <Head>
      <title>{title ? `${title} - ` : ""}</title>
      {metaTitle && (
        <>
          <title>{metaTitle}</title>
          <meta property="og:title" content={metaTitle} />
          <meta name="fb:title" content={metaTitle} />
        </>
      )}
      {metaDescription && (
        <>
          <meta name="description" content={"hagiakinh.me - I am a software engineer major who's passionate about people-centered development as well as strategic decision-making."} />
          <meta name="description" content={metaDescription} />
          <meta property="og:description" content={metaDescription} />
          <meta name="fb:description" content={metaDescription} />
          <meta property="og:description" content={"hagiakinh.me - I am a software engineer major who's passionate about people-centered development as well as strategic decision-making."} />
          <meta name="fb:description" content={"hagiakinh.me - I am a software engineer major who's passionate about people-centered development as well as strategic decision-making."} />
          <meta name="description" content={"www.hagiakinh.me - I am a software engineer major who's passionate about people-centered development as well as strategic decision-making."} />
          <meta property="og:description" content={"www.hagiakinh.me - I am a software engineer major who's passionate about people-centered development as well as strategic decision-making."} />
          <meta name="fb:description" content={"www.hagiakinh.me - I am a software engineer major who's passionate about people-centered development as well as strategic decision-making."} />
        </>
      )}
      {shareImage && (
        <>
          <meta property="og:image" content={shareImage} />
          <meta name="fb:image" content={shareImage} />
          <meta name="image" content={shareImage} />
        </>
      )}
      {blog && <meta property="og:type" content={blog} />}
    </Head>
  );
};

export default Seo;
