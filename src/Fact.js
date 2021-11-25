const Fact = (props) => {
  return (
    <div className="fact">
      <p>{props.Fact.type.type}</p>
      <p>{props.Fact.fact}</p>
    </div>
  );
};

export default Fact;
