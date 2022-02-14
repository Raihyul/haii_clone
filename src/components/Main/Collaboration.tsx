import { useEffect, useState } from "react";
import Papa from "papaparse";

const Collaboration = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    Papa.parse("/main_advisory.csv", {
      download: true,
      header: true,
      complete: (data: any) => {
        setRows(data.data);
      },
    });
  }, []);
// console.log(rows);

  return <>collaboration</>;
};

export default Collaboration;
