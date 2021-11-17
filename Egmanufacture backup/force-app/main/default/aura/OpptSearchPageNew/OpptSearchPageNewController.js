({
    doInit : function(component, event, helper) {
        console.log("ok");
        component.set('v.columns', [
            {label: 'Name', fieldName:'Name',sortable:true,type:'text'},
            {label: 'Stage', fieldName:'StageName',sortable:true,type:'text'},
            {label: 'Amount', fieldName:'Amount',sortable:true,type:'currency'},
            {label: 'Close Date', fieldName:'CloseDate',sortable:true,type:'text'}
        ]);
        helper.getOpportunities(component);
    },
    
    searchTable: function (component, event, helper) {
        
        helper.getOpportunitiesListWithKeyword(component);
       
    }
    
})