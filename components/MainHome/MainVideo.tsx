// import Image from 'next/image';
import style from './mainVideo.module.scss';

export default function MainVideo() {
  return (
    <section className={style.mainVideo}>
      {/* video */}
      <video muted>
        <source src="https://www.hanwhaaerospace.co.kr/files/videoView.do?id=809f32fe-f086-403c-a79d-01a70dd6808d" />
      </video>
      {/* bottom Menu */}
      <div className={`inner ${style.bottom}`}>
        <div className="row-sp">
          <h3>The innovating pioneer for a sustainable tomorrow</h3>
          <div className={`bttn ${style.downArrowWrap}`}>
            <div className={style.arrowIcon} />
            {/* <Image src="/images/content/common/icon/arrow-scroll-bottom-w.svg" width={31} height={31} alt="icon" /> */}
          </div>
        </div>

        <div className={style.barWrap}>
          <div className={style.line} />
        </div>
      </div>
    </section>
  );
}
