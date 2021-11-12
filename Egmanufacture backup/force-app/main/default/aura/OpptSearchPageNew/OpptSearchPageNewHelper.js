({
    getOpportunities : function(component, helper) {
        var recordId = component.get("v.recordId");
        console.log("recordId: "+recordId);
        
        var action = component.get("c.getOpportunitiesList");
        action.setParams({ accountId : recordId });
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            
            if(state === 'SUCCESS'){
                var opportunities = response.getReturnValue();
                console.log("Opportunities from server: "+ JSON.stringify(opportunities));
                component.set("v.myData", opportunities);
            }
            else {
                console.log("Errors: " + JSON.stringify(error));
            }
        });
        $A.enqueueAction(action);
    }, 
})