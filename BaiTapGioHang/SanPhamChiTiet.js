import React, { Component } from 'react'

export default class SanPhamChiTiet extends Component {
  render() {
    let{name,price,thumbnail_url}=this.props.thongTinChiTiet;
    return (
      <div className="container p-5">
        <div className="my-5 row">
          <div className="col-4">
            <img style={{ width: "250px" }} src={thumbnail_url} />
          </div>
          <div className="col-6">
            <p className="card-title">Tên: {name}</p>
            <p className="card-text">
              <p className="text-danger">Giá: {price.toLocaleString()} đồng</p>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
