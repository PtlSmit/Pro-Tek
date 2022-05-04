import React from 'react';


class AddEmp extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {employee: ""};
    }

    addEmp = () =>{
        const {item} = this.state;
        this.props.addEmps(item);
        this.setState({item:''})
    };

    handleChange =(e) =>{
        this.setState({item: e.target.value});
    };
    render() { 
        return (
            <>
           <input type="text" value={this.state.item} type="text" onChange={this.handleChange} />
            <button onClick={this.addEmp}>Add</button>
            </>
        );
    }
}
export default AddEmp; 