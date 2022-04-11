// core
import { Html, useConfig } from "@columnist/core";
// component
import Head from "next/head";
import Img from "../Img";
import Author from "./Author";
// Utilities
import { makeReadTime, makeDate } from "@columnist/core";

const Detail = ({ content }) => {
  const config = useConfig();

  const siteUrl = config.brand.url;

			<Head>
				<title>{content.title}</title>
				<meta property="og:type" content="article" key="og-article" />
				<meta property="og:title" content={content.title} key="og-title" />
				<meta property="og:url" content={`${siteUrl}${content.route}`} />
				{content.summary ? (
					<>
						<meta name="description" content={content.summary} key="desc" />
						<meta
							property="og:description"
							content={content.summary}
							key="og-desc"
						/>
					</>
				) : null}
				{content.image ? (
					<>
						<meta
							property="og:image"
							content={`${siteUrl}${content.image.src}`}
						/>
						<meta name="twitter:image:alt" content={content.image.alt} />
						<meta name="twitter:card" content="summary_large_image" />
					</>
				) : null}
			</Head>
			<article className="mb-4">
				{content.tag ? (
					<small className="text-muted me-2 ms-md-5 me-md-5">
						{content.tag}
					</small>
				) : null}
				<h1 className="mt-2 ms-md-5 me-md-5">{content.title}</h1>
				{content.summary ? (
					<p className="lead text-muted mb-3 ms-md-5 me-md-5">
						{content.summary}
					</p>
				) : null}
				{content.type !== "page" && content.type !== "directory" ? (
					<div className="d-flex justify-content-between mb-3 ms-md-5 me-md-5">
						{config.article.detail.date && content.date ? (
							<small className="text-muted">
								{makeDate(content.date, config.article.detail.date)}
							</small>
						) : null}
						{config.article.detail.readTime && content.text ? (
							<small className="text-muted">
								{makeReadTime(content.text)} min read
							</small>
						) : null}
					</div>
				) : null}
				{content.image && config.article.detail.image ? (
					<div className="text-center">
						<Img
							width={config.article.detail.image.width}
							height={config.article.detail.image.height}
							src={content.image.src}
							alt={content.image.alt}
							optimize={config.article.detail.image.optimize}
						/>
						{content.image.caption ? (
							<small className="text-muted mt-2 ">
								{content.image.caption}
							</small>
						) : null}
					</div>
				) : null}
				{content.html ? (
					<Html className="content-body serif mt-3 ms-md-5 me-md-5">
						{content.html}
					</Html>
				) : null}
				{content.author ? (
					<div className="ms-md-5 me-md-5">
						<Author
							content={
								config.authors[content.author]
									? config.authors[content.author]
  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta property="og:type" content="article" key="og-article" />
        <meta property="og:title" content={content.title} key="og-title" />
        <meta property="og:url" content={`${siteUrl}${content.route}`} />
        {content.summary ? (
          <>
            <meta name="description" content={content.summary} key="desc" />
            <meta property="og:description" content={content.summary} key="og-desc" />
          </>
        ) : null}
        {content.image ? (
          <>
            <meta property="og:image" content={`${siteUrl}${content.image.src}`} />
            <meta name="twitter:image:alt" content={content.image.alt} />
            <meta name="twitter:card" content="summary_large_image" />
          </>
        ) : null}
      </Head>
      <article className="mb-4">
        {content.tag ? (
          <small className="text-muted me-2 ms-md-5 me-md-5">{content.tag}</small>
        ) : null}
        <h1 className="mt-2 ms-md-5 me-md-5">{content.title}</h1>
        {content.summary ? (
          <p className="lead text-muted mb-3 ms-md-5 me-md-5">{content.summary}</p>
        ) : null}
        {content.type !== "page" && content.type !== "directory" ? (
          <div className="d-flex justify-content-between mb-3 ms-md-5 me-md-5">
            {config.article.detail.date && content.date ? (
              <small className="text-muted">
                {makeDate(content.date, config.article.detail.date)}
              </small>
            ) : null}
            {config.article.detail.readTime && content.text ? (
              <small className="text-muted">{makeReadTime(content.text)} min read</small>
            ) : null}
          </div>
        ) : null}
        {content.image && config.article.detail.image ? (
          <div className="text-center">
            <Img
              width={config.article.detail.image.width}
              height={config.article.detail.image.height}
              src={content.image.src}
              alt={content.image.alt}
              optimize={config.article.detail.image.optimize}
            />
            {content.image.caption ? (
              <small className="text-muted mt-2 ">{content.image.caption}</small>
            ) : null}
          </div>
        ) : null}
        {content.html ? (
          <Html className="content-body serif mt-3 ms-md-5 me-md-5">{content.html}</Html>
        ) : null}
        {content.author ? (
          <div className="ms-md-5 me-md-5">
            <Author
              content={
                config.authors[content.author]
                  ? config.authors[content.author]
                  : content.author
              }
              style="detail"
            />
          </div>
        ) : null}
      </article>
    </>
  );
};

export default Detail;
