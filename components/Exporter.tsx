import { DocumentProps } from "@react-pdf/renderer";
import dynamic from "next/dynamic";
import React, { JSXElementConstructor, ReactElement, ReactNode } from "react";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  { ssr: false, loading: () => <p>Loading...</p> },
);

type Props = {
  children?: ReactElement<DocumentProps, string | JSXElementConstructor<any>>;
};

const Exporter = ({ children }: Props) => {
  return (
    <div className="h-full w-full">
      <PDFViewer style={{ width: "100%", height: "100%" }}>
        {children}
      </PDFViewer>
    </div>
  );
};

export default Exporter;
