import React from 'react';

const telegramUrl = 'https://t.me/share/url?url=';
const ShareIcon = () => {
  const url = window.location.href;
  return (
    <div className="flex mt2">
      <a target="_blank" rel="noopener noreferrer" className="twitter-share-button mr3" href={`https://twitter.com/intent/tweet?url=${url}`}><img alt="tweet" src="https://img.icons8.com/color/32/000000/twitter.png" /></a>
      <a target="_blank" rel="noopener noreferrer" className="mr3" href={`whatsapp://send?url=${url}`} data-action="share/whatsapp/share"><img alt="whatsapp" src="https://img.icons8.com/office/32/000000/whatsapp.png" /></a>
      <a target="_blank" rel="noopener noreferrer" className="mr3" href={telegramUrl.concat(url)} data-telegram-share-url="https://core.telegram.org/widgets/share"><img alt="telegram" src="https://img.icons8.com/color/32/000000/telegram-app.png" /></a>
      <a target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} className="fb-xfbml-parse-ignore"><img alt="fb" src="https://img.icons8.com/office/32/000000/facebook-new.png" /></a>
    </div>
  );
};

export default ShareIcon;
