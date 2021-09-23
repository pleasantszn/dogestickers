import React from "react";
import {Helmet} from "react-helmet";


export const HeaderController= ({
  title,
  description = "buck is taking developers productivity to the moon 🚀",
  owner,
  additionalKeywords = [],
  embed,
}) => {
  return (
    <Helmet>
      {title ? <title>{title} | buck</title> : <title>buck</title>}
      <meta name="description" content={description} />
      {owner ? <meta name="author" content={owner} /> : ""}
      <meta name="theme-color" content={embed?.hexColor || "#EFE7DD"} />
      <meta name="og:title" content={title || "buck"} />
          <meta
            name="og:type"
            content={owner ? "music.radio_station" : "website"}
          />
          {owner ? <meta name="music:creator" content={owner} /> : ""}
          <meta name="og:description" content={description} />
          <meta name="og:site_name" content="buck" />
          <meta name="og:title" content={title || "buck"} />
          {owner ? <meta name="music:creator" content={owner} /> : ""}
          <meta name="og:description" content={description} />
          <meta name="og:site_name" content="buck" />
    </Helmet>
  );
};