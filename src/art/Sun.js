import ReactAnime from "react-animejs";
import '../scss/art.scss';

export const Sun = () => {
  const { Anime, stagger } = ReactAnime;

  return (
    <Anime
      initial={[
        {
          targets: ".sun .layer",
          translateX: "-50%",
          translateY: "-50%",
          scale: [0, 1],
          delay: stagger(300, { start: 3500 })
        }
      ]}
    >
      <div className='sun'>
        <span className="layer"></span>
        <span className="layer"></span>
        <span className="layer"></span>
      </div>
    </Anime>
  );
};
