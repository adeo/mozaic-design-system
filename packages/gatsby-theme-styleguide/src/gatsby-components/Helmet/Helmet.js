import React from 'react'
import Helmet from 'react-helmet'

// Centralized "Helmet" implementation

export default ({ ...props }) => {
  return (
    <Helmet {...props}>
      <html lang="en" about="Mozaic test" />
      <script>
        {`
          <!-- Hotjar Tracking Code for http://mozaic.adeo.cloud -->
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:1528294,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
      </script>
    </Helmet>
  )
}
