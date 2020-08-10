import React, { Component } from "react";
import { connect } from "react-redux";
import TitlePage from "../../components/TitlePage";
// import "@carbon/grid/scss/grid";
import "./index.scss";

const dummyListVideo = [
  {
    title: "Video 1",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    time: "",
    views: "",
    release: ""
  },
  {
    title: "Video 1",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    time: "",
    views: "",
    release: ""
  },
  {
    title: "Video 2",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    time: "",
    views: "",
    release: ""
  },
  {
    title: "Video 3",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    time: "",
    views: "",
    release: ""
  },
  {
    title: "Video 4",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    time: "",
    views: "",
    release: ""
  },
  {
    title: "Video 4",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    time: "",
    views: "",
    release: ""
  },
  {
    title: "Video 4",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    time: "",
    views: "",
    release: ""
  },
  {
    title: "Video 1",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    time: "",
    views: "",
    release: ""
  },
  {
    title: "Video 1",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    time: "",
    views: "",
    release: ""
  },
  {
    title: "Video 2",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    time: "",
    views: "",
    release: ""
  },
  {
    title: "Video 3",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    time: "",
    views: "",
    release: ""
  },
  {
    title: "Video 4",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    time: "",
    views: "",
    release: ""
  },
  {
    title: "Video 4",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    time: "",
    views: "",
    release: ""
  },
  {
    title: "Video 4",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    time: "",
    views: "",
    release: ""
  },
  {
    title: "Video 1",
    img:
      "https://i.ytimg.com/vi/2KGtXzIb8l8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB9HklpOFDAoKq0-ubIVoKzdbUMiw",
    time: "",
    views: "",
    release: ""
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
        <div class="bx--grid">
          <div class="bx--row">
            {dummyListVideo.map(item => (
              <div class="bx--col">
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
          </div>{" "}
                    
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
