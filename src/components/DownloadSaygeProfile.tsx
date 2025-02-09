import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import SaygeCompanyProfile from "../pages/SaygeCompanyProfile";

const DownloadSaygeProfile = () => {
  const [isClient, setIsClient] = useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <PDFDownloadLink
      document={<SaygeCompanyProfile />}
      fileName="Sayge_Company_Profile.pdf"
      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
    >
      {({ loading }) => 
        loading ? "Generating PDF..." : "Download Company Profile"
      }
    </PDFDownloadLink>
  );
};

export default DownloadSaygeProfile;