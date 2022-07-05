import Set from "./set.js";

function Watch() {
  return (
    <div className="clock">
      <h2 className="head">Digital Clock</h2>
      <div className="content">
        <Set />
      </div>
    </div>
  );
}

export default Watch;
