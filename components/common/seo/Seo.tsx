import Head from "next/head";
import { FunctionComponent } from "react";

interface PropsSeo {
  title?: string;
  metaTitle?: string;
  metaDescription?: string;
  shareImage?: string;
  article?: string;
}

const Seo: FunctionComponent<PropsSeo> = ({
  metaTitle,
  metaDescription,
  shareImage,
  article,
  title,
}: any) => {
  return (
    <Head>
      <title>{title ? `${title} - ` : ""}S-ONE</title>
      {metaTitle && (
        <>
          <title>{metaTitle}</title>
          <meta property="og:title" content={metaTitle} />
          <meta name="fb:title" content={metaTitle} />
        </>
      )}
      {metaDescription && (
        <>
          <meta name="description" content={metaDescription} />
          <meta property="og:description" content={metaDescription} />
          <meta name="fb:description" content={metaDescription} />
        </>
      )}
      {shareImage && (
        <>
          <meta property="og:image" content={shareImage} />
          <meta name="fb:image" content={shareImage} />
          <meta name="image" content={shareImage} />
        </>
      )}
      {article && <meta property="og:type" content="article" />}
    </Head>
  );
};

export default Seo;
