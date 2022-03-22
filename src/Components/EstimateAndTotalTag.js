const EstimateAndTotalTag = () => {
    return ( <>
        <div className="row mb-2 estimation" style={{width: "100%" ,borderRadius: "4px", backgroundColor: "white", padding: "4px", margin: "0", border: "1px solid #dcdcdc"}}>
            <div className="col-8" style={{padding: "4px" ,borderBottom: "1px solid #dcdcdc"}}>Estimate - Valid from (01-01-2022 <strong>to</strong> 07-01-2022)</div>
            <div className="col-4" style={{padding: "4px" ,borderBottom: "1px solid #dcdcdc", display: "flex", justifyContent: "flex-end"}}><strong>Estimate No: 1011</strong></div>
            <div className="col-10">Total payable amount</div>
            <div className="col-2" style={{padding: "4px" ,display: "flex", justifyContent: "flex-end", color: "chartreuse", fontWeight: "bold"}}>Rs. 19002</div>
        </div>
    </> );
}
 
export default EstimateAndTotalTag;