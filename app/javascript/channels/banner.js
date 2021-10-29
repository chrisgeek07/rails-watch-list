import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Get ready to be entertained", "Are you not entertained ?"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };