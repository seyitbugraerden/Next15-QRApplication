"use client";
import QRCode from "react-qr-code";
import { useRef } from "react";

export default function QRCodePage({ state }: { state?: string }) {
  const qrCodeRef = useRef(null);

  const downloadQR = () => {
    const svg = qrCodeRef.current.querySelector("svg");
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const pngFile = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.download = "QRCode.png";
        downloadLink.href = pngFile;
        downloadLink.click();
      };

      img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
    }
  };

  return (
    <div>
      {state && (
        <div ref={qrCodeRef}>
          <QRCode
            className="hidden"
            id="QRCode"
            size={256}
            style={{ height: "auto", maxWidth: "360px", width: "360px" }}
            value={`http://localhost:3000/dashboard/${state}`}
          />
        </div>
      )}
      <input
        className="cursor-pointer py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        type="button"
        value="Download QR"
        onClick={downloadQR}
      />
    </div>
  );
}
