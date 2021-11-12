({
    changeStatus : function(component, event, helper) {
        
        var recordId = component.get("v.recordId");
        console.log("recordId: "+recordId);
        
        // create a one-time use instance of the serverEcho action
        // in the server-side controller
        var action = component.get("c.updateStatus");
        action.setParams({ leadId : recordId });
        
        // Create a callback that is executed after 
        // the server-side action returns
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                
                // Alert the user with the value returned 
                // from the server
                var leadResult = response.getReturnValue();
                console.log("Lead from server: "+ JSON.stringify(leadResult));
                
                //displays a message below the header at the top of a view
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Success!",
                    "message": "Status changed successfully.",
                    "type":"success"
                });
                toastEvent.fire();
                
                //Resfresh window
                $A.get('e.force:refreshView').fire();
                
            }
            
            else {
                
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Error!",
                    "message": "An error occured: " + error,
                    "type":"error"
                });
                toastEvent.fire();
                console.log(error);
            }
            
            // Close the action panel
            var dismissActionPanel = $A.get("e.force:closeQuickAction");
            dismissActionPanel.fire();
            
        });
        
        // optionally set storable, abortable, background flag here
        
        // A client-side action could cause multiple events, 
        // which could trigger other events and 
        // other server-side action calls.
        // $A.enqueueAction adds the server-side action to the queue.
        $A.enqueueAction(action);
        
        
        
        
        
    }
})