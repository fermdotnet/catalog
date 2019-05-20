import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactSVG from 'react-svg';
import PageHeader from '../components/pageHeader';
import ItemProduct from '../components/itemProduct';
import environment from '../environment';

class Catalog extends Component {
    types = {
        RECENT: 'recent',
        MORE_EXPENSIVE: 'more-expensive',
        CHEAPER: 'cheaper',
    };

    constructor(props){
        super(props);

        this.state = {
            option: this.types.RECENT,
            currentPage: 1,
            start: 0,
            maxPage: Math.ceil(this.props.products.length/environment.maxItemsPerPage)
        };
    }

    onSelectOption(option){
        this.setState({option});
    }

    sort = (a, b) => {
        if(this.state.option === this.types.MORE_EXPENSIVE)
            return b.cost-a.cost;
        else if(this.state.option === this.types.CHEAPER)
            return a.cost-b.cost;

        return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
    };

    onBack = () => {
        this.setState({
            currentPage: this.state.currentPage - 1,
            start: this.state.start - environment.maxItemsPerPage
        });
    };

    onNext = () => {
        this.setState({
            currentPage: this.state.currentPage + 1,
            start: this.state.start + environment.maxItemsPerPage
        });
    };

    render(){
        return (
            <div className="catalog-page">

                <PageHeader title='Electronics' />

                <div className="page-content">

                    <div className="paginator-header">
                        <div className="count">
                            {this.state.start+environment.maxItemsPerPage} of {this.props.products.length} products
                        </div>
                        <div className="sort">
                            <span>Sort by:</span>
                            <button onClick={() => { this.onSelectOption(this.types.RECENT) }} className={this.state.option === this.types.RECENT ? 'selected' : ''}>Most recent</button>
                            <button onClick={() => { this.onSelectOption(this.types.CHEAPER) }} className={this.state.option === this.types.CHEAPER ? 'selected' : ''}>Lowest price</button>
                            <button onClick={() => { this.onSelectOption(this.types.MORE_EXPENSIVE) }} className={this.state.option === this.types.MORE_EXPENSIVE ? 'selected' : ''}>Highest price</button>
                        </div>
                    </div>

                    <div>
                        {
                            this.props
                            .products.sort(this.sort)
                            .slice(
                                this.state.start,
                                this.state.start+environment.maxItemsPerPage
                            )
                            .map((item, index) => {
                                return (
                                    <ItemProduct key={index} data={item} redeem={true} />
                                );
                            })
                        }
                    </div>

                    <div className="paginator-footer">
                        <div className="count">
                            {this.state.start+environment.maxItemsPerPage} of {this.props.products.length} products
                        </div>
                        <div className="arrows">
                            {this.state.currentPage > 1 && (
                                <ReactSVG src="/assets/images/arrow-left.svg" className="arrow" onClick={this.onBack} />
                            )}
                            {this.state.currentPage < this.state.maxPage && (
                                <ReactSVG src="/assets/images/arrow-right.svg" className="arrow" onClick={this.onNext} />
                            )}
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.products;
};

export default connect(mapStateToProps)(Catalog);