package com.project.dta;

import java.util.Date;

public class OrderDto {
	
	private int cId;
	private int pId;
	private int qty;
	private Date oDate;
	private Date ddate;
	private String status;
	public String getPaymentmode() {
		return paymentmode;
	}
	public void setPaymentmode(String paymentmode) {
		this.paymentmode = paymentmode;
	}
	private int staffId;
	private String paymentmode;
	
	public OrderDto(int cId, int pId, int qty, Date oDate, Date ddate, String status, int staffId, String paymentmode) {
		this.cId = cId;
		this.pId = pId;
		this.qty = qty;
		this.oDate = oDate;
		this.ddate = ddate;
		this.status = status;
		this.staffId = staffId;
		this.paymentmode = paymentmode;
	}
	public OrderDto() {
		
	}
	public OrderDto(int cId, int pId, int qty, Date oDate, Date ddate, String status , int staffId) {
		
		this.cId = cId;
		this.pId = pId;
		this.qty = qty;
		this.oDate = oDate;
		this.ddate = ddate;
		this.status = status;
		this.staffId=staffId;
	}
	public int getstaffId() {
		return staffId;
	}
	public void setstaffId(int staffId) {
		this.staffId = staffId;
	}
	public int getcId() {
		return cId;
	}
	public void setcId(int cId) {
		this.cId = cId;
	}
	public int getpId() {
		return pId;
	}
	public void setpId(int pId) {
		this.pId = pId;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	public Date getoDate() {
		return oDate;
	}
	public void setoDate(Date oDate) {
		this.oDate = oDate;
	}
	public Date getDdate() {
		return ddate;
	}
	public void setDdate(Date ddate) {
		this.ddate = ddate;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "OrderDto [cId=" + cId + ", pId=" + pId + ", qty=" + qty + ", oDate=" + oDate + ", ddate=" + ddate
				+ ", status=" + status + ", staffId=" + staffId + "]";
	}
	
	
}
