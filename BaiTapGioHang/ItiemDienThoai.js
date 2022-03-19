import React, { Component } from 'react'

export default class ItiemDienThoai extends Component {
  render() {
    let { thumbnail_url, name, price } = this.props.dienThoai;
    return (
      <div className="col-4 p-3">
        <div className="card p-3">
          <img style={{ width: "280px" }} className="card-img-top" src={thumbnail_url} alt />
          <div className="card-body">
            <p className="card-title">{name}</p>
            <p className="card-text">
              <p className="text-danger">Giá: {price.toLocaleString()} đồng</p>
            </p>
            <button className="btn btn-success"
              onClick={() => {
                this.props.handleClick(this.props.dienThoai);
              }}
            >Xem chi tiết</button>
            <button className="btn btn-danger"
              onClick={() => {
                this.props.handleAdd(this.props.dienThoai);
              }}
            >Thêm vào giỏ hàng</button>
          </div>
        </div>
      </div>
    )
  }
}
