import react, { Component } from "react";

class Counter extends Component{

    constructor(props){
        super(props);

        this.state = {
            counter:1,
            list:[0]
        };
    }

    compute=(op) => {
        let newCounter = 0;

        if(op == '+')
        {
            newCounter = this.state.counter + 1;
        }
        else
        {
            newCounter = this.state.counter - 1;
        }

        this.setState({
            counter: newCounter
        });
    }

    render(){
        return(
            <div className="row">
                <div className="col-4">
                    <div className="card m-3">
                        <div className="card-header">
                            <h3>{ this.props.title } : { this.state.counter }</h3>
                        </div>
                        <div className="ml-auto">
                            <button onClick={() => { this.compute('+') } } className="btn btn-primary m-2">+</button>
                            <button onClick={() => { this.compute('-') } } className="btn btn-primary m-2">-</button>
                        </div>
                        <div className="card-body">
                            <img src={ this.props.image } className="img" width="200"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Counter;