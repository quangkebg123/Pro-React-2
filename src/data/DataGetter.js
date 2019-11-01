import React, { Component } from "react";
import { DataTypes } from "../data/Types";

export class DataGetter extends Component {

    render() {
        return <React.Fragment>{ this.props.children }</React.Fragment>
    }

    componentDidUpdate = () => this.getData();
    componentDidMount = () => this.getData();

    getData = () => {
        console.log(this.props,'this.props');
        const dsData = this.props.products_params || {} ;
        const rtData = {
            _limit: this.props.pageSize || 5,
            _sort: this.props.sortKey || "name",
            _page:  1,
            category_like: (this.props.match.params.category || "") === "all" 
                ? "" : this.props.match.params.category
        }        
        
        if (Object.keys(rtData).find(key => dsData[key] !== rtData[key])) {
            this.props.loadData(DataTypes.PRODUCTS, rtData);      
        }
    }
}