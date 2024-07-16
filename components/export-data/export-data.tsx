import React from "react";
import { ICategory } from "../../types/data-types";

interface IExportData {
  data: ICategory[];
  fileName: string;
}

import {Button} from "../../styles/header.styles"

const ExportData: React.FC<IExportData> = ({ data, fileName }) => {
  const handleDownload = () => {
    if (data.length === 0) return;

    const csvHeader = Object.keys(data[0]).join(",");
    const csvContent = data
      .map((row) => Object.values(row).join(","))
      .join("\n");
    const csv = `${csvHeader}\n${csvContent}`;

    // Create a Blob from the CSV string
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

    // Create a link element
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${fileName}.csv`;

    // Append to the document body and trigger the download
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
  };

  return <Button onClick={handleDownload}>export data</Button>;
};

export default ExportData;
