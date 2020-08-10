import React from "react";
import TitlePage from "../../components/TitlePage";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./index.scss";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.isComponentMounted = false;
    this.state = {
      itemVideo: {},
    };
  }
  componentDidMount() {
    this.isComponentMounted = true;
    // Fetch video by Id
    const {
      match: { params: { id = "" } = {} } = {},
      dummyListVideo,
    } = this.props;
    const videoById = dummyListVideo.find((element) => element._id === id);
    if (videoById) {
      this.setState({
        itemVideo: videoById,
      });
    }
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      window.onYouTubeIframeAPIReady = this.loadVideo;

      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      this.loadVideo();
    }
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  loadVideo = () => {
    this.player = new window.YT.Player(`player`, {
      videoId: "KjvM4WJcedA",
      events: {
        onReady: this.onPlayerReady,
        onStateChange: this.onPlayerStateChange,
      },
    });
  };

  onPlayerReady = (event) => {
    event.target.playVideo();
  };

  onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      setTimeout(this.stopVideo, 10000);
    }
  };
  stopVideo = () => {
    this.player.stopVideo();
    // if (this.isComponentMounted) {
    //   alert("You have watched 10s");
    // }
  };

  render() {
    const { match: { params: { id = "" } = {} } = {} } = this.props;
    const { itemVideo } = this.state;
    if (!id) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container__detail">
        <TitlePage title={itemVideo.title || "Video Not Found"} />
        <div className="container__detail__view__player">
          <div id="player" className="container__detail__player" />
        </div>
        <div className="container__detail__viewTitle">
          <div className="container__detail__viewTitle--text">
            {itemVideo.title}
          </div>
        </div>

        <div className="line" />
        <div className="container__detail__comment">
          <div className="container__detail__comment__title">COMMENTS</div>
          <div className="container__detail__comment__box compose__comment">
            <img
              className="comment__avatar"
              src={require("../../images/testAvatar.jpg")}
              alt="img-avatar"
            />
            <div style={{ width: "90%", backgroundColor: "yellowgreen" }}>
              <div style={{ backgroundColor: "red", width: "100%" }}>
                Compose comment
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                Compose comment
              </div>
            </div>
          </div>
          <div className="container__detail__comment__box list__comment">
            <img
              className="comment__avatar"
              src={require("../../images/testAvatar.jpg")}
              alt="img-avatar"
            />
            <div>
              <div>Content 1</div>
              <div>Content 2</div>
              <div>Content 3</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ products: { dummyListVideo } = {} }) => ({
  dummyListVideo,
});

const mapDispatchToProps = (dispatch) => ({
  // getAllProduct: () => dispatch({ type: "GET_ALL_PRODUCT" }),
  // clearData: () => dispatch({ type: "CLEAR_DATA" }),
  // setData: data => dispatch({ type: "SET_STATE_REDUCER", data })
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
