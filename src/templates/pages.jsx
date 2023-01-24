import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { graphql, useStaticQuery } from "gatsby";

const shortcodes = {}; // Provide common components here

export default function PageTemplate({ data, children }) {
	const datas = useStaticQuery(graphql`
		query HeaderQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return <MDXProvider components={shortcodes}>{children}</MDXProvider>;
}
