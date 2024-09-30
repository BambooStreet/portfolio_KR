// src/components/ProjectDescription.js

import React, { lazy, Suspense } from 'react';

const ProjectDescription = ({ projectId }) => {
  const SpecificDescription = lazy(() => import(`./projectDescriptions/${projectId}.js`));

  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <SpecificDescription />
    </Suspense>
  );
};

export default ProjectDescription;