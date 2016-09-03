import React from 'React';
import ReactDom from 'react-dom'

class Hello extends React.Component {
	render(){
		return(
				<div>React ready !!</div>
			);
	}
}

ReactDom.render(<Hello />, document.getElementById('container'));
