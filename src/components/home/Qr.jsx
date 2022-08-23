import React from "react";

const Qr = ({ heading, link }) => {
  const [qrCodeUrl, setQrCodeUrl] = React.useState("");
  React.useEffect(() => {
    if (link) {
      setQrCodeUrl(link);
    }
  }, [link]);
  
  return (
    <>
      <h2 className="display-4 pb-3 pt-5 text-center">{heading}</h2>
      <img
        className="d-block w-50 mx-auto"
        src={qrCodeUrl}
        alt="QR Code"
        width="25%"
        height="25%"
      />
    </>
  );
};

export default Qr;
