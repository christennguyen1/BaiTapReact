import React, { Component } from 'react'
import ItiemDienThoai from './ItiemDienThoai'

export default class DanhSachDienThoai extends Component {
  render() {
    return (
      <div className="row container">
        { this.props.dsdt.map((item,index)=>{
          if(index<3){
            return <ItiemDienThoai dienThoai={item} handleClick={this.props.handleShowThongTin} handleAdd={this.props.handleThemSanPham}/>
          }
        })}
      </div>
    )
  }
}
