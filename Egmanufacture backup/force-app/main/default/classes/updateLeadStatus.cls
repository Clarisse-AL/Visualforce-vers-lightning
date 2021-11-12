public class updateLeadStatus {
    
    @AuraEnabled
    public static Lead updateStatus(string leadId) {
        
        Lead lead = [SELECT Id, Status FROM Lead WHERE Id=:leadId];
        lead.status = 'Working - Contacted';
        update lead;
        return lead;
       
    }
}