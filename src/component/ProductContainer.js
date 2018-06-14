import React from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getData, addToMyList, removeFromMyList } from '../actions/cart';
import { movies } from '../data/movies'

class ProductConatiner extends React.Component {
    constructor(props) {
        super(props);
        this.props.getData();
    }

    addToMyList = (index) => {
        this.props.addToMyList(index);
    }
    removeFromMyList = (index) => {
        this.props.removeFromMyList(index);
    }

    render() {
        return (
            <div>
                <h2>My List</h2>
                <div className="product-container">
                    {this.props.cart.mylist && this.props.cart.mylist.map((item, index) => {
                        return <Product updateCart={this.removeFromMyList} key={index} index={index} item={item} type={`-`} />
                    })}
                </div>
                <h2>Recommendations</h2>
                <div className="product-container">
                    {this.props.cart.recommendations && this.props.cart.recommendations.map((item, index) => {
                        return <Product updateCart={this.addToMyList} key={index} index={index} item={item} type={`+`} />
                    })}
                </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        cart: state.cart,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getData: bindActionCreators(getData, dispatch),
        addToMyList: bindActionCreators(addToMyList, dispatch),
        removeFromMyList: bindActionCreators(removeFromMyList, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductConatiner);

