public class OpptSearchPageNew {
    
    @AuraEnabled
    
    public static list<Opportunity> getOpportunitiesList(String accountId){
                
        List<Opportunity> opptList= [SELECT Id, Name, StageName, CloseDate, Amount, AccountId FROM Opportunity WHERE AccountId =:accountId ];
        
        if(opptList != null && opptList.size()>0){
            return opptList;
        }
        else{return null;
            }
    }
    
    @AuraEnabled
    
    public static list<Opportunity> getOpportunitiesListWithKeyword(String accountId, String keyword){
        
        String searchKey = '%' + keyword + '%';
        List<Opportunity> opptList= [SELECT Id, Name, StageName, CloseDate, Amount, AccountId FROM Opportunity WHERE AccountId =:accountId AND Name LIKE :searchKey];
        system.debug('OpptList: '+ opptList);
        
       if(opptList != null && opptList.size()>0){
            return opptList;
        }
        else{return null;
            }
       
    }
}