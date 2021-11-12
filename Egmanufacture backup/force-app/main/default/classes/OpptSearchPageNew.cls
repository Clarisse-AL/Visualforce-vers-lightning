public class OpptSearchPageNew {
    
    @AuraEnabled
    
    public static list<Opportunity> getOpportunitiesList(String accountId){
                
        List<Opportunity> opptList= [SELECT Id, Name, StageName, CloseDate, AccountId FROM Opportunity WHERE AccountId =:accountId ];
        
        if(opptList != null && opptList.size()>0){
            return opptList;
        }
        else{return null;
            }
    }
    
    public static list<Opportunity> getOpportunitiesListWithKeyword(String accountId, String keyword){
              
        List<Opportunity> opptList= [SELECT Id, Name, StageName, CloseDate, AccountId FROM Opportunity WHERE AccountId =:accountId AND Name LIKE :'%' + keyword + '%'];
        system.debug('OpptList: '+ opptList);
        
        if(opptList != null && opptList.size()>0){
            return opptList;
        }
        else{return null;
            }
       
    }
}