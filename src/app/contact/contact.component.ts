import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  constructor() { }
public customFormpopup:boolean=false;
public customFormpopupConatct:boolean=false
public getSingleCustomerData:any;
public ArrayDefalut=[{
   	"name":"Shanmugarajan",
    "companyName":"TCS",
    "address":"Thanjavur",
    "Email":"shanmugarajanlive@gmail.com",
    "numberPhone":"6369757539",
  	"id":"1"
}];
public customerNameData="1";
public customerID="1";
public ListOFName=[{
  "Contactname":"Shanmugarajan",
  "id":"1"
}
]
  ngOnInit(): void {
  	this.cutsomerDataload();
  	this.cutsomerDataloadContact()
  }
showPopup(){
	this.customFormpopup=true;
}


changeCustomerNAme=(CustomerName:any)=>{
  this.getSingleCustomerData=''
  this.customerID=CustomerName.value;
}
customclick=(getFormValue:any)=>{
if(getFormValue.form.valid){
  var ArrageJson=[{
    "name":getFormValue.value.name,
    "companyName":getFormValue.value.companyName,
    "address":getFormValue.value.address,
    "Email":getFormValue.value.Email,
    "numberPhone":getFormValue.value.numberPhone,
    "id":this.customerID
  }]
  for(let JsonValue of ArrageJson){
  this.ArrayDefalut.push(JsonValue)
  localStorage.setItem('customerData',JSON.stringify(this.ArrayDefalut))
  this.customFormpopup=false;
  getFormValue.resetForm();
  alert("Added Successfully")
}
this.cutsomerDataload()
}
}
cutsomerDataload=()=>{
  var getLocalstorage=localStorage.getItem('customerData')
  if(getLocalstorage){
  var JsonParsedValue=JSON.parse(getLocalstorage)
   this.ArrayDefalut=JsonParsedValue;
}
 
}
customerDataclick=(Customer:any)=>{
  this.getSingleCustomerData=Customer
}
closepopup(){
this.customFormpopup=false;
this.customFormpopupConatct=false
}
customclickadd(customFormaddContact:any){
if(customFormaddContact.form.valid){
	var count=1;
	count++
	var ArrageJson=[{
    "Contactname":customFormaddContact.value.Contactname,
    "id":count.toString()
  }]
	for(let JsonValue of ArrageJson){
  this.ListOFName.push(JsonValue)
  localStorage.setItem('customerDataContact',JSON.stringify(this.ListOFName))
  this.customFormpopupConatct=false;
  customFormaddContact.resetForm();
  alert("Added Successfully");
}
this.cutsomerDataloadContact()
}
}
cutsomerDataloadContact=()=>{
  var getLocalstorage=localStorage.getItem('customerDataContact')
  if(getLocalstorage){
  var JsonParsedValue=JSON.parse(getLocalstorage)
   this.ListOFName=JsonParsedValue;
}
}
addContactNames(){
	this.customFormpopupConatct=true
}
}
