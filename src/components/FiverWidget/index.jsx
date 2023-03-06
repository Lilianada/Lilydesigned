import React, { useEffect } from 'react';

function FiverrSellerWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'fiverr-seller-widget-script-aa5dc2a3-61da-4123-80b9-c4b05e970b1d';
    script.src = 'https://widgets.fiverr.com/api/v1/seller/liliancodess?widget_id=aa5dc2a3-61da-4123-80b9-c4b05e970b1d';
    script.setAttribute('data-config', '{"category_name":"Programming \u0026 Tech"}');
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div itemScope itemType='http://schema.org/Person' className='fiverr-seller-widget' style={{ display: 'inline-block', marginTop: '2rem' }}>
      <a itemProp='url' href='https://www.fiverr.com/liliancodess' rel='nofollow' target='_blank' style={{ display: 'inline-block' }}>
        <div className='fiverr-seller-content' id='fiverr-seller-widget-content-aa5dc2a3-61da-4123-80b9-c4b05e970b1d' itemProp='contentURL' style={{ display: 'none' }}></div>
        <div id='fiverr-widget-seller-data' style={{ display: 'none' }}>
          <div itemProp='name'>liliancodess</div>
          <div itemScope itemType='http://schema.org/Organization'><span itemProp='name'>Fiverr</span></div>
          <div itemProp='jobTitle'>Seller</div>
          <div itemProp='description'>I am a Front-end Developer with a Bachelor's Degree in Computer Science. I'm excellent with WordPress, Html5, CSS3, Bootstrap3, JavaScript and React-js. I build awesome and responsive websites with the right aesthetics providing a user friendly environment and making your website's home page Search Engine Optimized.
          </div>
        </div>
      </a>
    </div>
  );
}

export default FiverrSellerWidget;
