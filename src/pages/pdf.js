import React, { useState, useEffect, useCallback } from "react"
import tw, { css } from "twin.macro"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Document, Page } from 'react-pdf';

const Wrapper = tw.div`w-full max-w-screen-md px-4 md:px-0 mx-auto pt-4 md:pt-12 mt-2 mb-4`
export default ({ data, location }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <Layout>
      <SEO title="pdf" />
      <Document
        file="https://projects.wojtekmaj.pl/react-pdf/static/sample.49a87e34.pdf"
        onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </Layout>
  )
}