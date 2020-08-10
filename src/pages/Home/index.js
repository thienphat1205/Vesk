import React, { Component } from "react";
import { connect } from "react-redux";
import TitlePage from "../../components/TitlePage";
// import "@carbon/grid/scss/grid";
import "./index.scss";

class Home extends Component {
  // componentDidMount() {
  //   const { getAllProduct } = this.props;
  //   getAllProduct();
  // }

  _setData = () => {
    const { setData } = this.props;
    setData({
      messageError: "Hmmm..."
    });
  };

  componentWillUnmount() {
    const { clearData } = this.props;
    clearData();
  }
  render() {
    // const {
    //   loading,
    //   listProduct,
    //   messageError,
    //   clearData,
    //   getAllProduct
    // } = this.props;
    return (
      <div className="container_page_home">
        <TitlePage title="Home" />
        {/* <h1>Home page</h1>
        <p>{messageError}</p>
        <p>listProduct length: {loading ? "Loading..." : listProduct.length}</p>
        <div className="viewRow">
          <div onClick={() => clearData()}>Clear data</div>
          <div onClick={this._setData}>Set data</div>
          <div onClick={() => getAllProduct()}>Fetch data</div>
        </div> */}
        <div class="bx--grid">
          <div class="bx--row">
            <div class="bx--col">1 of 4</div>
            <div class="bx--col">2 of 4</div>
            <div class="bx--col">3 of 4</div>
            <div class="bx--col">4 of 4</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  products: { loading, listProduct = [], messageError = "" } = {}
}) => ({
  loading,
  listProduct,
  messageError
});

const mapDispatchToProps = dispatch => ({
  getAllProduct: () => dispatch({ type: "GET_ALL_PRODUCT" }),
  clearData: () => dispatch({ type: "CLEAR_DATA" }),
  setData: data => dispatch({ type: "SET_STATE_REDUCER", data })
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
