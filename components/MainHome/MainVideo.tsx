import style from './mainVideo.module.scss';

export default function MainVideo() {
  return (
    <section className={style.mainVideo}>
      {/* video */}
      <video muted>
        <source src="https://www.hanwhaaerospace.co.kr/files/videoView.do?id=809f32fe-f086-403c-a79d-01a70dd6808d" />
      </video>
      {/* bottom Menu */}
      <div className="bottom">
        <div className="row">
          <h3>The innovating pioneer for a sustainable tomorrow</h3>
          <div>arrow</div>
        </div>
        <div className="bar">prograss bar</div>
      </div>
    </section>
  );
}
