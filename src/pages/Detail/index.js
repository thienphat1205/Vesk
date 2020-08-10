import React from "react";
import TitlePage from "../../components/TitlePage";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemVideo: {}
    };
  }
  componentDidMount() {
    // Fetch video by Id
    const {
      match: { params: { id = "" } = {} } = {},
      dummyListVideo
    } = this.props;
    const videoById = dummyListVideo.find(element => element._id === id);
    if (videoById) {
      this.setState({
        itemVideo: videoById
      });
    }
  }
  render() {
    const { match: { params: { id = "" } = {} } = {} } = this.props;
    const { itemVideo } = this.state;
    if (!id) {
      return <Redirect to="/" />;
    }
    return (
      <div style={{ backgroundColor: "#fff" }}>
        <TitlePage title={itemVideo.title || "Video Not Found"} />
        <h1>Video ID: {id}</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KjvM4WJcedA"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    );
  }
}
const mapStateToProps = ({ products: { dummyListVideo } = {} }) => ({
  dummyListVideo
});

const mapDispatchToProps = dispatch => ({
  // getAllProduct: () => dispatch({ type: "GET_ALL_PRODUCT" }),
  // clearData: () => dispatch({ type: "CLEAR_DATA" }),
  // setData: data => dispatch({ type: "SET_STATE_REDUCER", data })
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
