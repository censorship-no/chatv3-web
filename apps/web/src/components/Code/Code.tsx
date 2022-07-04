import { PortableTextTypeComponentProps } from "@portabletext/react";
import React from "react";

export function Code({ value }: PortableTextTypeComponentProps<any>) {
  if (!value || !value.code) {
    return null;
  }
  // for future improvements we have a language value here
  const { code } = value;
  return (
    <div className="code-block">
        <pre role="code">
          {code}
        </pre>
    </div>
  );
};
