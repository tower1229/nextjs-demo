"use client";
import { Input } from "antd";
const { Search } = Input;
import { useState } from "react";

export default function InputCollectionAddress(props: {
  className?: string;
  handleList?: (data: any[]) => any;
}) {
  const [keywords, setKeywords] = useState<string>(
    "0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63"
  );
  const [loading, setLoading] = useState<boolean>(false);
  const handleSearch = async () => {
    const str = keywords.trim();
    if (!str.length) {
      return;
    }
    setLoading(true);
    const options = {
      method: "GET",
      headers: { accept: "*/*", "x-api-key": "demo-api-key" },
    };

    const list = await fetch(
      `https://api.reservoir.tools/tokens/v6?collection=${keywords}`,
      options
    )
      .then((response) => response.json())
      .then((response) => response.tokens || [])
      .catch((err) => console.error(err));
    setLoading(false);
    props.handleList?.(list);
  };

  return (
    <div className={props.className}>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search Collection"
        size="large"
        value={keywords}
        loading={loading}
        onChange={(e) => setKeywords(e.target.value)}
        onSearch={handleSearch}
      />
    </div>
  );
}
