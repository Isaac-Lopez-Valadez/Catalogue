import React from 'react'

import './Filter.css';

class Filter extends React.Component { 
    constructor(props) {
        super(props)

        this.state = {
            filter:''
        }
    }
    handleChange = (e) => {
        this.setState({filter: e.target.value});
        this.props.handlefilter(e.target.value);
    }
    render() {
        return (
        
            <div className="filter-container">
                <div className="filter__sub">
                    <h1> Suscripciones</h1>
                    <p>Precios más IVA.</p>
                </div>
                <div className="filter__list">
                    <label className="filtrador">Filtrar por:</label>
                    <select
                        value={this.state.filter}
                        onChange={this.handleChange}
                    >
                    <option value="">Todos los fabricantes</option>
                        {
                            this.props.marks.map(mark =>(
                                <option key={mark} value={mark}>{mark}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        )
    }
}

export default Filter;