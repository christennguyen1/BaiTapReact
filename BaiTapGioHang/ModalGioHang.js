import React, { Component } from "react";
import { Modal, Button } from "antd";
export default class ModalGioHang extends Component {
  state = {
    isModalVisible:false,
  }
   showModal = () => {
    // setIsModalVisible(true);
    this.setState({isModalVisible:true});
  };

   handleOk = () => {
    // setIsModalVisible(false);
    this.setState({isModalVisible:false});
  };

   handleCancel = () => {
    // setIsModalVisible(false);
    this.setState({isModalVisible:false});
  };
  renderSanPham=() => {
   return this.props.gioHang.map((sp)=>{
      return (
        <tr>
          <td>{sp.id}</td>
          <td>
            <img style={{width:"100px"}} src={sp.thumbnail_url} />
          </td>
          <td>{sp.name}</td>
          <td>
            <button className="btn btn-danger" onClick={()=>{
              this.props.handleThayDoiSoLuong(sp.id,false);
            }}>-</button>
            {sp.soLuong}
            <button className="btn btn-success" onClick={()=>{
              this.props.handleThayDoiSoLuong(sp.id,true);
            }}>+</button>
            </td>
             <td>{sp.price.toLocaleString()}</td>
            <td>{(sp.price*sp.soLuong).toLocaleString()}</td>
        </tr>
      )
    });
   }
   renderTongSoLuong=()=>{
     let count=0;
     this.props.gioHang.forEach((item) => {
       count+=item.soLuong;
     });
     return count;
   };
  render() {
  return (
    <>
      <Button type="primary" onClick={this.showModal}>
        Giỏ hàng ({this.renderTongSoLuong()})
      </Button>
      <Modal title="Basic Modal" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel} width={1000}>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Mã</th>
                <th>Hình ảnh</th>
                <th>Tên</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Thành tiền</th>
              </tr>
            </thead>
            <tbody>
              {this.renderSanPham()}
            </tbody>
          </table>
        </div>
      </Modal>
    </>
  );
  }
}
