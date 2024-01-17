import * as React from 'react'

// Useful links for configuring third-party usage with a Consent Management Platform
// in our case with Axeptio:
// https://developers.google.com/tag-platform/gtagjs/reference?hl=en#consent
// https://developers.google.com/tag-platform/security/guides/consent?hl=en#implementation_example
// https://developers.axeptio.eu/cookies/gtag-and-google-consent-mode
// https://developers.axeptio.eu/site-integration/special-cases-spa-or-react

const HeadComponents = [
  <script
    key="ga_setup"
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}

        gtag('consent', 'default', {
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied',
          'analytics_storage': 'denied',
          'wait_for_update': 5500,
        });

        // _axcb holds the callback functions that will
        // be executed when Axeptio is loaded
        window._axcb = window._axcb || [];
      `,
    }}
  />,
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-36LEF1V8XB"
  ></script>,
  <script
    key="ga_config"
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-36LEF1V8XB', { 'anonymize_ip': true })
      `,
    }}
  />,
  <script
    key="axeptio_config"
    dangerouslySetInnerHTML={{
      __html: `
        window._axcb.push(function(axeptio) {
          axeptio.on("cookies:complete", function(choices) {
            var gaVendorName = 'google_analytics';
            var hjVendorName = 'hotjar';
            var scVendorName = 'smallchat';
            var consentSettings = {
              ad_storage: 'denied',
              ad_user_data': 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
            };

            if (choices[gaVendorName]) {
              gtag("send", "pageview");
              gtag("consent", "update", consentSettings);
              gtag('consent', 'update', {
                'analytics_storage': 'granted'
              });
            }

            if (choices[hjVendorName]) {
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:1528294,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            }

            if (choices[scVendorName]) {
              var el = document.createElement('script');
              el.setAttribute('id', 'sc-script-loader');
              el.setAttribute('type', 'text/javascript');
              el.setAttribute('async', true);
              el.setAttribute('src', '//embed.small.chat/T4R6RCZFAG0182TS10L8.js');
              document.body.append(el);
            }
          });

          axeptio.on('consent:saved', function(choices) {
            window.location.reload()
          });
        });
      `,
    }}
  />,
]

const BodyComponents = [
  <script
    key="axeptio_setup"
    dangerouslySetInnerHTML={{
      __html: `
        window.axeptioSettings = {
          clientId: "658a8dc0973e5dde37923414",
          cookiesVersion: 'mozaic-design-system-en-EU',
        };
        (function (d, s) {
          var t = d.getElementsByTagName(s)[0],
            e = d.createElement(s)
          e.async = true
          e.src = '//static.axept.io/sdk-slim.js'
          t.parentNode.insertBefore(e, t)
        })(document, 'script');
      `,
    }}
  />,
]

const onRenderBody = (gatsbyApi) => {
  const { setHeadComponents, setPostBodyComponents } = gatsbyApi
  setHeadComponents(HeadComponents)
  setPostBodyComponents(BodyComponents)
}

export { onRenderBody }
