import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = {
      spans: 0
    };
  }

  componentDidMount() {
    // console.log("imageRef", this.imageRef);
    // console.log("clientHeight ", this.imageRef.current.clientHeight);
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    console.log("setSpan : ", this.imageRef.current.clientHeight);
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 150);
    this.setState({ spans });
    console.log("span ", this.state.spans);
  };
  render() {
    // this.imageRef = React.createRef();
    const { alt_description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={alt_description} src={urls.thumb} />
      </div>
    );
  }
}
export default ImageCard;
