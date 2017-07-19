({
    doInit : function(component, event, helper) {
        var compEvent = cmp.getEvent("sampleComponentEvent");
        compEvent.setParam("message", "event message here");  
       compEvent.fire();               
    },
})
