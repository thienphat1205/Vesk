import React, { Component } from "react";
import { connect } from "react-redux";
import TitlePage from "../../components/TitlePage";
import "./index.scss";

const dummyListVideo = [
  {
    title: "Video 1",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    _id: "123",
    url: ""
  },
  {
    title: "Video 1",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    _id: "456",
    url: ""
  },
  {
    title: "Video 2",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    _id: "789",
    url: ""
  },
  {
    title: "Video 3",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    _id: "111",
    url: ""
  },
  {
    title: "Video 4",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    _id: "22222",
    url: ""
  },
  {
    title: "Video 4",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    _id: "242452",
    url: ""
  },
  {
    title: "Video 4",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    _id: "42452452452",
    url: ""
  },
  {
    title: "Video 1",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    _id: "78578575",
    url: ""
  },
  {
    title: "Video 1",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    _id: "78578566",
    url: ""
  },
  {
    title: "Video 2",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    _id: "141747",
    url: ""
  },
  {
    title: "Video 3",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    _id: "96939",
    url: ""
  },
  {
    title: "Video 4",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    _id: "357375357",
    url: ""
  },
  {
    title: "Video 4",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    _id: "0000042",
    url: ""
  },
  {
    title: "Video 4",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    _id: "4524524527881",
    url: ""
  },
  {
    title: "Video 1",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    _id: "774747485869",
    url: ""
  }
];

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
        <div className="bx--grid">
          <div className="bx--row">
            {dummyListVideo.map(item => (
              <div className="bx--col" key={item._id}>
                <div className="item__video">
                  <img
                    src={item.img}
                    alt={`Video ${item.title}`}
                    className="item__video__img"
                  />
                  <p className="item__video__title">{item.title}</p>
                </div>
              </div>
            ))}
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
