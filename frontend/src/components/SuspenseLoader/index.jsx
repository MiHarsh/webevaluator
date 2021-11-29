import React, { Suspense } from "react";

const SuspenseLoader = ({ children }) => (
  <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
);

export default SuspenseLoader;
