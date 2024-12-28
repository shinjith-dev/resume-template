import { DocumentProps, PDFViewer, usePDF } from "@react-pdf/renderer";
import { JSXElementConstructor, ReactElement, useEffect, useRef } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router";

type Props = {
  children: ReactElement<DocumentProps, string | JSXElementConstructor<any>>;
};

const Exporter = ({ children }: Props) => {
  const downloadRef = useRef<HTMLAnchorElement>(null);
  const [instance] = usePDF({ document: children });
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const download = params.get("download");

  useEffect(() => {
    if (download && instance.url && downloadRef.current) {
      downloadRef.current.click();
      downloadRef.current.remove();
      navigate("/");
    }
  }, [downloadRef.current, download]);

  if (download && instance.loading) return <div>Loading...</div>;

  if (download && instance.error)
    return (
      <div>
        Something went wrong:{" "}
        <NavLink style={{ color: "#228be6" }} to="/?download=true">
          Retry
        </NavLink>
      </div>
    );

  return (
    <div className="h-full w-full">
      {download && instance.url && (
        <span>
          <a
            ref={downloadRef}
            href={instance.url}
            download="shinjith-resume.pdf"
          />
        </span>
      )}

      <PDFViewer style={{ width: "100%", height: "100%" }}>
        {children}
      </PDFViewer>
    </div>
  );
};

export default Exporter;
