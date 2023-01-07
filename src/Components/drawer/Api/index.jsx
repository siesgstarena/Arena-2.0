import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import doc from './ApiDocs.json';

const Index = () => {
  return <SwaggerUI spec={doc} />;
};

export default Index;
