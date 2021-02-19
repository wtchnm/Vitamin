import { PropsWithChildren, useEffect } from "react";

export default function DocumentTitle({
  children,
}: PropsWithChildren<unknown>): null {
  useEffect(() => {
    document.title = children?.toString() ?? "";
  }, [children]);

  // eslint-disable-next-line unicorn/no-null
  return null;
}
