import React from 'react';
import NewsPlayer from './NewsPlayer';
import './NewsPlayer.css';

const tvChannelsData = [
  {
    channelName: 'ABC News',
    youtubeEmbedLink: 'https://youtu.be/OOtxXPaQvoM',
    channelImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/ABC_News_logo_2021.svg/330px-ABC_News_logo_2021.svg.png'
  },
  {
    channelName: 'Sky News',
    youtubeEmbedLink: 'https://youtu.be/9Auq9mYxFEE',
    channelImage: 'https://yt3.googleusercontent.com/E96qzkAoX81DQs7wqRHR4rNk1esa4quBPzda2QRzImlhoHOVgRdAN8o-S0Rb_hpygo_n4LdhwTE=s176-c-k-c0x00ffffff-no-rj'
  },
  {
    channelName: 'Dw News',
    youtubeEmbedLink: 'https://youtu.be/x0qAkl-htic',
    channelImage: 'https://static.dw.com/image/47222913_605.webp'
  },
  {
    channelName: 'CNN News',
    youtubeEmbedLink: 'https://youtu.be/x0qAkl-htic',
    channelImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/CNN-News18_logo.png/360px-CNN-News18_logo.png'
  },
  {
    channelName: 'CNA',
    youtubeEmbedLink: 'https://youtu.be/XWq5kBlakcQ',
    channelImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/CNA_new_logo.svg/225px-CNA_new_logo.svg.png'
  },
  {
    channelName: 'Channel Television',
    youtubeEmbedLink: 'https://youtu.be/2mfBfjTKPG8',
    channelImage: 'https://yt3.googleusercontent.com/mz3T74jFl9DpLb8nNH3ETqIuUXqAztMzOYUckw7YZWmCjnmLiaUU5T0BLEIBJk74Q0eoq0CRbw=s176-c-k-c0x00ffffff-no-rj'
  },
  {
    channelName: 'WION',
    youtubeEmbedLink: 'https://youtu.be/OWmhz00Q5xg',
    channelImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/WION_news_Logo.svg/210px-WION_news_Logo.svg.png'
  },
  {
    channelName: 'India Today',
    youtubeEmbedLink: 'https://youtu.be/f99V8MQV4vA',
    channelImage: 'https://seeklogo.com/images/I/india-today-logo-0218513CB5-seeklogo.com.png'
  },
  {
    channelName: 'Bloomberg Originals',
    youtubeEmbedLink: 'https://youtu.be/dp8PhLsUcFE',
    channelImage: 'https://yt3.googleusercontent.com/QnXaC_YmVgrih83IPHmS_37TOJquPQm4ESeop_PTyvatdS6pJa4ynQ57K9NtD6xV9n41h7to6Bw=s176-c-k-c0x00ffffff-no-rj'
  },
  {
    channelName: 'NHK World-Japan News',
    youtubeEmbedLink: 'https://youtu.be/f0lYkdA-Gtw',
    channelImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/NHK_World.svg/300px-NHK_World.svg.png'
  },
  {
    channelName: 'NASA',
    youtubeEmbedLink: 'https://youtu.be/21X5lGlDOfg',
    channelImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/270px-NASA_logo.svg.png'
  },
  {
    channelName: 'CNBC',
    youtubeEmbedLink: 'https://youtu.be/9NyxcX3rhQs',
    channelImage: 'https://play-lh.googleusercontent.com/UFseqpgRgK38lavCq46JkCidIMkdaXsKi6II4nBwyIggaeiAiWWT8QgEEzxZDVuWMZM=w240-h480-rw'
  },
  {
    channelName: 'LiveNOW from FOX',
    youtubeEmbedLink: 'https://youtu.be/qoytj8mNq7s',
    channelImage: 'https://yt3.googleusercontent.com/dF1ZRcwWOxfn3AysqfW-MMIod2jPfCfgFkMLYiQWGMOiELVA7-nWN7PaXnEv1RfVxRe5S9z36ow=s176-c-k-c0x00ffffff-no-rj'
  },
  {
    channelName: ' GBNews',
    youtubeEmbedLink: 'https://youtu.be/8WX6YL9JnLw',
    channelImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/GB_News_Logo.svg/330px-GB_News_Logo.svg.png'
  },
  {
    channelName: ' English Speeches',
    youtubeEmbedLink: 'https://youtu.be/0RFsw6u_a_U',
    channelImage: 'https://yt3.googleusercontent.com/3ErdBd0bg2Qw5rKdqDK-7vPAf0tirRuodlGGZuhZePQcjEu8i5KniCN-EUCBtQkSOy14M26O=s176-c-k-c0x00ffffff-no-rj'
  },
  {
    channelName: ' Africanews',
    youtubeEmbedLink: 'https://youtu.be/NQjabLGdP5g',
    channelImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Africanews_logo.svg/375px-Africanews_logo.svg.png'
  },
  {
    channelName: 'Polimer News',
    youtubeEmbedLink: 'https://youtu.be/jVE9dFc5OHY',
    channelImage: 'http://india.mom-gmr.org/typo3temp/_processed_/d/c/csm_16526-1592_import_d84315ad22.png'
  },
  {
    channelName: ' Puthiyathalaimurai',
    youtubeEmbedLink: 'https://youtu.be/NX18e_Wh7NA',
    channelImage: 'https://yt3.googleusercontent.com/5ZtoCHyWV95KdgDkYjVfhC1TCdZjHHE8_ar96Uvd8ulPp9rPbKhyds_ULHZUTdR27_XMdGbcLPE=s176-c-k-c0x00ffffff-no-rj'
  },
  {
    channelName: ' SunNews',
    youtubeEmbedLink: 'https://youtu.be/2ywxK3HC4iA',
    channelImage: 'https://yt3.ggpht.com/ytc/AOPolaQUrY5Vzk0du5lsBylCmrzCKUwszKLp_FW31Ep5vg=s88-c-k-c0x00ffffff-no-rj'
  },
  {
    channelName: ' News18 TamilNadu',
    youtubeEmbedLink: 'https://youtu.be/mQrZJFyYzlI',
    channelImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/News18_Tamil_Nadu.jpg/300px-News18_Tamil_Nadu.jpg'
  },
  
  {
    channelName: 'Thanthi TV',
    youtubeEmbedLink: 'https://youtu.be/FeweQREkl44',
    channelImage: 'https://yt3.googleusercontent.com/ytc/AOPolaQiZ1t723LEW4hdTh9nSugYAWVCdSIwIvKH4CmcLtU=s176-c-k-c0x00ffffff-no-rj'
  },
  // Add more channels with channel images...
];

const TVNewsUI = () => {
  return (
    <div className="tv-news-ui">
      <h1>Live News Television</h1>
      <div className="tv-channels">
        {tvChannelsData.map((channel, index) => (
          <NewsPlayer
            key={index}
            channelName={channel.channelName}
            youtubeEmbedLink={channel.youtubeEmbedLink}
            channelImage={channel.channelImage}
          />
        ))}
      </div>
    </div>
  );
};

export default TVNewsUI;