import Head from "next/head";

function Metatag({ children, title, description, url, type, image }) {
  const keywords = "bina cendekia, cendekia, pendidikan, belajar, sekolah";
  return (
    <>
      <Head>
        <title>{title || "Default Title"}</title>
        <meta
          name="description"
          content={description || "Default description"}
        />
        <meta name="keywords" content={keywords} />

        {/* <meta
          property="og:url"
          content={url || "hhttps://binacendikia.sch.id"}
        /> */}
        <meta property="og:url" content={url || "http://localhost:3000"} />

        <meta property="og:type" content={type || "website"} />
        <meta property="og:title" content={title || "Default Title"} />
        <meta
          property="og:description"
          content={description || "Default description"}
        />
        <meta property="og:image" content={image || ""} />
      </Head>
      {children}
    </>
  );
}

export default Metatag;
