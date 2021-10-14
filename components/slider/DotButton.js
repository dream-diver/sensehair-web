const DotButton = ({ selected, onClick }) => (
  <button
    className={ `embla__dot ${selected ? "is-selected" : ""}` }
    type="button"
    onClick={ onClick }
  />
);

export default DotButton
