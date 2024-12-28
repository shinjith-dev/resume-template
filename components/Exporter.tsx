"use client";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { DocumentProps, usePDF } from "@react-pdf/renderer";
import React, {
  JSXElementConstructor,
  ReactElement,
  useEffect,
  useRef,
} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  { ssr: false, loading: () => <p>Loading...</p> },
);

type Props = {
  children: ReactElement<DocumentProps, string | JSXElementConstructor<any>>;
};

const Exporter = ({ children }: Props) => {
  const params = useSearchParams();
  const [instance] = usePDF({ document: children });
  const downloadRef = useRef<HTMLAnchorElement>(null);
  const download = params.get("download");
  const router = useRouter();

  useEffect(() => {
    if (download && downloadRef?.current) {
      downloadRef.current.click();
      router.push("/");
    }
  }, [downloadRef.current, download, router]);

  if (download && instance.loading) return "Loading...";
  if (download && instance.error)
    return (
      <div>
        Some error occured file getting the resume!{"  "}
        <Link
          href="/?download=true"
          style={{ color: "#228be6", fontWeight: 500 }}
        >
          Retry
        </Link>
      </div>
    );

  return (
    <div className="h-full w-full">
      {download && instance.url && (
        <a
          ref={downloadRef}
          href={instance.url}
          download="shinjith-resume.pdf"
        />
      )}
      <PDFViewer style={{ width: "100%", height: "100%" }}>
        {children}
      </PDFViewer>
    </div>
  );
};

export default Exporter;
