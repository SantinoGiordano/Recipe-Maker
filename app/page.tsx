
import { useState } from "react";

import useFetch from "./hooks/useFetch";

export default function Home() {
  
  const [data, setData] = useState<unknown[]>([])
  const {fetchCsvdata} = useState();
  
  return (
    <>
    <h1>Parse CSV Data</h1>
    </>
  );
}
