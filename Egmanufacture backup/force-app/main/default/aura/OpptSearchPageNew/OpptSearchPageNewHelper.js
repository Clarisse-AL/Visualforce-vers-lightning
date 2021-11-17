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
    
    getOpportunitiesListWithKeyword: function (component, event, helper) {
        
        
        var searchValue = component.get("v.searchValue");
        console.log("searchValue: " + searchValue);
        
        var recordId = component.get("v.recordId");
        console.log("recordId: "+recordId);
        
        var action = component.get("c.getOpportunitiesListWithKeyword");
        action.setParams({ accountId : recordId,
                           keyword : searchValue 
                         });
        console.log("ok1");
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            console.log(response.getReturnValue().length);
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