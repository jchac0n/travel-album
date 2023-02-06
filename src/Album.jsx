const tempTxt = [
  "album1Loc",
  "album2Loc",
  "album3Loc",
  "album5Loc",
  "album6Loc",
  "album7Loc",
];

const Album = () => {
  return (
    <div className="grid-container">
      {tempTxt.map((txt, idx) => (
        <div className="grid-item" key={idx}>
          {txt}
        </div>
      ))}
    </div>
  );
};

export default Album;
