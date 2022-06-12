trigger Test on  Contact (before insert) {
    map<id, contact> newContactsMap = new map<id, contact>();
    for(contact con : trigger.newMap){
        if(con.get(con.id).active__c  == true && con.get(con.id).AccountId != null){
            newContactsMap.put(con);
            system.debug('Rajubhau'); 
             system.debug('Rajubhau'); 
             
        }
    }

      list<aggreagatedResult> results = [select AccountId, count(Id) from Contact 
                                             where id in : newContactsMap.keyset() AND active__c = true 
                                             GROUP BY AccountId];
    
      for(AggregatedResult ar : results){
          system.debug(ar.AccountId);
      }

}