import React from 'react';
import { Helmet } from 'react-helmet-async';

const UtmifyScript: React.FC = () => {
  return (
    <Helmet>
      <script 
        src="https://cdn.utmify.com.br/scripts/utms/latest.js" 
        data-utmify-prevent-xcod-sck 
        data-utmify-prevent-subids 
        async 
        defer 
      />
    </Helmet>
  );
};

export default UtmifyScript;