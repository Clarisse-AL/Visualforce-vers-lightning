({
    doInit : function(component, event, helper) {
        console.log("ok");
        component.set('v.columns', [
            {label: 'Name', fieldName:'Name',sortable:true,type:'text', initialWidth: 400},
            {label: 'Stage', fieldName:'StageName',sortable:true,type:'text', initialWidth: 300},
            {label: 'Amount', fieldName:'Amount',sortable:true,type:'currency', initialWidth: 300},
            {label: 'Close Date', fieldName:'CloseDate',sortable:true,type:'text', initialWidth: 400}
        ]);
        helper.getOpportunities(component);
    },
    
    searchTable: function (component, event, helper) {
        
        var searchValue = component.get("v.searchValue");
        console.log("searchValue: " + searchValue);
        
        var recordId = component.get("v.recordId");
        console.log("recordId: "+recordId);
        
        var action = component.get("c.getOpportunitiesListWithKeyword");
        action.setParams({ accountId : recordId,
                           keyword : searchValue 
                         });
        console.log("ok1");
        
        action1.setCallback(this, function(response) {
            var state = response.getState();
            console.log("ok2");
            if(state === 'SUCCESS'){
                var opportunities = response.getReturnValue();
                console.log("opportunities from server with keyword: "+ JSON.stringify(opportunities));
                component.set("v.myData", opportunities);
            }
            else {
                console.log("Errors: " + JSON.stringify(error));
            }
        });
        $A.enqueueAction(action);
        
    }
    
})