import React, { Component } from 'react'
import DanhSachDienThoai from './DanhSachDienThoai'
import { dataBaiTapGioHang } from './data'
import ModalGioHang from './ModalGioHang'
import SanPhamChiTiet from './SanPhamChiTiet'

export default class BaiTapGioHang extends Component {
  state = {
    dsdt: dataBaiTapGioHang,
    thongTinChiTiet: dataBaiTapGioHang[0],
    gioHang: [],
  }
  handleThemSanPham = (value) => {
    let cloneGioHang = [...this.state.gioHang];

    let index = cloneGioHang.findIndex((item) => {
      return item.id == value.id;
    });
    if (index == -1) {
      let newObject = { ...value, soLuong: 1 };
      cloneGioHang.push(newObject);
    }
    else {
      cloneGioHang[index].soLuong++;
    }
    this.setState({ gioHang: cloneGioHang });
  };
  handleThayDoiSoLuong = (id,isCheck) => {
    let realID = id < 0 ? id * -1 : id;
    let cloneGioHang = [...this.state.gioHang];
    let index = cloneGioHang.findIndex((item) => {
      return item.id == realID;
    });
    if (index !== -1) {
      if (isCheck) {
        cloneGioHang[index].soLuong++;
      }
      else {
        cloneGioHang[index].soLuong--;
      }
    }
    !isCheck && cloneGioHang[index].soLuong == 0 && cloneGioHang.splice(index, 1);
    this.setState({ gioHang: cloneGioHang });
  }
  handleShowThongTin = (value) => {
    this.setState({ thongTinChiTiet: value });
  };
  render() {
    return (
      <div className="container p-5">
        <ModalGioHang gioHang={this.state.gioHang} handleThayDoiSoLuong={this.handleThayDoiSoLuong} />
        <DanhSachDienThoai dsdt={this.state.dsdt} handleShowThongTin={this.handleShowThongTin} handleThemSanPham={this.handleThemSanPham} />
        <SanPhamChiTiet thongTinChiTiet={this.state.thongTinChiTiet} />
      </div>
    )
  }
}
