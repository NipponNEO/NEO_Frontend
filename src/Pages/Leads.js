import React, { Component } from 'react'

import { Input } from "@progress/kendo-react-inputs";
  import { Button } from "@progress/kendo-react-buttons";
  import styled from 'styled-components';


  import {
    Grid,
    GridColumn as Column,
    getSelectedState,
  } from '@progress/kendo-react-grid';
  import { getter } from '@progress/kendo-react-common';
  import { process } from "@progress/kendo-data-query";
  import products from '../JsonData/products.json';
  import { validPhoneNumber,validPinCode } from '../Utlis/Helper.js';
  import axios from "axios"
import { connect } from 'react-redux';
import { setLeads } from './../Redux/Actions/LeadsAction';



 


  const DATA_ITEM_KEY = 'ProductID';
  const SELECTED_FIELD = 'selected';
  const idGetter = getter(DATA_ITEM_KEY);



  const api = axios.create({
    baseURL: 'http://localhost:7021'
  });

  const createState = (skip, take) => {
    return {
      items: products.slice(skip, skip + take),
      total: products.length,
      skip: skip,
      take: take,
      pageable: {
        buttonCount: 5,
        type: "numeric",
        previousNext: true,
      },
    };
  };

export class Leads extends Component {

  componentDidMount() {
    this.props.leadsDispatch(products)
 
  }

  
     constructor(props){
       super(props)
       console.log(this.props)
       this.state={
        data:products.map((dataItem) =>
        Object.assign(
          {
            selected: false,
          },
          dataItem
        )
      ),

      dataState: createState(0,20),

      input:"",
      selectedState:{}
    }

     }
  
          

  
   
     pageChange = (event) => {
        console.log("on Page Change",event)
      this.setState({dataState:createState(event.page.skip, event.page.take)});
    };
    
     onSelectionChange = (event) => {
       console.log(event)
      
       let selectedState =event.dataItem.ProductID
        const selected= true
        this.setState({
          selectedState:{selectedState,selected}
        });
      };
      
       inputChange = (event) =>{
        console.log(event)
      let value= event.target.value
      this.setState({
          input:value
      })
        
        if(value === ""){
            this.setState({
          dataState: createState(0,20)
        })
            
        
    }
}


 onStyledButtonHandle=(event)=> {
    event.preventDefault()
const intInput =  parseInt(this.state.input)
   let newDataState = this.state.dataState
 if(this.state.input  !== "" ){
  if(validPhoneNumber.test(intInput)){
       console.log("input")
       newDataState.filter={
           logic:"or", 
           filters:[
               {
               field:"PhoneNumber",
               operator:"eq",
               value:intInput,
              
               }
           ]

           
       }

   }else if(validPinCode.test(intInput)){
       console.log("input")
       newDataState.filter={
           logic:"or",
           filters:[
               {
               field:"PinCode",
               operator:"eq",
               value:intInput
               }
           ]

           
       }

   }else{
       newDataState.filter={
           logic:"or",
           filters:[
               {
               field:"ProductName",
               operator:"contains",
               value:this.state.input,
               ignoreCase: true
               }
           ]

   }
}
}

   this.setState({
       dataState:newDataState
   })
}



  render() {
    console.log(this.props.allProducts)
     return (
        <div style={{padding:"20px",height:'100vh',}}>
        <div style={{display:"flex",width:"100%"}}>

        <Input
        style={{width:"20%"}}  
        label='Search'
        placeholder='CustomerName/PhoneNo/pincode'
        onChange={this.inputChange}>
        </Input>
        <StyledButton onClick={this.onStyledButtonHandle}>Search</StyledButton>
        </div>
        <div  style={{marginTop:"30px"}}>

       
        <LeadGrid 
      data={process(this.state.data.map((item) => ({
        ...item,
        [SELECTED_FIELD]: this.state.selectedState[idGetter(item.selectedState)],
      })),this.state.dataState)}
      style={{maxHeight:600, fontSize:"20px", fontWeight:500,position:'sticky',paddingBottom:'80px'}}
      {...this.state.dataState}
      dataItemKey={DATA_ITEM_KEY}
      selectedField={SELECTED_FIELD}
      navigatable={true}
      onPageChange={this.pageChange}
      selectable={{
        enabled: false,
        drag: false,
        cell: false,
        mode: 'single',
      }}
        scrollable={'scrollable'}
       onRowClick={(e)=>this.onSelectionChange(e)}
    >
      <Column field="ProductName" title="Product Name" />
      <Column field="PhoneNumber" title="Phone Number" />
      <Column field="PinCode" title="Pin Code" />
      <Column field="ReorderLevel" title="Reorder Level" />

    </LeadGrid>

    </div>
        </div>
    )
    }
}

const StyledButton =styled(Button)`
width:80px;
color: white;
background-color: #3e80ed;
height: 20%;
margin-top: 20px;
margin-left: 20px;
&:hover{
  background-color: #3e80ed;
  box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.50);
  

}
`;

const LeadGrid = styled(Grid)`
.k-grid-header, .k-grouping-header, .k-grid-add-row, .k-grid-footer {
    color: #212529;
 
}
`;



const mapStateToProps =(state) =>{
   
   return  { allProducts: state.allLeads}


}



function mapDispatchToProps(dispatch) {
  return {

    leadsDispatch: (leads => {
      dispatch(setLeads(leads))
    })
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Leads) 