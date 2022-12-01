function Hello(props) {
  return (
    <div>
			<p> Hello {props.name}! </p>
			{props.children}
    </div>
  );
}

export default Hello