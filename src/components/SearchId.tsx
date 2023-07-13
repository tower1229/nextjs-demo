"use client";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function SearchId(props: {
  onChange?: (keyword: string) => any;
}) {
  return (
    <div>
      <Input
        placeholder="Search ID"
        allowClear
        addonAfter={
          <SearchOutlined className="cursor-pointer hover:text-primary" />
        }
        style={{ width: 200 }}
        onChange={(e) => props.onChange?.(e.target.value)}
      />
    </div>
  );
}
