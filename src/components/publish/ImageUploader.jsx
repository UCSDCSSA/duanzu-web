// Import react related components
import React from 'react';
import Sticky from 'react-sticky-el';
// Import UI Components
import {
  Input,
  Button,
  Card,
  Row,
  Col,
  Icon,
} from 'react-materialize';

class ImageUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: [], imagePreviewUrl: '' };
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    // console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();


    const files = e.target.files;
    const file = new Array();
    for (let i = 0; i < files.length; i++) {
      file.push(files[i]);
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({
          file,
          imagePreviewUrl: reader.result,
        });
      };
      reader.readAsDataURL(file[i]);
      console.log(file[i]);
    }
  }

  render() {
    const { imagePreviewUrl } = this.state;
    console.log(this.state);
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} className="imgPreview" />);
    } else {
      $imagePreview = (
        <div className="upload-file-camera">
          <i className="material-icons">add_a_photo</i>
          <p> 选择图片 </p>
        </div>);
    }

    return (
      <div className="previewComponent">
        <form onSubmit={e => this._handleSubmit(e)}>

          <div className="file-input">
            <input
              className="fileInput"
              type="file"
              onChange={e => this._handleImageChange(e)}
              multiple
            />
            <div className="file-input-content">
              <div>
                {$imagePreview}
              </div>
            </div>
          </div>

          <button
            className="submitButton"
            type="submit"
            onClick={e => this._handleSubmit(e)}
          >
            Upload Image
          </button>
        </form>
      </div>
    );
  }
}
export default ImageUploader;
