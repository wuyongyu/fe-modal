import React from "react";

const noop = _ => undefined;

class Modal extends React.Component {
  render() {
    const {
      visible,
      opacity,
      width,
      height,
      titleClass,
      title,
      contentClass,
      content,
      footerClass,
      okClass,
      onOk,
      confirmText,
      cancelClass,
      onCancel,
      cancelText
    } = this.props;
    return (
      <React.Fragment>
        {visible && (
          <div
            className="modal-box"
            style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
          >
            <div className="modal-content" style={{ width, height }}>
              <div className={titleClass}>{title}</div>
              <div className={contentClass}>{content}</div>
              <div className={footerClass}>
                <div className={okClass} onClick={onOk}>
                  {confirmText}
                </div>
                <div className={cancelClass} onClick={onCancel}>
                  {cancelText}
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

Modal.defaultProps = {
  onOk: noop,
  onCancel: noop,
  opacity: 0.6,
  width: "400px",
  height: "auto",
  confirmText: "确定",
  cancelText: "取消",
  titleClass: "modal-title",
  contentClass: "modal-content",
  footerClass: "modal-footer",
  okClass: "modal-confirm",
  cancelClass: "modal-cancel"
};

export default Modal;
